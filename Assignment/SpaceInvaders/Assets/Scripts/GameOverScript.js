
#pragma strict

// Display game over message
function OnGUI() {

	// Show player score in white on the top left of the screen
	GUI.color = Color.white;	
	GUI.skin.label.alignment = TextAnchor.MiddleCenter;
	GUI.skin.label.fontSize = 50;
	GUI.skin.label.fontStyle = FontStyle.Bold;
	GUI.Label(new Rect(0,Screen.height/ 4f,Screen.width,70), "Game over");
	
	var message : String;

   // Check player's lives left...if more than 0,
   // then player won, otherwise the game was lost   
   // Generate appropriate final message
   if(GameMaster.playerHealth <= 0) {
      // The lost message will be shown in red
      message = "You lose!";
      GUI.color = Color.red;   
   } else {
      // The won message will be shown in white
      message = "You won!!!";
      GUI.color = Color.blue;
   }      
   // Show lost/won message
   GUI.skin.label.fontSize = 30;
   GUI.Label(new Rect(0,Screen.height/ 4f + 80f,Screen.width,70), message);
    // Last line will be shown in white
   GUI.color = Color.white;
   GUI.Label(new Rect(0,Screen.height/ 4f + 140f,Screen.width,70), "Score: " + GameMaster.playerScore);
   
   if(GUI.Button(Rect(300, Screen.height/ 4f + 240f, 90, 40), "Play Again")){
		Application.LoadLevel("Level1");
		GameMaster.playerHealth = 3;
		GameMaster.playerScore = 0;
		GameMaster.playerLevel = 1;    
   }
   if(GUI.Button(Rect(400, Screen.height/ 4f + 240f, 90, 40), "Main Menu")){   
   		Application.LoadLevel("MainMenu");
   }
}