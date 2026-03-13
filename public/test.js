const coreSelections = new Map();

function resetCoreSelections() {
    coreSelections.set("weapon", {Name: "P38 Dirk", Value: "p38-dirk"});
    coreSelections.set("ench1", {Name: "None", Value: "static-no-selection"});
    coreSelections.set("ench2", {Name: "None", Value: "static-no-selection"});
    coreSelections.set("ench3", {Name: "None", Value: "static-no-selection"});
    coreSelections.set("ench4", {Name: "None", Value: "static-no-selection"});
    coreSelections.set("ench5", {Name: "None", Value: "static-no-selection"});
    coreSelections.set("barrel", {Name: "None", Value: "static-no-selection"});
    coreSelections.set("optic", {Name: "None", Value: "static-no-selection"});
    coreSelections.set("laser", {Name: "None", Value: "static-no-selection"});
    coreSelections.set("firemode", {Name: "None", Value: "static-no-selection"});
    coreSelections.set("chamber", {Name: "None", Value: "static-no-selection"});
}

resetCoreSelections()

function logMap(value, key, map) {
        console.log(key, value.Name, value.Value);
    }

coreSelections.forEach(logMap);