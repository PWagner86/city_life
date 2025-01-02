export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function getRandomIntMinMax(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

// a + (b - a) * t
export function lerp(a, b, t) {
  return a * (1 - t) + b * t;
}

export function vLerp(A, B, t) {
  return {
    x: lerp(A.x, B.x, t),
    y: lerp(A.y, B.y, t)
  }
}
