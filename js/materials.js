const student = requireStudentLogin();

if (student) {
  updateStudentName();
}

const searchInput = document.getElementById("materialSearch");
const cards = [...document.querySelectorAll(".material-card")];
const emptyState = document.getElementById("emptyState");

function filterMaterials() {
  const query = searchInput.value.toLowerCase().trim();
  let visible = 0;
  const activeFilter = document.querySelector(".filter.active")?.dataset.filter || "all";

  cards.forEach(card => {
    const text = (card.dataset.search || "").toLowerCase();
    const category = card.dataset.category || "";
    const matchesSearch = !query || text.includes(query);
    const matchesFilter = activeFilter === "all" || category === activeFilter;

    const show = matchesSearch && matchesFilter;
    card.style.display = show ? "" : "none";
    if (show) visible++;
  });

  emptyState.style.display = visible ? "none" : "block";
}

searchInput.addEventListener("input", filterMaterials);

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(x => x.classList.remove("active"));
    button.classList.add("active");
    filterMaterials();
  });
});

const notes = {
  DSA: `
    <h3>Core Topics</h3>
    <p>Arrays, linked lists, stacks, queues, trees and basic searching and sorting concepts.</p>
    <h3>Revision Checklist</h3>
    <p>Understand operations, time complexity, common applications and implementation logic.</p>
  `,
  OS: `
    <h3>Core Topics</h3>
    <p>Processes, threads, CPU scheduling, synchronization, deadlocks and memory management.</p>
    <h3>Revision Checklist</h3>
    <p>Revise scheduling algorithms, page replacement and the purpose of operating-system services.</p>
  `,
  DBMS: `
    <h3>Core Topics</h3>
    <p>SQL, keys, relational schemas, normalization, transactions and database security.</p>
    <h3>Revision Checklist</h3>
    <p>Practice SELECT, JOIN, GROUP BY, constraints and normalization examples.</p>
  `,
  CN: `
    <h3>Core Topics</h3>
    <p>OSI and TCP/IP models, addressing, routing, transport protocols and network congestion.</p>
    <h3>Revision Checklist</h3>
    <p>Know the purpose of each layer and common protocols used in computer networks.</p>
  `,
  AI: `
    <h3>Core Topics</h3>
    <p>AI fundamentals, machine-learning workflow, preprocessing, classification and evaluation.</p>
    <h3>Revision Checklist</h3>
    <p>Revise datasets, features, training/testing, accuracy and common ML algorithms.</p>
  `,
  PY: `
    <h3>Core Topics</h3>
    <p>Variables, conditions, loops, functions, lists, dictionaries, files and modules.</p>
    <h3>Practice</h3>
    <p>Write small programs regularly and test each concept with simple input/output examples.</p>
  `
};

function openNotes(title, key) {
  document.getElementById("modalTitle").textContent = title + " Notes";
  document.getElementById("noteContent").innerHTML = notes[key] || "<p>Notes will be added soon.</p>";
  document.getElementById("notesModal").classList.add("show");
}

function closeNotes() {
  document.getElementById("notesModal").classList.remove("show");
}

document.getElementById("notesModal").addEventListener("click", event => {
  if (event.target.id === "notesModal") closeNotes();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeNotes();
});

const menu = document.getElementById("materialsMenu");
const nav = document.getElementById("materialsNav");
if (menu) {
  menu.addEventListener("click", () => nav.classList.toggle("open"));
}
