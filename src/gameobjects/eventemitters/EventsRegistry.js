import BackgroundMiddleEmitter from './BackgroundMiddleEmitter';

export default class EventsRegistry {
	_hasEvent(eventType) {
		if (BackgroundMiddleEmitter.getType() === eventType) {
			return true;
		}

		return false;
	}

	_getEventForType(eventType) {
		if (BackgroundMiddleEmitter.getType() === eventType) {
			return new BackgroundMiddleEmitter();
		}

		return undefined;
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
