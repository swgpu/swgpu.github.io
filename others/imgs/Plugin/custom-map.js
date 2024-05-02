
/*--------------------------------------------------------------------------
  
  Display a message when the reinforcements appears.
    
  Usage:
  Describe
  
  {r_msg: 'The reinforcements appeared'}
  
  etc. at a custom parameter of the map.
  
  Author:
  SapphireSoft
  https://srpgstudio.com/
  
  History:
  2018/08/19 Released
  
--------------------------------------------------------------------------*/

var ReinforcementAppearMode = {
	EVENT: 0,
	APPEAR: 1
};

var ReinforcementAppearFlowEntry = defineObject(BaseFlowEntry,
{
	_dynamicEvent: null,
	_reinforceChecker: null,
	
	enterFlowEntry: function(turnChange) {
		this._prepareMemberData(turnChange);
		return this._completeMemberData(turnChange);
	},
	
	moveFlowEntry: function() {
		var mode = this.getCycleMode();
		var result = MoveResult.CONTINUE;
		
		if (mode === ReinforcementAppearMode.EVENT) {
			result = this._moveEvent();
		}
		else if (mode === ReinforcementAppearMode.APPEAR) {
			result = this._moveAppear();
		}
		
		return result;
	},
	
	drawFlowEntry: function() {
		var mode = this.getCycleMode();
		
		if (mode === ReinforcementAppearMode.APPEAR) {
			this._reinforceChecker.drawReinforcementChecker();
		}
	},
	
	_prepareMemberData: function(turnChange) {
		this._dynamicEvent = createObject(DynamicEvent);
		this._reinforceChecker = createObject(ReinforcementChecker);
	},
	
	_completeMemberData: function(turnChange) {
		var result = this._reinforceChecker.enterReinforcementChecker(this.isFlowSkip());
		
		if (result === EnterResult.OK) {
			if (this._checkEvent()) {
				this.changeCycleMode(ReinforcementAppearMode.EVENT);
			}
			else {
				this._reinforceChecker.startMove();
				this.changeCycleMode(ReinforcementAppearMode.APPEAR);
			}
		}
		
		return result;
	},
	
	_moveEvent: function() {
		var result = this._dynamicEvent.moveDynamicEvent();
		
		if (result !== MoveResult.CONTINUE) {
			this._reinforceChecker.startMove();
			this.changeCycleMode(ReinforcementAppearMode.APPEAR);
		}
		
		return MoveResult.CONTINUE;
	},
	
	_moveAppear: function() {
		return this._reinforceChecker.moveReinforcementChecker();
	},
	
	_checkEvent: function() {
		var generator;
		var message = this._getMessage();
		
		if (message === '') {
			return false;
		}
		
		generator = this._dynamicEvent.acquireEventGenerator();
		generator.messageTitle(message, 0, 0, true);
		this._dynamicEvent.executeDynamicEvent();
		
		return true;
	},
	
	_getMessage: function() {
		var mapInfo = root.getCurrentSession().getCurrentMapInfo();
		
		if (typeof mapInfo.custom.r_msg === 'undefined') {
			return '';
		}
		
		return mapInfo.custom.r_msg;
	}
}
);
