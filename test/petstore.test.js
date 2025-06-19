const chai = require('chai').use(require('chai-http'));
const expect = chai.expect;

const { PET_ENDPOINT, FIND_BY_STATUS } = require('../config/apiConfig');
const { generatePet } = require('../helper/petData');

describe('API Automation Testing - Petstore', function() {
  it('01 - Add new pet and verify the response', function(done) {
    const newPet = generatePet('Banana', 'available');

    chai.request(PET_ENDPOINT)
      .post('')
      .send(newPet)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.include(newPet);

        done();
      });
  });
  
  it('02 - Find pets by status = available', function (done) {
    chai.request(FIND_BY_STATUS('available'))
      .get('')
      .end(function (err, res) {
        const invalid = res.body.find(pet => pet.status !== 'available');

        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        expect(invalid).to.be.undefined;

        done();
      });
  });

  it('03 - Find pets by status = pending', function (done) {
    chai.request(FIND_BY_STATUS('pending'))
      .get('')
      .end(function (err, res) {
        const invalid = res.body.find(pet => pet.status !== 'pending');

        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        expect(invalid).to.be.undefined;
        
        done();
      });
  });
});
