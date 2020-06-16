export function generateUnitResponsiveness(size: number, offset: number): string {
  return `
    margin-left: ${!offset ? 0 : `${offset * 100}%`};
    width: ${!size ? 'auto' : `${size * 100}%`};
  `;
}
