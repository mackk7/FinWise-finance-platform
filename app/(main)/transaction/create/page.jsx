"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation"; // To parse ?edit=123

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

// This mimics "getTransaction(editId)"
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

// FIX: Import your Transaction Form component
// Ensure this path is correct: app/(main)/transaction/_components/transaction-form.jsx
import { AddTransactionForm } from "../_components/transaction-form";

export default function AddTransactionPage() {
  const searchParams = useSearchParams();
  const editId = searchParams.get("edit");
  
  // State to hold initial data if editing
  const [initialData, setInitialData] = useState(null);

  // Simulate fetching transaction data if an editId exists
  useEffect(() => {
    if (editId) {
      console.log("Mock Fetching Transaction ID:", editId);
      // In a real app, you'd await fetch(`/api/transactions/${editId}`)
      // Here we just set mock data after a tiny delay to simulate async
      const timer = setTimeout(() => {
        // We'll just use one hardcoded transaction for any ID for simplicity
        setInitialData(mockInitialTransaction);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [editId]);

  return (
    <div className="max-w-3xl mx-auto px-5 py-10">
      <div className="flex justify-center md:justify-normal mb-8">
        <h1 className="text-5xl gradient-title font-bold">
          {editId ? "Edit Transaction" : "Add Transaction"}
        </h1>
      </div>
      
      {/* Render the Form with Mock Props */}
      <AddTransactionForm
        accounts={mockAccounts}
        categories={defaultCategories}
        editMode={!!editId}
        initialData={initialData}
      />
    </div>
  );
}