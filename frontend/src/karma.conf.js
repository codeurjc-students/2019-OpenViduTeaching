// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine', '@angular-devkit/build-angular'],
		plugins: [
			require('karma-jasmine'),
			require('karma-chrome-launcher'),
			require('karma-jasmine-html-reporter'),
			require('karma-coverage-istanbul-reporter'),
			require('karma-notify-reporter'),
			require('@angular-devkit/build-angular/plugins/karma'),
			"karma-spec-reporter"
		],
		client: {
			clearContext: false // leave Jasmine Spec Runner output visible in browser
		},
		customLaunchers: {
			ChromeHeadless: {
				base: 'Chrome',
				flags: [
					'--headless',
					'--disable-gpu',
					'--disable-translate',
					'--disable-extensions',
					// Without a remote debugging port, Google Chrome exits immediately.
					'--no-sandbox',
					'--remote-debugging-port=9222',
					'--js-flags="--max_old_space_size=4096"'
				]
			}
		},
		// coverageIstanbulReporter: {
		// 	dir: require('path').join(__dirname, '../coverage'),
		// 	reports: ['html', 'lcovonly', 'text-summary'],
		// 	fixWebpackSourcePaths: true,
		// 	verbose: true,
		// 	thresholds: {
		// 		emitWarning: false,
		// 		global: {
		// 			statements: 80,
		// 			branches: 80,
		// 			functions: 80,
		// 			lines: 80
		// 		},
		// 		each: {
		// 			statements: 80,
		// 			branches: 80,
		// 			functions: 80,
		// 			lines: 80
		// 		}
		// 	}
		// },
		reporters: [
			'progress',
			'kjhtml',
			'dots',
			// 'coverage-istanbul', // (https://github.com/mattlewis92/karma-coverage-istanbul-reporter/issues/49, https://github.com/angular/angular-cli/issues/10940)
			'notify',
			'spec'
		],
		specReporter: {
			maxLogLines: 5,         // limit number of lines logged per test
			suppressErrorSummary: true,  // do not print error summary
			suppressFailed: false,  // do not print information about failed tests
			suppressPassed: false,  // do not print information about passed tests
			suppressSkipped: true,  // do not print information about skipped tests
			showSpecTiming: false // print the time elapsed for each spec
		},
		port: 9876,
		colors: true,
		logLevel: config.LOG_DEBUG,
		autoWatch: true,
		browsers: ['ChromeHeadless'],
		singleRun: false
	});
};
