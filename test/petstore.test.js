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
        expect(res).to.have.status(200);
        expect(res.body).to.include(newPet);
        
        createdPetId = res.body.id;

        done();
      });
  });
});
