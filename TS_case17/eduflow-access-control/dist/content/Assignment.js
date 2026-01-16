"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assignment = void 0;
const Content_1 = require("./Content");
class Assignment extends Content_1.Content {
    constructor(title, author, dueDate) {
        super(title, author);
        this.dueDate = dueDate;
    }
    updateDueDate(newDate, user) {
        if (this.isPublished()) {
            throw new Error("Assignment already published");
        }
        this.dueDate = newDate;
    }
    getDueDate() {
        return this.dueDate;
    }
    getType() {
        return "Assignment";
    }
}
exports.Assignment = Assignment;
