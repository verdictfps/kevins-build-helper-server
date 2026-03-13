const fs = require("fs");

const INPUT_FILE = "./Oils.json";
const OUTPUT_FILE = "./Oils_UPDATED.json";

const oils = JSON.parse(fs.readFileSync(INPUT_FILE, "utf8"));

function pct(v) {
    const val = Math.round(v * 100);
    const sign = val > 0 ? "+" : "";
    return `${sign}${val}%`;
}

function num(v) {
    const sign = v > 0 ? "+" : "";
    return `${sign}${v}`;
}

function wrap(value, type) {

    if (type === "positive")
        return `<span style='color:green'>${value}</span>`;

    if (type === "negative")
        return `<span style='color:red'>${value}</span>`;

    if (type === "neutral")
        return `<span style='color:yellow'>${value}</span>`;

    if (type === "durability")
        return `<span style='color:purple'>${value}</span>`;

    return value;
}

function buildDescription(oil) {

    const positive = [];
    const neutral = [];
    const negative = [];
    let durabilityLine = null;

    function add(label, value, type) {

        const line = `${label}: ${wrap(value, type)}`;

        if (type === "positive")
            positive.push(line);
        else if (type === "neutral")
            neutral.push(line);
        else if (type === "negative")
            negative.push(line);
    }

const percentStats = [
    ["DamageMult", "Damage"],
    ["ReloadSpeed", "Reload Speed"],
    ["RPM", "RPM"],
    ["RecoilMult", "Recoil"],
    ["MovementSpeedMult", "Movement Speed"],
    ["DurabilityMult", "Max Durability"],
    ["BulletSpeed", "Bullet Speed"],
    ["JumpPower", "Jump Power"],
    ["LootDropChance", "Loot Chance"],
    ["AmmoConsumeChance", "Ammo Consume Chance"],
    ["ExtraAmmoUseChance", "Extra Ammo Use Chance"],
    ["BaseCritChance", "Crit Chance"],
    ["SpreadMult", "Spread"],
    ["MovingAccuracy", "Move Accuracy"],
    ["ProjectileMult", "Projectiles"],
    ["Drag", "Drag"]
];

    for (const [key, label] of percentStats) {

        const v = oil[key];
        if (!v) continue;

        let type = "neutral";

        switch (key) {

            case "AmmoConsumeChance":
            case "BaseCritChance":
            case "ProjectileMult":
                type = "positive";
                break;

            case "JumpPower":
            case "LootDropChance":
            case "MovementSpeedMult":
            case "ExtraAmmoUseChance":
                type = "negative";
                break;

            case "RecoilMult":
            case "SpreadMult":
                type = v > 0 ? "negative" : "positive";
                break;

            case "ReloadSpeed":
            case "RPM":
            case "DamageMult":
            case "DurabilityMult":
            case "BulletSpeed":
                type = v > 0 ? "positive" : "negative";
                break;

            case "MovingAccuracy":
                type = v > 0 ? "positive" : "negative";
                break;

            case "Drag":
                type = "negative";
            break;
        }

        add(label, pct(v), type);
    }

    // Spread Add

    if (oil.SpreadAdd){
        add(
            "Spread",
            num(oil.SpreadAdd),
            oil.SpreadAdd > 0 ? "negative" : "positive"
        );
    }
    if (oil.DamageAdd) {
        add(
            "Damage",
            num(oil.DamageAdd),
            oil.DamageAdd > 0 ? "positive" : "negative"
    );
}
    if (oil.RecoilAdd){
        add(
            "Recoil",
            num(oil.RecoilAdd),
            oil.RecoilAdd > 0 ? "negative" : "positive"
    );
}
    if (oil.Penetrations){
        add(
            "Pentrations",
            num(oil.Penetrations),
            "positive"
        );
    }
    if (oil.Bounces){
        add(
            "Bullet Bounces",
            num(oil.Bounces),
            "positive"
        );
    }
    if (oil.BulletDrop){
        add(
            "Bullet Drop",
            num(oil.BulletDrop),
            "negative"
        );
    }
    if (oil.Bounciness) {
        add(
            "Bounciness",
            num(oil.Bounciness),
            "positive"
        );
    }

    // Special flags

    if (oil.MoneyDrops === "No")
        neutral.push(wrap("No Money Drops", "neutral"));

    if (oil.OrganDrops === "No")
        neutral.push(wrap("No Organ Drops", "neutral"));

    if (oil.CanADS === "No")
        neutral.push(wrap("Disables Aiming", "neutral"));

    if (oil.Firemode === "Single")
        neutral.push(`Firemode: ${wrap("Single", "neutral")}`);

    if (oil.Firemode === "Auto")
        neutral.push(`Firemode: ${wrap("Auto", "neutral")}`);

    // DurabilityUsage (ALWAYS LAST)

    if (oil.DurabilityUsage === 0)
        durabilityLine = wrap("Does not increase durability usage", "durability");

    return [
        ...positive,
        ...neutral,
        ...negative,
        durabilityLine
    ]
        .filter(Boolean)
        .join("\n");
}


// UPDATE ALL OILS
for (const oilName in oils.Oil) {
    console.log(oils.Oil[oilName]);
    oils.Oil[oilName].StatDescription =
    buildDescription(oils.Oil[oilName]);
}

// SAVE
fs.writeFileSync(
    OUTPUT_FILE,
    JSON.stringify(oils, null, 2),
    "utf8"
);

console.log("StatDescriptions rebuilt successfully.");