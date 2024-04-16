export default function cleanset(sst, startString) {
  const pts = [];
  if (!sst || !startString || !(sst instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of sst.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubStr = value.substring(startString.length);
      if (valueSubStr && valueSubStr !== value) {
        pts.push(valueSubStr);
      }
    }
  }
  return pts.join('-');
}
