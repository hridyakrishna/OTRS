const router = require('express').Router();




router.get('', async (req, res) => {
  try {
    const { userId } = req.query;

    res.send({'user': userId});
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

module.exports = router;
