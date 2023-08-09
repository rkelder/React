export default function Amount({ totalAmount, handleAmountChange }) {
  return (
    <div className="row">
      <h3 className="header">How much was the bill?</h3>
      <input
        placeholder="Enter bill amount - excluding tips"
        className="input"
        type="text"
        value={totalAmount}
        onChange={(event) => handleAmountChange(Number(event.target.value))}
      />
    </div>
  )
}
