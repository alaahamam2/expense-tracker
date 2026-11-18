export default function ExpenseList({ expenses, onDelete }) {
  if (expenses.length === 0) return <p>مفيش مصروفات لسه.</p>;

  return (
    <ul className="list">
      {expenses.map((e) => (
        <li key={e.id}>
          <div>
            <strong>{e.title}</strong>
            <small>
              {e.category} - {e.date}
            </small>
          </div>
          <span>{e.amount} جنيه</span>
          <button onClick={() => onDelete(e.id)}>حذف</button>
        </li>
      ))}
    </ul>
  );
}