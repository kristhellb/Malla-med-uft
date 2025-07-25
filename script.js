const ramos = [
      // Semestre 1
      { id: "identidad", nombre: "IDENTIDAD PERSONAL", semestre: 1, area: "formación", prereqs: [] },
      { id: "anatomia1", nombre: "ANATOMÍA I", semestre: 1, area: "básicas", prereqs: [] },
      { id: "biocel", nombre: "BIOLOGÍA CELULAR", semestre: 1, area: "básicas", prereqs: [] },
      { id: "quimfis", nombre: "QUÍMICA - FÍSICA", semestre: 1, area: "básicas", prereqs: [] },
      { id: "orientacion", nombre: "ORIENTACIÓN A LOS ESTUDIOS MÉDICOS", semestre: 1, area: "formación", prereqs: [] },
      // Semestre 2
      { id: "filosofia", nombre: "INTRODUCCIÓN AL PENSAMIENTO FILOSÓFICO", semestre: 2, area: "formación", prereqs: [] },
      { id: "arte", nombre: "APRECIACIÓN A LOS LENGUAJES ARTÍSTICOS", semestre: 2, area: "formación", prereqs: [] },
      { id: "anatomia2", nombre: "ANATOMÍA II", semestre: 2, area: "básicas", prereqs: ["anatomia1"] },
      { id: "biomol", nombre: "BIOLOGÍA MOLECULAR", semestre: 2, area: "básicas", prereqs: ["biocel", "quimfis"] },
      { id: "bioquimica", nombre: "BIOQUÍMICA - BIOFÍSICA", semestre: 2, area: "básicas", prereqs: ["quimfis"] },
      { id: "habilidades1", nombre: "HABILIDADES CLÍNICAS I", semestre: 2, area: "clínicas", prereqs: ["orientacion"] },
      // Semestre 3
      { id: "antro", nombre: "ANTROPOLOGÍA MÉDICA", semestre: 3, area: "formación", prereqs: [] },
      { id: "histologia", nombre: "HISTOLOGÍA", semestre: 3, area: "básicas", prereqs: ["anatomia2", "biocel"] },
      { id: "embrio", nombre: "EMBRIOLOGÍA HUMANA", semestre: 3, area: "básicas", prereqs: ["anatomia2", "biomol"] },
      { id: "fisiologia1", nombre: "FISIOLOGÍA I", semestre: 3, area: "básicas", prereqs: ["anatomia2", "biomol", "bioquimica"] },
      { id: "habilidades2", nombre: "HABILIDADES CLÍNICAS II", semestre: 3, area: "clínicas", prereqs: ["habilidades1"] },
      { id: "micro1", nombre: "MICROBIOLOGÍA MÉDICA I", semestre: 3, area: "básicas", prereqs: ["biomol"] },
      { id: "metodoinv1", nombre: "METODOLOGÍA DE LA INVESTIGACIÓN MÉDICA I", semestre: 3, area: "formación", prereqs: ["orientacion"] },
      // Semestre 4
      { id: "autocuidado", nombre: "AUTOCUIDADO INTEGRAL DE LA SALUD", semestre: 4, area: "formación", prereqs: [] },
      { id: "english", nombre: "ENGLISH FOR HEALTH SCIENCE", semestre: 4, area: "formación", prereqs: [] },
      { id: "integradoCB", nombre: "INTEGRADO DE CIENCIAS BÁSICAS", semestre: 4, area: "básicas", prereqs: ["histologia", "fisiologia1"] },
      { id: "neuro", nombre: "NEUROCIENCIAS", semestre: 4, area: "básicas", prereqs: ["histologia", "fisiologia1", "anatomia2", "embrio"] },
      { id: "fisiologia2", nombre: "FISIOLOGÍA II", semestre: 4, area: "básicas", prereqs: ["fisiologia1", "histologia"] },
      { id: "semio1", nombre: "SEMIOLOGÍA I", semestre: 4, area: "clínicas", prereqs: ["habilidades2", "histologia", "fisiologia1", "micro1"] },
      { id: "micro2", nombre: "MICROBIOLOGÍA MÉDICA II", semestre: 4, area: "básicas", prereqs: ["micro1"] },
      // Semestre 5
      { id: "etica", nombre: "ÉTICA MÉDICA", semestre: 5, area: "formación", prereqs: [] },
      { id: "semio2", nombre: "SEMIOLOGÍA II", semestre: 5, area: "clínicas", prereqs: ["integradoCB", "fisiologia2", "semio1"] },
      { id: "patologia1", nombre: "PATOLOGÍA I", semestre: 5, area: "básicas", prereqs: ["integradoCB", "fisiologia2"] },
      { id: "fisioPat1", nombre: "FISIOPATOLOGÍA I", semestre: 5, area: "básicas", prereqs: ["integradoCB", "fisiologia2", "neuro", "micro2"] },
      { id: "farmaco1", nombre: "FARMACOLOGÍA I", semestre: 5, area: "básicas", prereqs: ["fisiologia2", "neuro", "micro2"] },
      { id: "psicomed", nombre: "PSICOLOGÍA MÉDICA", semestre: 5, area: "formación", prereqs: ["antro", "neuro"] },
      // Semestre 6
      { id: "bioetica", nombre: "BIOÉTICA", semestre: 6, area: "formación", prereqs: ["etica"] },
      { id: "trascendencia", nombre: "PERSONA Y TRASCENDENCIA", semestre: 6, area: "formación", prereqs: [] },
      { id: "semio3", nombre: "SEMIOLOGÍA III", semestre: 6, area: "clínicas", prereqs: ["integradoCB", "fisiologia2", "semio2"] },
      { id: "patologia2", nombre: "PATOLOGÍA II", semestre: 6, area: "básicas", prereqs: ["patologia1"] },
      { id: "fisioPat2", nombre: "FISIOPATOLOGÍA II", semestre: 6, area: "básicas", prereqs: ["fisioPat1", "patologia1"] },
      { id: "farmaco2", nombre: "FARMACOLOGÍA II", semestre: 6, area: "básicas", prereqs: ["farmaco1"] },
      // Semestre 7
      { id: "liderazgo", nombre: "LIDERAZGO EN SALUD", semestre: 7, area: "formación", prereqs: [] },
      { id: "epidemio", nombre: "EPIDEMIOLOGÍA", semestre: 7, area: "formación", prereqs: ["bioetica"] },
      { id: "intMed1", nombre: "INTEGRADO MEDICINA INTERNA I", semestre: 7, area: "clínicas", prereqs: ["patologia2", "fisioPat2", "farmaco2", "semio3", "bioetica"] },
      // Semestre 8
      { id: "intMed2", nombre: "INTEGRADO MEDICINA INTERNA II", semestre: 8, area: "clínicas", prereqs: ["intMed1"] },
      { id: "metodoinv2", nombre: "METODOLOGÍA DE LA INVESTIGACIÓN MÉDICA II", semestre: 8, area: "formación", prereqs: ["metodoinv1", "epidemio", "integradoCB"] },
      { id: "saludPublica", nombre: "SALUD PÚBLICA/ADMINISTRACIÓN", semestre: 8, area: "formación", prereqs: ["epidemio"] },
      // Semestre 9
      { id: "cirugia", nombre: "CIRUGÍA GENERAL", semestre: 9, area: "clínicas", prereqs: ["intMed2"] },
      { id: "espQuirurgicas", nombre: "ESPECIALIDADES QUIRÚRGICAS", semestre: 9, area: "clínicas", prereqs: ["intMed2"] },
      { id: "psiquiatria1", nombre: "PSIQUIATRÍA I", semestre: 9, area: "clínicas", prereqs: ["intMed2", "psicomed"] },
      { id: "legal1", nombre: "MEDICINA LEGAL I", semestre: 9, area: "formación", prereqs: ["intMed2"] },
      // Semestre 10
      { id: "gine", nombre: "OBSTETRICIA Y GINECOLOGÍA", semestre: 10, area: "clínicas", prereqs: ["intMed2"] },
      { id: "pedia", nombre: "PEDIATRÍA", semestre: 10, area: "clínicas", prereqs: ["intMed2"] },
      { id: "psiquiatria2", nombre: "PSIQUIATRÍA II", semestre: 10, area: "clínicas", prereqs: ["psiquiatria1"] },
      { id: "legal2", nombre: "MEDICINA LEGAL II", semestre: 10, area: "formación", prereqs: ["legal1"] },
    ];

