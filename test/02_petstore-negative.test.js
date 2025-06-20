const chai = require('chai').use(require('chai-http'));
const expect = chai.expect;

const { PET_ENDPOINT } = require('../config/apiConfig');
const { generatePet } = require('../helper/petData');

describe('API Automation Testing - https://petstore.swagger.io/#/', function() {
  it('01 - As a User, I failed to add new pet that "available" and "sleeping"', function(done) {
    const newPet = generatePet('Mango', ['available', 'sleeping']);

    chai.request(PET_ENDPOINT)
      .post('')
      .send(newPet)
      .end((err, res) => {
        expect(res).to.have.status(500);
        expect(res.body).to.have.property('type', 'unknown');
        expect(res.body).to.have.property('message', 'something bad happened');

        done();
      });
  });
});
