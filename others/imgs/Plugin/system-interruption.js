
/*--------------------------------------------------------------------------
  
  Add an entry of "Resume" at obj.
  
  Author:
  SapphireSoft
  https://srpgstudio.com/
  
  History:
  2018/08/19 Released
  
--------------------------------------------------------------------------*/

(function() {

var alias1 = TitleScene._configureTitleItem;
TitleScene._configureTitleItem = function(groupArray) {
	alias1.call(this, groupArray);
	
	groupArray.insertObject(TitleCommand.Interruption, 2);
};

TitleCommand.Interruption = defineObject(BaseTitleCommand,
{
	openCommand: function() {
		// Load interruption.sav. The file is not deleted automatically.
		root.getLoadSaveManager().loadInterruptionFile();
	},
	
	moveCommand: function() {
		return MoveResult.END;
	},
	
	getCommandName: function() {
		return 'Resume';
	},
	
	isSelectable: function() {
		// Check if interruption.sav exists.
		return root.getLoadSaveManager().isInterruptionFileLoadable();
	}
}
);

var alias2 = MapCommand.configureCommands;
MapCommand.configureCommands = function(groupArray) {
	alias2.call(this, groupArray);
	
	groupArray.insertObject(MapCommand.Interruption, groupArray.length - 1);
};

MapCommand.Interruption = defineObject(BaseListCommand,
{
	_questionWindow: null,

	openCommand: function() {
		this._questionWindow = createWindowObject(QuestionWindow, this);
		this._questionWindow.setQuestionMessage(this._getMessage());
		this._questionWindow.setQuestionActive(true);
	},
	
	moveCommand: function() {
		var ans;
		
		if (this._questionWindow.moveWindow() !== MoveResult.CONTINUE) {
			ans = this._questionWindow.getQuestionAnswer();
			if (ans === QuestionAnswer.YES) {
				// Output interruption.sav to Save folder.
				root.getLoadSaveManager().saveInterruptionFile(SceneType.FREE, root.getCurrentSession().getCurrentMapInfo().getId(), this._getCustomObject());
				
				// Return to title scene.
				root.resetGame();
			}
			
			return MoveResult.END;
		}
	
		return MoveResult.CONTINUE;
	},
	
	drawCommand: function() {
		var x = LayoutControl.getCenterX(-1, this._questionWindow.getWindowWidth());
		var y = LayoutControl.getCenterY(-1, this._questionWindow.getWindowHeight());
		
		this._questionWindow.drawWindow(x, y);
	},
	
	getCommandName: function() {
		return 'Suspend';
	},
	
	_getMessage: function() {
		return 'Suspend the game?';
	},
	
	_getCustomObject: function() {
		return {};
	}
}
);

})();
