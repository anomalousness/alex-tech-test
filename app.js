const express = require('express');
const paymentRoutes = require('./routes/paymentRoutes');

const app = express();

app.use(express.json());

app.use('/payment', paymentRoutes);

app.listen(3000, () => {
  console.log('App listening on port 3000');
});
