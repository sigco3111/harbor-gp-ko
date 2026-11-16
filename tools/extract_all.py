import re, os, json, html
from html.parser import HTMLParser

SRC = 'index.html'
src = open(SRC, encoding='utf-8').read()
os.makedirs('_analysis', exist_ok=True)

regions = [(m.start(1), m.end(1)) for m in re.finditer(r'<script[^>]*>(.*?)</script>', src, re.S)]

def in_js(pos):
    for a, b in regions:
        if a <= pos < b:
            return True
    return False

found = []
for m in re.finditer(r'>([^<>]+)<', src):
    if in_js(m.start()):
        continue
    t = html.unescape(m.group(1)).strip()
    if t:
        found.append((m.start(1), t))

for m in re.finditer(r'(placeholder|title|aria-label|alt|value|data-label)="([^"]*)"', src):
    t = html.unescape(m.group(2)).strip()
    if t:
        found.append((m.start(2), t))

lit = re.compile(r"'((?:[^'\\\n]|\\.)*)'|\"((?:[^\"\\\n]|\\.)*)\"|\x60((?:[^\x60\\]|\\.)*)\x60")
for a, b in regions:
    body = src[a:b]
    for m in lit.finditer(body):
        t = (m.group(1) or m.group(2) or m.group(3) or '').replace('\\n', ' ').strip()
        if t:
            found.append((a + m.start(), t))

STOP = set(['div','span','click','none','block','flex','absolute','fixed','relative','hidden','visible','button',
            'keydown','keyup','touch','pointer','true','false','null','undefined','string','number','auto','ease',
            'linear','inherit','transform','color','background','white','black','window','document','body','canvas'])

def keep(t):
    if len(t) < 2 or len(t) > 520:
        return False
    if not re.search(r'[A-Za-z]', t):
        return False
    if t.lower() in STOP:
        return False
    if re.match(r'^[a-z0-9_\-]+$', t) and len(t) > 3:
        return False
    if re.match(r'^[#.\[:].*', t):
        return False
    if re.search(r'(px\b|rgba?\(|url\(|===|&&|\|\||=>|querySelector|addEventListener|https?://|data:|function\b)', t):
        return False
    if re.match(r'^[A-Za-z0-9_\-]+$', t) and len(t) > 20:
        return False
    return True

seen = {}
for off, t in found:
    if keep(t):
        seen.setdefault(t, 1)

frags = sorted(seen.keys(), key=lambda s: (-len(s), s))

VOID = {'meta','link','br','img','input','hr','source','path','circle','rect','use','area','base','col','embed','param','track','wbr'}

class Node:
    __slots__ = ('tag','attrs','children')
    def __init__(self, tag, attrs):
        self.tag = tag; self.attrs = attrs; self.children = []

class P(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = Node('root', {}); self.stack = [self.root]; self.skip = 0
    def handle_starttag(self, tag, attrs):
        n = Node(tag, dict(attrs))
        self.stack[-1].children.append(n)
        if tag in ('script','style'):
            self.skip += 1
        if tag not in VOID:
            self.stack.append(n)
    def handle_startendtag(self, tag, attrs):
        self.stack[-1].children.append(Node(tag, dict(attrs)))
    def handle_endtag(self, tag):
        if tag in ('script','style') and self.skip:
            self.skip -= 1
        for i in range(len(self.stack) - 1, 0, -1):
            if self.stack[i].tag == tag:
                del self.stack[i:]
                break
    def handle_data(self, data):
        if self.skip:
            return
        if data.strip():
            self.stack[-1].children.append(data)

def text_of(n):
    out = []
    for c in n.children:
        out.append(c if isinstance(c, str) else text_of(c))
    return ''.join(out)

p = P(); p.feed(src)
elems = {}
def walk(n):
    if isinstance(n, str):
        return
    t = re.sub(r'\s+', ' ', text_of(n)).strip()
    if t and n.tag not in ('root','script','style','html','body','head') and re.search(r'[A-Za-z]', t) and len(t) >= 2:
        elems.setdefault(t, n.tag)
    for c in n.children:
        walk(c)
walk(p.root)
for m in re.finditer(r'(placeholder|title|aria-label|alt)="([^"]*)"', src):
    t = m.group(2).strip()
    if t and re.search(r'[A-Za-z]', t):
        elems.setdefault(t, '@'+m.group(1))

elines = sorted(elems.keys(), key=lambda s: (-len(s), s))

def write(prefix, lines, limit=24000):
    parts, cur, n = [], [], 0
    for it in lines:
        piece = it + '\n'
        if n + len(piece) > limit and cur:
            parts.append(''.join(cur)); cur, n = [], 0
        cur.append(piece); n += len(piece)
    if cur:
        parts.append(''.join(cur))
    for i, c in enumerate(parts, 1):
        open('_analysis/%s.part%d.txt' % (prefix, i), 'w', encoding='utf-8').write(c)
    return len(parts)

print('frags', len(frags), 'elems', len(elines))
json.dump({'frags': len(frags), 'elems': len(elines)}, open('_analysis/meta.json','w'))
write('strings', frags)
write('elements', elines)
