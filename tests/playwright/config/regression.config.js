// regression.config.js
// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	timeout: 900000,
	globalTimeout: 900000,
	reporter: 'list',
	testDir: '../regression/',
	globalSetup: require.resolve( './global-setup' ),
	retries: 1,
	use: {
		headless: true,
		storageState: './tests/playwright/config/storageState.json',
		baseURL: 'http://playwright.local/',
		viewport: { width: 1920, height: 1080 },
		video: 'on',
		trace: 'on-first-retry',
		user: {
			username:  'admin',
			password:  'password',
		},
		baseURLPrefixProxy: process.env.BASE_URL_PROXY_PREFIX || false,
	},
	workers: 1,
};

module.exports = config;
