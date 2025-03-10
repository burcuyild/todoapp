import { Component, OnInit } from '@angular/core';
import {Todoitem} from "../todoitem";
import {Model} from "../model";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  constructor() { }

  model = new Model();

  // private name:string = "Burcu";

  // items = [
  //   "item1", "item2", "item3", "item4"
  // ]

  // items: Todoitem[] = [
  //   { description: "Breakfast", action: "Done"},
  //   { description: "Shoppping", action: "Done"},
  //   { description: "Tennis", action: "Todo"}
  //   // new Todoitem("Breakfast", "Done"),
  //   // new Todoitem("Shoppping", "Done"),
  //   // new Todoitem("Tennis", "Todo"),
  //   // new Todoitem("Tennis", "Todo")
  // ];
  getName(){
    return this.model.name;
  }

  getItems(){
    return this.model.items;
  }


}
