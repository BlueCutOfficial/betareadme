/*
 * This file can be used to generate the content of playwright/.auth/user.json
 * 1. Revert the comments of the setup functions below to run the one that connect to GitHub
 * 2. Fill up "Username or email address"
 * 3. Fill up "Password"
 * 4. Fill up XXXXXX with the current MFA code
 * 5. In a terminal, launch the dev server with "pnpm dev"
 * 6. In another terminal, launch "pnpm test:integration"
 * => playwright/.auth/user.json should now be up to date
 * 7. Revert comments again
 */

import { test as setup } from '@playwright/test';

// --- Reuse current storage state ---

setup('authenticate', async ({ page }) => {
  await page.goto('http://localhost:5173/');
	await page.getByTestId('link-sign-in').click();
	// For some reason the first request to Github fails so we need to click twice
  await page.getByRole('button', { name: 'Sign in with GitHub' }).click();
	await page.getByRole('button', { name: 'Sign in with GitHub' }).click();
});

// --- Create a new storage state ---

// const authFile = 'playwright/.auth/user.json';
// setup('authenticate', async ({ page }) => {
//   await page.goto('http://localhost:5173/');
//   await page.getByTestId('link-sign-in').click();
//   await page.getByRole('button', { name: 'Sign in with GitHub' }).click();
//   await page.getByLabel('Username or email address').click();
//   await page.getByLabel('Username or email address').fill('BlueCutOfficial');
//   await page.getByLabel('Username or email address').press('Tab');
//   await page.getByLabel('Password').fill('***');
//   await page.getByLabel('Password').press('Enter');
//   await page.getByPlaceholder('XXXXXX').click();
//   await page.getByPlaceholder('XXXXXX').fill('***');
//   await page.getByRole('button', { name: 'Sign in with GitHub' }).click();

//   await page.context().storageState({ path: authFile });
// });
