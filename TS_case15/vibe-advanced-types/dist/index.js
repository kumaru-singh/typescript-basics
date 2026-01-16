"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Union narrowing
function printUser(user) {
    if ("quizzesCompleted" in user) {
        console.log("Learner");
    }
    else if ("coursesTaught" in user) {
        console.log("Instructor");
    }
    else {
        console.log("Admin");
    }
}
// Intersection
const multi = {
    id: "u1",
    quizzesCompleted: 5,
    coursesTaught: 2
};
const progress = {
    quiz1: "completed",
    video2: "in-progress"
};
// Mapped challenge
const stats = {
    quizzes: "10",
    videos: "5",
    assignments: "3"
};
console.log("Types checked successfully");
