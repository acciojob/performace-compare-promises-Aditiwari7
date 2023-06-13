// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here

const opAll = document.getElementById('output-all');
const opAny = document.getElementById('output-any');

const promises = apiUrls.map(url => fetch(url));

Promise.all(promises).then(responses =>{
	responses.forEach(response => {
		const row = document.createElement('tr');
		const urlCell = document.createElement('td');
		const staCell = document.createElement('td');
		urlCell.textContent = response.url;
		staCell.textContent = response.status;
		row.appendChild(urlCell);
		row.appendChild(staCell);
		opAll.appendChild(row);
	});
}).catch(error => {
	console.log(error);
});

Promise.any(promises).then(response => {
		const row = document.createElement('tr');
		const urlCell = document.createElement('td');
		const staCell = document.createElement('td');
		urlCell.textContent = response.url;
		staCell.textContent = response.status;
		row.appendChild(urlCell);
		row.appendChild(staCell);
		opAny.appendChild(row);
}).catch(error => {
	console.log(error);
});