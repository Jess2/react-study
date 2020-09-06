export const assert = function (condition, message) {
  if (!condition) {
    throw new Error(`assertion failed: ${message}`);
  }
}
