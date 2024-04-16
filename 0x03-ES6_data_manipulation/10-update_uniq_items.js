export default function updateUniqueItems(mp) {
  if (!(mp instanceof Map)) {
    throw new Error('Cannot process');
  }
  mp.forEach((value, key) => {
    if (value === 1) {
      mp.set(key, 100);
    }
  });
}
