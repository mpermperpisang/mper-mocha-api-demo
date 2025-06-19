function generatePet(name = 'MperMperPisang', status = 'available') {
  return {
    id: Date.now(), // NOTE: unique ID based on timestamp
    name,
    status
  };
}

module.exports = {
  generatePet
};
