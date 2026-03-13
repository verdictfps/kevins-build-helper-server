const fs = require("fs");
const path = require("path");

const inputPath = path.join(__dirname, "Optics.json");
const outputPath = path.join(__dirname, "Oils_NumbersFixed.json");

// Recursively convert numeric strings to numbers
function convertNumbers(obj) {
    if (Array.isArray(obj)) {
        return obj.map(convertNumbers);
    }

    if (obj !== null && typeof obj === "object") {
        const newObj = {};
        for (const key in obj) {
            newObj[key] = convertNumbers(obj[key]);
        }
        return newObj;
    }

    // Convert string numbers to actual numbers
    if (typeof obj === "string") {
        const trimmed = obj.trim();

        // Matches integers or decimals (positive or negative)
        if (/^-?\d+(\.\d+)?$/.test(trimmed)) {
            return Number(trimmed);
        }
    }

    return obj;
}

try {
    const rawData = fs.readFileSync(inputPath, "utf8");
    const jsonData = JSON.parse(rawData);

    const converted = convertNumbers(jsonData);

    fs.writeFileSync(
        outputPath,
        JSON.stringify(converted, null, 2),
        "utf8"
    );

    console.log("✅ All numeric strings converted to numbers.");
    console.log("Output file:", outputPath);

} catch (err) {
    console.error("❌ Error:", err.message);
}