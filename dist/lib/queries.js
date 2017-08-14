"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var states_and_cities_1 = require("./states-and-cities");
function getStateByLabel(label) {
    if (!states_and_cities_1.default || !label)
        return;
    var index = lodash_1.default.findIndex(states_and_cities_1.default, function (state) { return state.label.toLowerCase() === label.toLowerCase(); });
    if (index >= 0)
        return states_and_cities_1.default[index];
    return undefined;
}
exports.getStateByLabel = getStateByLabel;
function getStateByCod(cod) {
    if (!states_and_cities_1.default || !cod)
        return;
    var index = lodash_1.default.findIndex(states_and_cities_1.default, function (state) { return state.cod.toLowerCase() === cod.toLowerCase(); });
    if (index >= 0)
        return states_and_cities_1.default[index];
    return undefined;
}
exports.getStateByCod = getStateByCod;
function allStateCodes() {
    if (!states_and_cities_1.default)
        return;
    var codes = [];
    states_and_cities_1.default.forEach(function (state) { codes.push(state.cod); });
    return codes;
}
exports.allStateCodes = allStateCodes;
function getCityByLabel(state, label) {
    if (!state || !state.cities)
        return;
    if (!label)
        return;
    var index = lodash_1.default.findIndex(state.cities, function (city) { return city.label.toLowerCase() === label.toLowerCase(); });
    if (index >= 0)
        return state.cities[index];
    return undefined;
}
exports.getCityByLabel = getCityByLabel;
function getCityByCod(state, cod) {
    if (!state || !state.cities)
        return;
    if (!cod)
        return;
    var index = lodash_1.default.findIndex(state.cities, function (city) { return city.cod.toLowerCase() === cod.toLowerCase(); });
    if (index >= 0)
        return state.cities[index];
    return undefined;
}
exports.getCityByCod = getCityByCod;
function getAllByDDD(ddd) {
    if (!ddd)
        return;
    return lodash_1.default.compact(states_and_cities_1.default.map(function (state) {
        var newState = lodash_1.default.clone(state);
        newState.cities = newState.cities.filter(function (city) { return city.ddd === ddd; });
        if (newState.cities.length > 0)
            return newState;
        return null;
    }));
}
exports.getAllByDDD = getAllByDDD;
function getAllByAnsArea(ansAreaCod) {
    if (!ansAreaCod)
        return;
    return lodash_1.default.compact(states_and_cities_1.default.map(function (state) {
        var newState = lodash_1.default.clone(state);
        newState.cities = newState.cities.filter(function (city) { return city.ansArea === ansAreaCod; });
        if (newState.cities.length > 0)
            return newState;
        return null;
    }));
}
exports.getAllByAnsArea = getAllByAnsArea;
function allCityCodes(state) {
    if (!states_and_cities_1.default)
        return;
    var codes = [];
    if (!state) {
        states_and_cities_1.default.forEach(function (state) {
            state.cities.forEach(function (city) {
                codes.push(city.cod);
            });
        });
    }
    else {
        state.cities.forEach(function (city) {
            codes.push(city.cod);
        });
    }
    return codes;
}
exports.allCityCodes = allCityCodes;
function allCities(state) {
    if (!states_and_cities_1.default)
        return;
    var cities = [];
    if (!state) {
        states_and_cities_1.default.forEach(function (state) {
            state.cities.forEach(function (city) {
                cities.push(city);
            });
        });
    }
    else {
        state.cities.forEach(function (city) {
            cities.push(city);
        });
    }
    return cities;
}
exports.allCities = allCities;
function getCapitalOfState(state) {
    if (!states_and_cities_1.default)
        return;
    if (!state || !state.cities)
        return;
    var index = lodash_1.default.findIndex(state.cities, { capital: true });
    if (index >= 0)
        return state.cities[index];
    return undefined;
}
exports.getCapitalOfState = getCapitalOfState;
