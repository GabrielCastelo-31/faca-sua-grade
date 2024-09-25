// Copy this file to the console and run it on the page below, after selecting the curriculum you want to scrape
// https://sigaa.unb.br/sigaa/geral/estrutura_curricular/busca_geral.jsf

/** 
 * @param {string[]} expression
 * @returns {string[]}
**/
function infixToPostfix(expression) {
  /** @type {string[]} */
  const output = [];
  /** @type {string[]} */
  const operators = [];

  for(const token of expression) {
    if (token === '(') {
      operators.push(token);
    } else if (token === ')') {
      while (operators.length && operators[operators.length - 1] !== '(') {
        output.push(operators.pop());
      }
      operators.pop();
    } else if (token === 'OU' || token === 'E') {
      while (operators.length && operators[operators.length - 1] !== '(' && (token === 'OU' || operators[operators.length - 1] === "E")) {
        output.push(operators.pop());
      }
      operators.push(token);
    } else {
      if(token.trim()) {
        output.push(token.trim());
      }
    }
  }

  while (operators.length) {
    output.push(operators.pop());
  }

  return output;
}

async function getCurriculum() {
  const semesters = [];
  for await (const tbody of [...document.querySelectorAll("#formulario\\:tab_painel > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table:nth-child(2) > tbody")].slice(2)) {
    const lessons = [];
    for (const tr of [...tbody.children]) {
      const code = tr.children[0].children[0].children[0].innerText.trim();
      const name = tr.children[1].innerText.trim().split(" - ")[0];
      
      tr.children[0].children[0].children[0].click();
      await new Promise((resolve) => setTimeout(resolve, 1000));
      while(document.querySelector(".ydlg-bd > .loading-indicator")) {
        await new Promise((resolve) => setTimeout(resolve, 500));
      }

      const requirements = document.querySelector(".ydlg-bd > table > tbody > tr.secao + tr > td").innerText.trim();

      lessons.push({ code, name, requirements: infixToPostfix(requirements.split(" ")) });
    }

    semesters.push(lessons);
  }

  return semesters;
}

await getCurriculum();
