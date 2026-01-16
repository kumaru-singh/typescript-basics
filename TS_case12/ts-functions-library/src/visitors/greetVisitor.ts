import { VisitorFormatter } from "./formatters";

export function greetVisitor(
  visitor: string,
  formatter: VisitorFormatter
): void {
  formatter(visitor);
}
