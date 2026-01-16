export type LearnerReport = {
    name: string;
    score: number;
    feedback: string;
  };
  
  export type DraftReport = Partial<LearnerReport>;
  export type ReadonlyReport = Readonly<LearnerReport>;
  