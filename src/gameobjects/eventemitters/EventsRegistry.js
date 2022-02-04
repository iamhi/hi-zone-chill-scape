export class EventsRegistry {

	_hasEvent(eventType) {
		return false;
	}

	_getEventForType(eventType) {

	}

	getCharactersForState(state) {
		const { characterEventTypes } = state; // TODO isStateCompatible

		return characterEventTypes
			.filter((eventType) => this._hasEvent(eventType))
			.map((eventType)=> this._getEventForType(eventType));
	}

	getEnvironmentsForState(state) {
		const { environmentEventTypes } = state; // TODO isStateCompatible

		return environmentEventTypes
			.filter((eventType) => this._hasEvent(eventType))
			.map((eventType)=> this._getEventForType(eventType));
	}
}
