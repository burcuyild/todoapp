import {Todoitem} from "./todoitem";

export class Model{
  name: string;
  items: Todoitem[];

  constructor() {
    this.name ="Burcu";
    this.items = [
      { description: "Breakfast", action: "Done"},
      { description: "Shoppping", action: "Done"},
      { description: "Tennis", action: "Todo"}    ]
  }
}
