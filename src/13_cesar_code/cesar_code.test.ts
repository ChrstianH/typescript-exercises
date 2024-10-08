import { test, expect } from "vitest";
import { getDecodedText, getEncodedText } from "./utils/encryption";

test(`getEncodedText("A", 7) results in "H"`, () => {
  expect(getEncodedText("A", 7)).toBe("H");
});

test(`getEncodedText("R", 10) results in "B"`, () => {
  expect(getEncodedText("R", 10)).toBe("B");
});

test(`getDecodedText("H", 7) results in "A"`, () => {
  expect(getDecodedText("H", 7)).toBe("A");
});

test(`getDecodedText("B", 10) results in "R"`, () => {
  expect(getDecodedText("B", 10)).toBe("R");
});

test(`getEncodedText("Olgas Interessen sind Computer, Spielkonsolen und Schach.", 6) results in "URMGY OTZKXKYYKT YOTJ IUSVAZKX, YVOKRQUTYURKT ATJ YINGIN."`, () => {
  expect(
    getEncodedText(
      "Olgas Interessen sind Computer, Spielkonsolen und Schach.",
      6
    )
  ).toBe("URMGY OTZKXKYYKT YOTJ IUSVAZKX, YVOKRQUTYURKT ATJ YINGIN.");
});

test(`getDecodedText("Amqv wlmz vqkpb Amqv, lia qab pqmz lqm Nziom", 8) results in ${"Sein oder nicht Sein, das ist hier die Frage".toUpperCase()}`, () => {
  expect(
    getDecodedText("Amqv wlmz vqkpb Amqv, lia qab pqmz lqm Nziom", 8)
  ).toBe("Sein oder nicht Sein, das ist hier die Frage".toUpperCase());
});
