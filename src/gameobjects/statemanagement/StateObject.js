import {
	SEASON_ENUM,
	PART_OF_DAY_ENUM,
	WEATHER_ENUM,
};

export default class StateOject {
	constructor(season, partOfDay, weather) {
		if (SEASON_ENUM[season]) {
			this._season = season;
		}

		if (PART_OF_DAY_ENUM[partOfDay]) {
			this._partOfDay = partOfDay;
		}

		if (WEATHER_ENUM[weather]) {
			this._weather = weather;
		}
	}

	setState(season, partOfDay, weather) {
		if (SEASON_ENUM[season]) {
			this._season = season;
		}

		if (PART_OF_DAY_ENUM[partOfDay]) {
			this._partOfDay = partOfDay;
		}

		if (WEATHER_ENUM[weather]) {
			this._weather = weather;
		}
	}

	setSeason(season) {
		if (SEASON_ENUM[season]) {
			this._season = season;
		}
	}

	setPartOfDay(partOfDay) {
		if (PART_OF_DAY_ENUM[partOfDay]) {
			this._partOfDay = partOfDay;
		}
	}

	setWeather(weather) {
		if (WEATHER_ENUM[weather]) {
			this._weather = weather;
		}
	}

	getSeason() {
		if (typeof this._season === 'string' || this._season instanceof String) {
			return this._season;
		}

		return this._season.value;
	}

	getPartOfDay() {
		if (typeof this._partOfDay === 'string' || this._partOfDay instanceof String) {
			return this._partOfDay;
		}

		return this._partOfDay.value;
	}

	getWeather() {
		if (typeof this._weather === 'string' || this._weather instanceof String) {
			return this._weather;
		}

		return this._weather.value;
	}
}
