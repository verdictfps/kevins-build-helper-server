const fs = require("fs");

const FILE = "./Oils.json";
const oils = JSON.parse(fs.readFileSync(FILE, "utf8"));

function set(name, values) {
    if (!oils.Oil[name]) {
        console.warn("Missing oil:", name);
        return;
    }
    Object.assign(oils.Oil[name], values);
}

/*
=====================================================
BALANCE PATCH (DECIMAL % FORMAT)
=====================================================
*/

// ---------- DURABILITY ----------
set("Trusty Old Oil", { DurabilityMult: 0.25 });
set("Rubber Oil", { DurabilityMult: 0.30 });
set("Gentle Oil", { DurabilityMult: 0.25 });

set("Dense Oil", {
    DurabilityMult: 0.30,
    JumpPower: -0.20
});

set("Hefty Oil", {
    DurabilityMult: 0.45,
    MovementSpeedMult: -0.20
});

set("Soft Bullet Oil", { DurabilityMult: 0.30 });
set("Sensible Oil", { DurabilityMult: 0.25 });
set("High Grade Oil", { DurabilityMult: 0.20 });

// ---------- BOUNCES ----------
[
 ["Wobble Oil",2],
 ["Skip Oil",2],
 ["Scramble Oil",2],
 ["Sherlock Oil",5],
 ["Arkanoid Oil",10],
 ["Rebound Oil",3],
 ["Bandit Oil",2],
 ["Pool Oil",5],
 ["Cartoon Oil",6],
 ["Flea Oil",4],
 ["Imperfect Oil",3],
].forEach(([n,v])=>set(n,{Bounces:v}));

set("Synchronicity Oil",{
    Bounces:4,
    ExtraAmmoUseChance:0.25
});

set("Lazy Oil",{
    Bounces:2,
    ReloadSpeed:-0.15
});

// ---------- BULLET SPEED ----------
set("Instant Oil",{ BulletSpeed:1.50 });
set("Fast Bet Oil",{ BulletSpeed:0.35 });
set("Turbulence Oil",{ BulletSpeed:0.40 });

set("Bolt Oil",{
    BulletSpeed:0.60,
    DamageAdd:-15
});

set("Kinetic Oil",{ BulletSpeed:1.00 });

// ---------- DAMAGE ----------
set("Arrow Oil",{ DamageMult:-0.15 });
set("Gambler Oil",{ DamageMult:-0.10 });
set("Rapid Internals Oil",{ DamageMult:-0.15 });
set("Tactical Oil",{ DamageMult:-0.10 });

set("Great Oil",{
    DamageMult:0.60,
    BulletDrop:35
});

set("Seated Oil",{
    DamageAdd:30,
    JumpPower:-0.15
});

set("Launcher Oil",{
    DamageMult:0.25,
    RPM:-0.20
});

set("Glass Cannon Oil",{
    DamageMult:0.50,
    DurabilityMult:-0.25
});

set("Hip Blaster Oil",{ DamageMult:0.25 });
set("Franciscan Oil",{ DamageMult:0.20 });
set("Terminator Oil",{ DamageMult:0.30 });
set("Damage Oil",{ DamageMult:0.20 });

set("Grounded Oil",{
    DamageMult:0.25,
    JumpPower:-0.15
});

set("Dum Dum Oil",{ DamageMult:0.20 });

set("Big Oil",{ DamageAdd:35 });

// ---------- JUMP ----------
set("Dart Oil",{ JumpPower:-0.20 });
set("Tech Support Oil",{ JumpPower:-0.30 });

// ---------- CRIT ----------
set("Blindfold Oil",{ BaseCritChance:0.20 });

// ---------- ATTACK SPEED (RPM) ----------
set("Machine Oil",{ RPM:0.60, MovementSpeedMult:-0.30 });
set("Shower Oil",{ RPM:0.60 });
set("Rapid Internals Oil",{ RPM:0.50 });
set("BB Oil",{ RPM:0.30 });
set("Perforate Oil",{ RPM:0.25 });
set("Waster Oil",{ RPM:0.25 });
set("Attack Speed Oil",{ RPM:0.20 });
set("Blurt Oil",{ RPM:0.40 });
set("Ready Oil",{ RPM:-0.30 });

