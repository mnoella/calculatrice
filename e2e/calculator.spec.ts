import { test, expect } from "@playwright/test";

test("Calculator UI should perform operations correctly", async ({ page }) => {
  await page.goto("http://localhost:5173");

  await page.fill("input", "5 3");
  await page.click("text=+");
  await expect(page.locator("p")).toHaveText("Résultat : 8");

  await page.fill("input", "6 2");
  await page.click("text=-");
  await expect(page.locator("p")).toHaveText("Résultat : 4");

  await page.fill("input", "4 3");
  await page.click("text=*");
  await expect(page.locator("p")).toHaveText("Résultat : 12");
});
