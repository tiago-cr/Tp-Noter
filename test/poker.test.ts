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

test("a three of a kind scores 30 points", () => {
  const hand = [
    { value: 7, suit: "clubs" },
    { value: 7, suit: "diamonds" },
    { value: 7, suit: "hearts" },
    { value: 4, suit: "spades" },
    { value: 9, suit: "clubs" },
  ];

  assert.equal(scoreHand(hand), 30);
});