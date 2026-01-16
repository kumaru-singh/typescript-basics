"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
class Content {
    constructor(title, author) {
        this.published = false;
        this.title = title;
        this.author = author;
    }
    publish() {
        this.published = true;
    }
    isPublished() {
        return this.published;
    }
}
exports.Content = Content;
