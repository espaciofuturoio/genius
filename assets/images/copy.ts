// Import the required modules
import fs from 'node:fs';
import path from 'node:path';

// Define the source and target file paths
const sourceFile = path.join(__dirname, 'icon.png');
const targetFiles = [
    'adaptive-icon.png',
    'favicon.png',
    'splash.png'
];

// Function to copy the file
const copyFile = (source: string, target: string) => {
    fs.copyFile(source, target, (err) => {
        if (err) {
            console.error(`Error copying file to ${target}:`, err);
        } else {
            console.log(`File copied to ${target}`);
        }
    });
};

// Copy the file to each target
for (const fileName of targetFiles) {
    const targetPath = path.join(__dirname, fileName);
    copyFile(sourceFile, targetPath);
}