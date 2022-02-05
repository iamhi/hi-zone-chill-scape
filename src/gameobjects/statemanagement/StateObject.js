import {
	SEASON_ENUM,
	PART_OF_DAY_ENUM,
	WEATHER_ENUM,
	PLACE_ENUM,
};

export default class StateOject {
	constructor(season, partOfDay, weather, place) {
		if (SEASON_ENUM[season]) {
			this._season = season;
		}

		if (PART_OF_DAY_ENUM[partOfDay]) {
			this._partOfDay = partOfDay;
		}

		if (WEATHER_ENUM[weather]) {
			this._weather = weather;
		}

		if (PLACE_ENUM[place]) {
			this._place = place;
		}
	}

	setState(season, partOfDay, weather, place) {
		this.setSeason(season);

		this.setPartOfDay(partOfDay);

		this.setWeather(weather);

		this.setPlace(place);
	}

	setSeason(season) {
		if (SEASON_ENUM[season]) {
			this._season = season;
		} else {
			this._season = undefined;
		}
	}

	setPartOfDay(partOfDay) {
		if (PART_OF_DAY_ENUM[partOfDay]) {
			this._partOfDay = partOfDay;
		} else {
			this._partOfDay = undefined;
		}
	}

	setWeather(weather) {
		if (WEATHER_ENUM[weather]) {
			this._weather = weather;
		} else {
			this._weather = undefined;
		}
	}

	setPlace(place) {
		if (PLACE_ENUM[place]) {
			this._place = place;
		} else {
			this._place = undefined;
		}
	}

	getSeason() {
		if (this._season === undefined) {
			return '';
		}

		if (typeof this._season === 'string' || this._season instanceof String) {
			return this._season;
		}

		return this._season.value;
	}

	getPartOfDay() {
		if (this._partOfDay === undefined) {
			return '';
		}

		if (typeof this._partOfDay === 'string' || this._partOfDay instanceof String) {
			return this._partOfDay;
		}

		return this._partOfDay.value;
	}

	getWeather() {
		if (this._weather === undefined) {
			return '';
		}

		if (typeof this._weather === 'string' || this._weather instanceof String) {
			return this._weather;
		}

		return this._weather.value;
	}

	getPlace() {
		if (this._place === undefined) {
			return '';
		}

		if (typeof this._place === 'string' || this._place instanceof String) {
			return this._place;
		}

		return this._place.value;
	}
}
