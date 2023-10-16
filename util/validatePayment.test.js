const validatePayment = require('./validatePayment.js');

describe('validatePayment()', () => {
  test('should return false if there is no entry for currency', () => {
    // Arrange
    const mPayment = {
      firstNm: "Pablo",
      lastNm: "Jones",
      cardNo: 1234567812345678,
      cvv: 123,
      amount: 200.00,
      currency: ""
    }

    // Act
    const result = validatePayment(mPayment);

    // Assert
    expect(result).toBe(false);
  });

  test('should return false if there is no entry for first name', () => {
    // Arrange
    const mPayment = {
      firstNm: "",
      lastNm: "Jones",
      cardNo: 1234567812345678,
      cvv: 123,
      amount: 200.00,
      currency: "GBP"
    }

    // Act
    const result = validatePayment(mPayment);

    // Assert
    expect(result).toBe(false);
  });

  test('should return false if there is no entry for last name', () => {
    // Arrange
    const mPayment = {
      firstNm: "Pablo",
      lastNm: "",
      cardNo: 1234567812345678,
      cvv: 123,
      amount: 200.00,
      currency: "GBP"
    }

    // Act
    const result = validatePayment(mPayment);

    // Assert
    expect(result).toBe(false);
  });

  test('should return false if cardNo is too short', () => {
    // Arrange
    const mPayment = {
      firstNm: "Pablo",
      lastNm: "Jones",
      cardNo: 123456781234567,
      cvv: 123,
      amount: 200.00,
      currency: "GBP"
    }

    // Act
    const result = validatePayment(mPayment);

    // Assert
    expect(result).toBe(false);
  });

  test('should return false if cardNo is too long', () => {
    // Arrange
    const mPayment = {
      firstNm: "Pablo",
      lastNm: "Jones",
      cardNo: 12345678123456781,
      cvv: 123,
      amount: 200.00,
      currency: "GBP"
    }

    // Act
    const result = validatePayment(mPayment);

    // Assert
    expect(result).toBe(false);
  });

  test('should return false if cvv is too short', () => {
    // Arrange
    const mPayment = {
      firstNm: "Pablo",
      lastNm: "Jones",
      cardNo: 1234567812345678,
      cvv: 12,
      amount: 200.00,
      currency: "GBP"
    }

    // Act
    const result = validatePayment(mPayment);

    // Assert
    expect(result).toBe(false);
  });

  test('should return false if cvv is too long', () => {
    // Arrange
    const mPayment = {
      firstNm: "Pablo",
      lastNm: "Jones",
      cardNo: 1234567812345678,
      cvv: 1234,
      amount: 200.00,
      currency: "GBP"
    }

    // Act
    const result = validatePayment(mPayment);

    // Assert
    expect(result).toBe(false);
  });

  test('should return false if amount is too small', () => {
    // Arrange
    const mPayment = {
      firstNm: "Pablo",
      lastNm: "Jones",
      cardNo: 1234567812345678,
      cvv: 123,
      amount: 0.00,
      currency: "GBP"
    }

    // Act
    const result = validatePayment(mPayment);

    // Assert
    expect(result).toBe(false);
  });

  test('should return false if amount is too large', () => {
    // Arrange
    const mPayment = {
      firstNm: "Pablo",
      lastNm: "Jones",
      cardNo: 1234567812345678,
      cvv: 123,
      amount: 50000.01,
      currency: "GBP"
    }

    // Act
    const result = validatePayment(mPayment);

    // Assert
    expect(result).toBe(false);
  });
});
