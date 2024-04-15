export default function updateStudentGradeByCity(arr, city, newGrades) {
  const na = 'N/A';
  const newar = arr
    .filter((vl) => vl.location === city)
    .map((vl) => ({
      ...vl,
      Grade: Number.isNaN(parseInt(newGrades
        .filter((nvl) => nvl.studentId === vl.id)
        .map((nvl) => nvl.grade), 10)) ? na : parseInt(newGrades
          .filter((nvl) => nvl.studentId === vl.id)
          .map((nvl) => nvl.grade), 10),
    }));
  return newar;
}