const colores = {
  "básicas": "bg-pink-200",
  "clínicas": "bg-purple-200",
  "formación": "bg-blue-200"
};

const completados = new Set(JSON.parse(localStorage.getItem("ramosCompletados") || "[]"));

function renderMalla() {
  const container = document.getElementById("malla");
  container.innerHTML = "";

  for (let sem = 1; sem <= 10; sem++) {
    const columna = document.createElement("div");
    columna.className = "p-2 bg-white rounded shadow";
    const titulo = document.createElement("h2");
    titulo.className = "text-lg font-bold mb-2";
    titulo.innerText = `Semestre ${sem}`;
    columna.appendChild(titulo);

    ramos.filter(r => r.semestre === sem).forEach(ramo => {
      const boton = document.createElement("button");
      boton.className = `ramo-button ${colores[ramo.area]}`;
      boton.textContent = ramo.nombre;
      boton.title = `Área: ${ramo.area}\nPrerrequisitos: ${ramo.prereqs.map(id => ramos.find(r => r.id === id)?.nombre).join(", ") || "Ninguno"}`;
      boton.onclick = () => toggleRamo(ramo.id);

      if (!ramo.prereqs.every(p => completados.has(p))) {
        boton.classList.add("locked");
      } else if (completados.has(ramo.id)) {
        boton.classList.add("completed");
      }

      columna.appendChild(boton);
    });

    container.appendChild(columna);
  }
}

function toggleRamo(id) {
  if (completados.has(id)) {
    completados.delete(id);
  } else {
    completados.add(id);
  }
  localStorage.setItem("ramosCompletados", JSON.stringify([...completados]));
  renderMalla();
}

renderMalla();

