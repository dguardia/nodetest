var expect = require("chai").expect;
var hex2rgb = require("../src/js/lib/hex2rgb");

describe("hex to rgb conversion", function(){
	it("should fails with less that 3 characters", function (done) {
		hex2rgb("#ff", function (err) {
			expect(err).to.exist;
			done()

		});
	});

	it("should fails with more than 6 characters", function (done) {
		hex2rgb("#ffaabbccddee", function (err) {
			expect(err).to.exist;
			done()

		});
	});

	it("should convert hex to rgb succefully", function (done) {
		hex2rgb("#ffffff", function (err, rgb) {
			expect(err).to.be.null;
			expect(rgb).to.deep.equal([255,255,255]);
			done()

		});
	});

});