function convertSeconds(seconds) {
	const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);
	const remainingSeconds = seconds % 60;
	return `${hours}:${minutes}:${remainingSeconds}`;
}

console.log(convertSeconds(3870));
// 1:4:30
