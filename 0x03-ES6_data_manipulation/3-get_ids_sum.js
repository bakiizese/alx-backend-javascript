export default function getStudentIdsSum(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  const sum = arr.reduce((accumulator, val) => accumulator + val.id, 0);
  return sum;
}
