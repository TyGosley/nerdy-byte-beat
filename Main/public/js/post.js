console.log(window.location.href);
console.log(window.location.href.split('/'));
console.log(window.location.href.split('/')[4]);

let postId = window.location.href.split('/')[4];

document.querySelector(".btn-primary").addEventListener("click", (event) => {
    window.location = `/edit/${postId}`;
});

document.querySelector(".btn-success").addEventListener("click", (event) => {
    window.location = `/comment/${postId}`;
});