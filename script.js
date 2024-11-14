document.addEventListener("DOMContentLoaded", function() {
    let container = document.createElement("div");
    container.id = "magicBallContainer";

    let header = document.createElement("h1");
    header.id = "header";
    header.innerText = "Magic Ball";
    container.appendChild(header);

    let magicBall = document.createElement("div");
    magicBall.id = "magicBall";
    magicBall.innerText = "?";
    container.appendChild(magicBall);

    let question = document.createElement("input");
    question.id = "questionInput";
    question.type = "text";
    question.placeholder = "your question";
    container.appendChild(question);

    let submitButton = document.createElement("button");
    submitButton.id = "submitButton";
    submitButton.innerText = "send";

    submitButton.addEventListener("click", function() {
        if (question.value.trim() == "") {
            alert("Please enter a question!");
        } else {
            let answers = ["Так", "Ні", "Можливо"];
            let randomIndex = Math.floor(Math.random() * answers.length);
            magicBall.innerText = answers[randomIndex];

            magicBall.classList.add("shake");
            setTimeout(() => {
                magicBall.classList.remove("shake");
            }, 500); 
        }
    });
    container.appendChild(submitButton);

    document.body.appendChild(container);
});