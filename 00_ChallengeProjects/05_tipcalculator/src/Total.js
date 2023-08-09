import React from "react"

export default function Total({ totalAmount, tip, tipAmount }) {
  return (
    <div className="row">
      <h3 className="header">Total Amount:</h3>
      <p className="header">
        ${totalAmount + tip},- (${totalAmount} + ${tip} tip)
      </p>
    </div>
  )
}
