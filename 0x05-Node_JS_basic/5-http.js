const http = require('http');

const port = 1245;
const hostname = '127.0.0.1';
let content = '';

const fs = require('fs');

const filename = process.argv[2];
function readFile(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        resolve(data);
      }
    });
  });
}

function manData(data) {
  const rows = data.split('\n').map((line) => line.trim());
  const header = rows[0].split(',');
  const pp = [];
  content = '';
  for (let i = 1; i < rows.length - 1; i += 1) {
    const people = {};
    const val = rows[i].split(',');
    for (let j = 0; j < header.length; j += 1) {
      people[header[j]] = val[j];
    }
    pp.push(people);
  }
  const fields = new Set();
  for (let i = 0; i < header.length; i += 1) {
    fields.add(pp[i].field);
  }
  content += `Number of students: ${pp.length}\n`;
  let lng = 0;
  const fieldss = Array.from(fields);
  let lists = [];
  for (let i = 0; i < fieldss.length; i += 1) {
    for (let j = 0; j < pp.length; j += 1) {
      if (pp[j].field === fieldss[i]) {
        lists.push((` ${pp[j].firstname}`));
        lng += 1;
      }
    }
    content += `Number of students in ${fieldss[i]}: ${lng}. List:${lists}`;
    if (i < (fieldss.length - 1)) {
      content += '\n';
    }
    lists = [];
    lng = 0;
  }
  return content;
}

async function countStudents(filepath) {
  try {
    const data = await readFile(filepath);
    return await manData(data);
  } catch (error) {
    throw new Error(error);
  }
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(filename)
      .then((result) => {
        res.end(`This is the list of our students\n${result}`);
      });
  }
});

app.listen(port, hostname, () => {
  console.log('...');
});

module.exports = app;
