import { expect, test } from '@playwright/test';

test('home page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByText('Betareadme')).toBeVisible();
	await expect(page.getByRole('heading', { name: 'Betareadme' })).toBeVisible();

	await page.getByText('Profile').click();
	await expect(page.getByRole('heading', { name: 'Your profile' })).toBeVisible();
});
