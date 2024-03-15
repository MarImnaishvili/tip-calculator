export default function TipPersentBox({
  persent,
  handleClick,
  selectedTipAmount,
}) {
  return (
    <button
      className="tipPersentBox"
      onClick={() => handleClick(persent)}
      style={
        selectedTipAmount === persent
          ? { backgroundColor: "hsl(172, 67%, 45%)" }
          : { backgroundColor: "hsl(183, 100%, 15%)" }
      }
    >
      <h4>
        {persent}
        <span>%</span>
      </h4>
    </button>
  );
}
