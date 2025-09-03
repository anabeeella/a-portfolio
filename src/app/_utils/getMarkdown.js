import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getMarkdownContent(filename) {
  const filePath = path.join(
    process.cwd(),
    'src/app/projects/projects',
    `${filename}.md`
  );
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content } = matter(fileContent);
  return content;
}
