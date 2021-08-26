// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // Main character's jump height
        jumpHeight: 0,
        // Main character's jump duration
        jumpDuration: 0,
        // Maximal movement speed
        maxMoveSpeed: 0,
        // Acceleration
        accel: 0,

        // Jumping sound effect resource
        jumpAudio: {
            default: null,
            type: cc.AudioClip
        },
    },

    runJumpAction () {
        // Jump up
        var jumpUp = cc.tween().by(this.jumpDuration, {y: this.jumpHeight}, {easing: 'sineOut'});
        // Jump down
        var jumpDown = cc.tween().by(this.jumpDuration, {y: -this.jumpHeight}, {easing: 'sineIn'});

        // Create a easing and perform actions in the order of "jumpUp", "jumpDown"
        var tween = cc.tween()
            .sequence(jumpUp, jumpDown)
        // Add a callback function to invoke the "playJumpSound()" method we define after the action is finished
            .call(this.playJumpSound, this);
        // Repeat
        return cc.tween().repeatForever(tween);
    },

    playJumpSound: function () {
        // Invoke sound engine to play the sound
        cc.audioEngine.playEffect(this.jumpAudio, false);
    },

    playerRotate: function (num) {
        this.node.anchorY = this.node.anchorX = 0.5

      let angle = this.node.angle + num;
      const rotateAction = cc.rotateBy(.3, angle);
      this.node.runAction(rotateAction);

    },

    onLoad: function () {
        // Initialize the jump action
        var jumpAction = this.runJumpAction();
        cc.tween(this.node).then(jumpAction).start()
    },

    onKeyDown (event) {
        // Set a flag when key pressed
        switch(event.keyCode) {
            case cc.macro.KEY.a:
                this.accLeft = true;
                break;
            case cc.macro.KEY.d:
                this.accRight = true;
                break;
            //HomeWork edit for Test
            case cc.macro.KEY.space:
                this.accRotate = true;
                this.playerRotate(360);
                break;
        }
    },

    onKeyUp (event) {
        // Unset a flag when key released
        switch(event.keyCode) {
            case cc.macro.KEY.a:
                this.accLeft = false;
                break;
            case cc.macro.KEY.d:
                this.accRight = false;
                break;
            //HomeWork edit for Test
            case cc.macro.KEY.space:
                this.accRotate = false;
                break;
        }
    },
    onLoad: function () {
        // Initialize jump action
        var jumpAction = this.runJumpAction();
        cc.tween(this.node).then(jumpAction).start()

        // Acceleration direction switch
        this.accLeft = false;
        this.accRight = false;
        this.accRotate = false;
        // The main character's current horizontal velocity
        this.xSpeed = 0;


        // Initialize the keyboard input listening
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    onDestroy () {
        // Cancel keyboard input monitoring
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    update: function (dt) {
        // Update speed of each frame according to the current acceleration direction
        if (this.accLeft) {
            this.xSpeed -= this.accel * dt;
            if (this.accRotate) {
                this.playerRotate(-360);
                
            }
        } else if (this.accRight) {
            this.xSpeed += this.accel * dt;
            if (this.accRotate) {
                this.playerRotate(360);
            }
        }
        // Restrict the movement speed of the main character to the maximum movement speed
        if ( Math.abs(this.xSpeed) > this.maxMoveSpeed ) {
            // If speed reach limit, use max speed with current direction
            this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
        };
        
        // Update the position of the main character according to the current speed
        this.node.x += this.xSpeed * dt;

        if (this.node.angle == 360 || this.node.angle == -360) {
            this.node.angle = 0;
        }


    },
});
