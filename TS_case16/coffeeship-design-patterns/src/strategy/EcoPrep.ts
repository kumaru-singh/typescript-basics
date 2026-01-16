import { PrepStrategy } from "./PrepStrategy";

export class EcoPrep implements PrepStrategy {
  prepare() {
    console.log("Preparing drink eco-friendly");
  }
}
