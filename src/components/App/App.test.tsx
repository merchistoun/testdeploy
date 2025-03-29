import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import App from "./App";

// filepath: src/components/App/App.test.tsx

// Mock the useTranslate hook
vi.mock("../../localization/useTranslate", () => ({
  useTranslate: () => ({
    translate: vi.fn((key: string) => `Translated: ${key}`),
  }),
}));

describe("App Component", () => {
  it("renders the translated text", () => {
    render(<App />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toMatchSnapshot("Translated: test");
  });
});
