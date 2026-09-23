function getStudents() {
  try {
    return JSON.parse(localStorage.getItem("sshStudents") || "[]");
  } catch {
    return [];
  }
}

function saveStudents(students) {
  localStorage.setItem("sshStudents", JSON.stringify(students));
}

document.querySelectorAll(".show-pass").forEach(button => {
  button.addEventListener("click", () => {
    const input = document.getElementById(button.dataset.target);
    input.type = input.type === "password" ? "text" : "password";
    button.textContent = input.type === "password" ? "👁" : "🙈";
  });
});

const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", event => {
    event.preventDefault();

    const message = document.getElementById("registerMessage");
    const password = document.getElementById("regPassword").value;
    const confirm = document.getElementById("regConfirm").value;

    if (password !== confirm) {
      message.className = "auth-message error";
      message.textContent = "Passwords do not match.";
      return;
    }

    const email = document.getElementById("regEmail").value.trim().toLowerCase();
    const students = getStudents();

    if (students.some(student => student.email === email)) {
      message.className = "auth-message error";
      message.textContent = "An account with this email already exists.";
      return;
    }

    const student = {
      id: "STU-" + Date.now(),
      name: document.getElementById("regName").value.trim(),
      email,
      college: document.getElementById("regCollege").value.trim(),
      course: document.getElementById("regCourse").value.trim(),
      year: document.getElementById("regYear").value,
      studentId: document.getElementById("regStudentId").value.trim(),
      password,
      role: "student",
      createdAt: new Date().toISOString(),
      progress: 0
    };

    students.push(student);
    saveStudents(students);

    message.className = "auth-message success";
    message.textContent = "Account created successfully. Redirecting to login...";

    registerForm.reset();

    setTimeout(() => {
      window.location.href = "login.html";
    }, 1200);
  });
}

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", event => {
    event.preventDefault();

    const message = document.getElementById("loginMessage");
    const email = document.getElementById("loginEmail").value.trim().toLowerCase();
    const password = document.getElementById("loginPassword").value;

    const students = getStudents();
    const student = students.find(
      item => item.email === email && item.password === password
    );

    if (!student) {
      message.className = "auth-message error";
      message.textContent = "Invalid email or password.";
      return;
    }

    const session = {
      id: student.id,
      name: student.name,
      email: student.email,
      college: student.college,
      course: student.course,
      year: student.year,
      studentId: student.studentId,
      role: "student"
    };

    const rememberMe = document.getElementById("rememberMe")?.checked !== false;

    if (rememberMe) {
      // Keep the student signed in on this browser/device.
      localStorage.setItem("sshCurrentStudent", JSON.stringify(session));
    } else {
      // Session lasts only for the current browser tab/session.
      sessionStorage.setItem("sshCurrentStudent", JSON.stringify(session));
      localStorage.removeItem("sshCurrentStudent");
    }

    message.className = "auth-message success";
    message.textContent = `Welcome, ${student.name}! Opening your dashboard...`;

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 700);
  });
}
