class Fighter {
	constructor(Obj) {
		Obj.wins = 0;
		Obj.losses = 0;
		let totalHp = Obj.hp;
		this.getName = function () {
			return Obj.name;
		};
		this.getDamage = function () {
			return Obj.damage;
		};
		this.getStrength = function () {
			return Obj.strength;
		};
		this.getAgility = function () {
			return Obj.agility;
		};
		this.getHealth = function () {
			return Obj.hp;
		};
		this.logCombatHistory = function () {
			console.log(`Name: ${Obj.name}, Wins: ${Obj.wins}, Losses: ${Obj.losses}`);
		};
		this.addWin = function () {
			Obj.wins += 1;
		};
		this.addLoss = function () {
			Obj.losses += 1;
		};
		this.heal = function(amountHp) {
			Obj.hp += amountHp;
			if (Obj.hp > totalHp) {
				Obj.hp = totalHp;
			}
		};
		this.dealDamage = function(amountHp) {
		Obj.hp -= amountHp;
		if (Obj.hp < 0) {
			Obj.hp = 0;
		}
		};
		
	}


	attack(defender) {
		let probability = (parseInt(defender.getStrength()) + parseInt(defender.getAgility())) / 100; 
		if (Math.random() >= probability) {
			defender.dealDamage(+this.getDamage());
			console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`);
		}else {
			console.log(`${this.getName()} attack missed`);
		}
	}

}
const myFighter = new Fighter({name: 'Maximus', damage: 20, strength: 20, agility: 15, hp: 100}); 
const myFighter2 = new Fighter({name: 'Commodus', damage: 25, strength: 25, agility: 20, hp: 90}); 

function battle(fighter, fighter2) {
	if (+fighter.getHealth() <= 0) {
		console.log(`${fighter.getName()} is dead and can't fight`);
	}else if(+fighter2.getHealth() <= 0) {
		console.log(`${fighter2.getName()} is dead and can't fight`);	
	}
	while(fighter.getHealth() > 0 && fighter2.getHealth() > 0) {
		fighter.attack(fighter2);
		if (fighter2.getHealth() <= 0) {
			fighter2.addLoss();
			fighter.addWin();
			console.log(`${fighter.getName()} won!`);
			break;
		}
		fighter2.attack(fighter);
		if (fighter.getHealth() <= 0) {
			fighter.addLoss();
			fighter2.addWin();
			console.log(`${fighter2.getName()} won!`);
			break;
		}
	}
}


