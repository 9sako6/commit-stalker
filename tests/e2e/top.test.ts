import { test, expect } from '@playwright/test';

test('Show a welcome message', async ({ page }) => {
  page.on('console', msg => console.log(msg.text()))

  await page.goto('/')

  await expect(page).toHaveTitle(/Commit Stalker/)

  await expect(page.getByRole('heading', { name: /Welcome/ })).toHaveText(/Welcome/)
})
