import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";

describe("my test", () => {
  it("should pass", () => {
    console.log(userEvent.setup);
    userEvent.setup();
    expect(true).toBe(true);
  });
});
