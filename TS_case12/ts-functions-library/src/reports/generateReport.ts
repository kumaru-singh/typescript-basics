export function generateReport(data: object[]): string;
export function generateReport(data: object[], format: "json"): string;

export function generateReport(
  data: object[],
  format?: "json"
): string {
  if (format === "json") {
    return JSON.stringify(data, null, 2);
  }

  return data.map(item => JSON.stringify(item)).join("\n");
}
