"use strict";

const postsSection = document.getElementById("main__posts");
const myWorker = new Worker("worker.js");

// myWorker.postMessage("Message test to worker.");

myWorker.onmessage = (event) => {
    const posts = event.data;

    for (let post of posts) {
        createPosts(post.title, post.id);
    }
};

function createPosts(titleData, idData) {
    const article = document.createElement("article");
    const postTitleH1 = document.createElement("h1");
    const userIdPara = document.createElement("p");

    postTitleH1.textContent = titleData;
    userIdPara.textContent = idData;

    article.append(postTitleH1, userIdPara);
    postsSection.append(article);
}