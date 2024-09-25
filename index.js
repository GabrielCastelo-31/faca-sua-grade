window.onload = async () => {
  const grade = new Grade();

  const root = document.getElementById("root");

  const table = grade.getTable();

  const list = grade.getList();
  root.appendChild(list);
  root.appendChild(table);

  curriculum.forEach((semester, i) => {
    semester.forEach((lesson) => {
      if(!classes[lesson.code]) {
        console.log(lesson);
      }
    })
  });
}
