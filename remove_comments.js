import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, extname, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Function to process a single file
function processFile(filePath) {
  const ext = extname(filePath).toLowerCase();
  let content = readFileSync(filePath, 'utf8');
  let newContent = content;

  try {
    // Handle different file types
    if (['.js', '.jsx', '.ts', '.tsx', '.jsx', '.mjs'].includes(ext)) {
      // Remove single-line comments (//...)
      newContent = newContent.replace(/\/\*[\s\S]*?\*\/|([^\\:]\/\/).*$/gm, '');
      // Remove multi-line comments (/* ... */)
      newContent = newContent.replace(/\/\*[\s\S]*?\*\//g, '');
    } else if (ext === '.html') {
      // Remove HTML comments (<!-- ... -->)
      newContent = newContent.replace(/<!--[\s\S]*?-->/g, '');
      // Also process inline JavaScript in HTML
      newContent = newContent.replace(/<script\b[^>]*>([\s\S]*?)<\/script>/g, 
        (match, p1) => {
          return match.replace(p1, p1.replace(/\/\*[\s\S]*?\*\/|([^\\:]\/\/).*$/gm, ''));
        });
    } else if (ext === '.css') {
      // Remove CSS comments (/* ... */)
      newContent = newContent.replace(/\/\*[\s\S]*?\*\//g, '');
    }

    // Only write if content changed
    if (newContent !== content) {
      writeFileSync(filePath, newContent, 'utf8');
      console.log(`Processed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
  return false;
}

// Function to walk through directories
function processDirectory(directory) {
  const files = readdirSync(directory);
  let changedFiles = 0;

  for (const file of files) {
    const fullPath = join(directory, file);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      // Skip node_modules and .git directories
      if (file === 'node_modules' || file === '.git' || file === '.next' || file === 'dist') {
        return;
      }
      changedFiles += processDirectory(fullPath);
    } else {
      const ext = extname(file).toLowerCase();
      // Process only relevant file types
      if (['.js', '.jsx', '.ts', '.tsx', '.html', '.css'].includes(ext)) {
        if (processFile(fullPath)) {
          changedFiles++;
        }
      }
    }
  }

  return changedFiles;
}

// Start processing from the project root
const projectRoot = __dirname;
console.log('Starting to remove comments from all code files...');

try {
  const changedCount = processDirectory(projectRoot);
  console.log(`\n✅ Done! Processed ${changedCount} files.`);
  
  // Stage and commit the changes
  console.log('\nStaging and committing changes...');
  const { execSync } = await import('child_process');
  execSync('git add .', { stdio: 'inherit' });
  execSync('git commit -m "chore: remove all comments from code files"', { stdio: 'inherit' });
  console.log('\n✅ Changes committed successfully!');
  
  // Push to GitHub
  console.log('\nPushing changes to GitHub...');
  execSync('git push', { stdio: 'inherit' });
  console.log('\n✅ Changes pushed to GitHub successfully!');
} catch (error) {
  console.error('\n❌ Error:', error.message);
  process.exit(1);
}
