
#pragma strict

// Variable poitning to object prefab
var alienPrefab : Transform;

// Speed of the wave movement
var speed : float;

// Direction of the wave movement (-ve means left, +ve is right)
private var direction: int=-1;

// difficulty pattern
var difficultyPattern : int = 0;

function Start () {
	var gapBetweenAliens : float = 1.5f;
	difficultyPattern = GameMaster.playerLevel;
	for(var y : int = 0; y < difficultyPattern; y++) {
		// Horizontal offset for every other row
		var offsetX : float = ((y % 2 == 0) ? 0.0f : 0.5f) * gapBetweenAliens;
		for(var x : int = -3; x < 3; ++x) {
			// Create new game object (from the prefab)
			var alien = Instantiate(alienPrefab);
			alien.parent = transform;
			// Position the newly created object in the wave
			alien.position = new Vector3((x*gapBetweenAliens)+ offsetX, 4 + (y * gapBetweenAliens),0);
			Debug.Log(alien.position);			
		}
	
	}
}

// Per each frame...
function Update () {
   // Move the wave on the horisonatal axis
   transform.Translate( new Vector3(Time.deltaTime * direction * speed,0,0));
}

// Method for changing wave direction (to be invoked
// from a collider)
function SetDirectionLeft() {
   // Check if the current direction is to the right
   if(direction == 1) {
      // Changing the direction
      // push the wave down a bit as well
      direction = -1;   
      transform.Translate(new Vector3(0,-0.5f,0));
   }
}

// Method for changing wave direction (to be invoked
// from a collider)
function SetDirectionRight() {
   // Check if the current direction is to the left
   if(direction == -1) {
      // Changing the direction
      // push the wave down a bit as well
      direction = 1;   
      transform.Translate(new Vector3(0,-0.5f,0));
   }
}