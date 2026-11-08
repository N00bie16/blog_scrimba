import { expect, test } from "@playwright/test";

test("home page loads with working navigation and images", async ({ page }) => {
  await page.goto("");

  await expect(
    page.getByRole("heading", { name: "My new journey as a bootcamp student" }),
  ).toBeVisible();

  await expect(page.locator("img").first()).toBeVisible();

  await page.getByRole("link", { name: "About" }).click();
  await expect(page).toHaveURL(/\/about$/);
  await expect(
    page.getByRole("heading", { name: /Hi there! My name is Reynaldi/i }),
  ).toBeVisible();
});

test("featured article and post cards navigate to detail pages", async ({ page }) => {
  await page.goto("");

  await page
    .getByRole("link", { name: "Read featured article: My new journey as a bootcamp student" })
    .click();
  await expect(page).toHaveURL(/\/blog\/hero$/);
  await expect(
    page.getByRole("heading", { name: "My new journey as a bootcamp student" }),
  ).toBeVisible();

  await page.goto("");
  await page.getByRole("link", { name: "Read article: Blog One" }).click();
  await expect(page).toHaveURL(/\/blog\/1$/);
  await expect(page.getByRole("heading", { name: "Blog One" })).toBeVisible();
});

test("unknown routes show a not-found page", async ({ page }) => {
  await page.goto("missing-page");

  await expect(page.getByRole("heading", { name: "404 - Page Not Found" })).toBeVisible();
  await page.getByRole("link", { name: "Return to home" }).click();
  await expect(page).toHaveURL(/\/blog_scrimba\/?$/);
});
