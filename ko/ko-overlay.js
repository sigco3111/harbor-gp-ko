/* Harbor Lights Grand Prix 한국어 오버레이 (비공식 팬 한글화)
 * 원본 파일은 수정하지 않고, 표시 시점에만 문구를 바꿉니다.
 * 기본 언어: 한국어. 좌하단 버튼으로 영어 원문과 전환할 수 있습니다.
 */
(function () {
  'use strict';
  var KOFONT = '"Apple SD Gothic Neo","Malgun Gothic","Noto Sans KR","맑은 고딕","Segoe UI",sans-serif';

  var D = {
    "Harbor Lights Grand Prix": "하버 라이츠 그랑프리",
    "Round 7 · Isla Verano street circuit": "7라운드 · 이슬라 베라노 시가지 서킷",
    "Formation": "포메이션",
    "Place your bet": "베팅하기",
    "Bank": "잔고",
    "Stake": "베팅액",
    "All in": "올인",
    "Bet and start": "베팅하고 시작",
    "Start without a bet": "베팅 없이 시작",
    "Virtual credits only. Any of the 20 cars can win: form is reshuffled before every race.": "가상 크레딧만 사용합니다. 20대 모두 우승할 수 있으며, 매 경기 전 전력이 다시 섞입니다.",
    "Race": "레이스",
    "Laps": "바퀴",
    "Speed": "속도",
    "Field": "출전 수",
    "Rivals": "상대 난이도",
    "Tyre wear": "타이어 마모",
    "Incidents": "돌발 상황",
    "New race": "새 경기",
    "Pause": "일시정지",
    "Safety car": "세이프티카",
    "Start the next race automatically": "다음 경기 자동 시작",
    "Sky & track": "하늘 & 트랙",
    "Weather": "날씨",
    "Wind": "바람",
    "Light": "조명",
    "Clock": "시각",
    "Time-lapse: a full day every 27 seconds": "타임랩스: 27초마다 하루가 지나감",
    "Let the weather change during the race": "경기 중 날씨 변화 허용",
    "Island": "섬",
    "Season": "계절",
    "Lights": "조명",
    "Crowd": "관중",
    "Show": "쇼",
    "fire them any time": "언제든 발사",
    "Fireworks": "불꽃놀이",
    "Flyover": "비행기 편대",
    "Crowd wave": "관중 웨이브",
    "Flares": "조명탄",
    "Drone show": "드론 쇼",
    "Lasers": "레이저",
    "Aurora": "오로라",
    "Sky text": "하늘 문자",
    "Pit wall": "피트 월",
    "your two cars": "우리 두 대 차량",
    "Team": "팀",
    "Pace": "페이스",
    "Save tyres": "타이어 아끼기",
    "Balanced": "균형",
    "Push": "푸시",
    "Next set": "다음 세트",
    "Soft": "소프트",
    "Med": "미디엄",
    "Hard": "하드",
    "Inter": "인터",
    "Wet": "웻",
    "Box": "피트인",
    "Race engineer calls the stops for me": "레이스 엔지니어가 피트 스톱을 대신 지시",
    "Camera": "카메라",
    "drag to turn, wheel to zoom": "드래그로 회전, 휠로 확대/축소",
    "View": "시점",
    "Action": "액션",
    "Onboard": "온보드",
    "Heli": "헬기",
    "Circuit": "서킷",
    "Turn": "회전",
    "Reset": "초기화",
    "Pixel": "픽셀",
    "Angle": "각도",
    "Outlines": "윤곽선",
    "Dither": "디더",
    "Name tags": "이름표",
    "See through near stands": "관중석 근처 투시",
    "Team beacons": "팀 표시등",
    "Sound": "소리",
    "Picture post-processing": "화면 후처리",
    "Filter": "필터",
    "Off": "끔",
    "CRT": "CRT",
    "Retro": "레트로",
    "Noir": "누아르",
    "Heat": "열감",
    "Bloom": "블룸",
    "Tilt-shift": "틸트 시프트",
    "Vignette": "비네트",
    "Clean feed (no HUD)": "깔끔한 화면(HUD 없음)",
    "Timing": "타이밍",
    "click a driver to ride along": "드라이버를 눌러 따라가기",
    "P": "P",
    "Driver": "드라이버",
    "Gap": "차이",
    "Tyre": "타이어",
    "Pit": "피트",
    "Best": "최고",
    "Race control": "레이스 컨트롤",
    "newest first": "최신순",
    "One HTML file. Canvas 2D, no libraries, no images. Keys: Space pause · C camera · R rain · N night · F fireworks · H hide HUD.": "HTML 파일 하나, Canvas 2D, 라이브러리·이미지 없음. 키: Space 일시정지 · C 카메라 · R 비 · N 야간 · F 불꽃놀이 · H HUD 숨김",
    "Podium": "시상대",
    "Chequered flag": "체커기",
    "tyres are gone": "타이어 소진",
    "Thunderstorm": "뇌우",
    "track is dry": "노면 건조",
    "Volt Racing": "볼트 레이싱",
    "on the grid": "그리드 위",
    "Green flag": "그린 플래그",
    "Kestrel GP": "케스트렐 GP",
    "Safety car deployed": "세이프티카 투입",
    "Safety car in this lap. Green flag.": "이번 바퀴 세이프티카 투입. 그린 플래그.",
    "Ember Motors": "엠버 모터스",
    "Stopped on track": "트랙 정지",
    "stopped on track": "트랙 정지",
    "Obsidian": "옵시디언",
    "Halcyon": "할시온",
    "Tanaka": "다나카",
    "Lindqvist": "린드크비스트",
    "Marchetti": "마르케티",
    "Castillo": "카스티요",
    "Ferreira": "페헤이라",
    "Kowalski": "코발스키",
    "Nordwind": "노르드빈트",
    "Sorensen": "소렌센",
    "Laurent": "로랑",
    "Monarch": "모나크",
    "Verdant": "버던트",
    "Tidal": "타이덜",
    "Achebe": "아체베",
    "Brandt": "브란트",
    "Duarte": "두아르테",
    "Haddad": "하다드",
    "Moreau": "모로",
    "Novak": "노박",
    "Okoro": "오코로",
    "Petrov": "페트로프",
    "Reyes": "레예스",
    "Singh": "싱",
    "Vance": "밴스",
    "Desert": "사막",
    "Summer": "여름",
    "Autumn": "가을",
    "Winter": "겨울",
    "Neon": "네온",
    "Dawn": "새벽",
    "Day": "낮",
    "Dusk": "해질녘",
    "Night": "밤",
    "Clear": "맑음",
    "Cloud": "구름",
    "Rain": "비",
    "Storm": "폭풍",
    "Fog": "안개",
    "Snow": "눈",
    "Overcast": "흐림",
    "Easy": "쉬움",
    "Normal": "보통",
    "Real": "실제",
    "Chaos": "혼돈",
    "None": "없음",
    "Medium": "중간",
    "Lap": "바퀴",
    "Finish": "완주",
    "Podium ": "시상대",
    "Pit wall ": "피트 월",
    "LAP": "바퀴",
    "SC": "SC",
    "FIN": "완주",
    "BET": "베팅",
    "OUT": "탈락",
    "now": "현재",
    "bank": "잔고",
    "Bank refilled to 1,000 cr.": "잔고 1,000cr로 충전",
    "Lights out and away we go.": "신호등 소등, 출발!",
    "Grid set for": "그리드 확정:",
    "on pole for": "폴 포지션:",
    "Team order: save the tyres.": "팀 지시: 타이어를 아껴라.",
    "Team order: balanced pace.": "팀 지시: 균형 페이스.",
    "Team order: push now.": "팀 지시: 지금 밀어붙여라.",
    "Fastest lap": "최고 랩",
    "Pick a car number, enter a stake, then start the race.": "차량 번호를 고르고 베팅액을 입력한 뒤 경기를 시작하세요.",
    "Weather radar: rain reaching the circuit within a lap.": "기상 레이더: 한 바퀴 안에 서킷으로 비가 옵니다.",
    "Bet placed:": "베팅 완료:",
    "Bet lost:": "베팅 실패:",
    "Bet won:": "베팅 성공:",
    "pays": "배당",
    "did not win.": "우승하지 못했습니다.",
    "wins the Harbor Lights Grand Prix for": "하버 라이츠 그랑프리 우승!",
    "is out. The bet is lost.": "리타이어. 베팅은 실패입니다.",
    "spins on the wet track and keeps going.": "젖은 노면에서 스핀 후 계속 주행.",
    "pulls over with smoke from the engine cover.": "엔진 커버에서 연기가 나며 정차합니다.",
    "is in the wall. Out of the race.": "벽에 충돌. 경기에서 탈락.",
    "Rain easing. The track will start to dry.": "비가 잦아드는 중. 곧 노면이 마릅니다.",
    "Rain is falling on Isla Verano.": "이슬라 베라노에 비가 내리고 있습니다.",
    "Flares lit in the grandstands.": "관중석에 조명탄이 켜졌습니다.",
    "Neon night grid switched on.": "네온 야간 그리드 켜짐.",
    "Summer on Isla Verano.": "이슬라 베라노의 여름.",
    "Autumn colours across the island.": "섬 전체가 가을 빛으로.",
    "Winter round: the island is under snow.": "겨울 라운드: 섬이 눈으로 덮였습니다.",
    "Desert round: sand, palms and turquoise water.": "사막 라운드: 모래, 야자수, 청록색 바다.",
    "The crowd starts a wave around the circuit.": "관중이 서킷을 따라 웨이브를 시작합니다.",
    "Drone show launching:": "드론 쇼 시작:",
    "Flyover: five jets inbound over the main straight.": "비행 편대: 제트기 다섯 대가 메인 직선 주로 위로 접근.",
    "Leader": "선두",
    "fastest lap": "최고 랩",
    "wet": "젖음",
    "best tyre": "최적 타이어",
    "slick": "슬릭",
    "inter": "인터",
    "wet ": "웻 ",
    "Track wet": "노면 젖음",
    "box this lap for": "이번 바퀴 피트인:",
    "slow stop, stuck wheel nut": "느린 정차, 휠 너트 고착",
    "stops:": "피트 스톱:",
    "in": "걸림",
    "to": "→",
    "Your car": "내 차량",
    "You are on the pit wall for": "피트 월 담당:",
    "Virtual credits only": "가상 크레딧만 사용",
    "Harbor": "하버",
    "Grand Prix": "그랑프리",
    "cr": "cr",
    "Kestrel": "케스트렐",
    "pit": "피트",
    "Trackside": "트랙사이드",
    "Stake 50 100 250 All in": "베팅액 50 100 250 올인"
  };

  // 대소문자 무시 사전 (게임이 같은 문구를 대문자로도 씀)
  var IDX = {};
  for (var kk in D) { if (Object.prototype.hasOwnProperty.call(D, kk)) IDX[kk.toLowerCase()] = D[kk]; }

  // 정규식 규칙: 동적으로 조립되는 문구 (긴 것부터 적용)
  var R = [
    [/^LEVEL\s+(\d+)$/, '레벨 $1'],
    [/^(\d+)\s*pts$/, '$1점'],
    [/^(\d+)\s*st$/, '$1위'],
    [/^Hall of Fame: #(\d+)$/, '명예의 전당: $1위'],
    [/^No\.\s*(\d+)$/, 'No.$1'],
    [/^(\d+)\s*·\s*(\d+)\s*halfL$/, '$1 – $2'],
    [/^(\d+)\s*played\s*·\s*(\d+)\s*won\s*·\s*(.+)$/, '$1경기 · $2승 · $3'],
    [/^(\d+)\s*subs?\s*left$/, '교체 $1명 남음'],
    [/^L(\d+)$/, 'L$1'],
    [/^Substitute most tired player \((\d+) left\)$/, '가장 지친 선수 교체 ($1명 남음)'],
    [/^1\s*H$/, '전반'],
    [/^2\s*H$/, '후반']
  ];

  var Lang = 'ko';
  var originals = [];   // [element, innerHTML]
  var seen = typeof WeakSet === 'function' ? new WeakSet() : null;
  var pending = false;

  function norm(s) { return (s || '').replace(/\s+/g, ' ').trim(); }

  function tr(s) {
    if (!s) return null;
    var t = norm(s);
    if (!t) return null;
    if (Object.prototype.hasOwnProperty.call(D, t)) return D[t];
    if (Object.prototype.hasOwnProperty.call(IDX, t.toLowerCase())) return IDX[t.toLowerCase()];
    var m;
    if ((m = /^v\s+(.+)$/.exec(t))) { var r1 = tr(m[1]); if (r1) return 'vs ' + r1; }
    if ((m = /^(.+?):\s*(On|Off)$/.exec(t))) {
      var lbl = tr(m[1]);
      if (lbl) return lbl + ': ' + (m[2] === 'On' ? '켜짐' : '꺼짐');
    }
    for (var i = 0; i < R.length; i++) {
      if (R[i][0].test(t)) return t.replace(R[i][0], R[i][1]);
    }
    if (t.indexOf(' · ') > 0) {
      var parts = t.split(' · '), out = [], okk = true;
      for (var q = 0; q < parts.length; q++) {
        var pk = tr(parts[q]);
        if (pk === null) {
          if (!/[A-Za-z]/.test(parts[q])) { out.push(parts[q]); continue; }
          okk = false; break;
        }
        out.push(pk);
      }
      if (okk) return out.join(' · ');
    }
    return null;
  }

  function hasLatin(s) { return /[A-Za-z]/.test(s || ''); }

  function save(el) {
    for (var i = 0; i < originals.length; i++) {
      if (originals[i][0] === el) return;
    }
    originals.push([el, el.innerHTML]);
  }

  function skipEl(el) {
    var t = el.tagName;
    return t === 'SCRIPT' || t === 'STYLE' || t === 'NOSCRIPT' || t === 'TITLE';
  }

  // 요소 단위 번역: 자식 요소가 없으면 textContent, 긴 문장은 평탄화
  function pass(el) {
    if (!el || el.nodeType !== 1) return;
    if (skipEl(el)) return;
    var kids = el.children.length;
    var txt = el.textContent;
    if (!hasLatin(txt)) {
      // 자식만 처리
      for (var i = 0; i < kids; i++) pass(el.children[i]);
      return;
    }
    var ko = tr(txt);
    if (ko !== null && (kids === 0 || norm(txt).length > 40)) {
      save(el);
      el.textContent = ko;
      return;
    }
    if (kids === 0) {
      return;
    }
    for (var j = 0; j < kids; j++) pass(el.children[j]);
    // 자식 번역 후 남은 텍스트 노드 조각 처리
    fragment(el);
  }

  function fragment(el) {
    for (var n = el.firstChild; n; n = n.nextSibling) {
      if (n.nodeType === 3) {
        if (!hasLatin(n.nodeValue)) continue;
        var ko = tr(n.nodeValue);
        if (ko !== null && ko !== n.nodeValue) {
          n.nodeValue = (n.nodeValue.match(/^\s/) ? ' ' : '') + ko + (n.nodeValue.match(/\s$/) ? ' ' : '');
        }
      }
    }
  }

  var attrOrig = [];
  function translateAttrs(root) {
    var els = root.querySelectorAll('[placeholder],[aria-label],[title],[alt]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i], at = ['placeholder', 'aria-label', 'title', 'alt'];
      for (var j = 0; j < at.length; j++) {
        var v = el.getAttribute(at[j]);
        if (!v || !hasLatin(v)) continue;
        var ko = tr(v);
        if (ko === null || ko === v) continue;
        attrOrig.push([el, at[j], v]);
        el.setAttribute(at[j], ko);
      }
    }
  }

  function all(root) {
    pass(root);
    var nodes = root.querySelectorAll('*');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      if (!hasLatin(el.textContent)) continue;
      var kids = el.children.length;
      var ko = tr(el.textContent);
      if (ko !== null && (kids === 0 || norm(el.textContent).length > 40)) {
        save(el);
        el.textContent = ko;
      } else if (kids === 0) {
        // 단일 텍스트 요소
      }
    }
    // 남은 텍스트 노드 조각
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
    var t;
    while ((t = walker.nextNode())) {
      if (!hasLatin(t.nodeValue)) continue;
      var p = t.parentNode;
      if (!p || skipEl(p)) continue;
      var k = tr(t.nodeValue);
      if (k !== null && k !== t.nodeValue.trim()) {
        var lead = /^\s/.test(t.nodeValue) ? ' ' : '';
        var trail = /\s$/.test(t.nodeValue) ? ' ' : '';
        t.nodeValue = lead + k + trail;
      }
    }
  }

  function fixKnown() {
    try {
      var hl = document.getElementById('halfL');
      if (hl) {
        var v = norm(hl.textContent);
        if (v === '1H') hl.textContent = '전반';
        else if (v === '2H') hl.textContent = '후반';
        else if (v === 'ET1') hl.textContent = '연장 전반';
        else if (v === 'ET2') hl.textContent = '연장 후반';
      }
    } catch (e) {}
  }

  function apply() {
    if (Lang !== 'ko') return;
    try { fixKnown(); } catch (e) {}
    try { all(document.body); translateAttrs(document.body); } catch (e) {}
  }

  function schedule() {
    if (Lang !== 'ko') return;
    if (pending) return;
    pending = true;
    var run = function () { pending = false; apply(); };
    if (window.requestAnimationFrame) requestAnimationFrame(run); else setTimeout(run, 120);
  }

  function restore() {
    for (var i = 0; i < attrOrig.length; i++) {
      try { attrOrig[i][0].setAttribute(attrOrig[i][1], attrOrig[i][2]); } catch (e) {}
    }
    for (var i = 0; i < originals.length; i++) {
      try { originals[i][0].innerHTML = originals[i][1]; } catch (e) {}
    }
  }

  function setLang(l) {
    Lang = l;
    if (l === 'ko') { apply(); } else { restore(); }
    var b = document.getElementById('koToggle');
    if (b) b.textContent = l === 'ko' ? 'EN' : '한국어';
    document.documentElement.lang = l === 'ko' ? 'ko' : 'en';
  }

  // 캔버스 글자 번역 + 한글 글꼴
  // 표시 시점 후킹: 게임이 값을 대입하는 즉시 번역 (매 프레임 덮어쓰는 HUD 대응)
  function translateHtml(html) {
    if (typeof html !== 'string' || html.indexOf('<') < 0) {
      var simple = tr(html);
      return simple === null ? html : simple;
    }
    return html.replace(/<[^>]*>|[^<]+/g, function (seg) {
      if (seg.charAt(0) === '<') return seg;
      var k = tr(seg);
      return k === null ? seg : k;
    });
  }

  function hookProps() {
    var nv = Object.getOwnPropertyDescriptor(Node.prototype, 'nodeValue');
    if (nv && nv.set) {
      Object.defineProperty(Node.prototype, 'nodeValue', {
        configurable: true,
        enumerable: nv.enumerable,
        get: nv.get,
        set: function (v) {
          if (Lang === 'ko' && typeof v === 'string') { var k = tr(v); if (k !== null) v = k; }
          return nv.set.call(this, v);
        }
      });
    }
    var data = Object.getOwnPropertyDescriptor(CharacterData.prototype, 'data');
    if (data && data.set) {
      Object.defineProperty(CharacterData.prototype, 'data', {
        configurable: true,
        enumerable: data.enumerable,
        get: data.get,
        set: function (v) {
          if (Lang === 'ko' && typeof v === 'string') { var k = tr(v); if (k !== null) v = k; }
          return data.set.call(this, v);
        }
      });
    }
    var ctn = document.createTextNode.bind(document);
    document.createTextNode = function (t) {
      if (Lang === 'ko' && typeof t === 'string') {
        var k = tr(t);
        if (k !== null) t = k;
      }
      return ctn(t);
    };
    var d = Object.getOwnPropertyDescriptor(Node.prototype, 'textContent');
    if (d && d.set) {
      Object.defineProperty(Node.prototype, 'textContent', {
        configurable: true,
        enumerable: d.enumerable,
        get: d.get,
        set: function (v) {
          if (Lang === 'ko' && typeof v === 'string') {
            var k = tr(v);
            if (k !== null) v = k;
          }
          return d.set.call(this, v);
        }
      });
    }
    var p = window.HTMLElement && HTMLElement.prototype;
    if (p) {
      var ih = Object.getOwnPropertyDescriptor(p, 'innerHTML');
      if (ih && ih.set) {
        Object.defineProperty(p, 'innerHTML', {
          configurable: true,
          enumerable: ih.enumerable,
          get: ih.get,
          set: function (v) {
            if (Lang === 'ko' && typeof v === 'string') v = translateHtml(v);
            return ih.set.call(this, v);
          }
        });
      }
      var it = Object.getOwnPropertyDescriptor(p, 'innerText');
      if (it && it.set) {
        Object.defineProperty(p, 'innerText', {
          configurable: true,
          enumerable: it.enumerable,
          get: it.get,
          set: function (v) {
            if (Lang === 'ko' && typeof v === 'string') { var k = tr(v); if (k !== null) v = k; }
            return it.set.call(this, v);
          }
        });
      }
      var oh = Object.getOwnPropertyDescriptor(p, 'outerHTML');
      if (oh && oh.set) {
        Object.defineProperty(p, 'outerHTML', {
          configurable: true,
          enumerable: oh.enumerable,
          get: oh.get,
          set: function (v) {
            if (Lang === 'ko' && typeof v === 'string') v = translateHtml(v);
            return oh.set.call(this, v);
          }
        });
      }
      var rc = p.replaceChildren;
      if (rc) {
        p.replaceChildren = function () {
          var a = Array.prototype.slice.call(arguments);
          if (Lang === 'ko') {
            for (var i2 = 0; i2 < a.length; i2++) {
              if (typeof a[i2] === 'string') { var k2 = tr(a[i2]); if (k2 !== null) a[i2] = k2; }
            }
          }
          return rc.apply(this, a);
        };
      }
      var ap = p.append;
      if (ap) {
        p.append = function () {
          var a = Array.prototype.slice.call(arguments);
          if (Lang === 'ko') {
            for (var i3 = 0; i3 < a.length; i3++) {
              if (typeof a[i3] === 'string') { var k3 = tr(a[i3]); if (k3 !== null) a[i3] = k3; }
            }
          }
          return ap.apply(this, a);
        };
      }
      var iah = p.insertAdjacentHTML;
      if (iah) {
        p.insertAdjacentHTML = function (pos, v) {
          if (Lang === 'ko' && typeof v === 'string') v = translateHtml(v);
          return iah.call(this, pos, v);
        };
      }
    }
  }

  function wrapCanvas() {
    var C = window.CanvasRenderingContext2D;
    if (!C || C.prototype.__ko) return;
    C.prototype.__ko = 1;
    var ft = C.prototype.fillText;
    var st = C.prototype.strokeText;
    function fixFont(ctx) {
      var f = ctx.font || '';
      var m = /(\d+(?:\.\d+)?px)\s+.*$/.exec(f);
      ctx.font = m ? f.slice(0, m.index) + m[1] + ' ' + KOFONT : '16px ' + KOFONT;
    }
    C.prototype.fillText = function (text, x, y, w) {
      if (Lang === 'ko' && typeof text === 'string') {
        var k = tr(text);
        if (k) text = k;
        try { fixFont(this); } catch (e) {}
      }
      return w === undefined ? ft.call(this, text, x, y) : ft.call(this, text, x, y, w);
    };
    C.prototype.strokeText = function (text, x, y, w) {
      if (Lang === 'ko' && typeof text === 'string') {
        var k = tr(text);
        if (k) text = k;
        try { fixFont(this); } catch (e) {}
      }
      return w === undefined ? st.call(this, text, x, y) : st.call(this, text, x, y, w);
    };
  }

  function addStyle() {
    var s = document.createElement('style');
    s.textContent = 'body,button,input,select{font-family:' + KOFONT + ' !important}' +
      '.ko-toggle{position:fixed;left:10px;bottom:10px;z-index:99999;padding:5px 10px;font-size:11px;' +
      'letter-spacing:.06em;border-radius:14px;border:1px solid rgba(255,255,255,.4);' +
      'background:rgba(10,20,30,.72);color:#fff;cursor:pointer;opacity:.85}';
    document.head.appendChild(s);
  }

  function addToggle() {
    if (document.getElementById('koToggle')) return;
    var b = document.createElement('button');
    b.id = 'koToggle';
    b.type = 'button';
    b.textContent = 'EN';
    b.title = '한국어 / English';
    b.className = 'ko-toggle';
    b.addEventListener('click', function (e) {
      e.stopPropagation();
      setLang(Lang === 'ko' ? 'en' : 'ko');
    });
    document.body.appendChild(b);
  }

  function boot() {
    hookProps();
    wrapCanvas();
    addStyle();
    apply();
    addToggle();
    document.documentElement.lang = 'ko';
    try {
      var kt = tr(document.title);
      if (kt) document.title = kt;
    } catch (e) {}
    setInterval(function () { if (Lang === 'ko') { try { apply(); } catch (e) {} } }, 200);
    var mo = new MutationObserver(function () { schedule(); });
    mo.observe(document.body, { childList: true, subtree: true, characterData: true });
    setTimeout(apply, 300);
    setTimeout(apply, 1200);
    setTimeout(apply, 2500);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
