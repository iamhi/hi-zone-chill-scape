// Based on current state decide upcoming events
// Activate appropriate event emitters
import EventsRegistry from '@eventemitters/EventsRegistry';

export default class EventControl {
	constructor() {
		this._eventRegistry = new EventsRegistry();
	}

	transitionToState(state) {
		this._currentState = state;

		const newCharacterEmitters = this._eventRegistry.getCharactersForState(state);
		const newEnvironmentEmitters = this._eventRegistry.getEnvironmentsForState(state);

		this._beginTransition(newCharacterEmitters, newEnvironmentEmitters);
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
		newCharacterEmitters.forEach((emitter) => emitter.start());
		newEnvironmentEmitters.forEach((emitter) => emitter.start());

		// append new to old emitters here
		// TODO

		// run timer and call _endTransition at the end
		// Send only the endingEmitters
		setTimeout(() => this._endTransition(newCharacterEmitters, newEnvironmentEmitters), 10000);
	}

	_endTransition(newCharacterEmitters, newEnvironmentEmitters) {
		// stop current emitters

		// increase newEmitters

		this._characterEmitters = newCharacterEmitters;
		this._environmentEmitters = newEnvironmentEmitters;
	}
}
