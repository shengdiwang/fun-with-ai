import { getResponse } from "../src/Utils";

test("null input", async () => {
  await expect(() => getResponse(null)).rejects.toThrow(TypeError);
});

test("non-string input", async () => {
  await expect(() => getResponse(101)).rejects.toThrow(TypeError);
});

test("valid string input", async () => {
  await expect(getResponse("666")).resolves.toBeTruthy();
});
