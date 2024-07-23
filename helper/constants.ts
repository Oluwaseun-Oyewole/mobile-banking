import { Routes } from "@/routes/routes";

export const AuthScreensTitle: Record<string, string> = {
  login: "Sign in",
  register: "Sign up",
  forgot_password: "Forgot password",
  change_password: "Change password",
};

export const MainScreensTitle: Record<string, string> = {
  home: "",
  search: "Search",
  message: "Message",
  settings: "Settings",
  branch: "Branch",
  interest: "Interest rate",
  exchange: "Exchange",
  exchange_rate: "Exchange rate",
  language: "Language",
  app_info: "App Information",
  password_change: "Change Password",
  notification: "Notification",
  transfer: "Transfer",
  confirm: "Confirm",
};

export const HomeCardArrays = [
  {
    title: "Account and Card",
    imagePath: require("@/assets/images/account.png"),
    link: Routes.account,
  },
  {
    title: "Transfer",
    imagePath: require("@/assets/images/transfer.png"),
    link: Routes.transfer,
  },
  {
    title: "Withdrawal",
    imagePath: require("@/assets/images/withdrawal.png"),
    link: Routes.withdrawal,
  },
  {
    title: "Mobile prepaid",
    imagePath: require("@/assets/images/prepaid.png"),
    link: Routes.prepaid,
  },
  {
    title: "Pay the bill",
    imagePath: require("@/assets/images/receipt.png"),
    link: Routes.pay_bills,
  },

  {
    title: "Save online",
    imagePath: require("@/assets/images/save.png"),
    link: Routes.save_online,
  },

  {
    title: "Credit card",
    imagePath: require("@/assets/images/credit-card.png"),
    link: Routes.credit_card,
  },

  {
    title: "Transaction report",
    imagePath: require("@/assets/images/transactions.png"),
    link: Routes.transaction_report,
  },

  {
    title: "Beneficiary",
    imagePath: require("@/assets/images/beneficiary.png"),
    link: Routes.beneficiary,
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

export const messages = [
  {
    title: "Bank of America",
    details: "Search for branch",
    imagePath: require("@/assets/images/Bank.svg"),
    date: "Today",
  },

  {
    title: "Account",
    details: "Your account is limited, Please follow...",
    imagePath: require("@/assets/images/Account.svg"),
    date: "12/10",
  },

  {
    title: "Alert",
    details: "Your statement is ready for you to...",
    imagePath: require("@/assets/images/Alert.svg"),
    date: "10/20",
  },
  {
    title: "Paypal",
    details: "Your account has been locked Ple...",
    imagePath: require("@/assets/images/Paypal.svg"),
    date: "10/11",
  },

  {
    title: "Withdrawal",
    details: "Dear customer, 285762 is your account...",
    imagePath: require("@/assets/images/Withdrawal.svg"),
    date: "10/11",
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
];

export type LanguageType = {
  imageURI: string;
  countryName: string;
  isSelected: boolean;
};

export const languagesArray: LanguageType[] = [
  {
    imageURI: require("@/assets/images/CN.svg"),
    countryName: "China",
    isSelected: false,
  },

  {
    imageURI: require("@/assets/images/FR.svg"),
    countryName: "France",
    isSelected: false,
  },

  {
    imageURI: require("@/assets/images/KR.svg"),
    countryName: "Korea",
    isSelected: false,
  },

  {
    imageURI: require("@/assets/images/EN.svg"),
    countryName: "Britain",
    isSelected: true,
  },
  {
    imageURI: require("@/assets/images/NI.svg"),
    countryName: "Nicaragua",
    isSelected: false,
  },

  {
    imageURI: require("@/assets/images/PT.svg"),
    countryName: "Portugal",
    isSelected: false,
  },
  {
    imageURI: require("@/assets/images/CN.svg"),
    countryName: "China",
    isSelected: false,
  },

  {
    imageURI: require("@/assets/images/FR.svg"),
    countryName: "France",
    isSelected: false,
  },

  {
    imageURI: require("@/assets/images/KR.svg"),
    countryName: "Korea",
    isSelected: false,
  },

  {
    imageURI: require("@/assets/images/NI.svg"),
    countryName: "Nicaragua",
    isSelected: false,
  },

  {
    imageURI: require("@/assets/images/PT.svg"),
    countryName: "Portugal",
    isSelected: false,
  },
];

type CardType = {
  username: string;
  cardName: string;
  cardNumber: string;
  availableBalance: number;
  cardType: "VISA" | "MASTER" | "VERVE";
};

export const cardDetails: CardType = {
  username: "Seun Samuel",
  cardName: "Amazon Platinium",
  cardNumber: "4567 **** **** 909",
  availableBalance: 345643,
  cardType: "VISA",
};

export const settings = [
  { title: "Password", link: Routes.password_change },
  { title: "Touch ID" },
  { title: "Languages", link: Routes.language },
  { title: "App information", link: Routes.app_info },
  { title: "Customer care", phone: "0908729983" },
];

export const app_information = [
  { title: "Date of manufactured", details: "July 20" },
  { title: "Version", details: "1.00" },
  { title: "Language", details: "English" },
];

export const notification = [
  { title: "Withdrawal", details: "Short details about withdrawal" },
  { title: "Savings", details: "Short details about savings" },
  { title: "Discount", details: "Short details about discount" },
  { title: "Complaint", details: "Short details about complaint resolved" },
];

export type CurrencyType = {
  currencyCode: string;
  currency: string;
  isSelected: boolean;
};
export const fromCurrencies: CurrencyType[] = [
  { currencyCode: "VND #", currency: "Viet Nam Dong", isSelected: false },
  { currencyCode: "HK$", currency: "Hong Kong Dollar", isSelected: false },
  { currencyCode: "USD $", currency: "Dollar", isSelected: true },
  { currencyCode: "NGN ₦", currency: "Naira", isSelected: false },
  { currencyCode: "EUR €", currency: "Euro", isSelected: false },
  { currencyCode: "ARS $", currency: "Peso", isSelected: false },
  { currencyCode: "TND د.ت", currency: "Tunisian dinar", isSelected: false },
  { currencyCode: "UGX USh", currency: "Ugandan shilling", isSelected: false },
  { currencyCode: "LAK ₭", currency: "Lao kip", isSelected: false },
  { currencyCode: "KRW ₩", currency: "South Korean won", isSelected: false },
  { currencyCode: "CNY /元", currency: "Chinese yuan", isSelected: false },
  {
    currencyCode: "HKD $ / HK$ / “元”",
    currency: "Hong Kong dollar",
    isSelected: false,
  },
  { currencyCode: "MRU UM", currency: "Ouguiya", isSelected: false },
];
export const toCurrencies: CurrencyType[] = [
  { currencyCode: "VND #", currency: "Viet Nam Dong", isSelected: false },
  { currencyCode: "HK$", currency: "Hong Kong Dollar", isSelected: false },
  { currencyCode: "USD $", currency: "Dollar", isSelected: true },
  { currencyCode: "NGN ₦", currency: "Naira", isSelected: false },
  { currencyCode: "EUR €", currency: "Euro", isSelected: false },
  { currencyCode: "ARS $", currency: "Peso", isSelected: false },
  { currencyCode: "TND د.ت", currency: "Tunisian dinar", isSelected: false },
  { currencyCode: "UGX USh", currency: "Ugandan shilling", isSelected: false },
  { currencyCode: "LAK ₭", currency: "Lao kip", isSelected: false },
  { currencyCode: "KRW ₩", currency: "South Korean won", isSelected: false },
  { currencyCode: "CNY /元", currency: "Chinese yuan", isSelected: false },
  {
    currencyCode: "HKD $ / HK$ / “元”",
    currency: "Hong Kong dollar",
    isSelected: false,
  },
  { currencyCode: "MRU UM", currency: "Ouguiya", isSelected: false },
];

export const transferArray = [
  {
    transferType: "Transfer via card number",
    isSelected: true,
    imagePath: require("@/assets/images/card.svg"),
  },

  {
    transferType: "Transfer to another bank",
    isSelected: false,
    imagePath: require("@/assets/images/house.svg"),
  },
  {
    transferType: "Transfer to the same bank",
    isSelected: false,
    imagePath: require("@/assets/images/user.svg"),
  },
];

export const beneficiaryArray = [
  {
    name: "Emma",
    isSelected: true,
    imagePath: require("@/assets/images/user1.svg"),
  },
  {
    name: "Mike",
    isSelected: false,
    imagePath: require("@/assets/images/user2.svg"),
  },
  {
    name: "Yemi",
    isSelected: false,
    imagePath: require("@/assets/images/user1.svg"),
  },
  {
    name: "Dolapo",
    isSelected: false,
    imagePath: require("@/assets/images/user2.svg"),
  },
  {
    name: "Yussuf",
    isSelected: false,
    imagePath: require("@/assets/images/user2.svg"),
  },
  {
    name: "Daniella",
    isSelected: false,
    imagePath: require("@/assets/images/user1.svg"),
  },
  {
    name: "James",
    isSelected: false,
    imagePath: require("@/assets/images/user2.svg"),
  },
];

export const banksArray = [
  { name: "Fifth Third", isSelected: false },
  { name: "Bank of the west", isSelected: false },
  { name: "Wells Fargo", isSelected: false },
  { name: "JP Morgan Chase", isSelected: false },
  { name: "US bank", isSelected: false },
  { name: "City bank", isSelected: true },
  { name: "Ame Express", isSelected: false },
];

export const branchArray = [
  { name: "Branch One", isSelected: false },
  { name: "Branch Two", isSelected: false },
  { name: "Branch Three", isSelected: true },
  { name: "Branch Four", isSelected: false },
];
