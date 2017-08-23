'use strict';

var _ = require('lodash');

import statesAndCities from './states-and-cities'

export function getStateByLabel(label) {
	if (!statesAndCities || !label)
		return;

	var index = _.findIndex(statesAndCities, function(state) { return state.label.toLowerCase() === label.toLowerCase(); })

	if (index >= 0)
		return statesAndCities[index];
	return undefined;
}

export function getStateByCod(cod) {
	if (!statesAndCities || !cod)
		return;

	var index = _.findIndex(statesAndCities, function(state) { return state.cod.toLowerCase() === cod.toLowerCase(); })

	if (index >= 0)
		return statesAndCities[index];
	return undefined;
}

export function allStates() {
	return statesAndCities;
}

export function allStateCodes() {
	if (!statesAndCities)
		return;

	var codes = [];
	statesAndCities.forEach(function(state) { codes.push(state.cod); });
	return codes;
}


export function getCityByLabel(state, label) {
	if (!state || !state.cities)
		return;
	if (!label)
		return;

	var index = _.findIndex(state.cities, function(city) { return city.label.toLowerCase() === label.toLowerCase(); })

	if (index >= 0)
		return state.cities[index];
	return undefined;
}

export function getCityByCod(state, cod) {
	if (!state || !state.cities)
		return;
	if (!cod)
		return;

	var index = _.findIndex(state.cities, function(city) { return city.cod.toLowerCase() === cod.toLowerCase(); })

	if (index >= 0)
		return state.cities[index];
	return undefined;
}

export function getAllByDDD(ddd) {
	if (!ddd)
		return;

	return _.compact(statesAndCities.map(function(state) {
			var newState = _.clone(state);
			newState.cities = newState.cities.filter(function(city){ return city.ddd === ddd; });
			if (newState.cities.length > 0)
				return newState;
			return null;
		}));
}

export function getAllByAnsArea(ansAreaCod) {
	if (!ansAreaCod)
		return;

	return _.compact(statesAndCities.map(function(state) {
			var newState = _.clone(state);
			newState.cities = newState.cities.filter(function(city){ return city.ansArea === ansAreaCod; });
			if (newState.cities.length > 0)
				return newState;
			return null;
		}));
}

export function allCityCodes(state?) {
	if (!statesAndCities)
		return;

	var codes = [];
	if (!state) {
		statesAndCities.forEach(function(state) {
			state.cities.forEach(function(city) {
				codes.push(city.cod);
			})
		});
	} else {
		state.cities.forEach(function(city) {
			codes.push(city.cod);
		})
	}
	return codes;
}
export function allCities(state?) {
	if (!statesAndCities)
		return;

	var cities = [];
	if (!state) {
		statesAndCities.forEach(function(state) {
			state.cities.forEach(function(city) {
				cities.push(city);
			})
		});
	} else {
		state.cities.forEach(function(city) {
			cities.push(city);
		})
	}
	return cities;
}

export function getCapitalOfState(state) {
	if (!statesAndCities)
		return;
	if (!state || !state.cities)
		return;

	var index = _.findIndex(state.cities, { capital: true })

	if (index >= 0)
		return state.cities[index];
	return undefined;
}
