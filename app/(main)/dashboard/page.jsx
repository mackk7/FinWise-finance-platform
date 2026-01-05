"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, ArrowUpRight, ArrowDownRight, Wallet } from "lucide-react";

// FIX: Use "./" (dot slash) to look inside the current dashboard folder
import { CreateAccountDrawer } from "@/components/create-account-drawer";
import { AccountCard } from "./_components/account-card";
import { BudgetProgress } from "./_components/budget-progress";
import { DashboardOverview } from "./_components/transaction-overview";

// MOCK DATA
const initialData = {
  accounts: [
    { id: "1", name: "Main Checking", type: "CURRENT", balance: 12500.75, isDefault: true },
    { id: "2", name: "Savings", type: "SAVINGS", balance: 50000.00, isDefault: false },
    { id: "3", name: "Travel Fund", type: "SAVINGS", balance: 3200.50, isDefault: false },
  ],
  
  transactions: [
    { id: "1", accountId: "1", description: "Whole Foods Market", amount: 150.00, date: new Date().toISOString(), category: "Food", type: "EXPENSE" },
    { id: "2", accountId: "1", description: "Freelance Client", amount: 2500.00, date: new Date().toISOString(), category: "Income", type: "INCOME" },
    { id: "3", accountId: "1", description: "Netflix Premium", amount: 15.99, date: new Date().toISOString(), category: "Entertainment", type: "EXPENSE" },
    { id: "4", accountId: "1", description: "Uber Ride", amount: 24.50, date: new Date().toISOString(), category: "Transportation", type: "EXPENSE" },
    { id: "5", accountId: "1", description: "Rent Payment", amount: 1200.00, date: new Date().toISOString(), category: "Housing", type: "EXPENSE" },
  ],
  
  budget: { 
    amount: 3000,
    currentExpenses: 1390.49
  }
};

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const accounts = initialData.accounts;
  const transactions = initialData.transactions;
  const budgetData = initialData.budget;

  if (isLoading) {
    return <div className="p-10 text-center">Loading dashboard...</div>;
  }

  return (
    <div className="space-y-8 px-5 py-8">
      
      {/* 1. Budget Progress Section */}
      <BudgetProgress
        initialBudget={budgetData}
        currentExpenses={budgetData.currentExpenses}
      />

      {/* 2. Dashboard Overview (Charts & Recent List) */}
      <DashboardOverview
        accounts={accounts}
        transactions={transactions}
      />

      {/* 3. Accounts Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <CreateAccountDrawer>
          <Card className="hover:shadow-md transition-shadow cursor-pointer border-dashed h-full min-h-[180px] flex flex-col items-center justify-center">
            <CardContent className="flex flex-col items-center justify-center text-muted-foreground p-0">
              <Plus className="h-10 w-10 mb-2" />
              <p className="text-sm font-medium">Add New Account</p>
            </CardContent>
          </Card>
        </CreateAccountDrawer>

        {accounts.length > 0 &&
          accounts.map((account) => (
            <AccountCard key={account.id} account={account} />
          ))}
      </div>
      
    </div>
  );
}