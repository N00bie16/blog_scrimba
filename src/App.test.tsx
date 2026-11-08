import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

import App from "./App";

function renderRoute(route: string) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>,
  );
}

describe("App routing", () => {
  it("renders the home page and featured article", async () => {
    renderRoute("/");

    expect(
      await screen.findByRole("heading", {
        name: /my new journey as a bootcamp student/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: /primary navigation/i })).toBeInTheDocument();
  });

  it("renders the about page", async () => {
    renderRoute("/about");

    expect(
      await screen.findByRole("heading", {
        name: /hi there! my name is reynaldi/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders a blog post detail", async () => {
    renderRoute("/blog/1");

    expect(await screen.findByRole("heading", { name: "Blog One" })).toBeInTheDocument();
  });

  it("renders not found for an unknown route", async () => {
    renderRoute("/missing-page");

    expect(await screen.findByRole("heading", { name: /404 - page not found/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /return to home/i })).toBeInTheDocument();
  });
});
