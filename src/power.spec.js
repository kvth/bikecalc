import {expect} from "chai";
import {calories, force, power, pedalVelocity} from "./power";

describe('power', function () {
    const W = 38.746;
    const N = 26.429;
    const t = 3600; // 1h
    const cadence = 80;
    const crankLength = 0.175;

    it('calories()', function () {
        expect(calories(W, t)).to.approximately(139.040, 0.001);
    });

    it('power()', function () {
        expect(power(crankLength, cadence, N)).to.approximately(W, 0.01);
    });

    it('force()', function () {
        expect(force(crankLength, cadence, W)).to.approximately(N, 0.01);
    });

    it('pedalVelocity()', function () {
        expect(pedalVelocity(crankLength, cadence)).to.approximately(1.466, 0.01);
    });

});


