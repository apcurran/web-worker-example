"use strict";

// onmessage = (event) => {
//     console.log(event.data);

//     postMessage("Response message from worker to main thread!");
// };

// Fetch data from API
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => postMessage(data));