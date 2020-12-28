# todolist
Name: Rashad Humphrey
Overview/description of the project:This is a ReactJS To Do List with an form email send attached to it.
Details: This is used to mark your schedule.
Technologies Used: HTML, CSS, JavaScript and ReactJS.
Ideas for future improvements: 1) Add additional JavaScript to the site. 2) Implement multiple pages together. 3) Add a time feature to the page.
State Component Planning: State and Component Planning:
Project 3 State Tree:
(Link)
https://repl.it/@RashadHumphrey1/Project-3-State-tree
(Code)
const todo = [
{ name: "Name1", symbol: "Gym"},
{ name: "Name2", symbol: "Shop"},
{ name: "Name3", symbol: "Study"},
{ name: "Name4", symbol: "Sleep"}
];

function listMenu([
  {name: name1, symbol: symbol1},
  {name: name2, symbol: symbol2},
  {name: name3, symbol: symbol3},
  {name: name4, symbol: symbol4}
]) {
  //if symbol1 and symbol2 are the same, then return "Booked!"
  if(symbol1 == symbol2) {
      return "Booked!";
  }
     
  //if symbol1: "Gym" and symbol2: "Shop": return P1
  //if symbol1: "Stop" and symbol2: "Study": return P1
  //if symbol1: "Study" and symbol2: "Sleep": return P1
  const menuList = ['Gym=Shop', 'Shop=Study', 'Study=Sleep'].includes('${symbol1}>${symbol2}');

// Both solutions work, you can use TodoList or MenuList interchangibly
const todoList = 
(symbol1 === "Guy" && symbol2 === "Shop") ||
(symbol1 === "Shop" && symbol2 === "Study") ||
(symbol1 === "Study" && symbol2 === "Sleep");

  if (menuList) {
    return '${name1} Booked!';
  }

   //P2 wins (return P2)
      return '${name2} Booked!';
}

console.log(listMenu(todo));
List of Actions:
import { ADD_TABLE_ITEM } from "../constants/constants.js";

const addTableItem = (name, price, id) => {
  return {
    type: ADD_TABLE_ITEM,
    tableId: id,
    item: {
      name: name,
      price: price
    }
  };
};

export default addTableItem;
List of Container and Presentational Components:
Container -
 <div class="w3-container w3-teal">
  <h1>Header</h1>
</div>
Presentational Components - 
Todo.jsx
App.js
App.css


Users Stories: 3 User Stories
1)	The user uses this website to schedule the activities of their day.
2)	The user uses this website to plan their day.
3)	The user uses this website to organize their day.
