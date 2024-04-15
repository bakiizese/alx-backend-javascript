export default function getStudentsByLocation(arr, city) {
  if (!Array.isArray(arr) || typeof city !== 'string') {
    return [];
  }
  const arr2 = arr.filter((lc) => lc.location === city);
  return arr2;
}
