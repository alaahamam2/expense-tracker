import { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./App.css";

export default function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => setExpenses([expense, ...expenses]);
  const deleteExpense = (id) => setExpenses(expenses.filter((e) => e.id !== id));

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="app">
      <h1>متتبع المصروفات</h1>
      <h2 className="total">الإجمالي: {total} جنيه</h2>
      <ExpenseForm onAdd={addExpense} />
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
    </div>
  );
}