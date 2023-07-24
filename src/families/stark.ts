import { Person } from "../personTypes";

export function createStarkTree(): Person {
  const eddardKids: Person[] = [
    { name: "Rickon", children: [] },
    { name: "Bran", children: [] },
    { name: "Arya", children: [] },
    { name: "Sansa", children: [] },
    { name: "Robb", children: [] },
    { name: "Jon", children: [] },
  ];

  const richardKids: Person[] = [
    { name: "Benjen", children: [] },
    { name: "Lyanna", children: [] },
    { name: "Eddard", children: eddardKids },
    { name: "Brandon", children: [] },
  ];

  const topPerson: Person = { name: "Richard", children: richardKids };

  return topPerson;
}
