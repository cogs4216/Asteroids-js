    
	function BigAsteroid() {
		var tAsteroid = new Sprite(game, "bigRock.png", 30, 27);
		return tAsteroid;
	}//object definition
	
	function MedAsteroid() {
		var tAsteroid = new Sprite(game, "medRock.png", 17, 16);
		return tAsteroid;
	}//object definition
	
	function SmallAsteroid() {
		var tAsteroid = new Sprite(game, "smallRock.png", 9, 8);
		return tAsteroid;
	}//object definition
	
	function Bullet(){
		var tBullet = new Sprite(game, "bullet.png", 3, 3);
		tBullet.setBoundAction(DIE);
		return tBullet;
	}//object definition
