"use client";

import React from "react";
import { notFound } from "next/navigation";

// FIX: Import from your local components folder
// You must create these files next for this page to work
import { AccountChart } from "../_components/account-chart";
import { TransactionTable } from "../_components/transaction-table";

// -------------------------------------------------------
// MOCK DATA (Replaces the Database Fetch)
// -------------------------------------------------------
const accountData = {
  id: "1",
  name: "Main Checking",
  type: "CURRENT",
  balance: 12500.75,
  _count: { transactions: 15 },
  transactions: [
    { id: "1", description: "Grocery Store", amount: -150.00, date: "2024-11-18", category: "Food", type: "EXPENSE", recurring: false },
    { id: "2", description: "Freelance Payment", amount: 2500.00, date: "2024-11-15", category: "Income", type: "INCOME", recurring: false },
    { id: "3", description: "Coffee Shop", amount: -5.50, date: "2024-11-14", category: "Food", type: "EXPENSE", recurring: false },
    { id: "4", description: "Rent", amount: -1200.00, date: "2024-11-01", category: "Housing", type: "EXPENSE", recurring: true },
    { id: "5", description: "Utility Bill", amount: -120.00, date: "2024-11-05", category: "Utilities", type: "EXPENSE", recurring: true },
  ],
};

export default function AccountPage({ params }) {
  // In the future, this will be: const account = await getAccountWithTransactions(params.id);
  const account = accountData; 

  if (!account) {
    notFound();
  }

  // Separate transactions from account details just like the YouTuber did
  const { transactions, ...accountDetails } = account;

  return (
    <div className="space-y-8 px-5 py-10">
      <div className="flex gap-4 items-end justify-between">
        <div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight gradient-title capitalize">
            {accountDetails.name}
          </h1>
          <p className="text-muted-foreground">
            {accountDetails.type.charAt(0) + accountDetails.type.slice(1).toLowerCase()}{" "}
            Account
          </p>
        </div>

        <div className="text-right pb-2">
          <div className="text-xl sm:text-2xl font-bold">
            ${parseFloat(accountDetails.balance).toFixed(2)}
          </div>
          <p className="text-sm text-muted-foreground">
            {accountDetails._count.transactions} Transactions
          </p>
        </div>
      </div>

      {/* Chart Section */}
      <AccountChart transactions={transactions} />

      {/* Transactions Table */}
      <TransactionTable transactions={transactions} />
    </div>
  );
}