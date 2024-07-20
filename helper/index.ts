export function renderRouteBoolean(pathname: string) {
  if (
    pathname === "/login" ||
    pathname === "/register" ||
    pathname === "/" ||
    pathname === "/settings"
  )
    return true;
  return false;
}

export function formatCurrency(
  amount: number,
  currencySymbol: string = "$"
): string {
  const roundedAmount = Math.round(amount * 100) / 100;
  const [integerPart, fractionalPart] = roundedAmount.toFixed(2).split(".");
  const integerWithCommas = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const formattedCurrency = `${currencySymbol}${integerWithCommas}.${fractionalPart}`;
  return formattedCurrency;
}
