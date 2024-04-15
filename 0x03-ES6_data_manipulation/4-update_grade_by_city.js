export default function updateStudentGradeByCity(arr, city, newGrades) {
  if (!Array.isArray(arr) || typeof city !== 'string' || !Array.isArray(newGrades))
    return [];
  const na = 'N/A';
  const newar = arr
    .filter((vl) => vl.location === city)
    .map((vl) => ({
      ...vl,
      grade: Number.isNaN(parseInt(newGrades
        .filter((nvl) => nvl.studentId === vl.id)
        .map((nvl) => nvl.grade), 10)) ? na : parseInt(newGrades
          .filter((nvl) => nvl.studentId === vl.id)
          .map((nvl) => nvl.grade), 10),
    }));
  return newar;
}
