import { Component, OnInit } from '@angular/core';
import {Todoitem} from "../todoitem";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  constructor() { }

private name = "Burcu";

  // items = [
  //   "item1", "item2", "item3", "item4"
  // ]

  items = [
    { id: 1, description: "Breakfast", action: "Done"},
    { id: 2, description: "Shoppping", action: "Done"},
    { id: 3, description: "Tennis", action: "Todo"}
  ]
  getName(){
    return this.name;
  }



}
