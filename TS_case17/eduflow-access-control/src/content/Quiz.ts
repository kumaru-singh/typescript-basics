import { Content } from "./Content";
import { Instructor } from "../roles/Instructor";

export class Quiz extends Content {
  private questions: string[] = [];

  constructor(title: string, author: string) {
    super(title, author);
  }

  public addQuestion(question: string, user: Instructor) {
    if (this.isPublished()) {
      throw new Error("Quiz already published");
    }
    this.questions.push(question);
  }

  public getQuestions(): string[] {
    return [...this.questions];
  }

  getType(): string {
    return "Quiz";
  }
}
