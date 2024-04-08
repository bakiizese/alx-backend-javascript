export default function appendToEachArrayValue(array, appendString) {
  const arra = [];
  for (const idx of array) {
    const value = array[idx];
    arra.push(appendString + value);
  }
  return arra;
}
