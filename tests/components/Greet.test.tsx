import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet";
import '@testing-library/jest-dom/vitest';

describe("Greet", () => {
    it("should render Hello name when the name is provided", () => {
        render(<Greet name="John" />);
        const heading = screen.getByRole("heading")
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/John/i);
    });
    it("should render login button when the name is not provided", () => {
        render(<Greet />);
        const button = screen.getByRole("button")
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/login/i);
    });
});