window.onload = async () => {
  const grade = new Grade();

  const root = document.getElementById("root");

  const table = grade.getTable();

  const description = document.createElement("h1");
  description.innerHTML = "Turmas atualizadas no dia 27/02/2025 às 21:00";

  const list = grade.getList();
  root.appendChild(list);
  root.appendChild(description);
  root.appendChild(table);
}
