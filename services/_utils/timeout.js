export function timeout(ms = 1000) {
  return new Promise((_, reject) => setTimeout(reject, ms));
}
