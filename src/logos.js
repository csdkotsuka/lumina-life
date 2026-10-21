// ============================================================
// Lumina ロゴ：赤枠3案 ＋ ゴールド/ピンクの2案 を組み合わせたコレクション
// ------------------------------------------------------------
// ・ベース形状 … 2枚目画像（流麗な大きいL ＋ 下辺スワッシュがUMINAの下をくぐってダイヤへ）
// ・赤枠(2段目)  … Lの頭がハートになるデザイン
// ・赤枠(1段目)  … 文字全体を包む細いゴールドのオーバルリング
// ・赤枠(3段目)  … 装飾を控えたシンプルな構成
// ・カラー       … シャンパンゴールド / ピンクゴールド
//
// Lの文字は「ブロードペン（平筆）」の筆致を計算で再現しています。
// 下ろす線は太く、払い上げる線は髪の毛のように細くなるため、
// 手描きカリグラフィのような自然な強弱がつきます。
// ============================================================

// ---------- ベジェ曲線ユーティリティ ----------
function bezierPoint(p0, p1, p2, p3, t) {
  const u = 1 - t;
  return [
    u * u * u * p0[0] + 3 * u * u * t * p1[0] + 3 * u * t * t * p2[0] + t * t * t * p3[0],
    u * u * u * p0[1] + 3 * u * u * t * p1[1] + 3 * u * t * t * p2[1] + t * t * t * p3[1],
  ];
}

function bezierTangent(p0, p1, p2, p3, t) {
  const u = 1 - t;
  return [
    3 * u * u * (p1[0] - p0[0]) + 6 * u * t * (p2[0] - p1[0]) + 3 * t * t * (p3[0] - p2[0]),
    3 * u * u * (p1[1] - p0[1]) + 6 * u * t * (p2[1] - p1[1]) + 3 * t * t * (p3[1] - p2[1]),
  ];
}

const smooth = (x) => {
  const c = Math.min(1, Math.max(0, x));
  return c * c * (3 - 2 * c);
};

/**
 * 筆の強弱つきストロークを塗りつぶしパスとして生成する
 * @param {number[]} start  始点 [x, y]
 * @param {Array} curves    [[c1, c2, end], ...] の連続する3次ベジェ
 * @param {object} o        pen: ペン角(度), wMin/wMax: 最細/最太, taperIn/taperOut: 入り/抜きの長さ, endW: 端の太さ比
 */
function brushPath(start, curves, o = {}) {
  const pen = ((o.pen ?? -15) * Math.PI) / 180;
  const wMin = o.wMin ?? 0.4;
  const wMax = o.wMax ?? 4;
  const taperIn = o.taperIn ?? 6;
  const taperOut = o.taperOut ?? 20;
  const endW = o.endW ?? 0.08;
  const steps = o.steps ?? 48;

  // サンプリング（各カーブの4番目の値 = そのカーブ終点での太さ倍率。省略時は1）
  const samples = [];
  let p0 = start;
  let wPrev = o.startW ?? 1;
  curves.forEach(([c1, c2, end, wEnd = 1], idx) => {
    for (let i = idx === 0 ? 0 : 1; i <= steps; i++) {
      const t = i / steps;
      samples.push({
        p: bezierPoint(p0, c1, c2, end, t),
        d: bezierTangent(p0, c1, c2, end, t),
        k: wPrev + (wEnd - wPrev) * smooth(t),
      });
    }
    p0 = end;
    wPrev = wEnd;
  });

  // 弧長
  let total = 0;
  samples.forEach((s, i) => {
    if (i > 0) {
      const a = samples[i - 1].p;
      total += Math.hypot(s.p[0] - a[0], s.p[1] - a[1]);
    }
    s.len = total;
  });

  const left = [];
  const right = [];
  samples.forEach((s) => {
    const mag = Math.hypot(s.d[0], s.d[1]) || 1;
    const tx = s.d[0] / mag;
    const ty = s.d[1] / mag;
    const theta = Math.atan2(ty, tx);
    const nib = wMin + (wMax - wMin) * Math.abs(Math.sin(theta - pen));
    const taper = Math.min(smooth(s.len / taperIn), smooth((total - s.len) / taperOut));
    const w = (nib * s.k * (endW + (1 - endW) * taper)) / 2;
    const nx = -ty;
    const ny = tx;
    left.push(`${(s.p[0] + nx * w).toFixed(2)} ${(s.p[1] + ny * w).toFixed(2)}`);
    right.push(`${(s.p[0] - nx * w).toFixed(2)} ${(s.p[1] - ny * w).toFixed(2)}`);
  });

  return `M ${left.join(' L ')} L ${right.reverse().join(' L ')} Z`;
}

// ---------- Lの文字（中心線データ） ----------
// 縦線：上から下ろす太い主線（ゆるやかなS字）
const STEM = [[47, 22], [42, 38], [37, 48]];

