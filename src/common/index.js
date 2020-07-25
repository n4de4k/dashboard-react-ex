const multiplier = {
  // add according to needs
  d: 24 * 60 * 60 * 1000,
};

export const getModifiedDate = (amount, type) => {
  const now = new Date().getTime();
  const difference = amount * multiplier[type];

  return new Date(now + difference);
};

export const getStartAndEndOfMonth = (date) => {
  const startDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  return [startDayOfMonth, lastDayOfMonth];
};

const months = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "November",
  "Desember",
];

export const dateToString = (date) =>
  `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;

export const formatMoney = (
  amount,
  decimalCount = 2,
  decimal = ".",
  thousands = ","
) => {
  decimalCount = Math.abs(decimalCount);
  decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

  const negativeSign = amount < 0 ? "-" : "";

  let i = parseInt(
    (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
  ).toString();
  let j = i.length > 3 ? i.length % 3 : 0;

  return (
    negativeSign +
    (j ? i.substr(0, j) + thousands : "") +
    i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
    (decimalCount
      ? decimal +
        Math.abs(amount - i)
          .toFixed(decimalCount)
          .slice(2)
      : "")
  );
};

export const getRandomValueInRange = (min, max) =>
  Math.random() * (max - min) + min;
