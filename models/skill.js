const skills = [
    {id: 125223, skill: "Javascript", done: false},
    {id: 127904, skill: "CSS", done: false},
    {id: 139608, skill: "HTML", done: true},
    {id: 149560, skill: "Node", done: false}
];
module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function deleteOne(id) {
    // Find the index based on the id of the todo object
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
  }

function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
};

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
}