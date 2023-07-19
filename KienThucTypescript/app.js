async function testAxios() {
	const res = await axios.get("https://jsonplaceholder.typicode.com/users");
	console.dir(res);
	console.log(res.data);
}
testAxios();