// ---------- RECOIL ----------
set("Vegetable Oil",{ RecoilMult:-0.30 });

set("Safety Oil",{
    RecoilMult:-0.45,
    DamageMult:-0.08
});

set("Stability Oil",{
    RecoilMult:-0.45,
    DamageAdd:-10
});

set("Peashooter Oil",{ RecoilMult:-0.25 });
set("Modern Technology Oil",{ RecoilMult:-0.35 });
set("Less Recoil Oil",{ RecoilMult:-0.20 });

set("Braced Oil",{
    RecoilMult:-0.30,
    JumpPower:-0.20
});

// ---------- DURABILITY NEG ----------
set("Tight Barrel Oil",{ DurabilityMult:-0.10 });
set("Out of the Box Oil",{ DurabilityMult:-0.15 });
set("Fragile System Oil",{ DurabilityMult:-0.15 });
set("Contained Force Oil",{ DurabilityMult:-0.10 });
set("Shaved Clip Oil",{ DurabilityMult:-0.15 });

// ---------- RELOAD ----------
set("Extra Powder Oil",{ ReloadSpeed:-0.15 });

set("Airsoft Oil",{ ReloadSpeed:0.60 });

set("Double Lock Oil",{
    ReloadSpeed:0.45,
    RPM:-0.20
});

set("Dynamic Oil",{
    DamageAdd:-15,
    ReloadSpeed:0.50
});

set("Main Focus Oil",{ ReloadSpeed:0.30 });
set("Speed Trade Oil",{ ReloadSpeed:0.40 });
set("Cycle Oil",{ ReloadSpeed:0.45 });

set("Main Discipline Oil",{
    ReloadSpeed:0.40,
    LootDropChance:-0.30
});

set("Fidget Lord Oil",{
    ReloadSpeed:0.80,
    MovementSpeedMult:-0.40
});

set("Nerf Oil",{ ReloadSpeed:0.60 });

// ---------- SPREAD ----------
const spread = {
 "Stoic Oil":-0.5,
 "Hip Marksman Oil":-0.7,
 "Lost In Focus Oil":-2,
 "Slick Oil":-0.5,
 "Shellman Oil":-0.5,
 "Vegan Oil":-0.4,
 "Thorough Oil":-0.6,
 "Careful Oil":-0.5,
 "Bowl Oil":-0.75,
 "Spread Oil":-0.75,
 "Two Time Oil":4.4,
 "Twice Oil":0.7,
 "Tandem Oil":0.7,
 "Suppressive Oil":2.1,
 "Shredder Oil":1.7,
 "Scatter Oil":1.7,
 "Parallel Mag Oil":0.7,
 "Gemini Oil":0.7,
 "Double Nothing Oil":0.7,
 "Division Oil":1.7,
 "Bombard Oil":1.4,
};

for (const k in spread)
    set(k,{ SpreadMult:spread[k] });

set("Multichamber Oil",{ SpreadMult:1.00 });
set("Boomstick Oil",{ SpreadMult:1.50 });
set("Multishot Oil",{ SpreadMult:0.40 });

set("Exotic Barrel Oil",{
    SpreadAdd:-2,
    DurabilityMult:-0.25
});

set("Artillery Oil",{
    SpreadAdd:-2,
    BulletDrop:15
});

// ---------- AMMO ----------
set("Mosquito Oil",{
    AmmoConsumeChance:-0.40,
    DamageMult:-0.15
});

set("Saviour Oil",{ AmmoConsumeChance:-0.30 });

set("Satiety Oil",{
    AmmoConsumeChance:-0.20,
    ReloadSpeed:-0.40
});

// ---------- BULLET DROP ----------
set("Bulk Oil",{ BulletDrop:15 });

// ---------- BLACK FRIDAY ----------
set("Black Friday Oil",{
    SpreadMult:0.30,
    DurabilityMult:-0.30,
    DamageMult:-0.30,
    ProjectileMult:2.00
});

fs.writeFileSync(FILE, JSON.stringify(oils, null, 2), "utf8");

console.log("✅ Oils.json updated successfully");