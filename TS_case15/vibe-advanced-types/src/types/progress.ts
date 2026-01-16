export type ModuleStatus = "not-started" | "in-progress" | "completed";

// Mapped type
export type ProgressMap<Modules extends string> = {
  [K in Modules]: ModuleStatus;
};

// Conditional type
export type FeedbackAllowed<T extends ModuleStatus> =
  T extends "completed" ? string : never;
