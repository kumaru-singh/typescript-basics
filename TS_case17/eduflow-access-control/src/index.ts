import { Instructor } from "./roles/Instructor";
import { Learner } from "./roles/Learner";
import { Admin } from "./roles/Admin";

import { Quiz } from "./content/Quiz";
import { Lesson } from "./content/Lesson";
import { Assignment } from "./content/Assignment";

const instructor = new Instructor("Sensei");
const learner = new Learner("Student");
const admin = new Admin("Admin");

const quiz = new Quiz("TS Basics", "Sensei");
quiz.addQuestion("What is TypeScript?", instructor);
quiz.publish();

// ❌ Compile-time impossible:
// quiz.addQuestion("Hack", learner);

const lesson = new Lesson("OOP", "Sensei", "Intro");
lesson.editContent("Updated Intro", instructor);
lesson.publish();

const assignment = new Assignment("Homework 1", "Sensei", new Date("2026-02-01"));
assignment.updateDueDate(new Date("2026-02-10"), instructor);
assignment.publish();

console.log("System running correctly");
