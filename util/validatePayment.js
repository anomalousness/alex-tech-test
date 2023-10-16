const validatePayment = (payment) => {
  const { firstNm, lastNm, cardNo, cvv, amount, currency } = payment;
  if (!firstNm || !lastNm || !currency) return false;
  if (`${cardNo}`.length !== 16) return false;
  if (`${cvv}`.length !== 3) return false;
  if (amount <= 0 || amount > 50000) return false;
  return true;
}

module.exports = validatePayment;