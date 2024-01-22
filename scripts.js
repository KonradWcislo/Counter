const decreaseBtn = document.getElementById("decreaseBtn")
const resetBtn = document.getElementById("resetBtn")
const increaseBtn = document.getElementById("increaseBtn")

const countLabel = document.getElementById("countLabel")

let count = 0

function updateCountStyle() {
	countLabel.textContent = count
	if (count > 0) {
		countLabel.style.color = "green"
	} else if (count < 0) {
		countLabel.style.color = "red"
	} else {
		countLabel.style.color = "black"
	}
}

decreaseBtn.onclick = function () {
	count++
	updateCountStyle()
}

resetBtn.onclick = function () {
	count = 0
	updateCountStyle()
}

increaseBtn.onclick = function () {
	count--
	updateCountStyle()
}
