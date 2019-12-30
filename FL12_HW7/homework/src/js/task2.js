// Your code goes here
const ATTEMPTS = 3;
const RANGE_INCREASE = 4;
const PRIZE_STEP = 2;

let isPlay = confirm('Do you want to play a game?');

if (!isPlay) {
	alert('You did not become a billionaire, but can.');
} else if(isPlay) {
	let range = 9;
	let defaultPrize = 100;
	let maxPrize = defaultPrize;
	let userPrize = 0;
	let randomInt = Math.floor(Math.random() * range);
	let isPlayAgain = false;

	for(let i = 1; i <= ATTEMPTS; i++) {
		if (isPlayAgain) {
			range += RANGE_INCREASE;
			defaultPrize *= PRIZE_STEP;
			maxPrize = defaultPrize;
			randomInt = Math.floor(Math.random() * range);
			i = 0;
			isPlayAgain = false;
			continue;
		}
		let userInt = +prompt(`
			Choose a roulette pocket number from 0 to ${range- 1}
			Attempts left: ${ATTEMPTS+1-i}
			Total prize: ${userPrize}
			Possible prize on current attempt:${maxPrize}
			`);
		if (userInt === randomInt) {
			userPrize += maxPrize;
			isPlayAgain = confirm('Congratulation, you won!   Your prize is:' + userPrize + '$' + 
				'Do you want to continue?');
			if (!isPlayAgain) {
				alert('Thank you for your participation. Your prize is:' + userPrize + '$');
				isPlayAgain = confirm('Do you want to continue?');
				if (isPlayAgain) {
					isPlayAgain = true;
					i = 0;
					continue;
				}else {
					break;
				}
			}else {
					i = 0;
					isPlayAgain = true;
					continue;
			}
		}else if(i === ATTEMPTS) {
			alert('Thank you for your participation. Your prize is:' + userPrize + '$');
			isPlayAgain = confirm('Do you want to continue?');
			if (isPlayAgain) {
				isPlayAgain = true;
				i = 0;
				continue;
			}


		}else {
			maxPrize = maxPrize / PRIZE_STEP;
		}
	}

}