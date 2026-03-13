
let removeField = "IsRailgun";

function oilField() {
    console.log("-------------------Starting Oils-------------------");
    const fs = require("fs");

    const inputFile = "./Oils.json";
    const outputFile = "./Oils.json";

    const data = JSON.parse(fs.readFileSync(inputFile, "utf8"));

    for (const key in data.Oil) {
        const oil = data.Oil[key];

        addField(oil);
    }

    fs.writeFileSync(outputFile, JSON.stringify(data, null, 2));

    console.log("Field removed from all oils in Oils.json.");
}
function scrollField() {
    console.log("-------------------Starting Scrolls-------------------");
    const fs = require("fs");

    const inputFile = "./Scrolls.json";
    const outputFile = "./Scrolls.json";

    const data = JSON.parse(fs.readFileSync(inputFile, "utf8"));

    for (const key in data.Scroll) {
        const scro = data.Scroll[key];

        addField(scro);
    }

    fs.writeFileSync(outputFile, JSON.stringify(data, null, 2));

    console.log("Field removed from all scrolls in Scrolls.json.");
}
function attField() {
    console.log("-------------------Starting All Attachment file-------------------");
    const fs = require("fs");

    const inputFile = "./Attachments.json";
    const outputFile = "./Attachments.json";

    const data = JSON.parse(fs.readFileSync(inputFile, "utf8"));

    for (const key in data.Attachment) {
        const att = data.Attachment[key];

        for (const obj in att) {

            const attach = att[obj];

            addField(attach);
        }
    }

    fs.writeFileSync(outputFile, JSON.stringify(data, null, 2));

    console.log("Field removed from all attachments in Attachments.json.");
}
function barField() {
    console.log("-------------------Starting Barrels-------------------");
    const fs = require("fs");

    const inputFile = "./Barrels.json";
    const outputFile = "./Barrels.json";

    const data = JSON.parse(fs.readFileSync(inputFile, "utf8"));

    for (const key in data.Barrel) {
        const bar = data.Barrel[key];

            addField(bar);
    }

    fs.writeFileSync(outputFile, JSON.stringify(data, null, 2));

    console.log("Field removed from all barrels in Barrels.json.");
}
function optField() {
    const fs = require("fs");

    const inputFile = "./Optics.json";
    const outputFile = "./Optics.json";

    const data = JSON.parse(fs.readFileSync(inputFile, "utf8"));

    for (const key in data.Optic) {
        const opt = data.Optic[key];

            addField(opt);
    }

    fs.writeFileSync(outputFile, JSON.stringify(data, null, 2));

    console.log("Field removed from all optics in Optics.json.");
}
function chamField() {
    console.log("-------------------Starting Chambers-------------------");
    const fs = require("fs");

    const inputFile = "./Chamber.json";
    const outputFile = "./Chamber.json";

    const data = JSON.parse(fs.readFileSync(inputFile, "utf8"));

    for (const key in data.Chamber) {
        const cham = data.Chamber[key];

            addField(cham);
    }

    fs.writeFileSync(outputFile, JSON.stringify(data, null, 2));

    console.log("Field removed from all chambers in Chambers.json.");
}
function lasField() {
    console.log("-------------------Starting Lasers-------------------");
    const fs = require("fs");

    const inputFile = "./Lasers.json";
    const outputFile = "./Lasers.json";

    const data = JSON.parse(fs.readFileSync(inputFile, "utf8"));

    for (const key in data.Laser) {
        const las = data.Laser[key];

            addField(las);
    }

    fs.writeFileSync(outputFile, JSON.stringify(data, null, 2));

    console.log("Field removed from all lasers in Lasers.json.");
}
function fireField() {
    console.log("-------------------Starting Firemodes-------------------");
    const fs = require("fs");

    const inputFile = "./Firemodes.json";
    const outputFile = "./Firemodes.json";

    const data = JSON.parse(fs.readFileSync(inputFile, "utf8"));

    for (const key in data.Firemode) {
        const fire = data.Firemode[key];

            addField(fire);
    }

    fs.writeFileSync(outputFile, JSON.stringify(data, null, 2));

    console.log("Field removed from all firemodes in Firemodes.json.");
}
function addField(item) {

    if (removeField in item) {
        delete item[removeField];
        console.log(`Field removed from ${item.Name}`)
    }
    else {
        console.log(`${item.Name} skipped.`)
    }

}

oilField()
scrollField() 
attField()
barField()
optField()
chamField()
lasField()
fireField()