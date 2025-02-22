window.onload = async () => {
  const grade = new Grade();

  const root = document.getElementById("root");

  const table = grade.getTable();

  const description = document.createElement("h1");
  description.innerHTML = "Turmas atualizadas no dia 22/02/2025 às 10:56 da manhã";

  const list = grade.getList();
  root.appendChild(list);
  root.appendChild(description);
  root.appendChild(table);
}
