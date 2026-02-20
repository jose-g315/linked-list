import LinkedList from './linkedList.js';

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
// list.prepend(10);
// list.prepend(50);
// console.log(list.popHead());

list.toString();
list.removeAt(1);
list.toString();
// list.insertAt(-1, 10, 20, 30);
// list.toString();
// console.log(list.contains(50));
// console.log(list.findIndex(50));
//console.log(list.at(0));
// console.log(list.size());
// console.log(list.headNode());
// console.log(list.tailNode());
