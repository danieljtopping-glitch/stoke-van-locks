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

    // Generic replacements for 'amber'/'brown' elements to map strictly to reds or semantic colors
    content = content.replace(/bg-amber-100/g, 'bg-zinc-900');
    content = content.replace(/text-amber-600/g, 'text-red-500');
    content = content.replace(/text-amber-500/g, 'text-red-500');
    content = content.replace(/text-amber-400/g, 'text-red-500');
    content = content.replace(/text-amber-200/g, 'text-red-200');
    content = content.replace(/text-amber-100/g, 'text-red-100');
    content = content.replace(/bg-amber-500\/30/g, 'bg-red-500/30');
    content = content.replace(/bg-amber-500/g, 'bg-red-600');
    content = content.replace(/bg-amber-400/g, 'bg-red-500');
    content = content.replace(/hover:bg-amber-400/g, 'hover:bg-red-500');
    content = content.replace(/hover:bg-amber-500/g, 'hover:bg-red-600');
    content = content.replace(/border-amber-300\/30/g, 'border-red-500/20');
    content = content.replace(/border-amber-300\/40/g, 'border-red-500/40');
    content = content.replace(/border-amber-400\/50/g, 'border-red-500/60');
    content = content.replace(/hover:border-amber-300/g, 'hover:border-red-500');
    content = content.replace(/hover:border-amber-400/g, 'hover:border-red-500');
    content = content.replace(/hover:border-amber-500/g, 'hover:border-red-500');
    content = content.replace(/border-amber-500/g, 'border-red-500');
    content = content.replace(/hover:text-amber-300/g, 'hover:text-red-400');
    content = content.replace(/hover:text-amber-400/g, 'hover:text-red-400');
    content = content.replace(/hover:text-amber-500/g, 'hover:text-red-500');
    content = content.replace(/hover:text-amber-600/g, 'hover:text-red-500');
    content = content.replace(/focus:ring-amber-500/g, 'focus:ring-red-500');
    content = content.replace(/focus:ring-amber-300/g, 'focus:ring-red-400');
    content = content.replace(/focus:border-amber-500/g, 'focus:border-red-500');
    content = content.replace(/bg-amber-950\/30/g, 'bg-zinc-900');
    content = content.replace(/border-amber-900\/50/g, 'border-zinc-800');

    // For specific emails we want blue
    if (filePath.includes('ContactForm.astro') || filePath.includes('Footer.astro')) {
        // Specifically fix the email icon
        content = content.replace(/<svg(.*?)text-red-500(.*?)viewBox="0 0 24 24"(.*?)d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/g, '<svg$1text-blue-400$2viewBox="0 0 24 24"$3d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"');
    }

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Updated components in ${path.relative(process.cwd(), filePath)}`);
    }
}

console.log('Starting color replacement...');
traverseDir(srcDir);
console.log('Complete!');
