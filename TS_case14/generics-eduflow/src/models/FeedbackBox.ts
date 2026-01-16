export class FeedbackBox<T> {
    private feedbacks: T[] = [];
  
    addFeedback(feedback: T): void {
      this.feedbacks.push(feedback);
    }
  
    getAllFeedback(): T[] {
      return [...this.feedbacks];
    }
  }
  