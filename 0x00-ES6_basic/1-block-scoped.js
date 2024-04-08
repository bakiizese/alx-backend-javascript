export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    const nt = true;
    const nt2 = false;

    task = nt;
    task2 = nt2;
  }

  return [task, task2];
}
