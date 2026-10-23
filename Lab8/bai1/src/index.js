import "./style.css";
let students = [
    {
        id: 1,
        name: "Nguyễn Văn An",
        birthDate: "2005-01-15",
        gender: "Nam"
    },
    {
        id: 2,
        name: "Trần Thị Bình",
        birthDate: "2005-06-20",
        gender: "Nữ"
    }
];

const studentList = document.getElementById("studentList");
const studentForm = document.getElementById("studentForm");

function renderStudents() {
    studentList.innerHTML = "";

    students.forEach(function (student) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.birthDate}</td>
            <td>${student.gender}</td>
            <td>
                <button onclick="deleteStudent(${student.id})">
                    Xóa
                </button>
            </td>
        `;

        studentList.appendChild(row);
    });
}

studentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("studentName").value;
    const birthDate = document.getElementById("birthDate").value;
    const gender = document.getElementById("gender").value;

    const student = {
        id: students.length > 0
            ? Math.max(...students.map(function (item) {
                return item.id;
            })) + 1
            : 1,
        name: name,
        birthDate: birthDate,
        gender: gender
    };

    students.push(student);

    renderStudents();
    studentForm.reset();
});

function deleteStudent(id) {
    students = students.filter(function (student) {
        return student.id !== id;
    });

    renderStudents();
}

window.deleteStudent = deleteStudent;

renderStudents();
