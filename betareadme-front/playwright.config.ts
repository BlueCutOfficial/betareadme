import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
	projects: [
    {
			/* 
			 * This kind of setup project can be use to setup things for all tests,
			 * like authentication related things. The regex will looks for files in
			 * tests/*.setup.ts and the setup functions will run.
			 */
			name: 'setup', 
			testMatch: /.*\.setup\.ts/ 
		},
		{
			/* 
			 * When there's no project, a default chromium project runs the test suite.
			 * But once you define one project (like setup), the list of projects prevail
			 * So you need to define explicitly the project that will launch the tests
			 */
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        /*
				 * Tests relies on a valid session storage written down in this file.
				 * It uses real credentials so it's in the gitignore.
				 */
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },
	],
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	},
	testDir: 'tests',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/
};

export default config;
