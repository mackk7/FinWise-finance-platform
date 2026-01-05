"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";

import { AddTransactionForm } from "../_components/transaction-form";

// 1. MOCK DATA & CATEGORIES
const mockAccounts = [
  { id: "1", name: "Main Checking" },
  { id: "2", name: "Savings" },
  { id: "3", name: "Travel Fund" },
];

const defaultCategories = [
  // Expense Categories
  { id: "food", name: "Food", type: "EXPENSE" },
  { id: "transport", name: "Transportation", type: "EXPENSE" },
  { id: "entertainment", name: "Entertainment", type: "EXPENSE" },
  { id: "housing", name: "Housing", type: "EXPENSE" },
  { id: "health", name: "Health", type: "EXPENSE" },
  { id: "education", name: "Education", type: "EXPENSE" },
  { id: "other", name: "Other", type: "EXPENSE" },
  
  // Income Categories
  { id: "income", name: "Income (Salary)", type: "INCOME" },
  { id: "freelance", name: "Freelance", type: "INCOME" },
  { id: "investments", name: "Investments", type: "INCOME" },
];

const mockInitialTransaction = {
  id: "1",
  amount: "150.00",
  description: "Grocery Store",
  date: new Date("2024-11-18"),
  accountId: "1",
  category: "food",
  isRecurring: false,
  type: "EXPENSE",
};

// 2. INNER COMPONENT (Uses searchParams)
function AddTransactionContent() {
  const searchParams = useSearchParams();
  const editId = searchParams.get("edit");
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    if (editId) {
      // Simulate fetch
      const timer = setTimeout(() => {
        setInitialData(mockInitialTransaction);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [editId]);

  return (
    <>
      <div className="flex justify-center md:justify-normal mb-8">
        <h1 className="text-5xl gradient-title font-bold">
          {editId ? "Edit Transaction" : "Add Transaction"}
        </h1>
      </div>
      
      <AddTransactionForm
        accounts={mockAccounts}
        categories={defaultCategories}
        editMode={!!editId}
        initialData={initialData}
      />
    </>
  );
}

// 3. MAIN PAGE (Wraps content in Suspense)
export default function AddTransactionPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-10">
      {/* This Suspense boundary fixes the build error */}
      <Suspense fallback={
        <div className="flex justify-center items-center h-40">
          <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
        </div>
      }>
        <AddTransactionContent />
      </Suspense>
    </div>
  );
}