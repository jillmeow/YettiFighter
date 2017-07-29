
#pragma strict

//Point the alien is worth
var points: int = 100;

// When enemy collides with an object with a
// collider that is a trigger...
function OnTriggerEnter2D(other : Collider2D) {
	var enemyWave : EnemyWaveClass;

	// Check if colliding with the left or right wall
	// (by checking the tags of the collider that the enemy
	//  collided with)
	if(other.tag == "LeftWall") {
		// If collided with the left wall, get a reference
		// to the EnemyWave object, which should be a component
		// of enemies parent
		enemyWave = transform.parent.GetComponent(EnemyWaveClass);
		// Set direction of the wave
		enemyWave.SetDirectionRight();
	} else if(other.tag == "RightWall") {
		// If collided with the right wall, get a reference
		// to the EnemyWave object, which should be a component
		// of enemies parent
		enemyWave = transform.parent.GetComponent(EnemyWaveClass);
		// Set direction of the wave
		enemyWave.SetDirectionLeft();
		} else {
      // Collision with something that is not a wall
      // Check if collided with a projectile
      var projectile : ProjectileClass;
      
      // A projectile has a ProjectileClass script component,
      // so try to get a reference to that component
      projectile = other.GetComponent(ProjectileClass);

      //If that refernce is not null, then check if it's an enemyProjectile      
      if(projectile != null && !projectile.enemyProjectile) {
         // Collided with non enemy projectile (so a player projectile)
         
         // Destroy the projectile game object
         Destroy(other.gameObject);
         
         // Report enemy hit to the game master
         GameMaster.EnemyHit(this);
         
         // Destroy self
         Destroy(gameObject);
      }
	}             
}