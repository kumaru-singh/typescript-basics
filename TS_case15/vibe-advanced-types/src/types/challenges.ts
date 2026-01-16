import { Instructor, Admin } from "./users";

// 1️⃣ InstructorOrAdmin
export type InstructorOrAdmin = Instructor | Admin;

// 2️⃣ ReadonlyAssignment
export type Assignment = {
  title: string;
  dueDate: Date;
  points: number;
};

export type ReadonlyAssignment = Readonly<Assignment>;

// 3️⃣ StatsAsStrings
export type LearnerStats = {
  quizzes: number;
  videos: number;
  assignments: number;
};

export type StatsAsStrings = {
  [K in keyof LearnerStats]: string;
};
