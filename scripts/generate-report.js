import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

// Get current date and time for the folder name
const now = new Date();
const date = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');
const time = String(now.getHours()).padStart(2, '0') + '-' + String(now.getMinutes()).padStart(2, '0') + '-' + String(now.getSeconds()).padStart(2, '0');
const timestamp = `${date}_${time}`;

const reportBaseDir = path.join(rootDir, 'report');

try {
    // Generate Single File Allure report
    // We generate it into a temp folder first because allure always creates 'index.html' in the output dir
    const tempDir = path.join(rootDir, `temp_allure_${timestamp}`);

    // Ensure "report" folder exists
    if (!fs.existsSync(reportBaseDir)) {
        fs.mkdirSync(reportBaseDir);
    }

    console.log('Generating single-file report...');
    // Add --single-file flag
    execSync(`npx allure generate allure-results --clean --single-file -o "${tempDir}"`, { stdio: 'inherit', cwd: rootDir });

    // The file is created as index.html in the temp dir. We want to move and rename it.
    const generatedFile = path.join(tempDir, 'index.html');
    const finalReportFile = path.join(reportBaseDir, `Report_${timestamp}.html`);

    if (fs.existsSync(generatedFile)) {
        fs.renameSync(generatedFile, finalReportFile);
        console.log(`Report generated successfully at: ${finalReportFile}`);

        // Clean up temp dir
        fs.rmSync(tempDir, { recursive: true, force: true });

        // Open the newly generated single HTML file
        // 'open' command works on macOS to open the default application for the file type
        console.log('Opening report...');
        execSync(`open "${finalReportFile}"`, { stdio: 'inherit', cwd: rootDir });
    } else {
        console.error('Error: Allure did not generate an index.html file.');
        process.exit(1);
    }

} catch (error) {
    console.error('Failed to generate or open report:', error);
    process.exit(1);
}
