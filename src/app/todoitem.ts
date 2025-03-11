// export class Todoitem{
//   description: string;
//   action: string;
//
//   constructor(description: string, action: string) {
//     this.description = description;
//     this.action = action;
//   }
// }

// export class Todoitem {
//   constructor(public description: string, public action: string) {
//     this.description = description;
//     this.action = action;
//   }
// }

// const td = new Todoitem("Breakfast", "Done");

export interface Todoitem{
  description: string;
  action: boolean;
}

