export const log = (data: object): void => {
  Object.entries(data).map(([key, value]) => console.log(`| ${key}: ${value}`));
}