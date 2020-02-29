const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (arguments.length === 0 || typeof sampleActivity !== 'string' || isNaN(parseFloat(sampleActivity))) return false;
  if (sampleActivity <= 0 || sampleActivity > 15) return false;
  sampleActivity = parseFloat(sampleActivity);
  let k = 0.693 / HALF_LIFE_PERIOD;
  let t = Math.abs(Math.floor(Math.log(sampleActivity / MODERN_ACTIVITY) / k));
  return t;
};