// 下部：左へ小さなループを描き、ベースラインを右へ進んでから
//       UMINAの下をくぐってダイヤへ伸びるスワッシュ
const BOTTOM_AND_SWASH = [
  [[35, 53], [27, 58], [21, 55.5]],
  [[16, 53], [18, 47], [25, 47.5]],
  [[31, 48], [36, 51], [44, 52]],
  [[80, 61], [140, 62], [170, 57]],
  [[178, 55.5], [184, 53.5], [188, 51]],
];

// 頭部（ベーシック）：小さく巻いた入りから、すっと縦線へつながる
const HEAD_BASIC = {
  start: [39, 12],
  curves: [
    [[37, 11], [37.5, 8], [40.5, 7.5]],
    [[43, 7], [45.5, 7.5], [47, 8.5]],
  ],
};

// 頭部（ハート）：縦線の途中から左上へ膨らみ、ハートを描いて縦線の頭へ戻る
// （ハート部分は線を細めにして、主線より軽やかに）
const HEAD_HEART = {
  start: [44.4, 27.4],
  startW: 0.55,
  curves: [
    [[36, 22], [25, 16], [25.5, 10.5], 0.55],
    [[26, 5.5], [32, 4], [36, 8.5], 0.6],
    [[39, 4], [45.5, 4], [47, 8.5], 1],
  ],
};

function letterL(head) {
  return brushPath(head.start, [...head.curves, STEM, ...BOTTOM_AND_SWASH], {
    startW: head.startW ?? 1,
    pen: -25,
    wMin: 0.35,
    wMax: 4.6,
    taperIn: 5,
    taperOut: 150,
    endW: 0.12,
  });
}

// 2本目の細い光のライン（ダイヤの後ろを通って右上へ抜ける）
const TRAIL = brushPath([60, 58], [
  [[105, 69], [160, 67], [190, 58]],
  [[203, 54], [211, 45], [217, 35]],
], { pen: -15, wMin: 0.2, wMax: 1.5, taperIn: 50, taperOut: 40, endW: 0.05 });

// オーバルリング（赤枠1段目）：文字全体をふんわり包む細い光の輪
const RING_OUTER = brushPath([14, 52], [
  [[6, 30], [30, 8], [88, 5]],
  [[145, 2], [203, 6], [220, 22]],
  [[228, 30], [226, 40], [218, 46]],
], { pen: -15, wMin: 0.3, wMax: 1.7, taperIn: 60, taperOut: 40, endW: 0.05 });

const RING_INNER = brushPath([22, 44], [
  [[17, 28], [40, 12], [92, 9]],
  [[145, 7], [192, 10], [211, 24]],
], { pen: -15, wMin: 0.2, wMax: 0.9, taperIn: 50, taperOut: 50, endW: 0.05 });

// ---------- カラー ----------
const PALETTES = {
  gold: {
    label: 'シャンパンゴールド',
    light: ['#7A5520', '#A97B35', '#D0A458', '#C99A4E', '#9C7030', '#7A5520'],
    dark: ['#C9A25E', '#E9CC8E', '#F7E2B0', '#E2C07F', '#C39A55', '#B88E4A'],
    sparkle: { light: '#D4A85A', dark: '#F7E2B0' },
  },
  pink: {
    label: 'ピンクゴールド',
    light: ['#8C4055', '#B35E76', '#D58C9F', '#C97A8F', '#A4526A', '#8C4055'],
    dark: ['#D78FA0', '#F0B6C3', '#FBD5DD', '#EBA7B7', '#CF8497', '#C47A8D'],
    sparkle: { light: '#D9899D', dark: '#FBD5DD' },
  },
};

function metalGradient(id, stops) {
  const offsets = [0, 0.28, 0.48, 0.6, 0.8, 1];
  return `
    <linearGradient id="${id}" gradientUnits="userSpaceOnUse" x1="10" y1="4" x2="240" y2="72">
      ${stops.map((c, i) => `<stop offset="${offsets[i]}" stop-color="${c}" />`).join('')}
    </linearGradient>`;
}

