import { Routes } from "@/routes/routes";

export const AuthScreensTitle: Record<string, string> = {
  login: "Sign in",
  register: "Sign up",
  forgot_password: "Forgot password",
  change_password: "Change password",
};

export const MainScreensTitle: Record<string, string> = {
  home: "/",
  search: "Search",
  message: "Message",
  settings: "Settings",
  branch: "Branch",
  interest: "Interest rate",
  exchange: "Exchange",
  exchange_rate: "Exchange rate",
};

export const HomeCardArrays = [
  {
    title: "Account and Card",
    imagePath: require("@/assets/images/account.png"),
  },
  {
    title: "Transfer",
    imagePath: require("@/assets/images/transfer.png"),
  },
  {
    title: "Withdrawal",
    imagePath: require("@/assets/images/withdrawal.png"),
  },
  {
    title: "Mobile prepaid",
    imagePath: require("@/assets/images/prepaid.png"),
  },
  {
    title: "Pay the bill",
    imagePath: require("@/assets/images/receipt.png"),
  },

  {
    title: "Save online",
    imagePath: require("@/assets/images/save.png"),
  },

  {
    title: "Credit card",
    imagePath: require("@/assets/images/credit-card.png"),
  },

  {
    title: "Transaction report",
    imagePath: require("@/assets/images/transactions.png"),
  },

  {
    title: "Beneficiary",
    imagePath: require("@/assets/images/beneficiary.png"),
  },
];

export const searchArrays = [
  {
    title: "Branch",
    description: "Search for branch",
    imagePath: require("@/assets/images/branch.svg"),
    link: Routes.branch,
  },

  {
    title: "Interest rate",
    description: "Search for interest rate",
    imagePath: require("@/assets/images/interest.svg"),
    link: Routes.interest,
  },
  {
    title: "Exchange rate",
    description: "Search for exchange rate",
    imagePath: require("@/assets/images/exchange-rate.svg"),
    link: Routes.exchange_rate,
  },
  {
    title: "Exchange",
    description: "Exchange amount of money",
    imagePath: require("@/assets/images/exchange.svg"),
    link: Routes.exchange,
  },
];
