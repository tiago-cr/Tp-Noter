type Card = {
  value: number;
  suit: string;
};

type Hand = Card[];

export function scoreHand(hand: Hand): number {
  let highestValue = 0;

  for (const card of hand) {
    if (card.value > highestValue) {
      highestValue = card.value;
    }
  }

  return highestValue;
}