const paymentController = require('./paymentController.js');

describe('paymentController()', () => {
  test('should send "GET World!" on GET /payment', () => {

    // Arrange
    const mReq = {};
    const mRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    // Act
    paymentController.getPayments(mReq, mRes);

    // Assert
    expect(mRes.status).toBeCalledWith(200);
    expect(mRes.json).toBeCalledWith({message: "GET World!"});
  });
  
  test('should send "Post World" on POST /payment', () => {

    // Arrange
    const mReq = {
      body: {
        firstNm: "Pablo",
        lastNm: "Jones",
        cardNo: 1234567812345678,
        cvv: 123,
        amount: 200.00,
        currency: "GBP"
    }};
    const mRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    // Act
    paymentController.addPayment(mReq, mRes);

    // Assert
    expect(mRes.status).toBeCalledWith(201);
    expect(mRes.json).toBeCalledWith({message: "POST World!"});
  });
  
  test('should send 400 on POST /payment if name or currency are incomplete', () => {

    // Arrange
    const mReq = {
      body: {
        firstNm: "Pablo",
        lastNm: "Jones",
        cardNo: 1234567812345678,
        cvv: 123,
        amount: 200.00,
        currency: ''
    }};
    const mRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    // Act
    paymentController.addPayment(mReq, mRes);

    // Assert
    expect(mRes.status).toBeCalledWith(400);
    expect(mRes.json).toBeCalledWith({message: "Missing fields"});
  });
  
  test('should send 400 on POST /payment if cardNo or cvv are invalid', () => {

    // Arrange
    const mReq = {
      body: {
        firstNm: "Pablo",
        lastNm: "Jones",
        cardNo: 1234567812345678,
        cvv: 12,
        amount: 200.00,
        currency: 'GBP'
    }};
    const mRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    // Act
    paymentController.addPayment(mReq, mRes);

    // Assert
    expect(mRes.status).toBeCalledWith(400);
    expect(mRes.json).toBeCalledWith({message: "Missing fields"});
  });
  
  test('should send 400 on POST /payment if amount is invalid', () => {

    // Arrange
    const mReq = {
      body: {
        firstNm: "Pablo",
        lastNm: "Jones",
        cardNo: 1234567812345678,
        cvv: 123,
        amount: 200000.00,
        currency: 'GBP'
    }};
    const mRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    // Act
    paymentController.addPayment(mReq, mRes);

    // Assert
    expect(mRes.status).toBeCalledWith(400);
    expect(mRes.json).toBeCalledWith({message: "Missing fields"});
  });
});