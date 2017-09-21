const expect = require('chai').expect;
const request = require('request');

describe('Color code converter API', function() {

  describe('Convert RGB to HEX', function() {

  let url = 'http://localhost:3000/rgbToHex?red=255&green=255&blue=255';
  
    it('Return status 200', function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);  
        done();
      });
    }); 

    it('Returns color in HEX', function(done) {
      request(url, function(error, response, body) {
        expect(body).to.equal('ffffff');
        done();
      });
    }); 

  });

  describe('Convert HEX to RGB', function() {

  let url = 'http://localhost:3000/hexToRgb?hex=00ff00';
  
    it('Return status 200', function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);  
        done();
      });
    }); 

    it('Returns color in RGB', function(done) {
      request(url, function(error, response, body) {
        expect(body).to.equal('[0,255,0]');
        done();
      });
    }); 
    
  });
  
});
