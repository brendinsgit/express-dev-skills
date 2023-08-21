const express = require('express');
const router = express.Router();
const devSkills = []; 

// Render the index page
router.get('/', (req, res) => {
    res.render('index', { devSkills, title: 'Skills Home Page' });
});

// Render the form to add a new skill
router.get('/add-skill', (req, res) => {
    res.render('add-skill');
});

// Handle the form submission for adding a new skill
router.post('/add-skill', (req, res) => {
    const skillName = req.body.skillName;
    const skillDescription = req.body.skillDescription;

    // Create a new skill object
    const newSkill = {
        name: skillName,
        description: skillDescription,
    };

    // Add the new skill to the simulated database
    devSkills.push(newSkill);

    // Redirect back to the homepage after adding the skill
    res.redirect('/');
});

module.exports = router;
