
#pragma strict

// Static variables - there's only one instance
// of this variable for the entire game

// Player health - always start with 3 lives
static var playerHealth: int = 3;
// Player score
static var playerScore: int = 0;
// Player level
static var playerLevel: int = 1;

function Awake () {
	// Never destroy this object, even
	// when level is re-loaded
	DontDestroyOnLoad(this);
}

// Method to call when enemy is hit
static function EnemyHit(alien : AlienClass) {
	// Add enemy points to player's score
	playerScore += alien.points;
	// Get the reference to alien's parent, the wave object
   var enemyWave : Transform;
   enemyWave = alien.transform.parent;
   
   // Get an array of references to all children of the wave game object
   // who have an AlienClass component (so, we're looking for all the
   // aliens remaining in the wave)
   var aliensLeft : Component[];
   aliensLeft = enemyWave.GetComponentsInChildren (AlienClass);
   // If only one alien is left, that's the alien that just has been
   // hit and is about to be deleted...so no more aliens will be left
   if(aliensLeft.length <= 1) {
   	  playerLevel+=1;
   	  Debug.Log(playerLevel);
   	  if(playerLevel >= 6){
   	  	Application.LoadLevel("GameOver");
   	  }
   	  else {
      	Application.LoadLevel("Level"+playerLevel);
      	Debug.Log("Level 2");
      }
   }
}

// Method to call when player is hit
static function PlayerHit() {
	playerHealth--;
	// Reduce player's lives
	if(playerHealth > 0) {
		// If more lives left, then reload the
		// level 
		Application.LoadLevel("Level1");
	} else {
      //No more lives left, load the GameOver scene
      Application.LoadLevel("GameOver");
	}
}
// Method to call when player is hit by medicine
// player's health is up to 10 points
static function PlayerGainHP(){
	if(playerHealth < 6){
		playerHealth++;
	}
}

static function PlayerBonusPoints(){
	playerScore = playerScore + 500;
}