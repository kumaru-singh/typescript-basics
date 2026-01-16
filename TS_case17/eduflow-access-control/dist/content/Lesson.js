"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lesson = void 0;
const Content_1 = require("./Content");
class Lesson extends Content_1.Content {
    constructor(title, author, content) {
        super(title, author);
        this.content = content;
    }
    editContent(newContent, user) {
        if (this.isPublished()) {
            throw new Error("Lesson already published");
        }
        this.content = newContent;
    }
    getContent() {
        return this.content;
    }
    getType() {
        return "Lesson";
    }
}
exports.Lesson = Lesson;
