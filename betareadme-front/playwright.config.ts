import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
	projects: [
    {
			/* 
			 * The setup project is used for authentication
			 * See the file tests/auth.setup.ts to see the implementation
			 */
			name: 'setup', 
			testMatch: /.*\.setup\.ts/ 
		},
		{
			/* 
			 * When there's no project, a default chromium project is launched
			 * But once you define one project (like setup), the list of projects prevail
			 * So you need to define explicitly the project that will launch the tests
			 */
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        // Use prepared auth state.
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },
	],
	use: {
		storageState: 'playwright/.auth/user.json',
	},
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	},
	testDir: 'tests',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/
};

export default config;