// ---------- ダイヤモンド（ブリリアントカット） ----------
function diamond(cx, cy, scale, uid, isDark) {
  const T = [-8.5, -4.25, 0, 4.25, 8.5]; // テーブル手前の辺（y = -7.5）
  const G = [-15, -11.25, -7.5, -3.75, 0, 3.75, 7.5, 11.25, 15]; // ガードル（y = 0）
  const crownColors = ['#FFFFFF', '#D6EBFF', '#F2F9FF', '#B5D7F6', '#E6F3FF', '#C6E1FA'];
  const pavColors = ['#A9CEF0', '#EAF5FF', '#7FB1E0', '#D3E8FB', '#6EA5DA', '#C2DFF8', '#8DBCE7', '#F4FAFF'];
  const edge = 'stroke="#FFFFFF" stroke-width="0.35" stroke-opacity="0.85" stroke-linejoin="round"';

  const crown = [];
  for (let i = 0; i < 4; i++) {
    crown.push([[G[2 * i], 0], [T[i], -7.5], [G[2 * i + 1], 0]]);
    crown.push([[T[i], -7.5], [T[i + 1], -7.5], [G[2 * i + 1], 0]]);
    crown.push([[G[2 * i + 1], 0], [T[i + 1], -7.5], [G[2 * i + 2], 0]]);
  }
  const pav = [];
  for (let k = 0; k < 8; k++) pav.push([[G[k], 0], [G[k + 1], 0], [0, 17]]);

  const poly = (pts, fill) => `<polygon points="${pts.map((p) => p.join(',')).join(' ')}" fill="${fill}" ${edge} />`;

  return `
    <g transform="translate(${cx} ${cy}) rotate(-12) scale(${scale})">
      <circle cx="0" cy="2" r="19" fill="url(#${uid}-glow)" />
      <!-- 奥側のクラウン（テーブル上面とサイド） -->
      ${poly([[-15, 0], [-6, -10.5], [-8.5, -7.5]], '#CFE6FB')}
      ${poly([[15, 0], [6, -10.5], [8.5, -7.5]], '#9CC6EC')}
      ${poly([[-8.5, -7.5], [-6, -10.5], [6, -10.5], [8.5, -7.5]], `url(#${uid}-table)`)}
      <!-- 手前のクラウン -->
      ${crown.map((pts, i) => poly(pts, crownColors[i % crownColors.length])).join('')}
      <!-- パビリオン -->
      ${pav.map((pts, i) => poly(pts, pavColors[i])).join('')}
      <!-- 外形線 -->
      <polygon points="-15,0 -6,-10.5 6,-10.5 15,0 0,17" fill="none"
               stroke="${isDark ? '#CFE3F7' : '#7FA6CC'}" stroke-width="0.6" stroke-linejoin="round" />
      <!-- 煌めき -->
      <path d="M -3 -9 l 0.6 -1.6 l 0.6 1.6 l 1.6 0.6 l -1.6 0.6 l -0.6 1.6 l -0.6 -1.6 l -1.6 -0.6 Z" fill="#FFFFFF" />
      <circle cx="-5" cy="4" r="0.9" fill="#FFFFFF" />
    </g>`;
}

function diamondDefs(uid, isDark) {
  return `
    <radialGradient id="${uid}-glow">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="${isDark ? 0.55 : 0.9}" />
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="${uid}-table" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="100%" stop-color="#D9ECFD" />
    </linearGradient>`;
}

// ---------- スパークル（4方向の光） ----------
function sparkle(cx, cy, r, color) {
  const k = r * 0.12;
  const star = (rr, kk) =>
    `M 0 ${-rr} C ${kk} ${-kk} ${kk} ${-kk} ${rr} 0 C ${kk} ${kk} ${kk} ${kk} 0 ${rr} C ${-kk} ${kk} ${-kk} ${kk} ${-rr} 0 C ${-kk} ${-kk} ${-kk} ${-kk} 0 ${-rr} Z`;
  return `
    <g transform="translate(${cx} ${cy})">
      <path d="${star(r, k)}" fill="${color}" />
      <path d="${star(r * 0.45, k * 0.6)}" fill="${color}" opacity="0.7" transform="rotate(45)" />
      <circle r="${r * 0.18}" fill="#FFFFFF" />
    </g>`;
}

// ---------- ロゴ組み立て ----------
function buildSvg({ head, ring, color, uidBase }, isDark) {
  const uid = `${uidBase}-${isDark ? 'd' : 'l'}`;
  const pal = PALETTES[color];
  const metal = `url(#${uid}-metal)`;
  const sparkleColor = isDark ? pal.sparkle.dark : pal.sparkle.light;

  return `
    <svg viewBox="0 0 234 76" class="w-full h-full max-h-16" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="LUMINA">
      <defs>
        ${metalGradient(`${uid}-metal`, isDark ? pal.dark : pal.light)}
        ${diamondDefs(uid, isDark)}
      </defs>

      ${ring ? `
      <path d="${RING_OUTER}" fill="${metal}" opacity="0.85" />
      <path d="${RING_INNER}" fill="${metal}" opacity="0.45" />` : ''}

      <!-- 2本目の細い光のライン -->
      <path d="${TRAIL}" fill="${metal}" opacity="0.7" />

      <!-- 流麗なL -->
      <path d="${letterL(head === 'heart' ? HEAD_HEART : HEAD_BASIC)}" fill="${metal}" />

      <!-- UMINA -->
      <text x="53" y="50" font-family="'Cinzel', 'Cormorant Garamond', serif" font-size="30" font-weight="500"
            textLength="128" lengthAdjust="spacing" fill="${metal}">UMINA</text>

      <!-- ダイヤモンド（スワッシュの先端） -->
      ${diamond(200, 46, 1.08, uid, isDark)}

      <!-- 光のきらめき -->
      ${sparkle(218, 27, 5.5, sparkleColor)}
      ${sparkle(226, 37, 2.2, sparkleColor)}
      ${ring ? sparkle(140, 4.5, 2.6, sparkleColor) : ''}
    </svg>`;
}

const VARIANTS = [
  {
    id: 'combo-basic-gold',
    form: 'basic',
    color: 'gold',
    head: 'basic',
    ring: false,
    name: '01. グレース・ゴールド',
    badge: '★ 一番のおすすめ',
    referencePos: '2枚目ゴールド ＋ 赤枠(3段目)',
    concept: '2枚目のゴールド案の形をそのまま活かし、赤枠3段目のように装飾を控えたシンプルな構成。サイトのアイボリー×ゴールドに一番自然になじみます。',
  },
  {
    id: 'combo-basic-pink',
    form: 'basic',
    color: 'pink',
    head: 'basic',
    ring: false,
    name: '02. グレース・ピンクゴールド',
    badge: '💗 やさしさ重視',
    referencePos: '2枚目ピンク ＋ 赤枠(3段目)',
    concept: '01と同じ形をピンクゴールドに。血色のよい素肌を思わせるやわらかな色合いで、女性らしさと親しみやすさが増します。',
  },
  {
    id: 'combo-heart-gold',
    form: 'heart',
    color: 'gold',
    head: 'heart',
    ring: false,
    name: '03. ハートL・ゴールド',
    badge: '💛 赤枠(2段目)',
    referencePos: '2枚目ゴールド ＋ 赤枠(2段目)',
    concept: 'Lの頭がそのままハートを描くデザイン。「魂のレベルで寄り添う」サロンの温かさを、文字の中にさりげなく込めました。',
  },
  {
    id: 'combo-heart-pink',
    form: 'heart',
    color: 'pink',
    head: 'heart',
    ring: false,
    name: '04. ハートL・ピンクゴールド',
    badge: '💗 赤枠(2段目)',
    referencePos: '2枚目ピンク ＋ 赤枠(2段目)',
    concept: 'ハートのLをピンクゴールドで。いちばん甘く、やさしい印象になる組み合わせです。',
  },
  {
    id: 'combo-ring-gold',
    form: 'ring',
    color: 'gold',
    head: 'basic',
    ring: true,
    name: '05. ルミナスリング・ゴールド',
    badge: '✨ 赤枠(1段目)',
    referencePos: '2枚目ゴールド ＋ 赤枠(1段目)',
    concept: '文字全体を細いゴールドの光の輪がふんわり包むデザイン。ハイブランドのコスメのような、格上の高級感が出ます。',
  },
  {
    id: 'combo-ring-pink',
    form: 'ring',
    color: 'pink',
    head: 'basic',
    ring: true,
    name: '06. ルミナスリング・ピンクゴールド',
    badge: '✨ 赤枠(1段目)',
    referencePos: '2枚目ピンク ＋ 赤枠(1段目)',
    concept: '光の輪をピンクゴールドで。華やかさとやさしさを両立した、セレブ感のある仕上がりです。',
  },
  {
    id: 'combo-premium-gold',
    form: 'premium',
    color: 'gold',
    head: 'heart',
    ring: true,
    name: '07. プレミアム（ハート＋リング）・ゴールド',
    badge: '👑 赤枠3つ全部入り',
    referencePos: '赤枠(1段目)＋(2段目)＋2枚目',
    concept: 'ハートのL、光の輪、スワッシュ、ダイヤをすべて組み合わせた一番華やかなバージョン。看板やショップカードなど大きく使う場面で映えます。',
  },
  {
    id: 'combo-premium-pink',
    form: 'premium',
    color: 'pink',
    head: 'heart',
    ring: true,
    name: '08. プレミアム（ハート＋リング）・ピンクゴールド',
    badge: '👑 赤枠3つ全部入り',
    referencePos: '赤枠(1段目)＋(2段目)＋2枚目',
    concept: '全部入りをピンクゴールドで。いちばん華やかで、いちばん女性らしい組み合わせです。',
  },
];

export const logoSamples = VARIANTS.map((v) => ({
  ...v,
  fontStyle: v.head === 'heart' ? 'ハートL ＋ Cinzel' : 'カリグラフィL ＋ Cinzel',
  colorName: PALETTES[v.color].label,
  getSvg: (isDark = false) => buildSvg({ head: v.head, ring: v.ring, color: v.color, uidBase: v.id }, isDark),
}));
