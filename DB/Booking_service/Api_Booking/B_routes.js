const router = require('express').Router();
const Booking = require('../models/Booking');

router.post('', async (req, res) => {
  try {
    const { restaurantId, userId, table, people, date } = req.body;

    const newBooking = new Booking({
      restaurantId,
      userId,
      table,
      people,
      date,
    });
    console.log("hi1");
    console.log(newBooking);
    console.log(req.body);
    await newBooking.save();
    console.log("hi2");
    res.send(newBooking);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

router.get('', async (req, res) => {
  try {
    const  {userId}  = req.query;
    const bookings = await Booking.find({ userId });

    res.send({bookings});
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

module.exports = router;
