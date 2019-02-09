import {expect} from "chai";
import {gainRatio, gearInches, development, speedAtCadence, skidPatches} from "./drivetrain";
import { msInKmh } from "./constants";

describe('drivetrain', function () {

    const chainringTeeth = 53;
    const sprocketTeeth = 19;
    const wheelDiameter = 0.680;
    const crankLength = 0.170;

    it('gainRatio()', function () {
        expect(gainRatio(chainringTeeth, sprocketTeeth, wheelDiameter, crankLength)).to.approximately(5.58, 0.01);
    });

    it('gearInches()', function () {
        expect(gearInches(chainringTeeth, sprocketTeeth, wheelDiameter)).to.approximately(74.678, 0.001);
    });

    it('development()', function () {
        expect(development(chainringTeeth, sprocketTeeth, wheelDiameter)).to.approximately(5.959, 0.001);
    });

    it('speedAtCadence()', function () {
        expect(speedAtCadence(chainringTeeth, sprocketTeeth, wheelDiameter, 60) * msInKmh).to.approximately(21.452, 0.001);
    });

    it('skidPatches()', function () {
        expect(skidPatches(chainringTeeth, sprocketTeeth, false)).to.equal(19);
        expect(skidPatches(chainringTeeth, sprocketTeeth, true)).to.equal(38);
    });
});


