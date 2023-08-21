const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills');


const { deleteOne } = require('../models/skills');


router.delete('/:id', (req, res) => {
  const skillId = req.params.id;


  const skillDeleted = deleteOne(skillId);

  if (skillDeleted) {
    res.redirect('/skills'); 
  } else {
    res.status(404).send('Skill not found');
  }
});


// GET /skills (index)
router.get('/', skillsCtrl.index);

// Get /skills/:id (show)
router.get('/:id', skillsCtrl.show);

module.exports = router;
