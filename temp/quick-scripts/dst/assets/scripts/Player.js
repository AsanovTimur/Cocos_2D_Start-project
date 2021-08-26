
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dd9f7Kr8wNMtbN85rSvSs3h', 'Player');
// scripts/Player.js

"use strict";

var _cc$Class;

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class((_cc$Class = {
  "extends": cc.Component,
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
      "default": null,
      type: cc.AudioClip
    }
  },
  runJumpAction: function runJumpAction() {
    // Jump up
    var jumpUp = cc.tween().by(this.jumpDuration, {
      y: this.jumpHeight
    }, {
      easing: 'sineOut'
    }); // Jump down

    var jumpDown = cc.tween().by(this.jumpDuration, {
      y: -this.jumpHeight
    }, {
      easing: 'sineIn'
    }); // Create a easing and perform actions in the order of "jumpUp", "jumpDown"

    var tween = cc.tween().sequence(jumpUp, jumpDown) // Add a callback function to invoke the "playJumpSound()" method we define after the action is finished
    .call(this.playJumpSound, this); // Repeat

    return cc.tween().repeatForever(tween);
  },
  playJumpSound: function playJumpSound() {
    // Invoke sound engine to play the sound
    cc.audioEngine.playEffect(this.jumpAudio, false);
  },
  playerRotate: function playerRotate(num) {
    this.node.anchorY = this.node.anchorX = 0.5;
    var angle = this.node.angle + num;
    var rotateAction = cc.rotateBy(.3, angle);
    this.node.runAction(rotateAction);
  },
  onLoad: function onLoad() {
    // Initialize the jump action
    var jumpAction = this.runJumpAction();
    cc.tween(this.node).then(jumpAction).start();
  },
  onKeyDown: function onKeyDown(event) {
    // Set a flag when key pressed
    switch (event.keyCode) {
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
  onKeyUp: function onKeyUp(event) {
    // Unset a flag when key released
    switch (event.keyCode) {
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
  }
}, _cc$Class["onLoad"] = function onLoad() {
  // Initialize jump action
  var jumpAction = this.runJumpAction();
  cc.tween(this.node).then(jumpAction).start(); // Acceleration direction switch

  this.accLeft = false;
  this.accRight = false;
  this.accRotate = false; // The main character's current horizontal velocity

  this.xSpeed = 0; // Initialize the keyboard input listening

  cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
  cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
}, _cc$Class.onDestroy = function onDestroy() {
  // Cancel keyboard input monitoring
  cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
  cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
}, _cc$Class.update = function update(dt) {
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
  } // Restrict the movement speed of the main character to the maximum movement speed


  if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
    // If speed reach limit, use max speed with current direction
    this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
  }

  ; // Update the position of the main character according to the current speed

  this.node.x += this.xSpeed * dt;

  if (this.node.angle == 360 || this.node.angle == -360) {
    this.node.angle = 0;
  }
}, _cc$Class));

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwianVtcEhlaWdodCIsImp1bXBEdXJhdGlvbiIsIm1heE1vdmVTcGVlZCIsImFjY2VsIiwianVtcEF1ZGlvIiwidHlwZSIsIkF1ZGlvQ2xpcCIsInJ1bkp1bXBBY3Rpb24iLCJqdW1wVXAiLCJ0d2VlbiIsImJ5IiwieSIsImVhc2luZyIsImp1bXBEb3duIiwic2VxdWVuY2UiLCJjYWxsIiwicGxheUp1bXBTb3VuZCIsInJlcGVhdEZvcmV2ZXIiLCJhdWRpb0VuZ2luZSIsInBsYXlFZmZlY3QiLCJwbGF5ZXJSb3RhdGUiLCJudW0iLCJub2RlIiwiYW5jaG9yWSIsImFuY2hvclgiLCJhbmdsZSIsInJvdGF0ZUFjdGlvbiIsInJvdGF0ZUJ5IiwicnVuQWN0aW9uIiwib25Mb2FkIiwianVtcEFjdGlvbiIsInRoZW4iLCJzdGFydCIsIm9uS2V5RG93biIsImV2ZW50Iiwia2V5Q29kZSIsIm1hY3JvIiwiS0VZIiwiYSIsImFjY0xlZnQiLCJkIiwiYWNjUmlnaHQiLCJzcGFjZSIsImFjY1JvdGF0ZSIsIm9uS2V5VXAiLCJ4U3BlZWQiLCJzeXN0ZW1FdmVudCIsIm9uIiwiU3lzdGVtRXZlbnQiLCJFdmVudFR5cGUiLCJLRVlfRE9XTiIsIktFWV9VUCIsIm9uRGVzdHJveSIsIm9mZiIsInVwZGF0ZSIsImR0IiwiTWF0aCIsImFicyIsIngiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFIO0FBQ0ksYUFBU0QsRUFBRSxDQUFDRSxTQURoQjtBQUdJQyxFQUFBQSxVQUFVLEVBQUU7QUFDUjtBQUNBQyxJQUFBQSxVQUFVLEVBQUUsQ0FGSjtBQUdSO0FBQ0FDLElBQUFBLFlBQVksRUFBRSxDQUpOO0FBS1I7QUFDQUMsSUFBQUEsWUFBWSxF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InNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBNYWluIGNoYXJhY3RlcidzIGp1bXAgaGVpZ2h0XHJcbiAgICAgICAganVtcEhlaWdodDogMCxcclxuICAgICAgICAvLyBNYWluIGNoYXJhY3RlcidzIGp1bXAgZHVyYXRpb25cclxuICAgICAgICBqdW1wRHVyYXRpb246IDAsXHJcbiAgICAgICAgLy8gTWF4aW1hbCBtb3ZlbWVudCBzcGVlZFxyXG4gICAgICAgIG1heE1vdmVTcGVlZDogMCxcclxuICAgICAgICAvLyBBY2NlbGVyYXRpb25cclxuICAgICAgICBhY2NlbDogMCxcclxuXHJcbiAgICAgICAgLy8gSnVtcGluZyBzb3VuZCBlZmZlY3QgcmVzb3VyY2VcclxuICAgICAgICBqdW1wQXVkaW86IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgcnVuSnVtcEFjdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gSnVtcCB1cFxyXG4gICAgICAgIHZhciBqdW1wVXAgPSBjYy50d2VlbigpLmJ5KHRoaXMuanVtcER1cmF0aW9uLCB7eTogdGhpcy5qdW1wSGVpZ2h0fSwge2Vhc2luZzogJ3NpbmVPdXQnfSk7XHJcbiAgICAgICAgLy8gSnVtcCBkb3duXHJcbiAgICAgICAgdmFyIGp1bXBEb3duID0gY2MudHdlZW4oKS5ieSh0aGlzLmp1bXBEdXJhdGlvbiwge3k6IC10aGlzLmp1bXBIZWlnaHR9LCB7ZWFzaW5nOiAnc2luZUluJ30pO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgYSBlYXNpbmcgYW5kIHBlcmZvcm0gYWN0aW9ucyBpbiB0aGUgb3JkZXIgb2YgXCJqdW1wVXBcIiwgXCJqdW1wRG93blwiXHJcbiAgICAgICAgdmFyIHR3ZWVuID0gY2MudHdlZW4oKVxyXG4gICAgICAgICAgICAuc2VxdWVuY2UoanVtcFVwLCBqdW1wRG93bilcclxuICAgICAgICAvLyBBZGQgYSBjYWxsYmFjayBmdW5jdGlvbiB0byBpbnZva2UgdGhlIFwicGxheUp1bXBTb3VuZCgpXCIgbWV0aG9kIHdlIGRlZmluZSBhZnRlciB0aGUgYWN0aW9uIGlzIGZpbmlzaGVkXHJcbiAgICAgICAgICAgIC5jYWxsKHRoaXMucGxheUp1bXBTb3VuZCwgdGhpcyk7XHJcbiAgICAgICAgLy8gUmVwZWF0XHJcbiAgICAgICAgcmV0dXJuIGNjLnR3ZWVuKCkucmVwZWF0Rm9yZXZlcih0d2Vlbik7XHJcbiAgICB9LFxyXG5cclxuICAgIHBsYXlKdW1wU291bmQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBJbnZva2Ugc291bmQgZW5naW5lIHRvIHBsYXkgdGhlIHNvdW5kXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmp1bXBBdWRpbywgZmFsc2UpO1xyXG4gICAgfSxcclxuXHJcbiAgICBwbGF5ZXJSb3RhdGU6IGZ1bmN0aW9uIChudW0pIHtcclxuICAgICAgICB0aGlzLm5vZGUuYW5jaG9yWSA9IHRoaXMubm9kZS5hbmNob3JYID0gMC41XHJcblxyXG4gICAgICBsZXQgYW5nbGUgPSB0aGlzLm5vZGUuYW5nbGUgKyBudW07XHJcbiAgICAgIGNvbnN0IHJvdGF0ZUFjdGlvbiA9IGNjLnJvdGF0ZUJ5KC4zLCBhbmdsZSk7XHJcbiAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24ocm90YXRlQWN0aW9uKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIEluaXRpYWxpemUgdGhlIGp1bXAgYWN0aW9uXHJcbiAgICAgICAgdmFyIGp1bXBBY3Rpb24gPSB0aGlzLnJ1bkp1bXBBY3Rpb24oKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRoZW4oanVtcEFjdGlvbikuc3RhcnQoKVxyXG4gICAgfSxcclxuXHJcbiAgICBvbktleURvd24gKGV2ZW50KSB7XHJcbiAgICAgICAgLy8gU2V0IGEgZmxhZyB3aGVuIGtleSBwcmVzc2VkXHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjTGVmdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vSG9tZVdvcmsgZWRpdCBmb3IgVGVzdFxyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zcGFjZTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjUm90YXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyUm90YXRlKDM2MCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uS2V5VXAgKGV2ZW50KSB7XHJcbiAgICAgICAgLy8gVW5zZXQgYSBmbGFnIHdoZW4ga2V5IHJlbGVhc2VkXHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy9Ib21lV29yayBlZGl0IGZvciBUZXN0XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnNwYWNlOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NSb3RhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBJbml0aWFsaXplIGp1bXAgYWN0aW9uXHJcbiAgICAgICAgdmFyIGp1bXBBY3Rpb24gPSB0aGlzLnJ1bkp1bXBBY3Rpb24oKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRoZW4oanVtcEFjdGlvbikuc3RhcnQoKVxyXG5cclxuICAgICAgICAvLyBBY2NlbGVyYXRpb24gZGlyZWN0aW9uIHN3aXRjaFxyXG4gICAgICAgIHRoaXMuYWNjTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWNjUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFjY1JvdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIFRoZSBtYWluIGNoYXJhY3RlcidzIGN1cnJlbnQgaG9yaXpvbnRhbCB2ZWxvY2l0eVxyXG4gICAgICAgIHRoaXMueFNwZWVkID0gMDtcclxuXHJcblxyXG4gICAgICAgIC8vIEluaXRpYWxpemUgdGhlIGtleWJvYXJkIGlucHV0IGxpc3RlbmluZ1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRGVzdHJveSAoKSB7XHJcbiAgICAgICAgLy8gQ2FuY2VsIGtleWJvYXJkIGlucHV0IG1vbml0b3JpbmdcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAgICAgLy8gVXBkYXRlIHNwZWVkIG9mIGVhY2ggZnJhbWUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IGFjY2VsZXJhdGlvbiBkaXJlY3Rpb25cclxuICAgICAgICBpZiAodGhpcy5hY2NMZWZ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMueFNwZWVkIC09IHRoaXMuYWNjZWwgKiBkdDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWNjUm90YXRlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclJvdGF0ZSgtMzYwKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFjY1JpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMueFNwZWVkICs9IHRoaXMuYWNjZWwgKiBkdDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWNjUm90YXRlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclJvdGF0ZSgzNjApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFJlc3RyaWN0IHRoZSBtb3ZlbWVudCBzcGVlZCBvZiB0aGUgbWFpbiBjaGFyYWN0ZXIgdG8gdGhlIG1heGltdW0gbW92ZW1lbnQgc3BlZWRcclxuICAgICAgICBpZiAoIE1hdGguYWJzKHRoaXMueFNwZWVkKSA+IHRoaXMubWF4TW92ZVNwZWVkICkge1xyXG4gICAgICAgICAgICAvLyBJZiBzcGVlZCByZWFjaCBsaW1pdCwgdXNlIG1heCBzcGVlZCB3aXRoIGN1cnJlbnQgZGlyZWN0aW9uXHJcbiAgICAgICAgICAgIHRoaXMueFNwZWVkID0gdGhpcy5tYXhNb3ZlU3BlZWQgKiB0aGlzLnhTcGVlZCAvIE1hdGguYWJzKHRoaXMueFNwZWVkKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgcG9zaXRpb24gb2YgdGhlIG1haW4gY2hhcmFjdGVyIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzcGVlZFxyXG4gICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMueFNwZWVkICogZHQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm5vZGUuYW5nbGUgPT0gMzYwIHx8IHRoaXMubm9kZS5hbmdsZSA9PSAtMzYwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9LFxyXG59KTtcclxuIl19