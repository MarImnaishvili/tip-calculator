export default function AmountBlocks({ pNameBlocks, amount }) {
  return (
    <>
      <div className="tipAmountBlock">
        <div className="forPerson">
          <p className="pNameBlocks">{pNameBlocks}</p>
          <span className="person">/ person</span>
        </div>
        <p className="pAmountBlocks">
          $ <span>{amount}</span>
        </p>
      </div>
    </>
  );
}
