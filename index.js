const btn = document.querySelector(".canvas-button");
const colors = ["red", "blue", "yellow", "white"];
const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const white = document.querySelector(".white");
const blue = document.querySelector(".blue");
const black = document.querySelector(".black");
const clear = document.querySelector(".clear");
const classes = [
	"one",
	"two",
	"three",
	"four",
	"five",
	"six",
	"seven",
	"eight",
	"nine",
	"ten",
	"eleven",
	"twelve",
	"thirteen",
	"fourteen",
];

var currentColor;

classes.forEach((c) =>
	document.querySelector(`.${c}`).addEventListener("click", () => {
		document.querySelector(`.${c}`).style.backgroundColor = currentColor;
	})
);

[red, yellow, blue, white, black].forEach((i) =>
	i.addEventListener("click", () => {
		currentColor = i.value;
	})
);

btn.addEventListener("click", () => {
	document
		.querySelectorAll(".hide")
		.forEach((el) => el.classList.toggle("hide"));

	const canvas = document.querySelector(".canvas");
	const rows = new Array(5);
	const columns = new Array(6);

	for (let i = 0; i < rows.length; i++) {
		rows[i] = `${(Math.random() * 1 + 0.1).toFixed(2)}fr`;
	}

	for (let i = 0; i < columns.length; i++) {
		columns[i] = `${(Math.random() * 1 + 0.1).toFixed(2)}fr`;
	}

	canvas.style.gridTemplateColumns = columns.join(" ");
	canvas.style.gridTemplateRows = rows.join(" ");
	// canvas.style.gridTemplateAreas = areas;
});

clear.addEventListener("click", () => {
	classes.forEach(
		(c) => (document.querySelector(`.${c}`).style.backgroundColor = "white")
	);
});
