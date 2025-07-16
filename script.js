const ramos = [
  { id: "anatomia1", nombre: "ANATOMÍA I", semestre: 1, area: "básicas", prereqs: [] },
  { id: "biocel", nombre: "BIOLOGÍA CELULAR", semestre: 1, area: "básicas", prereqs: [] },
  { id: "quimfis", nombre: "QUÍMICA - FÍSICA", semestre: 1, area: "básicas", prereqs: [] },
  { id: "anatomia2", nombre: "ANATOMÍA II", semestre: 2, area: "básicas", prereqs: ["anatomia1"] },
  { id: "biomol", nombre: "BIOLOGÍA MOLECULAR", semestre: 2, area: "básicas", prereqs: ["biocel", "quimfis"] },
  { id: "histologia", nombre: "HISTOLOGÍA", semestre: 3, area: "básicas", prereqs: ["anatomia2", "biocel"] },
  { id: "fisiologia1", nombre: "FISIOLOGÍA I", semestre: 3, area: "básicas", prereqs: ["anatomia2", "biomol"] },
  { id: "neuro", nombre: "NEUROCIENCIAS", semestre: 4, area: "básicas", prereqs: ["fisiologia1", "histologia"] },
  // Puedes seguir agregando el resto de los ramos aquí...
];

const colores = {
  "básicas": "basicas",
  "clínicas": "clinicas",
  "formación": "formacion"
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
      boton.className = `ramo-button bg-${colores[ramo.area]}`;
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

