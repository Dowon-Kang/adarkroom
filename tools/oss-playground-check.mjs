/**
 * OSS Playground Hunter: source-level validation only.
 * This does not replace the student's direct in-browser tests or screenshots.
 * Run from the repository root: node tools/oss-playground-check.mjs
 */
import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const room = readFileSync('script/room.js', 'utf8');
const buttons = readFileSync('script/Button.js', 'utf8');

const config = room.match(/^\s*_STOKE_COOLDOWN:\s*(\d+)\s*,/m);
assert.ok(config, 'Room._STOKE_COOLDOWN setting must exist');
assert.equal(Number(config[1]), 5, 'Exercise setting must be five seconds');

for (const id of ['lightButton', 'stokeButton']) {
  const re = new RegExp("id:\\s*'" + id + "'[\\s\\S]{0,220}?cooldown:\\s*Room\\._STOKE_COOLDOWN");
  assert.match(room, re, id + ' should use the shared Room cooldown');
}

assert.match(buttons, /time\s*\*\s*1000/, 'Button.js must convert seconds to milliseconds');
console.log('PASS (static code only): fire button cooldown = 5 seconds, both buttons reference the setting.');
console.log('PENDING: directly verify the UI and record 2 real screenshots before submission.');
