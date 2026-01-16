export type Learner = {
    id: string;
    quizzesCompleted: number;
  };
  
  export type Instructor = {
    id: string;
    coursesTaught: number;
  };
  
  export type Admin = {
    id: string;
    accessLevel: "basic" | "super";
  };
  
  // Intersection
  export type MultiRoleUser = Learner & Instructor;
  
  // Union
  export type AnyUser = Learner | Instructor | Admin;
  