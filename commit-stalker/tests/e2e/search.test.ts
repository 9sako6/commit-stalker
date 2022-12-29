import { test, expect } from '@playwright/test';

test('Enter a query in the form and search for commits', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle(/Commit Stalker/)

  // await page.getByRole('textbox').fill('9sako6/test-repo')

  // await page.getByRole('button', {name: 'Search'}).click()
})
