import MersenneTwister from 'mersenne-twister';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function random(len = 8) {
  const buffer = [];
  for (let i = 0; i < len; i++) {
    const char = CHARS[(CHARS.length * Math.random()) | 0];
    buffer.push(char);
  }
  return buffer.join('');
}

export function sort(array, seed) {
  const gen = new MersenneTwister(seed);
  return [...array].sort(() => (gen.random() > 0.5 ? -1 : 1));
}
