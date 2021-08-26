
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/Game');
require('./assets/scripts/Player');
require('./assets/scripts/star');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/star.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ca461C0ZO5AEYjCqw5WQqul', 'star');
// scripts/star.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    // When the distance between the star and main character is less than this value, collection of the point will be completed
    pickRadius: 0
  },
  getPlayerDistance: function getPlayerDistance() {
    // Determine the distance according to the position of the Player node
    var playerPos = this.game.player.getPosition(); // Calculate the distance between two nodes according to their positions

    var dist = this.node.position.sub(playerPos).mag();
    return dist;
  },
  onPicked: function onPicked() {
    // When the stars are being collected, invoke the interface in the Game script to generate a new star
    this.game.spawnNewStar(); // Invoke the scoring method of the Game script

    this.game.gainScore(); // Then destroy the current star's node

    this.node.destroy();
  },
  update: function update(dt) {
    // Determine if the distance between the Star and main character is less than the collecting distance for each frame
    if (this.getPlayerDistance() < this.pickRadius) {
      // Invoke collecting behavior
      this.onPicked();
      return;
    } // Update the transparency of the star according to the timer in the Game script


    var opacityRatio = 1 - this.game.timer / this.game.starDuration;
    var minOpacity = 50;
    this.node.opacity = minOpacity + Math.floor(opacityRatio * (255 - minOpacity));
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc3Rhci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBpY2tSYWRpdXMiLCJnZXRQbGF5ZXJEaXN0YW5jZSIsInBsYXllclBvcyIsImdhbWUiLCJwbGF5ZXIiLCJnZXRQb3NpdGlvbiIsImRpc3QiLCJub2RlIiwicG9zaXRpb24iLCJzdWIiLCJtYWciLCJvblBpY2tlZCIsInNwYXduTmV3U3RhciIsImdhaW5TY29yZSIsImRlc3Ryb3kiLCJ1cGRhdGUiLCJkdCIsIm9wYWNpdHlSYXRpbyIsInRpbWVyIiwic3RhckR1cmF0aW9uIiwibWluT3BhY2l0eSIsIm9wYWNpdHkiLCJNYXRoIiwiZmxvb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0FDLElBQUFBLFVBQVUsRUFBRTtBQUZKLEdBSFA7QUFPTEMsRUFBQUEsaUJBQWlCLEVBQUUsNkJBQVk7QUFDM0I7QUFDQSxRQUFJQyxTQUFTLEdBQUcsS0FBS0MsSUFBTCxDQUFVQyxNQUFWLENBQWlCQyxXQUFqQixFQUFoQixDQUYyQixDQUkzQjs7QUFDQSxRQUFJQyxJQUFJLEdBQUcsS0FBS0MsSUFBTCxDQUFVQyxRQUFWLENBQW1CQyxHQUFuQixDQUF1QlAsU0FBdkIsRUFBa0NRLEdBQWxDLEVBQVg7QUFDQSxXQUFPSixJQUFQO0FBQ0gsR0FkSTtBQWdCTEssRUFBQUEsUUFBUSxFQUFFLG9CQUFXO0FBQ2pCO0FBQ0EsU0FBS1IsSUFBTCxDQUFVUyxZQUFWLEdBRmlCLENBR2pCOztBQUNBLFNBQUtULElBQUwsQ0FBVVUsU0FBVixHQUppQixDQU1qQjs7QUFDQSxTQUFLTixJQUFMLENBQVVPLE9BQVY7QUFDSCxHQXhCSTtBQXlCTEMsRUFBQUEsTUFBTSxFQUFFLGdCQUFVQyxFQUFWLEVBQWM7QUFFbEI7QUFDQSxRQUFJLEtBQUtmLGlCQUFMLEtBQTJCLEtBQUtELFVBQXBDLEVBQWdEO0FBQzVDO0FBQ0EsV0FBS1csUUFBTDtBQUNBO0FBQ0gsS0FQaUIsQ0FRbEI7OztBQUNBLFFBQUlNLFlBQVksR0FBRyxJQUFJLEtBQUtkLElBQUwsQ0FBVWUsS0FBVixHQUFnQixLQUFLZixJQUFMLENBQVVnQixZQUFqRDtBQUNBLFFBQUlDLFVBQVUsR0FBRyxFQUFqQjtBQUNBLFNBQUtiLElBQUwsQ0FBVWMsT0FBVixHQUFvQkQsVUFBVSxHQUFHRSxJQUFJLENBQUNDLEtBQUwsQ0FBV04sWUFBWSxJQUFJLE1BQU1HLFVBQVYsQ0FBdkIsQ0FBakM7QUFDSDtBQXJDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gV2hlbiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgc3RhciBhbmQgbWFpbiBjaGFyYWN0ZXIgaXMgbGVzcyB0aGFuIHRoaXMgdmFsdWUsIGNvbGxlY3Rpb24gb2YgdGhlIHBvaW50IHdpbGwgYmUgY29tcGxldGVkXHJcbiAgICAgICAgcGlja1JhZGl1czogMCxcclxuICAgIH0sXHJcbiAgICBnZXRQbGF5ZXJEaXN0YW5jZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIERldGVybWluZSB0aGUgZGlzdGFuY2UgYWNjb3JkaW5nIHRvIHRoZSBwb3NpdGlvbiBvZiB0aGUgUGxheWVyIG5vZGVcclxuICAgICAgICB2YXIgcGxheWVyUG9zID0gdGhpcy5nYW1lLnBsYXllci5nZXRQb3NpdGlvbigpO1xyXG5cclxuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIG5vZGVzIGFjY29yZGluZyB0byB0aGVpciBwb3NpdGlvbnNcclxuICAgICAgICB2YXIgZGlzdCA9IHRoaXMubm9kZS5wb3NpdGlvbi5zdWIocGxheWVyUG9zKS5tYWcoKTtcclxuICAgICAgICByZXR1cm4gZGlzdDtcclxuICAgIH0sXHJcblxyXG4gICAgb25QaWNrZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIFdoZW4gdGhlIHN0YXJzIGFyZSBiZWluZyBjb2xsZWN0ZWQsIGludm9rZSB0aGUgaW50ZXJmYWNlIGluIHRoZSBHYW1lIHNjcmlwdCB0byBnZW5lcmF0ZSBhIG5ldyBzdGFyXHJcbiAgICAgICAgdGhpcy5nYW1lLnNwYXduTmV3U3RhcigpO1xyXG4gICAgICAgIC8vIEludm9rZSB0aGUgc2NvcmluZyBtZXRob2Qgb2YgdGhlIEdhbWUgc2NyaXB0XHJcbiAgICAgICAgdGhpcy5nYW1lLmdhaW5TY29yZSgpO1xyXG5cclxuICAgICAgICAvLyBUaGVuIGRlc3Ryb3kgdGhlIGN1cnJlbnQgc3RhcidzIG5vZGVcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcblxyXG4gICAgICAgIC8vIERldGVybWluZSBpZiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgU3RhciBhbmQgbWFpbiBjaGFyYWN0ZXIgaXMgbGVzcyB0aGFuIHRoZSBjb2xsZWN0aW5nIGRpc3RhbmNlIGZvciBlYWNoIGZyYW1lXHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0UGxheWVyRGlzdGFuY2UoKSA8IHRoaXMucGlja1JhZGl1cykge1xyXG4gICAgICAgICAgICAvLyBJbnZva2UgY29sbGVjdGluZyBiZWhhdmlvclxyXG4gICAgICAgICAgICB0aGlzLm9uUGlja2VkKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gVXBkYXRlIHRoZSB0cmFuc3BhcmVuY3kgb2YgdGhlIHN0YXIgYWNjb3JkaW5nIHRvIHRoZSB0aW1lciBpbiB0aGUgR2FtZSBzY3JpcHRcclxuICAgICAgICB2YXIgb3BhY2l0eVJhdGlvID0gMSAtIHRoaXMuZ2FtZS50aW1lci90aGlzLmdhbWUuc3RhckR1cmF0aW9uO1xyXG4gICAgICAgIHZhciBtaW5PcGFjaXR5ID0gNTA7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSBtaW5PcGFjaXR5ICsgTWF0aC5mbG9vcihvcGFjaXR5UmF0aW8gKiAoMjU1IC0gbWluT3BhY2l0eSkpO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9befdPdcAVM8aGX7ysMGhhk', 'Game');
// scripts/Game.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    // This property quotes the PreFab resource of stars
    starPrefab: {
      "default": null,
      type: cc.Prefab
    },
    // The random scale of disappearing time for stars
    maxStarDuration: 0,
    minStarDuration: 0,
    // Ground node for confirming the height of the generated star's position
    ground: {
      "default": null,
      type: cc.Node
    },
    // Player node for obtaining the jump height of the main character and controlling the movement switch of the main character
    player: {
      "default": null,
      type: cc.Node
    },
    scoreDisplay: {
      "default": null,
      type: cc.Label
    },
    // Scoring sound effect resource
    scoreAudio: {
      "default": null,
      type: cc.AudioClip
    }
  },
  onLoad: function onLoad() {
    // Obtain the anchor point of ground level on the y axis
    this.groundY = this.ground.y + this.ground.height / 2; // "this.ground.top" may also work
    // Initialize timer

    this.timer = 0;
    this.starDuration = 0; // Generate a new star

    this.spawnNewStar(); // Initialize scoring

    this.score = 0;
  },
  spawnNewStar: function spawnNewStar() {
    // Generate a new node in the scene with a preset template
    var newStar = cc.instantiate(this.starPrefab); // Put the newly added node under the Canvas node

    this.node.addChild(newStar); // Set up a random position for the star

    newStar.setPosition(this.getNewStarPosition()); // Save a reference of the Game object on the Star script component

    newStar.getComponent('star').game = this; // Reset timer, randomly choose a value according the scale of star duration

    this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
    this.timer = 0;
  },
  getNewStarPosition: function getNewStarPosition() {
    var randX = 0; // According to the position of the ground level and the main character's jump height, randomly obtain an anchor point of the star on the y axis

    var randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight + 50; // According to the width of the screen, randomly obtain an anchor point of star on the x axis

    var maxX = this.node.width / 2;
    randX = (Math.random() - 0.5) * 2 * maxX; // Return to the anchor point of the star

    return cc.v2(randX, randY);
  },
  update: function update(dt) {
    if (this.player.x > this.node.width / 2 - this.player.width / 2) {
      this.player.x = Math.round(this.node.width / 2) - this.player.width / 2;
    } else if (this.player.x < -this.node.width / 2 + this.player.width / 2) {
      this.player.x = -this.node.width / 2 + this.player.width / 2;
    } // Update timer for each frame, when a new star is not generated after exceeding duration
    // Invoke the logic of game failure


    if (this.timer > this.starDuration) {
      this.gameOver();
      return;
    }

    this.timer += dt;
  },
  gainScore: function gainScore() {
    this.score += 1; // Update the words of the scoreDisplay Label

    this.scoreDisplay.string = 'Score: ' + this.score.toString(); // Play the scoring sound effect

    cc.audioEngine.playEffect(this.scoreAudio, false);
  },
  gameOver: function gameOver() {
    // Stop the jumping action of the Player node
    this.player.stopAllActions(); // reload the "game" scene

    cc.director.loadScene('game');
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJQcmVmYWIiLCJ0eXBlIiwiUHJlZmFiIiwibWF4U3RhckR1cmF0aW9uIiwibWluU3RhckR1cmF0aW9uIiwiZ3JvdW5kIiwiTm9kZSIsInBsYXllciIsInNjb3JlRGlzcGxheSIsIkxhYmVsIiwic2NvcmVBdWRpbyIsIkF1ZGlvQ2xpcCIsIm9uTG9hZCIsImdyb3VuZFkiLCJ5IiwiaGVpZ2h0IiwidGltZXIiLCJzdGFyRHVyYXRpb24iLCJzcGF3bk5ld1N0YXIiLCJzY29yZSIsIm5ld1N0YXIiLCJpbnN0YW50aWF0ZSIsIm5vZGUiLCJhZGRDaGlsZCIsInNldFBvc2l0aW9uIiwiZ2V0TmV3U3RhclBvc2l0aW9uIiwiZ2V0Q29tcG9uZW50IiwiZ2FtZSIsIk1hdGgiLCJyYW5kb20iLCJyYW5kWCIsInJhbmRZIiwianVtcEhlaWdodCIsIm1heFgiLCJ3aWR0aCIsInYyIiwidXBkYXRlIiwiZHQiLCJ4Iiwicm91bmQiLCJnYW1lT3ZlciIsImdhaW5TY29yZSIsInN0cmluZyIsInRvU3RyaW5nIiwiYXVkaW9FbmdpbmUiLCJwbGF5RWZmZWN0Iiwic3RvcEFsbEFjdGlvbnMiLCJkaXJlY3RvciIsImxvYWRTY2VuZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQUMsSUFBQUEsVUFBVSxFQUFFO0FBQ1IsaUJBQVMsSUFERDtBQUVSQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGRCxLQUZKO0FBUVI7QUFDQUMsSUFBQUEsZUFBZSxFQUFFLENBVFQ7QUFVUkMsSUFBQUEsZUFBZSxFQUFFLENBVlQ7QUFZ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LElBQUksS0FBSzNCLE1BQUwsQ0FBWStCLENBQVosR0FBZ0IsQ0FBQyxLQUFLaEIsSUFBTCxDQUFVWSxLQUFYLEdBQWlCLENBQWpCLEdBQXFCLEtBQUszQixNQUFMLENBQVkyQixLQUFaLEdBQWtCLENBQTNELEVBQThEO0FBQ2pFLFdBQUszQixNQUFMLENBQVkrQixDQUFaLEdBQWdCLENBQUMsS0FBS2hCLElBQUwsQ0FBVVksS0FBWCxHQUFpQixDQUFqQixHQUFxQixLQUFLM0IsTUFBTCxDQUFZMkIsS0FBWixHQUFrQixDQUF2RDtBQUNILEtBTmlCLENBU2xCO0FBRUE7OztBQUNBLFFBQUksS0FBS2xCLEtBQUwsR0FBYSxLQUFLQyxZQUF0QixFQUFvQztBQUNoQyxXQUFLdUIsUUFBTDtBQUNBO0FBQ0g7O0FBQ0QsU0FBS3hCLEtBQUwsSUFBY3FCLEVBQWQ7QUFDSCxHQWhHSTtBQWtHTEksRUFBQUEsU0FBUyxFQUFFLHFCQUFZO0FBQ25CLFNBQUt0QixLQUFMLElBQWMsQ0FBZCxDQURtQixDQUVuQjs7QUFDQSxTQUFLWCxZQUFMLENBQWtCa0MsTUFBbEIsR0FBMkIsWUFBWSxLQUFLdkIsS0FBTCxDQUFXd0IsUUFBWCxFQUF2QyxDQUhtQixDQUluQjs7QUFDQS9DLElBQUFBLEVBQUUsQ0FBQ2dELFdBQUgsQ0FBZUMsVUFBZixDQUEwQixLQUFLbkMsVUFBL0IsRUFBMkMsS0FBM0M7QUFDSCxHQXhHSTtBQTBHTDhCLEVBQUFBLFFBQVEsRUFBRSxvQkFBWTtBQUNsQjtBQUNBLFNBQUtqQyxNQUFMLENBQVl1QyxjQUFaLEdBRmtCLENBR2xCOztBQUNBbEQsSUFBQUEsRUFBRSxDQUFDbUQsUUFBSCxDQUFZQyxTQUFaLENBQXNCLE1BQXRCO0FBQ0g7QUEvR0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIFRoaXMgcHJvcGVydHkgcXVvdGVzIHRoZSBQcmVGYWIgcmVzb3VyY2Ugb2Ygc3RhcnNcclxuICAgICAgICBzdGFyUHJlZmFiOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxyXG5cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyBUaGUgcmFuZG9tIHNjYWxlIG9mIGRpc2FwcGVhcmluZyB0aW1lIGZvciBzdGFyc1xyXG4gICAgICAgIG1heFN0YXJEdXJhdGlvbjogMCxcclxuICAgICAgICBtaW5TdGFyRHVyYXRpb246IDAsXHJcblxyXG4gICAgICAgIC8vIEdyb3VuZCBub2RlIGZvciBjb25maXJtaW5nIHRoZSBoZWlnaHQgb2YgdGhlIGdlbmVyYXRlZCBzdGFyJ3MgcG9zaXRpb25cclxuICAgICAgICBncm91bmQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIFBsYXllciBub2RlIGZvciBvYnRhaW5pbmcgdGhlIGp1bXAgaGVpZ2h0IG9mIHRoZSBtYWluIGNoYXJhY3RlciBhbmQgY29udHJvbGxpbmcgdGhlIG1vdmVtZW50IHN3aXRjaCBvZiB0aGUgbWFpbiBjaGFyYWN0ZXJcclxuICAgICAgICBwbGF5ZXI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgc2NvcmVEaXNwbGF5OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8gU2NvcmluZyBzb3VuZCBlZmZlY3QgcmVzb3VyY2VcclxuICAgICAgICBzY29yZUF1ZGlvOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBPYnRhaW4gdGhlIGFuY2hvciBwb2ludCBvZiBncm91bmQgbGV2ZWwgb24gdGhlIHkgYXhpc1xyXG4gICAgICAgIHRoaXMuZ3JvdW5kWSA9IHRoaXMuZ3JvdW5kLnkgKyB0aGlzLmdyb3VuZC5oZWlnaHQvMjsgLy8gXCJ0aGlzLmdyb3VuZC50b3BcIiBtYXkgYWxzbyB3b3JrXHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSB0aW1lclxyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhckR1cmF0aW9uID0gMDtcclxuXHJcbiAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgc3RhclxyXG4gICAgICAgIHRoaXMuc3Bhd25OZXdTdGFyKCk7XHJcblxyXG4gICAgICAgIC8vIEluaXRpYWxpemUgc2NvcmluZ1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG5cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHNwYXduTmV3U3RhcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgbm9kZSBpbiB0aGUgc2NlbmUgd2l0aCBhIHByZXNldCB0ZW1wbGF0ZVxyXG4gICAgICAgIHZhciBuZXdTdGFyID0gY2MuaW5zdGFudGlhdGUodGhpcy5zdGFyUHJlZmFiKTtcclxuICAgICAgICAvLyBQdXQgdGhlIG5ld2x5IGFkZGVkIG5vZGUgdW5kZXIgdGhlIENhbnZhcyBub2RlXHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld1N0YXIpO1xyXG4gICAgICAgIC8vIFNldCB1cCBhIHJhbmRvbSBwb3NpdGlvbiBmb3IgdGhlIHN0YXJcclxuICAgICAgICBuZXdTdGFyLnNldFBvc2l0aW9uKHRoaXMuZ2V0TmV3U3RhclBvc2l0aW9uKCkpO1xyXG4gICAgICAgIC8vIFNhdmUgYSByZWZlcmVuY2Ugb2YgdGhlIEdhbWUgb2JqZWN0IG9uIHRoZSBTdGFyIHNjcmlwdCBjb21wb25lbnRcclxuICAgICAgICBuZXdTdGFyLmdldENvbXBvbmVudCgnc3RhcicpLmdhbWUgPSB0aGlzO1xyXG4gICAgICAgIC8vIFJlc2V0IHRpbWVyLCByYW5kb21seSBjaG9vc2UgYSB2YWx1ZSBhY2NvcmRpbmcgdGhlIHNjYWxlIG9mIHN0YXIgZHVyYXRpb25cclxuICAgICAgICB0aGlzLnN0YXJEdXJhdGlvbiA9IHRoaXMubWluU3RhckR1cmF0aW9uICsgTWF0aC5yYW5kb20oKSAqICh0aGlzLm1heFN0YXJEdXJhdGlvbiAtIHRoaXMubWluU3RhckR1cmF0aW9uKTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0TmV3U3RhclBvc2l0aW9uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHJhbmRYID0gMDtcclxuICAgICAgICAvLyBBY2NvcmRpbmcgdG8gdGhlIHBvc2l0aW9uIG9mIHRoZSBncm91bmQgbGV2ZWwgYW5kIHRoZSBtYWluIGNoYXJhY3RlcidzIGp1bXAgaGVpZ2h0LCByYW5kb21seSBvYnRhaW4gYW4gYW5jaG9yIHBvaW50IG9mIHRoZSBzdGFyIG9uIHRoZSB5IGF4aXNcclxuICAgICAgICB2YXIgcmFuZFkgPSB0aGlzLmdyb3VuZFkgKyBNYXRoLnJhbmRvbSgpICogdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KCdQbGF5ZXInKS5qdW1wSGVpZ2h0ICsgNTA7XHJcbiAgICAgICAgLy8gQWNjb3JkaW5nIHRvIHRoZSB3aWR0aCBvZiB0aGUgc2NyZWVuLCByYW5kb21seSBvYnRhaW4gYW4gYW5jaG9yIHBvaW50IG9mIHN0YXIgb24gdGhlIHggYXhpc1xyXG4gICAgICAgIHZhciBtYXhYID0gdGhpcy5ub2RlLndpZHRoLzI7XHJcbiAgICAgICAgcmFuZFggPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyICogbWF4WDtcclxuICAgICAgICAvLyBSZXR1cm4gdG8gdGhlIGFuY2hvciBwb2ludCBvZiB0aGUgc3RhclxyXG4gICAgICAgIHJldHVybiBjYy52MihyYW5kWCwgcmFuZFkpO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXIueCA+IHRoaXMubm9kZS53aWR0aC8yIC0gdGhpcy5wbGF5ZXIud2lkdGgvMikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci54ID0gTWF0aC5yb3VuZCh0aGlzLm5vZGUud2lkdGgvMikgLSB0aGlzLnBsYXllci53aWR0aC8yO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wbGF5ZXIueCA8IC10aGlzLm5vZGUud2lkdGgvMiArIHRoaXMucGxheWVyLndpZHRoLzIpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIueCA9IC10aGlzLm5vZGUud2lkdGgvMiArIHRoaXMucGxheWVyLndpZHRoLzI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAvLyBVcGRhdGUgdGltZXIgZm9yIGVhY2ggZnJhbWUsIHdoZW4gYSBuZXcgc3RhciBpcyBub3QgZ2VuZXJhdGVkIGFmdGVyIGV4Y2VlZGluZyBkdXJhdGlvblxyXG5cclxuICAgICAgICAvLyBJbnZva2UgdGhlIGxvZ2ljIG9mIGdhbWUgZmFpbHVyZVxyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyID4gdGhpcy5zdGFyRHVyYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGltZXIgKz0gZHQ7XHJcbiAgICB9LFxyXG5cclxuICAgIGdhaW5TY29yZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2NvcmUgKz0gMTtcclxuICAgICAgICAvLyBVcGRhdGUgdGhlIHdvcmRzIG9mIHRoZSBzY29yZURpc3BsYXkgTGFiZWxcclxuICAgICAgICB0aGlzLnNjb3JlRGlzcGxheS5zdHJpbmcgPSAnU2NvcmU6ICcgKyB0aGlzLnNjb3JlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgLy8gUGxheSB0aGUgc2NvcmluZyBzb3VuZCBlZmZlY3RcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuc2NvcmVBdWRpbywgZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ2FtZU92ZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBTdG9wIHRoZSBqdW1waW5nIGFjdGlvbiBvZiB0aGUgUGxheWVyIG5vZGVcclxuICAgICAgICB0aGlzLnBsYXllci5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIC8vIHJlbG9hZCB0aGUgXCJnYW1lXCIgc2NlbmVcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2dhbWUnKTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------
