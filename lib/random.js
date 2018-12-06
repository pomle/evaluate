const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function random(len = 8) {
  const buffer = [];
  for (let i = 0; i < len; i++) {
    const char = CHARS[(CHARS.length * Math.random()) | 0];
    buffer.push(char);
  }
  return buffer.join('');
}
