fetch("http://localhost:3000/images/1") 
.then((response) => response.json())
.then(function (data) {
    let imgSrc = data.image;
    let imgTitle = data.title;
    document.getElementById("card-title").textContent = imgTitle;
    document.getElementById("card-image").src = imgSrc;
});
const likeCount = document.getElementById("like-count");
let likes;
document.getElementById("like-button").addEventListener("click", () => {
likes += 1;
createLikes();
});
fetch("http://localhost:3000/images/1")
.then((response) => response.json())
.then(flat_gram);

function flat_gram(data) {
likes = data.likes;
createLikes();
}
function createLikes() {
document.getElementById("like-count").textContent = `${likes} Likes`;
}
function getComments() {
fetch("http://localhost:3000/images/1")
    .then((res) => res.json())
    .then((obj) => {
    let array = obj.comments;
    array.forEach((element) => {
        let li = document.createElement("li");
        li.textContent = element.content;
        document.querySelector("#comments-list").appendChild(li);
    });
    });
}
getComments();

document.addEventListener("DOMContentLoaded", () => {
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    handleComment(e.target.comment.value);
});
});
function handleComment(todo) {
let ul = document.createElement("li");
ul.textContent = todo;
document.querySelector("#comments-list").appendChild(ul);
}