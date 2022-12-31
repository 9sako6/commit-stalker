import { test, expect } from '@playwright/test';
import { GITHUB_API_URL } from '../../src/hooks/github-api'
import response from '../fixtures/github-api-response/rust-lang.rust.json'
import forbiddenResponse from '../fixtures/github-api-response/403.json'
import notFoundResponse from '../fixtures/github-api-response/404.json'

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

test('Show an error message when API limitation error occurs', async ({ page }) => {
  await page.route(`${GITHUB_API_URL}/repos/**`, async route => {
    const json = forbiddenResponse;
    await route.fulfill({ json, status: 403 });
  });

  page.on('console', msg => console.log(msg.text()))

  await page.goto('/')

  await expect(page).toHaveTitle(/Commit Stalker/)

  await page.getByRole('textbox').fill('janedoe/forbidden')
  await page.getByRole('button', { name: 'Search' }).click()

  await expect(page).toHaveURL(/janedoe/);

  await expect(page.getByRole('textbox')).toHaveValue('janedoe/forbidden')
  await expect(page.getByTestId('alert')).toHaveText(/Error: API rate limit exceeded/)
})

test('Show an error message when a repository does not exist', async ({ page }) => {
  await page.route(`${GITHUB_API_URL}/repos/**`, async route => {
    const json = notFoundResponse;
    await route.fulfill({ json, status: 404 });
  });

  page.on('console', msg => console.log(msg.text()))

  await page.goto('/')

  await expect(page).toHaveTitle(/Commit Stalker/)

  await page.getByRole('textbox').fill('janedoe/not-found')
  await page.getByRole('button', { name: 'Search' }).click()

  await expect(page).toHaveURL(/janedoe/);

  await expect(page.getByRole('textbox')).toHaveValue('janedoe/not-found')
  await expect(page.getByTestId('alert')).toHaveText('Error: Not Found')
})

test('Show a message when no results found', async ({ page }) => {
  await page.route(`${GITHUB_API_URL}/repos/**`, async route => {
    await route.fulfill({ json: [] });
  });

  page.on('console', msg => console.log(msg.text()))

  await page.goto('/')

  await expect(page).toHaveTitle(/Commit Stalker/)

  await page.getByRole('textbox').fill('janedoe/zero-commits')
  await page.getByRole('button', { name: 'Search' }).click()

  await expect(page).toHaveURL(/janedoe/);

  await expect(page.getByRole('textbox')).toHaveValue('janedoe/zero-commits')
  await expect(page.getByTestId('info')).toHaveText('No results found.')
})
