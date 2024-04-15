export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  const n = arr.map((k) => k.id);
  return n;
}
