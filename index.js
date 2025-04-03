window.onload = async () => {
  const grade = new Grade();

  const root = document.getElementById("root");

  const table = grade.getTable();

  const description = document.createElement("h1");
  description.innerHTML = "Turmas atualizadas no dia 03/04/2025 às 15:48";

  const list = grade.getList();
  root.appendChild(list);
  root.appendChild(description);
  root.appendChild(table);
}
