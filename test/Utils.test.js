import { getResponse } from "../src/Utils";

test("null input", async () => {
  await expect(() => getResponse(null, "text-curie-001")).rejects.toThrow(
    TypeError
  );
});

test("non-string input", async () => {
  await expect(() => getResponse(101, "text-curie-001")).rejects.toThrow(
    TypeError
  );
});

test("invalid engine", async () => {
  await expect(() => getResponse("101", "text-curie-0001")).rejects.toThrow(
    RangeError
  );
});

test("valid string input", async () => {
  await expect(getResponse("666", "text-curie-001")).resolves.toBeTruthy();
});
