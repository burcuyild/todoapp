import {Todoitem} from "./todoitem";

export class Model{
  name: string;
  items: Todoitem[];

  constructor() {
    this.name ="Burcu";
    this.items = [
      { description: "Breakfast", action: true},
      { description: "Shoppping", action: true},
      { description: "Tennis", action: false}    ]
  }
}
