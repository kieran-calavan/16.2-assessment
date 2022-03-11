// Write your tests here!
const expect = require("chai").expect;
const {polybius} = require("../src/polybius.js")

describe("Polybius Test", () => {
  it("test encoding message", () => {
    const result = polybius("thinkful",true)
    expect (result).to.equal("4432423352125413"); 
  });

  it("test encoding message", () => {
    const result = polybius("Hello world",true)
    expect (result).to.equal("3251131343 2543241341"); 
  });
});

  it("test decoding message", () => {
    const result = polybius("4432423352125413",false)
    expect (result).to.equal("thi/jnkful"); 
  });

  it("test decoding message", () => {
    const result = polybius("3251131343 2543241341",false)
    expect (result).to.equal("hello world"); 
  });
