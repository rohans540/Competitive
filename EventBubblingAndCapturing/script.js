document.querySelector(".grand")
    .addEventListener('click', () => {
        console.log("GrandParent Clicked");
    })

document.querySelector(".parent")
    .addEventListener('click', () => {
        console.log("Parent Clicked");
    })

document.querySelector(".child")
    .addEventListener('click', () => {
        console.log("Child Clicked");
    })