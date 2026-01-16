"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quiz = void 0;
const Content_1 = require("./Content");
class Quiz extends Content_1.Content {
    constructor(title, author) {
        super(title, author);
        this.questions = [];
    }
    addQuestion(question, user) {
        if (this.isPublished()) {
            throw new Error("Quiz already published");
        }
        this.questions.push(question);
    }
    getQuestions() {
        return [...this.questions];
    }
    getType() {
        return "Quiz";
    }
}
exports.Quiz = Quiz;
