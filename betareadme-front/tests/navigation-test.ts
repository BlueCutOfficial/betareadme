import { expect, test } from '@playwright/test';

test('home page has expected h1', async ({ page }) => {
	/*
	 * The authentication works with Github. On my Github account,
	 * I have betareadme.com:5173 in the list of authorized OAuth app.
	 * To get the tests passing, I need to be authenticated, so:
	 * 1. In a terminal, launch the dev server with "pnpm dev"
	 * 2. Visit http://betareadme.com:5173/ and Sign in with Github
	 * 3. In another terminal (dev server still running), run the test suite
	 * => if you kill the dev server, all tests requiring the authentication fails
	 * => if you don't have a valid playwright/.auth/user.json, the authentication fails
	 */
	await page.goto('http://betareadme.com:5173/');
	await expect(page.getByText('Betareadme')).toBeVisible();
	await expect(page.getByRole('heading', { name: 'Betareadme' })).toBeVisible();

	await page.getByText('Profile').click();
	await expect(page.getByRole('heading', { name: 'Your profile' })).toBeVisible();
});
