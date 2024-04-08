export default function appendToEachArrayValue(array, appendString) {
  const arra = [];
  for (const idx of array) {
    const value = array.indexOf(idx);
    arra[value] = appendString + idx;
  }

  return arra;
}
