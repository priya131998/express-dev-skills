const skills = [
    {skill: 'Learn JavaScript', done: true},
    {skill: 'Learn HTML', done: false},
    {skill: 'Learn CSS', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    updateOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    return skills[id];
  }

  function create(skill) {
    skills.push(skill);
  }

  function deleteOne(id) {
    skills.splice(id, 1);
  }

  function updateOne(id, body) {
    skills[id] = body;
  }