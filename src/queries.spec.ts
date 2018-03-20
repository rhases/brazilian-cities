'use strict';

import { getCityByIbgeCod }  from './index';

describe('queries', () => {

  it("should get state and city by ibgeCod", function () {
    var city = getCityByIbgeCod(293020);
    expect(city.cod).toBe('sento-se')
    expect(city.ibgeCod).toBe(293020)
    expect(city.state.cod).toBe('ba')
  })

});
