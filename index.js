const data = require("./data/canada-sgc-codes-v2");

/**
 * Look up a third-level division by its friendly name and parent province, then return its SGC code.
 * @param {string} cd - The third-level division's human-readable name (e.g. "Belleville").
 * @param {string} province - The second-level division's abbreviation (e.g. "ON").
 * @return {string} The SGC code.
 */
const cdToCode = (cd, province) => {
    if (!cd) throw new Error("Please provide a third-level division!");
    if (!province) throw new Error("Please provide a second-level division!");
    const { provincialCode } = provinceToCode(province);
    return data.find(entry => entry.level === "3" && entry.provincialCode === provincialCode && entry.censusDivisionName === cd);
};

const provinceToCode = (province) => {
    if (!province) throw new Error("Please provide a second-level division!");
    return data.find(entry => entry.level === "2" && entry.provinceName === province);
}

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