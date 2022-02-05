import enumCreator from '@utils/enumCreator';

// Season
export const SUMMER = 'SUMMER';
export const WINTER = 'WINTER';
export const SPRING = 'SPRING';
export const FALL = 'FALL';

const SEASON_ARRAY = [
	SUMMER,
	WINTER,
	SPRING,
	FALL,
];

export const SEASON_ENUM = enumCreator(SEASON_ARRAY);

// Time
export const MORNING = 'MORNING';
export const AFTERNOON = 'AFTERNOON';
export const EVENING = 'EVENING';
export const NIGHT = 'NIGHT';

const PART_OF_DAY_ARRAY = [
	MORNING,
	AFTERNOON,
	EVENING,
	NIGHT,
];

export const PART_OF_DAY_ENUM = enumCreator(PART_OF_DAY_ARRAY);

// Weather
export const CLEAR = 'CLEAR';
export const RAINING = 'RAINING';
export const SNOWING = 'SNOWING';
export const FOG = 'FOG';
export const WIND = 'WIND';

const WEATHER_ARRAY = [
	CLEAR,
	RAINING,
	SNOWING,
	FOG,
	WIND,
];

export const WEATHER_ENUM = enumCreator(WEATHER_ARRAY);

// Place
export const CITY = 'CITY';
export const FOREST = 'FOREST';
export const COAST = 'COAST';
export const LAKE = 'LAKE';

const PLACE_ARRAY = [
	CITY,
	FOREST,
	COAST,
	LAKE,
];

export const PLACE_ENUM = enumCreator(PLACE_ARRAY);
