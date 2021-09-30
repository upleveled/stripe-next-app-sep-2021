export function Counter({ minValue = 1, currentValue, newValueSetter }) {
  function addCounter() {
    newValueSetter(currentValue + 1);
  }
  function subtractCounter() {
    if (currentValue === minValue) {
      return;
    }
    newValueSetter(currentValue - 1);
  }
  return (
    <>
      <button onClick={subtractCounter}>-</button>
      <span>{currentValue}</span>
      <button onClick={addCounter}>+</button>
    </>
  );
}
