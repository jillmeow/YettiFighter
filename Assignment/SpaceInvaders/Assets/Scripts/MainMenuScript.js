
#pragma strict

var newSkin : GUISkin;
var logoTexture : Texture2D;

function mainMenu(){
	//layout start
    GUI.BeginGroup(Rect(Screen.width / 2 - 150, 50, 300, 250));
    
    //logo picture
    GUI.Label(Rect(36, 20, 300, 80), logoTexture);
    
    if(GUI.Button(new Rect(100, 110,100,45), "PLAY")){
		GameMaster.playerHealth = 3;
		GameMaster.playerScore = 0;
		GameMaster.playerLevel = 1;
		Application.LoadLevel("Level1");
	
	}
	if(GUI.Button(new Rect(100, 170, 100, 45), "EXIT")){
		Application.Quit();
	}
	//layout end
    GUI.EndGroup();

}

//For the assignment
function OnGUI() {	
	//load GUI skin
    GUI.skin = newSkin;
    
    //show the mouse cursor
    Screen.showCursor = true;
    
	mainMenu();
}