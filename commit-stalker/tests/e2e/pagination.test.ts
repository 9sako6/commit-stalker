
import { test, expect } from '@playwright/test';
import { URL as GITHUB_API_URL } from '../../src/hooks/github-api'
import mockResponse from '../fixtures/github-api-response/rust-lang.rust.json'

test('Move to another page with pagination', async ({ page }) => {
  await page.route(`${GITHUB_API_URL}/repos/**`, async (route) => {
    const response = await page.request.fetch(route.request());
    const json = mockResponse;
    await route.fulfill({
      json,
      headers: {
        ...response.headers(),
        link: '<https://api.github.com/repositories/724712/commits?per_page=100&page=2135>; rel="next", <https://api.github.com/repositories/724712/commits?per_page=100&page=2137>; rel="last", <https://api.github.com/repositories/724712/commits?per_page=100&page=1>; rel="first", <https://api.github.com/repositories/724712/commits?per_page=100&page=2133>; rel="prev"'
      }
    });
  });

  page.on('console', msg => console.log(msg.text()))

  await page.goto('/')

  await expect(page).toHaveTitle(/Commit Stalker/)

  await page.getByRole('textbox').fill('rust-lang/rust')
  await page.getByRole('button', { name: 'Search' }).click()

  await expect(page).toHaveURL(/rust-lang/);

  await expect(page.getByRole('textbox')).toHaveValue('rust-lang/rust')
  await expect(page.locator("h2.commit-title").first()).toHaveText('Sample commit title')

  await page.locator('button[aria-label="Go to page 3"]').nth(0).click()

  await expect(page.getByRole('textbox')).toHaveValue('rust-lang/rust')
  await expect(page.locator("h2.commit-title").first()).toHaveText('Sample commit title')

  await expect(page).toHaveURL(/page=3/);
})
