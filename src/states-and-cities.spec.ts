'use strict';

import { allCities, allStates }  from './index';

describe('states-and-cities', () => {

  it('should have 27 states', () => {
    var states = allStates();
    expect(states).not.toBeNull();
    expect(states.length).toBe(27);
  });

  // and each state...
  var states = allStates();
  states.forEach(function (state) {
    eachState(state);
  })

  function eachState(state) {
    it(`should state ${state.label} has ibdgeCod`, function () {
      expect(state.ibgeCod).toBeTruthy();
    });
  }

  // and each city ...
  var cities = allCities();
  cities.forEach(function (city) {
    eachCity(city);
  })

  function eachCity(city){
    it(`should city ${city.label} has ddd, ibdgeCod and ansArea`, function () {
      expect(city.ddd).toBeTruthy();
      expect(city.ibgeCod).toBeTruthy();
      expect(city.ansArea).toBeTruthy();
    });
  }

});

