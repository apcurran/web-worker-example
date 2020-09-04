"use strict";

const fibSpan = document.getElementById("fib-num");
const postsSection = document.getElementById("main__posts");
const myWorker = new Worker("worker.js");
const myWorker2 = new Worker("worker-2.js");

// myWorker.postMessage("Message test to worker.");

myWorker.onmessage = (event) => {
    const posts = event.data;

    for (let post of posts) {
        createPosts(post.title, post.id);
    }
};

myWorker2.onmessage = (event) => {
    fibSpan.textContent = event.data;
}

function createPosts(titleData, idData) {
    const article = document.createElement("article");
    const postTitleH1 = document.createElement("h1");
    const userIdPara = document.createElement("p");

    postTitleH1.textContent = titleData;
    userIdPara.textContent = idData;

    article.append(postTitleH1, userIdPara);
    postsSection.append(article);
}