import { test, expect } from '@playwright/test';
import { URL as GITHUB_API_URL } from '../../src/hooks/github-api'
import response from '../fixtures/github-api-response/rust-lang.rust.json'

test('Enter a query in the form and search for commits', async ({ page }) => {
  await page.route(`${GITHUB_API_URL}/repos/**`, async route => {
    const json = response;
    await route.fulfill({ json });
  });

  page.on('console', msg => console.log(msg.text()))

  await page.goto('/')

  await expect(page).toHaveTitle(/Commit Stalker/)

  await page.getByRole('textbox').fill('janedoe/commit-stalker')
  await page.getByRole('button', { name: 'Search' }).click()

  await expect(page).toHaveURL(/janedoe/);

  await expect(page.getByRole('textbox')).toHaveValue('janedoe/commit-stalker')
  await expect(page.locator("h2.commit-title").first()).toHaveText('Sample commit title')
})
