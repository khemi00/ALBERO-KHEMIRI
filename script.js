const family = new FamilyTree(document.getElementById("tree"), {
  nodeBinding: {
    field_0: "name",
    field_1: "birth"
  },
  nodes: [
    { id: 1, name: "Fraj Khemiri", birth: "1920–2001" },
    { id: 2, name: "Aisha Khemiri", birth: "1921–2022" },
    { id: 3, pid: 1, mid: 2, name: "Ali Khemiri", birth: "12 ott 1959 – 9 dic 2017" },
    { id: 4, name: "Welfa Khemiri", birth: "1 apr 1974" },
    { id: 5, pid: 3, mid: 4, name: "Imen Khemiri", birth: "5 dic 1997" },
    { id: 6, pid: 3, mid: 4, name: "Gihene Khemiri", birth: "4 giu 1999" },
    { id: 7, pid: 3, mid: 4, name: "Safouane Khemiri", birth: "4 nov 2000" },
    { id: 8, pid: 3, mid: 4, name: "Nourhene Khemiri", birth: "10 set 2002" },
    { id: 9, pid: 3, mid: 4, name: "Susane Khemiri", birth: "23 mar 2009" }
  ]
});
