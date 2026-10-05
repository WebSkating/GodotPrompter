import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');
const REFS = join(ROOT, 'skills', 'godot-mentor', 'references');
const NAV = join(REFS, 'editor-navigation.md');
const read = (p) => readFileSync(p, 'utf8').replace(/\r\n/g, '\n');

test('editor-navigation.md has every required section', () => {
  assert.ok(existsSync(NAV), 'editor-navigation.md is missing');
  const text = read(NAV);
  for (const h of ['Main screens', 'Docks', 'Bottom panels', 'Project Settings tabs',
                   'Top menus', 'Version notes']) {
    assert.match(text, new RegExp(`^## ${h}$`, 'm'), `missing section "${h}"`);
  }
  assert.match(text, /\]\(\.\.\/SKILL\.md\)/, 'no back-link to SKILL.md');
});

// Editor references are click-paths, not code. A fenced gdscript block here would pull the
// file into C# parity checking and signals that code drifted into the wrong file.
test('editor-navigation.md contains no code fences', () => {
  assert.doesNotMatch(read(NAV), /^```/m);
});
