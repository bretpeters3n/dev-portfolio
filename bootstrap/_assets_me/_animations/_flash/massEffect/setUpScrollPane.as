import com.freestyleinteractive.ui.ScrollPane;

function mSetUpScrollPane( inPaneClip, inSpeed){
	windowX = iMarkerTL._x;
	windowY = iMarkerTL._y;
	windowW = iMarkerBR._x - iMarkerTL._x;
	windowH = iMarkerBR._y - iMarkerTL._y;
	
	paneX = inPaneClip.iMarkerTL._x;
	paneY = inPaneClip.iMarkerTL._y
	paneW = inPaneClip.iMarkerBR._x - inPaneClip.iMarkerTL._x;
	paneH = inPaneClip.iMarkerBR._y - inPaneClip.iMarkerTL._y;
	
	oScrollPane = new ScrollPane(this, inPaneClip, this, "mOnBGEvent", 
								 windowX, 
								 windowY, 
								 windowW, 
								 windowH, 
								 paneW, 
								 paneH, 
								 inSpeed, 
								 paneX, 
								 paneY, 
								 [windowX-2, windowY-2, 300, 250]);
}


