import CharacterGameObject from './CharacterGameObject';

export default class MainCharacter extends CharacterGameObject {
	create(scene) {
		this._scene = scene;

		this._createCharacter();
		this._createCharacterAnimation();
	}

	_createCharacter() {
		this._sprite = this._scene.add.circle(640, 400, 35, 0x9966ff);

		this._sprite.setStrokeStyle(4, 0xefc53f);
	}

	_createCharacterAnimation() {
		this._blinkingTween = this._scene.tweens.add({
			targets: this._sprite,
			alpha: 0.6,
			yoyo: true,
			repeat: -1,
			ease: 'Sine.easeIn',
			duration: 900,
		});
	}

	start() {
		this._startIdleMovement();

		setInterval(() => {
			if (this._isMoving) {
				this._isMoving = false;
				this._startIdleMovement();
			} else {
				this._isMoving = true;
				this._startDashingMovement();
			}
		}, [7000]);
	}

	_startIdleMovement() {
		if (this._isMoving) {
			return;
		}

		if (this._idleMovementTween && this._idleMovementTween.isPlaying()) {
			return;
		}

		this._idleMovementTween = this._scene.tweens.add({
			y: 300,
			targets: this._sprite,
			yoyo: true,
			repeat: 0,
			ease: 'Sine.easeInOut',
			duration: 2000,
			onComplete: () => this._startIdleMovement(),
		});
	}

	_startDashingMovement() {
		if (!this._isMoving) {
			return;
		}

		if (this._dashingMovementTween && this._dashingMovementTween.isPlaying()) {
			return;
		}

		this._dashingMovementTween = this._scene.tweens.add({
			x: 750,
			targets: this._sprite,
			yoyo: true,
			repeat: 0,
			ease: 'Sine.easeInOut',
			duration: 2000,
			onComplete: () => this._startDashingMovement(),
		});
	}
}
