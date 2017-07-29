
#pragma strict

// Private variables (not visible in the Inspector panel)
// The speed of player movement
private var speed : float = 10;

// Flag indicating whether the player is at the 
// left edge of the screen
private var atLeftWall: boolean = false;

// Flag indicating whether the player is at the 
// right edge of the screen
private var atRightWall: boolean = false;

// On collision with a trigger collider...
function OnTriggerEnter2D(other : Collider2D) {
   // Check the tag of the object the player
   // has collided with
   if(other.tag == "LeftWall") {
      // If collided with the left wall, set
      // the left wall flag to true
      atLeftWall = true;
   } else if(other.tag == "RightWall") {
      // If collided with the right wall, set
      // the right wall flag to true
      atRightWall = true;
      } else {
      // Collision with something that is not a wall
      // Check if collided with a projectile
      var projectile : ProjectileClass;
      
      // A projectile has a ProjectileClass script component,
      // so try to get a reference to that component
      projectile = other.GetComponent(ProjectileClass);

      //If that refernce is not null, then check if it's an enemyProjectile      
      if(projectile != null && projectile.enemyProjectile) {
         // Collided with an enemy projectile
         
         // Destroy the projectile game object
         Destroy(other.gameObject);
         
         // Report player hit to the game master
         GameMaster.PlayerHit();
         
         // Destroy self
         Destroy(gameObject);
      }
      if(other.tag == "Health"){
      	 GameMaster.PlayerGainHP();
      	 Destroy(other.gameObject);
      }
      if(other.tag == "Bonus"){      
      	 GameMaster.PlayerBonusPoints();
      	 Destroy(other.gameObject);
      }
   }           
}

// When no longer colliding with an object...
function OnTriggerExit2D(other : Collider2D) {
   // Check the tag of the object the player
   // has ceased to collide with
   if(other.tag == "LeftWall") {
      // If collided with the left wall, set
      // the left wall flag to true
      atLeftWall = false;
   } else if(other.tag == "RightWall") {
      // If collided with the right wall, set
      // the right wall flag to true
      atRightWall = false;
   }
}
// When player collides with an object that is
// not a trigger...
function OnCollisionEnter2D(other: Collision2D) {
   // If the other object is tagged as "Player"...
   if(other.gameObject.tag == "Enemy") {
   
      // Report player hit to the game master
      GameMaster.PlayerHit();
	
      // Destroy the Player game object
      Destroy(gameObject);
   }
}
// Per every frame... 
function Update () {
	// Player movement from input (it's a variable between -1 and 1) for
	// degree of left or right movement
	var movementInput : float = Input.GetAxis("Horizontal");
	// Move the player object
  	if(atLeftWall && (movementInput < 0) )  {
  		movementInput = 0;
   }
   	if(atRightWall && (movementInput > 0) )  {
      	movementInput = 0;
   }
	transform.Translate( new Vector3(Time.deltaTime * speed * movementInput,0,0));
	if(Input.GetButton("Jump")) {
      // Get player's attack component
      // and execute its Shoot() method
      var attack : AttackClass;
      attack = GetComponent(AttackClass);
      Debug.Log(attack);
      attack.Shoot();
      //Debug.Log(attack);
   }
}


