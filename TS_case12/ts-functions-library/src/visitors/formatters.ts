export type VisitorFormatter = (name: string) => void;

export const vipGreet: VisitorFormatter = (name) =>
  console.log(`Welcome VIP ${name}!`);

export const consoleGreet: VisitorFormatter = (name) =>
  console.log(`Hello, ${name}!`);
