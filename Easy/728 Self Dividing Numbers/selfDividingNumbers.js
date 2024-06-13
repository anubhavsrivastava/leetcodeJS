const PRE_KNOWN = {
  1: 1,
  2: 1,
  3: 1,
  4: 1,
  5: 1,
  6: 1,
  7: 1,
  8: 1,
  9: 1,
  10: 0,
  11: 1,
  12: 1,
  13: 0,
  14: 0,
  15: 1,
  16: 0,
  17: 0,
  18: 0,
  19: 0,
  20: 0,
  21: 0,
  22: 1,
  23: 0,
  24: 1,
  25: 0,
  26: 0,
  27: 0,
  28: 0,
  29: 0,
  30: 0,
  31: 0,
  32: 0,
  33: 1,
  34: 0,
  35: 0,
  36: 1,
  37: 0,
  38: 0,
  39: 0,
  40: 0,
  41: 0,
  42: 0,
  43: 0,
  44: 1,
  45: 0,
  46: 0,
  47: 0,
  48: 1,
  49: 0,
  50: 0,
  51: 0,
  52: 0,
  53: 0,
  54: 0,
  55: 1,
  56: 0,
  57: 0,
  58: 0,
  59: 0,
  60: 0,
  61: 0,
  62: 0,
  63: 0,
  64: 0,
  65: 0,
  66: 1,
  67: 0,
  68: 0,
  69: 0,
  70: 0,
  71: 0,
  72: 0,
  73: 0,
  74: 0,
  75: 0,
  76: 0,
  77: 1,
  78: 0,
  79: 0,
  80: 0,
  81: 0,
  82: 0,
  83: 0,
  84: 0,
  85: 0,
  86: 0,
  87: 0,
  88: 1,
  89: 0,
  90: 0,
  91: 0,
  92: 0,
  93: 0,
  94: 0,
  95: 0,
  96: 0,
  97: 0,
  98: 0,
  99: 1,
  100: 0,
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  const res = []; // Making array

  for (let i = left; i <= right; i++) {
    if (PRE_KNOWN[i] !== undefined) {
      if (PRE_KNOWN[i]) {
        res.push(i);
      }
      continue;
    }
    if (isDivide(i)) {
      res.push(i);
      PRE_KNOWN[i] = 1;
      continue;
    }
    PRE_KNOWN[i] = 0;
  }

  return res;
};

var isDivide = function (n) {
  let num = n;
  while (n > 0) {
    rem = n % 10;
    if (rem == 0 || num % rem != 0) {
      return false;
    }
    n = Math.floor(n / 10);
  }

  return true;
};
