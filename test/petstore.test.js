const chai = require('chai').use(require('chai-http'));
const expect = chai.expect;

const { BASE_URL } = require('../config/apiConfig');
const { generatePet } = require('../helper/petData');

describe('API Automation Testing - Petstore', function() {
  let createdPetId = null;

  it('01 - Add new pet and verify the response', function(done) {
    const newPet = generatePet('Banana', 'available');

    chai.request(BASE_URL)
      .post('/pet')
      .send(newPet)
      .end(function(err, res) {
        createdPetId = res.body.id;

        expect(res).to.have.status(200);
        expect(res.body).to.include(newPet);

        done();
      });
  });
  
  it('02 - Find pets by status = "available"', function (done) {
    chai.request(BASE_URL)
      .get('/pet/findByStatus?status=available')
      .end(function (err, res) {
        const invalid = res.body.find(pet => pet.status !== 'available');

        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        expect(invalid).to.be.undefined;

        done();
      });
  });
});
