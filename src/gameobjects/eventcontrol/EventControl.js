// Based on current state decide upcoming events
// Activate appropriate event emitters
import EventsRegistry from '@eventemitters/EventsRegistry';

import {
	STATE_TRANSITION_PERIOD,
} from './constants';

export default class EventControl {
	constructor(scene) {
		this._eventRegistry = new EventsRegistry();
		this._characterEmitters = [];
		this._environmentEmitters = [];
		this._scene = scene;
	}

	transitionToState(state) {
		this._currentState = state;

		const newCharacterEmitters = this._eventRegistry.getCharactersForState(state);
		const newEnvironmentEmitters = this._eventRegistry.getEnvironmentsForState(state);

		this._beginTransition(newCharacterEmitters, newEnvironmentEmitters);
	}

	notifyMovementChange(isMoving) {
		this._characterEmitters.forEach((emitter) => emitter.notifyMovementChange(isMoving));
		this._environmentEmitters.forEach((emitter) => emitter.notifyMovementChange(isMoving));
	}

	_increaseEmitters(emitters) {
		emitters.forEach((emitter) => emitter.increase());
	}

	// Rename arguments to make more logic
	_getMissingEmitters(oldEmitters, newEmitters) {
		const newEmitterTypes = newEmitters.map((emitter) => emitter.getType());

		return oldEmitters.filter((emitter) => !newEmitterTypes.includes(emitter.getType()));
	}

	_beginTransition(newCharacterEmitters, newEnvironmentEmitters) {
		// filter missing emitters from new
		// and decrease
		const endingCharacterEmitters = this._getMissingEmitters(this._characterEmitters, newCharacterEmitters);
		const endingEnvironmentEmitters = this._getMissingEmitters(this._environmentEmitters, newEnvironmentEmitters);

		endingCharacterEmitters.forEach((emitter) => emitter.decrease());
		endingEnvironmentEmitters.forEach((emitter) => emitter.decrease());

		// all new emitters can be started
		newCharacterEmitters.forEach((emitter) => emitter.start(this._scene));
		newEnvironmentEmitters.forEach((emitter) => emitter.start(this._scene));

		// append new to old emitters here
		// TODO

		// run timer and call _endTransition at the end
		// Send only the endingEmitters
		setTimeout(() => this._endTransition(newCharacterEmitters, newEnvironmentEmitters), STATE_TRANSITION_PERIOD);
	}

	_endTransition(newCharacterEmitters, newEnvironmentEmitters) {
		// stop current emitters

		// increase newEmitters

		this._characterEmitters = newCharacterEmitters;
		this._environmentEmitters = newEnvironmentEmitters;
	}
}
