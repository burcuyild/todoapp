import { Component, OnInit } from '@angular/core';
import {Todoitem} from "../todoitem";
import {Model} from "../model";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  displayAll:boolean = false;
  // message: string = "hello";
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
    if(this.displayAll){
      return this.model.items;

    }
    return this.model.items.filter(item => !item.action)
  }

  // addItem(txtItem: any){
  //   console.log(txtItem.value)
  // }
  addItem(value: string){
    // console.log(value)
    // this.message = value;
    if(value != ""){
      this.model.items.push(  { description: value, action: false})
    }else{
      alert("enter information")
    }
  }

  displayCount(){
    return this.model.items.filter(i=>i.action).length;
  }


}
