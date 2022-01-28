const robot = require('robotjs');
const mouse = robot.getMousePos();

let interval;
let currentPosX = mouse.x;
let isMax = false;

function startMagic() {
	setTimeout(() => {
		interval = setInterval(() => {
			if (currentPosX > 1200) {
				isMax = true;
			} else if (currentPosX < 600) {
				isMax = false;
			}
			if (isMax) {
				robot.moveMouseSmooth(currentPosX - 100, mouse.y);
				currentPosX -= 100;
			} else if (!isMax) {
				robot.moveMouseSmooth(currentPosX + 100, mouse.y);
				currentPosX += 100;
			}
		}, 10);
	}, 300);

	window.addEventListener('keydown', () => {
		clearInterval(interval);
		interval = 0;
	});
}
