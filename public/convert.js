const fs = require("fs");

const input = JSON.parse(fs.readFileSync("Attachments1.json", "utf8"));

const transformed = {
    Oil: {}
};

for (const oil of input) {
    transformed.Oil[oil.Name] = oil;
}

fs.writeFileSync(
    "Attachments.json",
    JSON.stringify(transformed, null, 2)
);

console.log("Lookup-optimized conversion complete.");