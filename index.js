const data = require("./data/canada-sgc-codes-v2");

/**
 * Look up a third-level division by its friendly name and return its SGC code.
 * @param {string} cd - The third-level division's human-readable name (e.g. "Belleville").
 * @return {string} The SGC code.
 */
const cdToCode = (cd) => {
    if (!cd) throw new Error("Please provide an administrative division");
    return data.find(entry => entry.level === "3" && entry.censusDivisionName === cd);
};

/**
 * Look up a division by its SGC code and return its friendly name.
 * The SGC code must be provided in full corresponding to the desired match level
 * @param {string} code - The full SGC code (e.g. 3512036 for the Madoc subdivision, 6 for the Territories, etc.)
 * @return {string} The division's human-readable name.
 */
const codeToCD = (code) => {
    if (!code) throw new Error("Please provide an administrative division code!");
    return data.find(entry => entry.fullCode  === code);
};

module.exports = {
    cdToCode,
    codeToCD,
};