const { Router } = require('express');

const router = Router();

router.get('/tasks', (req, res) => {
    res.send('returning a list of tasks');
});

router.get('/tasks/10', (req, res) => {
    res.send('returning a single task');
});

router.post('/tasks', (req, res) => {
    res.send('creating new task');
});

router.delete('/tasks', (req, res) => {
    res.send('deleting a task');
});

router.put('/tasks', (req, res) => {
    res.send('updating a task');
});

module.exports = router;