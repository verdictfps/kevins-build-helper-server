const fs = require("fs").promises;
const path = require("path");

async function combineJsonFromFolder(folderPath) {
    try {
        // Read all files in the folder
        const files = await fs.readdir(folderPath);

        // Filter only .json files
        const jsonFiles = files.filter(file => file.endsWith(".json"));

        // Read and parse all JSON files
        const fileContents = await Promise.all(
            jsonFiles.map(file =>
                fs.readFile(path.join(folderPath, file), "utf8")
            )
        );

        const jsonData = fileContents.map(content => JSON.parse(content));

        // Combine into a single array
        const combined = jsonData.flatMap(data =>
            Array.isArray(data) ? data : [data]
        );

        const jsonString = JSON.stringify(combined, null, 2);

        fs.writeFile('C:\\Users\\verdi\\source\\repos\\Kevin\'s Mod Helper\\Kevin\'s Mod Helper\\wwwroot\\Attachments.json', jsonString, (err) => {
            if (err) {
                throw err;
            }
            console.log('JSON data is saved to output.json');
        });

        return combined;

    } catch (error) {
        console.error("Error combining JSON files:", error);
        throw error;
    }
}

combineJsonFromFolder("C:\\Users\\verdi\\source\\repos\\Kevin's Mod Helper\\Kevin's Mod Helper\\wwwroot\\New folder")
    .then(result => {
        console.log(result);
    });