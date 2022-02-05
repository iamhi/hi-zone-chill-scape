export default class EventsRegistry {
	_hasEvent(eventType) {
		console.warn({ eventType });

		return false;
	}

	_getEventForType(eventType) {
		console.warn({ eventType });
	}

	getCharactersForState(state) {
		const { characterEventTypes } = state; // TODO isStateCompatible

		return characterEventTypes
			.filter((eventType) => this._hasEvent(eventType))
			.map((eventType) => this._getEventForType(eventType));
	}

	getEnvironmentsForState(state) {
		const { environmentEventTypes } = state; // TODO isStateCompatible

		return environmentEventTypes
			.filter((eventType) => this._hasEvent(eventType))
			.map((eventType) => this._getEventForType(eventType));
	}
}
