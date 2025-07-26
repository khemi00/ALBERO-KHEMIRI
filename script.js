const family = new FamilyTree(document.getElementById("tree"), {
  mode: "dark", // opzionale per leggibilità
  scaleInitial: FamilyTree.match.bound, // adatta l'albero allo schermo
  nodeBinding: {
    field_0: "name",
    field_1: "birth"
  },
  nodes: [
    { id: 1, name: "Fraj Khemiri", birth: "1920–2001" },
    { id: 2, name: "Aisha Khemiri", birth: "1921–2022" },
    { id: 3, name: "Ali Khemiri", birth: "12 ott 1959 – 9 dic 2017" },
    { id: 4, name: "Welfa Khemiri", birth: "1 apr 1974" },
    { id: 5, name: "Imen Khemiri", birth: "5 dic 1997" },
    { id: 6, name: "Gihene Khemiri", birth: "4 giu 1999" },
    { id: 7, name: "Safouane Khemiri", birth: "4 nov 2000" },
    { id: 8, name: "Nourhene Khemiri", birth: "10 set 2002" },
    { id: 9, name: "Susane Khemiri", birth: "23 mar 2009" },

    { id: 100, parents: [1, 2], children: [3] },
    { id: 101, parents: [3, 4], children: [5, 6, 7, 8, 9] }
  ]
});
