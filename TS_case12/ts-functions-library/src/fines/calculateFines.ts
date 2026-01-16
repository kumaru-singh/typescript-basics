export function calculateFines(...fines: number[]): number {
    return fines.reduce((sum, fine) => sum + fine, 0);
  }
  