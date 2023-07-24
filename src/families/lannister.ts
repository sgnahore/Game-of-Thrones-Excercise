import { Person } from "../personTypes";

export function createLannisterTree(): Person {
  const cerseisKids: Person[] = [
    { name: "Joffrey", children: [] },
    { name: "Myrcella", children: [] },
    { name: "Tommen", children: [] },
  ];

  const tywinsKids: Person[] = [
    { name: "Cersei", children: cerseisKids },
    { name: "Ser Jaime", children: [] },
    { name: "Tyrion", children: [] },
  ];
  const tytosKids: Person[] = [
    { name: "Tywin", children: tywinsKids },
    { name: "Genna", children: [] },
    { name: "Kevan", children: [] },
    { name: "Tygett", children: [] },
    { name: "Gerion", children: [] },
  ];

  const topPerson: Person = { name: "Tytos", children: tytosKids };

  //https://en.wikipedia.org/wiki/Template:Family_tree_of_Tytos_Lannister
  return topPerson;
}
