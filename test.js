var test = require("simple-test-framework");
var brazilianCities  = require('./index');

test("Every state should have ddd, ibgeCod and ansArea",function(t) {

	var states = brazilianCities.statesAndCities;
	states.forEach(function(state) {
		t.test('check if '+ state.label+' has ibgeCod and cities',
			function(t) {
				t.check(state.ibgeCod != undefined,"ibgeCod should not be undefined");
				t.check(state.cities != undefined,"cities should not be undefined");
				t.finish();
			}
		);
	})

   t.finish();
})

test("Every city should have ddd, ibgeCod and ansArea",function(t) {

	var cities = brazilianCities.allCities();
	cities.forEach(function(city) {
		t.test('check if '+city.label+' has ddd, ibgeCod and ansArea',
			function(t) {
				t.check(city.ddd != undefined,"ddd should not be undefined");
				t.check(city.ibgeCod != undefined,"ibgeCod should not be undefined");
				t.check(city.ansArea != undefined,"ansArea should not be undefined");
				t.finish();
			}
		);
	})

   t.finish();
})

test("Get state and city by ibgeCod",function(t) {

	var city = brazilianCities.getCityByIbgeCod(293020);
	t.test('check if '+city.label+' has ibgeCod, and state',
		function(t) {
			t.check(city.cod == 'sento-se',"city should be sento-se");
			t.check(city.ibgeCod == 293020,"ibgeCod should be 293020");
			t.check(city.state.cod == 'ba',"state should be ba");
			t.finish();
		}
	);

   t.finish();
})
