const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
 // Проверка, что входное значение является строкой
 if (typeof sampleActivity !== 'string') {
  return false; // Возвращаем false для некорректных типов
}

// Приведение входного значения к числу
const activity = parseFloat(sampleActivity);

// Проверка на NaN и допустимые значения активности
if (isNaN(activity) || activity <= 0 || activity > MODERN_ACTIVITY) {
  return false; // Возвращаем false для некорректных значений
}

// Расчет возраста образца
const decayConstant = Math.LN2 / HALF_LIFE_PERIOD; // Константа распада
const age = Math.log(MODERN_ACTIVITY / activity) / decayConstant; // Формула для расчета возраста

return Math.ceil(age); // Возвращаем округленное значение возраста
}

module.exports = {
  dateSample
};
