type RouteType = {
  headerBarTitle?: string;
  name: string;
};

export const routes: RouteType[] = [
  {
    name: "index",
  },

  // {
  //   name: "auth/login",
  //   headerBarTitle: "Sign in",
  // },

  // {
  //   name: "auths",
  //   headerBarTitle: "Sign up",
  // },

  { name: "+not-found" },
];
