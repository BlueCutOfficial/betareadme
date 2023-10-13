/*
 * This file can be used to generate the content of playwright/.auth/user.json
 * 1. Uncomment the setup function below to connect to GitHub
 * 2. Fill up "Username or email address"
 * 3. Fill up "Password"
 * 4. Fill up XXXXXX with the current MFA code
 * 5. In a terminal, launch the dev server with "pnpm dev"
 * 6. In another terminal, launch "pnpm test:integration"
 * => playwright/.auth/user.json should now be up to date
 * 7. Revert comments again
 * 
 * Note: if you can't do it because MFA invalidate to fast, 
 * you can try something with "await page.pause()" and see if you can 
 * login manually in the test UI by running "pnpm test-ui".
 */

// import { test as setup } from '@playwright/test';

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
