import { FeedbackBox } from "../models/FeedbackBox";

describe("FeedbackBox<T>", () => {
  test("stores string feedback", () => {
    const box = new FeedbackBox<string>();
    box.addFeedback("Nice");
    box.addFeedback("Bad");

    expect(box.getAllFeedback()).toEqual(["Nice", "Bad"]);
  });

  test("stores object feedback", () => {
    type Feedback = { rating: number };

    const box = new FeedbackBox<Feedback>();
    box.addFeedback({ rating: 4 });

    expect(box.getAllFeedback()).toEqual([{ rating: 4 }]);
  });
});
