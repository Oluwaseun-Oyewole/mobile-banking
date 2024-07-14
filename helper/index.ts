export function renderRouteBoolean(pathname: string) {
  if (pathname === "/login" || pathname === "/register") return true;
  return false;
}
