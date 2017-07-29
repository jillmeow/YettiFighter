
#pragma strict

// Variables referencing two edge colliders
var leftWall: EdgeCollider2D;
var rightWall: EdgeCollider2D;

// When creating the object...
function Start () {

	// Get the width and height of the camera (in pixels)
	var screenW : float = Camera.main.pixelWidth;
	var screenH : float = Camera.main.pixelHeight;

	// Create an array consisting of two Vector2 object
	var edgePoints: Vector2[] = new Vector2[2];
	
	// Convert screen coordinates point (0,0) to world coordinates
	var leftBottom : Vector3 = Camera.main.ScreenToWorldPoint(new Vector3(0f, 0f, 0f));		
	// Convert screen coordinates point (0,H) to world coordinates
	var leftTop : Vector3 = Camera.main.ScreenToWorldPoint(new Vector3(0f, screenH, 0f));		
				
	// Set the two points in the array to screen left bottom
	// and screen left top points				
	edgePoints[0] = leftBottom;
	edgePoints[1] = leftTop;
	
	// Position the left wall edge collider
	// at the left edge of the camera
	leftWall.points = edgePoints;

	// Convert screen coordinates point (W,0) to world coordinates
	var rightBottom : Vector3 = Camera.main.ScreenToWorldPoint(new Vector3(screenW, 0f, 0f));		
	// Convert screen coordinates point (W,H) to world coordinates
	var rightTop : Vector3 = Camera.main.ScreenToWorldPoint(new Vector3(screenW, screenH, 0f));		

	// Set the two points in the array to screen right bottom
	// and screen right top points				
	edgePoints[0] = rightBottom;
	edgePoints[1] = rightTop;

	// Position the left wall edge collider
	// at the left edge of the camera
	rightWall.points = edgePoints;
}

// HUD
function OnGUI() {
   // Show player score in white on the top left of the screen
   GUI.color = Color.white;  
   GUI.skin.label.alignment = TextAnchor.UpperLeft;
   GUI.skin.label.fontSize = 20;
   GUI.skin.label.fontStyle = FontStyle.Bold;
   GUI.Label(new Rect(15,35,500,100), "Score: " + GameMaster.playerScore);

   // Show the player lives in red on the top right of the screen
   GUI.color = Color.red;
   GUI.skin.label.alignment = TextAnchor.UpperRight;
   GUI.skin.label.fontSize = 20;
   GUI.skin.label.fontStyle = FontStyle.Bold;
   GUI.Label(new Rect(Screen.width - 320,15,300,100), "Lives: " + GameMaster.playerHealth);
   
   // Show the player level in white on the top left of the screen
   GUI.color = Color.yellow;  
   GUI.skin.label.alignment = TextAnchor.UpperLeft;
   GUI.skin.label.fontSize = 20;
   GUI.skin.label.fontStyle = FontStyle.Bold;
   GUI.Label(new Rect(15,10,500,100), "Level " + GameMaster.playerLevel);
}