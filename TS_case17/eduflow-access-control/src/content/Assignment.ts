import { Content } from "./Content";
import { Instructor } from "../roles/Instructor";

export class Assignment extends Content {
  private dueDate: Date;

  constructor(title: string, author: string, dueDate: Date) {
    super(title, author);
    this.dueDate = dueDate;
  }

  public updateDueDate(newDate: Date, user: Instructor) {
    if (this.isPublished()) {
      throw new Error("Assignment already published");
    }
    this.dueDate = newDate;
  }

  public getDueDate(): Date {
    return this.dueDate;
  }

  getType(): string {
    return "Assignment";
  }
}
