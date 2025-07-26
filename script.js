const family = new FamilyTree(document.getElementById("tree"), {
  nodeBinding: {
    field_0: "name",
    field_1: "birth"
  },
  nodes: [
    // Genitori di Ali
    { id: 1, name: "Fraj Khemiri", birth: "1920–2001" },
    { id: 2, name: "Aisha Khemiri", birth: "1921–2022" },

    // Ali e Welfa (coppia)
    { id: 3, name: "Ali Khemiri", birth: "12 ott 1959 – 9 dic 2017" },
    { id: 4, name: "Welfa Khemiri", birth: "1 apr 1974" },

    // Relazione: genitori di Ali
    {
      id: 100, // id fittizio della relazione
      parents: [1, 2],
      children: [3]
    },

    // Relazione: Ali + Welfa => figli
    {
      id: 101,
      parents: [3, 4],
      children: [5, 6, 7, 8, 9]
    },

    // Figli
    { id: 5, name: "Imen Khemiri", birth: "5 dic 1997" },
    { id: 6, name: "Gihene Khemiri", birth: "4 giu 1999" },
    { id: 7, name: "Safouane Khemiri", birth: "4 nov 2000" },
    { id: 8, name: "Nourhene Khemiri", birth: "10 set 2002" },
    { id: 9, name: "Susane Khemiri", birth: "23 mar 2009" }
  ]
});
