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
  inputText: string = "";
  constructor() {
    this.model.items = this.getItemsFromLS()
  }

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
  addItem(){
    // console.log(value)
    // this.message = value;
    if(this.inputText != ""){
      let data = { description: this.inputText, action: false}
      this.model.items.push(data);

      let items = this.getItemsFromLS()
      items.push(data)
      localStorage.setItem("items", JSON.stringify(items));
      this.inputText="";
    }else{
      alert("enter information")
    }
  }
  getItemsFromLS(){
    let items:Todoitem[] = [];

    let value = localStorage.getItem("items")

    if(value != null){
      items = JSON.parse(value);
    }
    return items;
  }

  onActionChanged(item: Todoitem){
    // console.log(item)
    let items = this.getItemsFromLS();

    localStorage.clear();

    items.forEach(i =>{
      if(i.description == item.description){
        i.action = item.action;
    }
    });

    localStorage.setItem("items", JSON.stringify(items));

  }
  displayCount(){
    return this.model.items.filter(i=>i.action).length;
  }

  getBtnClasses(){
      return{
         'disabled': this.inputText.length==0,
         'btn-secondary': this.inputText.length==0,
         'btn-primary': this.inputText.length>0
      }
  }

}
