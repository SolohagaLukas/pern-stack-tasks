const getAllTasks = async (req, res) => {
    res.send('returning a list of tasks');
}

const getTask = (req, res) => {
    res.send('returning a single task');
}

const createTask = (req, res) => {
    res.send('creating new task');
}

module.exports = {
    getAllTasks,
    getTask,
    createTask
}