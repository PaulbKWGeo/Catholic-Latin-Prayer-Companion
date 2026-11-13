// Node.js built-in test runner. Static checks only: NOT a substitute for visual or device testing.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const html = fs.readFileSync('index.html', 'utf8');
const reader = fs.readFileSync('reader-preview.html', 'utf8');
test('twelve prayer records are present in the app', () => {
  const block = html.split('const prayers=[')[1]?.split('];')[0];
  assert.ok(block, 'Prayer data must exist');
  const ids = [...block.matchAll(/(?:\bid:|"id":)"([^"]+)"/g)].map(x => x[1]);
  assert.equal(ids.length, 12);
  assert.equal(new Set(ids).size, 12);
});
test('bookmarks and learned state use persistent storage', () => {
  assert.match(html, /localStorage\.getItem/);
  assert.match(html, /localStorage\.setItem/);
  assert.match(html, /saved\.favorites/);
  assert.match(html, /saved\.learned/);
});
test('practice navigation and pronunciation data exist', () => {
  assert.match(html, /function practice\(\)/);
  assert.match(html, /function library\(\)/);
  assert.match(html, /phonNote|phon\.map/);
});
test('reader reference remains separate from live entrypoint', () => {
  assert.match(reader, /Pater Noster/);
  assert.match(reader, /reader|verse/);
});
