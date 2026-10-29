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

test("a straight scores 40 points", () => {
  const hand = [
    { value: 5, suit: "clubs" },
    { value: 6, suit: "diamonds" },
    { value: 7, suit: "hearts" },
    { value: 8, suit: "spades" },
    { value: 9, suit: "clubs" },
  ];

  assert.equal(scoreHand(hand), 40);
});

test("a flush scores 45 points", () => {
  const hand = [
    { value: 2, suit: "hearts" },
    { value: 5, suit: "hearts" },
    { value: 8, suit: "hearts" },
    { value: 11, suit: "hearts" },
    { value: 14, suit: "hearts" },
  ];

  assert.equal(scoreHand(hand), 45);
});

test("a full house scores 50 point", () => {
  const hand = [
    { value: 2, suit: "clubs" },
    { value: 2, suit: "diamonds" },
    { value: 2, suit: "hearts" },
    { value: 9, suit: "spades" },
    { value: 9, suit: "clubs" },
  ];

  assert.equal(scoreHand(hand), 50);
});

test("four of a kind scores 60 points", () => {
  const hand = [
    { value: 4, suit: "clubs" },
    { value: 4, suit: "diamonds" },
    { value: 4, suit: "hearts" },
    { value: 4, suit: "spades" },
    { value: 13, suit: "clubs" },
  ];

  assert.equal(scoreHand(hand), 60);
});

test("a straigt flush scores 80 points", () => {
  const hand = [
    { value: 10, suit: "hearts" },
    { value: 11, suit: "hearts" },
    { value: 12, suit: "hearts" },
    { value: 13, suit: "hearts" },
    { value: 14, suit: "hearts" },
  ];

  assert.equal(scoreHand(hand), 80);
});