import { test } from "node:test";
import assert from "node:assert/strict";
import { scoreHand } from "../poker.ts";

test("hand who return the highest card value", () => {
  const hand = [
    { value: 3, suit: "clubs" },
    { value: 8, suit: "diamonds" },
    { value: 10, suit: "hearts" },
    { value: 12, suit: "spades" },
    { value: 13, suit: "clubs" },
  ];

  assert.equal(scoreHand(hand), 13);
});