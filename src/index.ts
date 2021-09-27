
const floatRandomBetween = (min, max) => {
  return Math.random() * (max - min) + min;
};
const clamp = function (a, b, v) {
  return Math.min(b, Math.max(a, v));
};
const lerp = function (a, b, progress) {
  return a + progress * (b - a);
};
const hash21 = (p, seed) => {
  const a = [27.609, 57.583];
  if(p.array) p = p.array; // converting from wtc-math vec2 to array
  const o = a[0] * p[0] + a[1] * p[1];
  return fract(Math.sin(o) * seed);
};
const precisionRound = (n, p) => {
  const ip = Math.pow(10, p);
  return Math.round(n * ip) / ip;
};
const fract = (n, p = 6) => {
  const ip = Math.pow(10, p);
  const _n = Math.abs(Math.floor(n * ip) / ip);
  if (_n < 1) return _n;
  return Math.floor((_n % Math.floor(_n)) * ip) / ip;
};

const xmur3 = (t) => {
  for (var e = 0, i = 1779033703 ^ t.length; e < t.length; e++)
    i = ((i = Math.imul(i ^ t.charCodeAt(e), 3432918353)) << 13) | (i >>> 19);
  return function () {
    return (
      (i = Math.imul(i ^ (i >>> 16), 2246822507)),
      (i = Math.imul(i ^ (i >>> 13), 3266489909)),
      (i ^= i >>> 16) >>> 0
    );
  };
}
const asyncImageLoad = function (t, e) {
    return new Promise((i, s) => {
      (t.onload = () => i(t)), (t.onerror = s), (t.src = e);
    });
  };
const loadAllImages = function (t) {
  const e = [];
  for (let i in t) {
    const s = new Image();
    e.push(asyncImageLoad(s, t[i]));
  }
  return Promise.all(e);
};

const smoothstep = function(edge0, edge1, x) {
  const t = clamp(0.0, 1.0, (x - edge0) / (edge1 - edge0))
  return t * t * (3.0 - 2.0 * t)
}

export {
  floatRandomBetween,
  clamp,
  lerp,
  hash21,
  precisionRound,
  fract,
  xmur3,
  asyncImageLoad,
  loadAllImages,
  smoothstep
}