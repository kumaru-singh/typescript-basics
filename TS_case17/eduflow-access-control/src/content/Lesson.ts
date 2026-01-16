import { Content } from "./Content";
import { Instructor } from "../roles/Instructor";

export class Lesson extends Content {
  private content: string;

  constructor(title: string, author: string, content: string) {
    super(title, author);
    this.content = content;
  }

  public editContent(newContent: string, user: Instructor) {
    if (this.isPublished()) {
      throw new Error("Lesson already published");
    }
    this.content = newContent;
  }

  public getContent(): string {
    return this.content;
  }

  getType(): string {
    return "Lesson";
  }
}
