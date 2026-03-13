const fs = require("fs");

const INPUT_FILE = "./Attachments.json";
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

function buildDescription(oil) {
    const lines = [];
//console.log(oil.oil[SpreadMult]);
    // Flat stats
    if (oil.Bounces)
        lines.push(`Bullet Bounces: ${num(oil.Bounces)}`);

    if (oil.Penetrations)
        lines.push(`Penetrations: ${num(oil.Penetrations)}`);

    if (oil.DamageAdd)
        lines.push(`Damage: ${num(oil.DamageAdd)}`);

    if (oil.BulletDrop)
        lines.push(`Bullet Drop: ${num(oil.BulletDrop)}`);

    if (oil.BulletBounciness)
        lines.push(`Bullet Bounciness: ${num(oil.BulletBounciness)}`);

    // Percent stats
    const percentStats = [
        ["DamageMult", "Damage"],
        ["ReloadSpeed", "Reload Speed"],
        ["RPM", "Attack Speed"],
        ["RecoilMult", "Recoil"],
        ["MovementSpeedMult", "Movement Speed"],
        ["DurabilityMult", "Max Durability"],
        ["BulletSpeed", "Bullet Speed"],
        ["JumpPower", "Jump Power"],
        ["LootDropChance", "Loot Chance"],
        ["AmmoConsumeChance", "Ammo Consume Chance"],
        ["ExtraAmmoUseChance", "Extra Ammo Use Chance"],
        ["BaseCritChance", "Crit Chance"],
        ["ADSCritChance", "ADS Crit Chance"],
        ["SpreadMult", "Spread"],
        ["MovingAccuracy", "Move Accuracy"],
        ["ProjectileMult", "Projectiles"]
    ];

    for (const [key, label] of percentStats) {
        const v = oil[key];
        if (v)
            lines.push(`${label}: ${pct(v)}`);
    }

    // Spread 

    if (oil.SpreadAdd)
        lines.push(`Spread: ${num(oil.SpreadAdd)}`);

    // bullshit oddities
    if (oil.MoneyDrops === "No")
        lines.push("No Money Drops");

    if (oil.OrganDrops === "No")
        lines.push("No Organ Drops");

    if (oil.CanADS === "No")
        lines.push("Disables Aiming");

    if (oil.DurabilityUsage === 0)
        lines.push("Does not increase durability usage");

    if (oil.Firemode === "Single")
        lines.push("Firemode: Single");

    if (oil.Firemode === "Auto")
        lines.push("Firemode: Auto");

    if (oil.Name === "None")
        lines.push("None selected");
    return lines.join("\\n");
}


// UPDATE ALL OILS
for (const oilName in oils.Attachment.Barrel) {
    console.log(oils.Attachment.Barrel[oilName]);
    oils.Attachment.Barrel[oilName].StatDescription =
    buildDescription(oils.Attachment.Barrel[oilName]);
}
for (const oilName in oils.Attachment.Chamber) {
    console.log(oils.Attachment.Chamber[oilName]);
    oils.Attachment.Chamber[oilName].StatDescription =
    buildDescription(oils.Attachment.Chamber[oilName]);
}
for (const oilName in oils.Attachment.Laser) {
    console.log(oils.Attachment.Laser[oilName]);
    oils.Attachment.Laser[oilName].StatDescription =
    buildDescription(oils.Attachment.Laser[oilName]);
}
for (const oilName in oils.Attachment.Firemode) {
    console.log(oils.Attachment.Firemode[oilName]);
    oils.Attachment.Firemode[oilName].StatDescription =
    buildDescription(oils.Attachment.Firemode[oilName]);
}
for (const oilName in oils.Attachment.Optic) {
    console.log(oils.Attachment.Optic[oilName]);
    oils.Attachment.Optic[oilName].StatDescription =
    buildDescription(oils.Attachment.Optic[oilName]);
}

// SAVE
fs.writeFileSync(
    OUTPUT_FILE,
    JSON.stringify(oils, null, 2),
    "utf8"
);

console.log("StatDescriptions rebuilt successfully.");