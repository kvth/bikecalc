import {expect} from "chai";
import { aeroDrag } from "./aero";
import { airDensitySeaLevel } from "./constants";

describe('aero', function () {
    it('aeroDrag()', function () {
        expect(aeroDrag(0.88, 0.32, airDensitySeaLevel, 10.28)).to.approximately(18.227, 0.01);
    });
});

