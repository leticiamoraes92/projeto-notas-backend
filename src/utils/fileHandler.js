const fs = require('fs');

exports.readFile = (file) => {
  try {
    const data = fs.readFileSync(file);
    return JSON.parse(data);
  } catch {
    return [];
  }
};

exports.writeFile = (file, data) => {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
};