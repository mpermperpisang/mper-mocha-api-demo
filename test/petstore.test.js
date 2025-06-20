const chai = require('chai').use(require('chai-http'));
const expect = chai.expect;

const { PET_ENDPOINT, FIND_BY_STATUS } = require('../config/apiConfig');
const { generatePet } = require('../helper/petData');

describe('API Automation Testing - https://petstore.swagger.io/#/', function() {
  it('01 - As a User, I want to add new pet that "available" successfully', function(done) {
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

  it('02 - As a User, I want to add new pet that "pending" successfully', function(done) {
    const newPet = generatePet('Pisang', 'pending');

    chai.request(PET_ENDPOINT)
      .post('')
      .send(newPet)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.include(newPet);

        done();
      });
  });
  
  it('03 - As a User, I want to find "available" pet successfully', function (done) {
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

  it('04 - As a User, I want to find "pending" pet successfully', function (done) {
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
