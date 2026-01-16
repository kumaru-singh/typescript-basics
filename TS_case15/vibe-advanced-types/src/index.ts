import { AnyUser, MultiRoleUser } from "./types/users";
import { ProgressMap, FeedbackAllowed } from "./types/progress";
import { StatsAsStrings } from "./types/challenges";

// Union narrowing
function printUser(user: AnyUser) {
  if ("quizzesCompleted" in user) {
    console.log("Learner");
  } else if ("coursesTaught" in user) {
    console.log("Instructor");
  } else {
    console.log("Admin");
  }
}

// Intersection
const multi: MultiRoleUser = {
  id: "u1",
  quizzesCompleted: 5,
  coursesTaught: 2
};

// Mapped
type MyModules = "quiz1" | "video2";
const progress: ProgressMap<MyModules> = {
  quiz1: "completed",
  video2: "in-progress"
};

// Conditional
type CanGiveFeedback = FeedbackAllowed<"completed">;

// Mapped challenge
const stats: StatsAsStrings = {
  quizzes: "10",
  videos: "5",
  assignments: "3"
};

console.log("Types checked successfully");
