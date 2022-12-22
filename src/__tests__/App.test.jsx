import App from "../App";
import { it, describe } from "vitest";
import { render, screen } from "@testing-library/react";

describe("App.js", () => {
  it("Check if the button is in the document", () => {
    render(<App />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("check if h1 element is in the document", () => {
    render(<App />);
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toBeInTheDocument();
  });
});
