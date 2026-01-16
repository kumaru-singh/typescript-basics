export function displayMember(
    id: number,
    name: string,
    email?: string
  ): string {
    return email
      ? `ID: ${id}, Name: ${name}, Email: ${email}`
      : `ID: ${id}, Name: ${name}`;
  }
  