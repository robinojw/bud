export type UserData = {
  balance: Amount;
  id: string;
  provider: Provider;
  transactions: Array<Transaction>;
}

export type Provider = {
  account_number: string;
  description: string;
  sort_code: string;
  title: string;
}

export type Amount = {
  currency: string;
  value: number;
}

export type Transaction = {
  amount: Amount;
  category_title: string;
  date: Date;
  description: string;
  id: string;
}
