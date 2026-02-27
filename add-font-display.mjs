import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcDir = path.join(__dirname, 'src');

function traverseDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverseDir(fullPath);
        } else if (fullPath.endsWith('.astro') || fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
            replaceContent(fullPath);
        }
    }
}

function replaceContent(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let originalContent = content;

    // Find all h1, h2, h3 tags that have a class attribute and inject 'font-display' if not present
    const regex = /<(h[1-3])([^>]*)class="([^"]*)"/g;
    content = content.replace(regex, (match, tag, rest, classes) => {
        if (!classes.includes('font-display')) {
            return `<${tag}${rest}class="font-display ${classes}"`;
        }
        return match;
    });

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Updated headings in ${path.relative(process.cwd(), filePath)}`);
    }
}

console.log('Injecting display font class to headings...');
traverseDir(srcDir);
console.log('Complete!');
