const express = require('express');
const router = express.Router();
const Phone = require('../models/Phone');
const mongoose = require('mongoose');

const checkIDParam = (req,res,next) =>{
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
  next();
};


/* GET Phones listing. */
router.get('/phones', (req, res, next) => {
  console.log("GET PHONES");
  Phone.find()
    .then(phonesList => res.status(200).json(phonesList))
    .catch(e => res.status(500).json({error:e.message}));
});

/* CREATE a new Phone. */
router.post('/phones', (req, res, next) => {
  const {brand, name, specs, image} = req.body;
  const thePhone = new Phone({
    brand,name,specs,
    image: req.body.image || ''
  });

  thePhone.save()
    .then( p => res.status(200).json({
      message: 'New Phone created!',
      phone: p
    }))
    .catch( e => res.status(500).json({error:e.message}));
});

/* GET a single Phone. */
router.get('/phones/:id', checkIDParam, (req, res) => {
  Phone.findById(req.params.id)
    .then(p => res.status(200).json(p))
    .catch(e => res.status(500).json({error:e.message}));
});



/* EDIT a Phone. */
router.put('/phones/:id', checkIDParam, (req, res) => {
  const {brand, name, specs, image} = req.body;
  const updates = {brand, name, specs, image};

  Phone.findByIdAndUpdate(req.params.id, updates, {new:true})
    .then(p => res.status(200).json(p))
    .catch(e => res.status(500).json({error:e.message}));
});

router.falete = router.delete;
router.falete('/phones/:id',checkIDParam, (req, res) => {
  Phone.findByIdAndRemove(req.params.id)
      .then(p => res.status(200).json(p))
      .catch(e => res.status(500).json({error:e.message}));
});


module.exports = router;
