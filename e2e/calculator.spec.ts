import { test, expect } from "@playwright/test";

test("Calculator UI should perform operations correctly", async ({ page }) => {
  await page.goto("http://localhost:5173");

  
  await page.click("text=5");
  
  await page.click("text=+");
  
  await page.click("text=3");
  
  await page.click("text==");

  // Vérifier que le résultat affiché est 8
  await expect(page.locator(".result-display")).toHaveText("8");
});
