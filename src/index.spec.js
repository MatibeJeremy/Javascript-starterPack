var chai = require('chai');
var jsdom = require('jsdom');
const { JSDOM } = jsdom;

var expect = chai.expect;    // Using Expect style

describe('First test',() =>{
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should say hello' , (done) => {
    const options = { }
    JSDOM.fromFile('./src/index.html', options).then(dom => {
      const h1 = dom.window.document.getElementsByTagName('h1')[0]
      expect(h1.innerHTML).to.equal('Hello Master')
      done()
    }).catch(done)
  })
})
