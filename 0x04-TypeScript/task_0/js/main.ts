interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
  }

const student1: Student = {};
cosnt student2: Student = {};

cosnt studentsList: Student[] = [student1, student2];
cosnt table = document.creatElement("table");

studentsList.forEach(student => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);

  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
  });

document.body.appendChild(table);
