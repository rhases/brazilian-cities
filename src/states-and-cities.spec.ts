'use strict';

import { allCities }  from './index';

describe('all cities', () => {

   it('should have ddd, ibgeCod and ansArea', () => {
     var cities = allCities();
     cities.forEach(function(city){
       expect(city.ddd).not.toBeNaN();
       expect(city.ibgeCod).not.toBeNaN();
       expect(city.ansArea).not.toBeNaN();
     })
   });

});
