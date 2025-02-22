import { Routes } from "@/routes/routes";
import { Dimensions } from "react-native";

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
  transfer_success: "Confirm",
  transaction_report: "Transaction Report",
  beneficiary: "Beneficiary",
  withdrawal: "Withdrawal",
  account: "Account and card",
  mobile_prepaid: "Mobile Prepaid",
  mobile_confirm: "Mobile Confirm",
  pay_bills: "Pay the bill",
  payment_history: "Payment History",
  electric_bill: "Electric payment",
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
    link: Routes.mobile_prepaid,
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

export const payBillsArrays = [
  {
    title: "Payment History",
    description: "All previous payments",
    imagePath: require("@/assets/images/internet copy.svg"),
    link: Routes.payment_history,
  },

  {
    title: "Electric bill",
    description: "Pay electric bill this month",
    imagePath: require("@/assets/images/eletric.svg"),
    link: Routes.electric_bill,
  },

  {
    title: "Mobile bill",
    description: "Pay mobile this month",
    imagePath: require("@/assets/images/mobile_bill.svg"),
    link: Routes.exchange_rate,
  },
  {
    title: "Internet bill",
    description: "Pay internet bill this month",
    imagePath: require("@/assets/images/internet copy.svg"),
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
  {
    title: "Withdrawal",
    details: "Short details about withdrawal",
    date: "2024-10-05",
  },
  {
    title: "Savings",
    details: "Short details about savings",
    date: "2024-08-10",
  },
  {
    title: "Discount",
    details: "Short details about discount",
    date: "2024-03-06",
  },
  {
    title: "Complaint",
    details: "Short details about complaint resolved",
    date: "2024-04-20",
  },
];

export type CurrencyType = {
  currencyCode: string;
  currency: string;
  isSelected: boolean;
};

export const allAccounts = [
  { id: 0, account: "1212 45454 5544 3345" },
  { id: 1, account: "8783 6563 8783 6674" },
  { id: 2, account: "2345 7665 8983 6563" },
  { id: 3, account: "3452 7673 8903 6763" },
  { id: 4, account: "2445 7652 8738 5636" },
];
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
    id: 0,
  },

  {
    transferType: "Transfer to another bank",
    isSelected: false,
    imagePath: require("@/assets/images/house.svg"),
    id: 1,
  },
  {
    transferType: "Transfer to the same bank",
    isSelected: false,
    imagePath: require("@/assets/images/user.svg"),
    id: 2,
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

const width = Dimensions.get("window").width;

export const images = [
  {
    imagePath: require("@/assets/images/visa.png"),
    width: width * 0.8,
    height: width * 0.64,
  },
  {
    imagePath: require("@/assets/images/orange_visa.png"),
    width: width * 0.77,
    height: width * 0.62,
  },
  {
    imagePath: require("@/assets/images/visa.png"),
    width: width * 0.73,
    height: width * 0.59,
  },
];

export const accounts = [
  {
    title: "Account 1",
    accountNumber: "1900 9893 1200",
    balance: 20000,
    branch: "New York",
  },
  {
    title: "Account 2",
    accountNumber: "4873 2100 1780",
    balance: 120000,
    branch: "London",
  },
  {
    title: "Account 3",
    accountNumber: "1900 1234 2278",
    balance: 230000,
    branch: "Lagos",
  },
];

export const cardImages = [
  {
    imagePath: require("@/assets/images/visa.png"),
    width: width * 0.8,
    height: width * 0.64,
  },
  {
    imagePath: require("@/assets/images/orange_visa.png"),
    width: width * 0.8,
    height: width * 0.64,
  },
];
