import {expect} from "chai";
import {reduce, gcd} from "./helpers";

describe('helpers', function () {
    it('gcd()', function () {
        expect(gcd(2,4)).to.equal(2);
    });
    it('reduce()', function () {
        expect(reduce(2,4)).to.eql([1,2]);
    });
});


