const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

const baseUrl = 'https://petstore.swagger.io/v2';

describe('API Automation Testing - Petstore', function() {
  let createdPetId = null;

  it('01 - Add new pet and verify the response', function(done) {
    const newPet = {
      name: 'MperMperPisang',
      status: 'available'
    };

    chai.request(baseUrl)
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
