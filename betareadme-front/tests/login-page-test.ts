import { expect, test } from '@playwright/test';

// Reset storage state for this file to avoid being authenticated
test.use({ storageState: { cookies: [], origins: [] } });

test('it lands on login page', async ({ page }) => {
	await page.goto('/');
	await page.getByTestId('link-sign-in').click();
	await expect(page.getByText('Sign in with GitHub')).toBeVisible();
	await expect(page.getByText('Sign in with Google')).toBeVisible();
});
