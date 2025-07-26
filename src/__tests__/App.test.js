import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Test 1: Top-level heading
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

// Test 2: Image with alt text
test("displays an image of myself with appropriate alt text", () => {
  render(<App />);
  const image = screen.getByAltText(/photo of/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src");
});

// Test 3: Second-level heading (About Me)
test("displays a second-level heading with the text 'About Me'", () => {
  render(<App />);
  const heading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });
  expect(heading).toBeInTheDocument();
});

// Test 4: Biography paragraph
test("displays a paragraph with my biography", () => {
  render(<App />);
  const paragraph = screen.getByText(/i.*(am|like|love|enjoy|work|study)/i);
  expect(paragraph).toBeInTheDocument();
});

// Test 5: GitHub link
test("displays a link to my GitHub profile", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", expect.stringContaining("github.com"));
});

// Test 6: LinkedIn link
test("displays a link to my LinkedIn profile", () => {
  render(<App />);
  const linkedInLink = screen.getByRole("link", { name: /linkedin/i });
  expect(linkedInLink).toBeInTheDocument();
  expect(linkedInLink).toHaveAttribute("href", expect.stringContaining("linkedin.com"));
});
