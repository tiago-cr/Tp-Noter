type Card = {
  value: number;
  suit: string;
};

type Hand = Card[];

export function scoreHand(hand: Hand): number {
  let highestValue = 0;
  const valueCounts = new Map<number, number>();
  const suitCounts = new Map<string, number>();

  for (const card of hand) {
    if (card.value > highestValue) {
      highestValue = card.value;
    }

    const count = valueCounts.get(card.value) ?? 0;
    valueCounts.set(card.value, count + 1);

    const suitCount = suitCounts.get(card.suit) ?? 0;
    suitCounts.set(card.suit, suitCount + 1);
  }

  let hasThreeOfAKind = false;
  let hasPair = false;

  for (const count of valueCounts.values()) {
    if (count === 3) {
      hasThreeOfAKind = true;
    }

    if (count === 2) {
      hasPair = true;
    }
  }

  if (hasThreeOfAKind && hasPair) {
    return 50;
  }

  if (hasThreeOfAKind) {
    return 30;
  }

  if (suitCounts.size === 1) {
    return 45;
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