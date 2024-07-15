export function renderRouteBoolean(pathname: string) {
  if (pathname === "/login" || pathname === "/register" || pathname === "/")
    return true;
  return false;
}
