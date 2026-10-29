type Card = {
  value: number;
  suit: string;
};

type Hand = Card[];

export function scoreHand(hand: Hand): number {
  let highestValue = 0;
  const valueCounts = new Map<number, number>();

  for (const card of hand) {
    if (card.value > highestValue) {
      highestValue = card.value;
    }

    const count = valueCounts.get(card.value) ?? 0;
    valueCounts.set(card.value, count + 1);
  }

  for (const count of valueCounts.values()) {
    if (count === 3) {
      return 30;
    }
  }

  const sortedValues = Array.from(valueCounts.keys()).sort(
    (firstValue, secondValue) => firstValue - secondValue,
  );

  if (
    sortedValues.length === 5 &&
    sortedValues[4] - sortedValues[0] === 4
  ) {
    return 40;
  }

  return highestValue;
}