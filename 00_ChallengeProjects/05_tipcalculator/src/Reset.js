export default function Reset({ onReset }) {
  return (
    <div className="row">
      <button onClick={onReset} className="reset--button">
        Reset
      </button>
    </div>
  )
}
