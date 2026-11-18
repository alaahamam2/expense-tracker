import { useState } from "react";

export default function ExpenseForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("أكل");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;
    onAdd({
      id: Date.now(),
      title,
      amount: Number(amount),
      category,
      date: new Date().toLocaleDateString("ar-EG"),
    });
    setTitle("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        placeholder="اسم المصروف"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="المبلغ"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>أكل</option>
        <option>مواصلات</option>
        <option>فواتير</option>
        <option>ترفيه</option>
        <option>أخرى</option>
      </select>
      <button type="submit">إضافة</button>
    </form>
  );
}