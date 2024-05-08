const btns = document.querySelectorAll(".btn");
const body = document.body;



btns.forEach(btn => {
    btn.addEventListener("click", () => {
        color = btn.value;
        switch (color) {
            case "red":
                body.classList.toggle("red");
                body.classList.remove("blue");
                body.classList.remove("yellow");
                body.classList.remove("green");
                body.classList.remove("black");
                break;
            case "yellow":
                body.classList.toggle("yellow");
                body.classList.remove("red");
                body.classList.remove("blue");
                body.classList.remove("green");
                body.classList.remove("black");
                break;
            case "blue":
                body.classList.toggle("blue");
                body.classList.remove("red");
                body.classList.remove("yellow");
                body.classList.remove("green");
                body.classList.remove("black");
                break;
            case "green":
                body.classList.toggle("green");
                body.classList.remove("red");
                body.classList.remove("yellow");
                body.classList.remove("blue");
                body.classList.remove("black");
                break;
            case "black":
                body.classList.toggle("black");
                body.classList.remove("red");
                body.classList.remove("yellow");
                body.classList.remove("green");
                body.classList.remove("blue");
                break;
            default:
                break;
        }
    });
});