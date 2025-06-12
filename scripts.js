
// Store answers
let answers = {};

// Function to save answer and navigate to next question
function saveAnswer(question, answer, nextPage) {
    answers[question] = answer;
    window.location.href = nextPage;
}

// Function to display result based on answers
function displayResult() {
    let result = "";

    // Determine result based on answers
    if (answers.q1 === "A") {
        result = "緊急対応窓口へ直行";
    } else if (answers.q1 === "B") {
        result = "24時間ホットラインへ直行";
    } else if (answers.q1 === "C" || answers.q1 === "D" || answers.q1 === "E") {
        if (answers.q2 === "A" && answers.q3 === "A") {
            result = "医療機関のストレス相談（対面）";
        } else if (answers.q2 === "B" && answers.q3 === "B") {
            result = "組合・カウンセラー（匿名相談）";
        } else if (answers.q2 === "C" && answers.q3 === "C") {
            result = "本部窓口・生活相談（グループ支援）";
        } else if (answers.q2 === "D" && answers.q3 === "C") {
            result = "職場の健康づくり研修会支援事業";
        } else {
            result = "適切な窓口が見つかりませんでした。";
        }
    }

    // Display result
    document.getElementById("result").innerText = result;
}
