import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("something truthy and falsy", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });
});

describe("App component", () => {
  it("renders correct heading", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
    expect(screen.getByRole("heading").textContent).toMatch(/hello world/i);
  });

  it("renders goodbye world after click", async () => {
    const user = userEvent.setup();

    const { container } = render(<App />);

    const button = screen.getByRole("button", { name: "Click" });
    await user.click(button);

    expect(screen.getByRole("heading").textContent).toMatch(/goodbye world/i);
    expect(container).toMatchSnapshot();
  });
});
