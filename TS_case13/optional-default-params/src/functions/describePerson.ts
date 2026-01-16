export function describePerson(name: string, age?: number): string {
    if (typeof age === "number") {
      return `Name: ${name}, Age: ${age}`;
    }
  
    return `Name: ${name}, Age: Unknown`;
  }
  