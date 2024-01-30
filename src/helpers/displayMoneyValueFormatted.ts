export function displayMoneyValueFormatted(value: number) {
  return value.toFixed(2).toString().replace(".", ",");
}
