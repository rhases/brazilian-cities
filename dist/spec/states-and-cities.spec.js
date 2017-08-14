"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../lib/index");
describe('all cities', function () {
    it('should have ddd, ibgeCod and ansArea', function () {
        var cities = index_1.allCities();
        cities.forEach(function (city) {
            expect(city.ddd).not.toBeNaN();
            expect(city.ibgeCod).not.toBeNaN();
            expect(city.ansArea).not.toBeNaN();
        });
    });
});
