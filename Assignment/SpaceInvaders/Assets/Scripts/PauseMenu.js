var newSkin : GUISkin;
var logoTexture : Texture2D;

function thePauseMenu() {
    //layout start
    GUI.BeginGroup(Rect(Screen.width / 2 - 150, 50, 300, 250));
    
    //the menu background box
    GUI.Box(Rect(0, 0, 300, 250), "");
    
    //logo picture
    GUI.Label(Rect(15, 10, 300, 68), logoTexture);
    
    ///////pause menu buttons
    //game resume button
    if(GUI.Button(Rect(55, 100, 180, 40), "Resume")) {
    //resume the game
    Time.timeScale = 1.0;
    //disable pause menu
    var script4 = GetComponent("PauseMenu");
    script4.enabled = false;
    }
    
    //main menu return button (level 0)
    if(GUI.Button(Rect(55, 150, 180, 40), "Main Menu")) {
        GameMaster.playerHealth = 3;
		GameMaster.playerScore = 0;
		GameMaster.playerLevel = 1;
    Application.LoadLevel(0);
    Time.timeScale = 1.0;
    }
    
    //quit button
    if(GUI.Button(Rect(55, 200, 180, 40), "Quit")) {
    Application.Quit();
    }
    
    //layout end
    GUI.EndGroup(); 
}

function OnGUI () {
    //load GUI skin
    GUI.skin = newSkin;
    
    //show the mouse cursor
    Screen.showCursor = true;
    
    //run the pause menu script
    thePauseMenu();
}