import { Person } from "./personTypes";

/**function logAllPeopleInTree(rootPerson)
    workStack = empty stack of Person objects
    push rootPerson onto workStack

		while workStack is not empty: 
        currentPerson = pop person off workStack
        log the name property of currentPerson
        push each element of currentPerson's children onto the workStack
         */

export function logAllPeopleInTree(topPerson: Person): void {
  let workStack: Person[] = [];
  workStack.push(topPerson);
  console.log("workstack is", workStack);

  while (workStack.length > 0) {
    const currentPerson = workStack.pop() as Person;
    console.log("current person is", currentPerson.name);
    // console.log("current person's children",currentPerson.children);

    // push each element of currentPerson's children onto the workStack
    // pushEachElement(currentPerson.children, workStack);
    workStack.push(...currentPerson.children);

  }

  // console.log("TODO!  First person is " + topPerson.name);
}

function pushEachElement(originArray: Person[], destArray: Person[]): void {
  for (const element of originArray) {
    destArray.push(element);
  }
}

export function logAllPeopleInTreeWithQueue(topPerson: Person): void {
  console.log("TODO!  First person is " + topPerson.name);
}
