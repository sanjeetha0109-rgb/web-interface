function displayProfile() {

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let mark = Number(document.getElementById("mark").value);

    let grade;

    if (mark >= 90) {
        grade = "A+";
    }
    else if (mark >= 80) {
        grade = "A";
    }
    else if (mark >= 70) {
        grade = "B";
    }
    else if (mark >= 60) {
        grade = "C";
    }
    else if (mark >= 50) {
        grade = "D";
    }
    else {
        grade = "F";
    }

    document.getElementById("sname").textContent = name;
    document.getElementById("sroll").textContent = roll;
    document.getElementById("smark").textContent = mark;
    document.getElementById("grade").textContent = grade;
}