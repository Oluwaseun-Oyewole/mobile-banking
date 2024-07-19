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
  language: "Language",
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

  // {
  //   title: "Language",
  //   description: "Exchange amount of money",
  //   imagePath: require("@/assets/images/exchange.svg"),
  //   link: Routes.language,
  // },

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

type InterestType = {
  interestKind: string;
  deposit: string;
  rate: string;
};

export const interestArray: InterestType[] = [
  { interestKind: "Individual customers", deposit: "1M", rate: "4.50%" },
  { interestKind: "Corporate customers", deposit: "5M", rate: "5.50%" },
  { interestKind: "Individual customers", deposit: "1M", rate: "4.50%" },
  { interestKind: "Corporate customers", deposit: "5M", rate: "5.50%" },
  { interestKind: "Individual customers", deposit: "1M", rate: "4.50%" },
  { interestKind: "Corporate customers", deposit: "5M", rate: "5.50%" },
  { interestKind: "Individual customers", deposit: "1M", rate: "4.50%" },
  { interestKind: "Corporate customers", deposit: "5M", rate: "5.50%" },
  { interestKind: "Individual customers", deposit: "1M", rate: "4.50%" },
  { interestKind: "Corporate customers", deposit: "5M", rate: "5.50%" },
  { interestKind: "Corporate customers", deposit: "5M", rate: "5.50%" },
  { interestKind: "Individual customers", deposit: "1M", rate: "4.50%" },
  { interestKind: "Corporate customers", deposit: "5M", rate: "5.50%" },
  { interestKind: "Corporate customers", deposit: "5M", rate: "5.50%" },
  { interestKind: "Individual customers", deposit: "1M", rate: "4.50%" },
  { interestKind: "Corporate customers", deposit: "5M", rate: "5.50%" },
];

type ExchangeType = {
  imageURI: string;
  countryName: string;
  buy: string;
  sell: string;
};

export const exchangeRateArray: ExchangeType[] = [
  {
    imageURI: require("@/assets/images/CN.svg"),
    countryName: "China",
    buy: "1.403",
    sell: "1.746",
  },

  {
    imageURI: require("@/assets/images/FR.svg"),
    countryName: "France",
    buy: "23.45",
    sell: "34.56",
  },

  {
    imageURI: require("@/assets/images/KR.svg"),
    countryName: "Korea",
    buy: "3.704",
    sell: "5.151",
  },
  {
    imageURI: require("@/assets/images/CN.svg"),
    countryName: "China",
    buy: "1.403",
    sell: "1.746",
  },

  {
    imageURI: require("@/assets/images/FR.svg"),
    countryName: "France",
    buy: "23.45",
    sell: "34.56",
  },

  {
    imageURI: require("@/assets/images/KR.svg"),
    countryName: "Korea",
    buy: "3.704",
    sell: "5.151",
  },

  {
    imageURI: require("@/assets/images/NI.svg"),
    countryName: "Nicaragua",
    buy: "9.123",
    sell: "12.09",
  },

  {
    imageURI: require("@/assets/images/PT.svg"),
    countryName: "Portugal",
    buy: "1.403",
    sell: "1.746",
  },
  {
    imageURI: require("@/assets/images/CN.svg"),
    countryName: "China",
    buy: "1.403",
    sell: "1.746",
  },

  {
    imageURI: require("@/assets/images/FR.svg"),
    countryName: "France",
    buy: "23.45",
    sell: "34.56",
  },

  {
    imageURI: require("@/assets/images/KR.svg"),
    countryName: "Korea",
    buy: "3.704",
    sell: "5.151",
  },

  {
    imageURI: require("@/assets/images/NI.svg"),
    countryName: "Nicaragua",
    buy: "9.123",
    sell: "12.09",
  },

  {
    imageURI: require("@/assets/images/PT.svg"),
    countryName: "Portugal",
    buy: "1.403",
    sell: "1.746",
  },
];

type LanguageType = {
  imageURI: string;
  countryName: string;
};

export const languagesArray: LanguageType[] = [
  {
    imageURI: require("@/assets/images/CN.svg"),
    countryName: "China",
  },

  {
    imageURI: require("@/assets/images/FR.svg"),
    countryName: "France",
  },

  {
    imageURI: require("@/assets/images/KR.svg"),
    countryName: "Korea",
  },

  {
    imageURI: require("@/assets/images/NI.svg"),
    countryName: "Nicaragua",
  },

  {
    imageURI: require("@/assets/images/PT.svg"),
    countryName: "Portugal",
  },
  {
    imageURI: require("@/assets/images/CN.svg"),
    countryName: "China",
  },

  {
    imageURI: require("@/assets/images/FR.svg"),
    countryName: "France",
  },

  {
    imageURI: require("@/assets/images/KR.svg"),
    countryName: "Korea",
  },

  {
    imageURI: require("@/assets/images/NI.svg"),
    countryName: "Nicaragua",
  },

  {
    imageURI: require("@/assets/images/PT.svg"),
    countryName: "Portugal",
  },
];
