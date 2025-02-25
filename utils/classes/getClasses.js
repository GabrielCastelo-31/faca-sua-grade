// Copy this file to the console and run it on the page below, after selecting the university you want to scrape
// https://sigaa.unb.br/sigaa/public/turmas/listar.jsf
// FGA: document.querySelector("#formTurma\\:inputDepto").value = "673"
// CIC: document.querySelector("#formTurma\\:inputDepto").value = "508"
// MAT: document.querySelector("#formTurma\\:inputDepto").value = "518"
// IF: document.querySelector("#formTurma\\:inputDepto").value = "524"

function getClasses() {
  /**
   * @type {Record<string, {code: string; name: string; classNum: number; teacher: string; schedules: [number, number][];}[]>}
   */
  const classes = {};

  const translate = {
    "Segunda-feira": 0,
    "Terça-feira": 1,
    "Quarta-feira": 2,
    "Quinta-feira": 3,
    "Sexta-feira": 4,
    "Sábado": 5,
  };

  let name = "";
  let code = "";
  [...document.querySelector("#turmasAbertas > table > tbody").children].forEach((tr) => {
    if (tr.classList.contains("agrupador")) {
      const el = tr.children[0];
      [code, , ...r] = el.children[el.children.length - 1].children[1].innerText.split(" ");
      name = r.join(" ");
      return;
    }

    const classNum = parseInt(tr.children[0].innerText);
    /** @type {string} */
    let teacher = tr.children[2].innerText.split(/\(\d\dh\)/g).slice(0, -1)
    .map(e => {
      const teacherName = e.trim();
      return teacherName.split(" ").map(v => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase()).join(" ");
    }).join(" e ");

    if(document.querySelector("#formTurma\\:inputDepto").value !== "673") {
      if(!tr.children[7].innerText.includes("FCTE")) {
        return;
      }
    }

    /** @type {[number, number][]} */ 
    const schedules = tr.children[3].children[1].children[0].innerHTML.trim().split("<br>")
      .filter(e => e.trim())
      .map(time => {
        const [dia, horario] = time.trim().split(" ");
        const j = translate[dia];
        const i = (parseInt(horario.split(":")[0]) - 8) >> 1;

        return [i, j];
      });

      classes[code] ??= [];
      classes[code].push({
        code,
        name,
        classNum,
        teacher,
        schedules,
      });
  });

  return classes;
}

getClasses();
