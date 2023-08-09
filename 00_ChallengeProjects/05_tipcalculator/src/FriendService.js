export default function FriendService({
  tipPercentageFriendService,
  onTipChange1,
}) {
  const handleTipChange1 = (event) => {
    const newTip = parseInt(event.target.value)
    onTipChange1(newTip)
  }

  return (
    <div className="row">
      <h3 className="header">How was the service?</h3>
      <select
        className="input"
        value={tipPercentageFriendService}
        onChange={handleTipChange1}
      >
        <option value="0">The service was poor (0%)</option>
        <option value="5">The service was average (5%)</option>
        <option value="10">The service was good (10%)</option>
        <option value="20">The service was excellent (20%)</option>
      </select>
    </div>
  )
}
