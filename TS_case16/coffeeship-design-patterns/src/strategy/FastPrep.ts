import { PrepStrategy } from "./PrepStrategy";

export class FastPrep implements PrepStrategy {
  prepare() {
    console.log("Preparing drink fast");
  }
}
