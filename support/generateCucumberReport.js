const fs = require('fs');
const cucumberHtmlReporter = require('cucumber-html-reporter');
const reportName = require('./utils').getDate()

function generateCucumberReport() {
    const jsonFile = './output/report.json';
    const htmlFile = `./output/${reportName}.html`;
    const options = {
        theme: 'bootstrap',
        jsonFile: jsonFile,
        output: htmlFile,
        reportSuiteAsScenarios: true,
        launchReport: false,
        metadata: {
            "App Version": "1.0.0",
            "Test Environment": "STAGING",
            "Browser": "Chrome 97.0.4692.99",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };

    if (fs.existsSync(jsonFile)) {
        cucumberHtmlReporter.generate(options);
    }
}

module.exports = generateCucumberReport();
