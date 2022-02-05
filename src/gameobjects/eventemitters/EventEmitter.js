// Summon characters or environment that will act on it's own
export default class EventEmitter {

	getType() {

	}

	isStateCompatible(state) {

	}

	start() {
		// starts generating timer
	}

	increase() {
		// transition in this state
	}

	decrease() {
		// transition out of this state
	}

	stop() {
		// stops generating timer
	}

	dispose() {
		// stops timer
		// deletes all characters/environments
	}

	trigger() {
		// creates character/environment
	}
}
