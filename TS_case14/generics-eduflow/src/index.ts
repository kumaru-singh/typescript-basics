import { FeedbackBox } from "./models/FeedbackBox";
import { getFirstItem } from "./utils/getFirstItem";

// String feedback
const quizFeedback = new FeedbackBox<string>();
quizFeedback.addFeedback("Great quiz");
quizFeedback.addFeedback("Too hard");

// Object feedback
type LessonFeedback = {
  rating: number;
  comment: string;
};

const lessonFeedback = new FeedbackBox<LessonFeedback>();
lessonFeedback.addFeedback({ rating: 5, comment: "Excellent lesson" });

console.log(getFirstItem(quizFeedback.getAllFeedback()));
console.log(getFirstItem(lessonFeedback.getAllFeedback()));
