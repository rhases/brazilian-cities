var test = require("simple-test-framework");
var brazilianCities  = require('./index');

test("Every city should have ddd, ibgeCod and ansArea",function(t) {

   var a = 1;

	var cities = brazilianCities.allCities();

	cities.forEach(function(city){
			t.test('check if '+city.label+' has ddd, ibgeCod and ansArea',function(t) {
			t.check(city.ddd != undefined,"ddd should not be undefined");
			t.check(city.ibgeCod != undefined,"ibgeCod should not be undefined");
			t.check(city.ansArea != undefined,"ansArea should not be undefined");
			t.finish();
		});
	})

   t.finish();
})
