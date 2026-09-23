function getCurrentStudent(){
  try{
    let saved=localStorage.getItem("sshCurrentStudent");
    let storage="localStorage";
    if(!saved){saved=sessionStorage.getItem("sshCurrentStudent");storage="sessionStorage";}
    if(!saved)return null;
    let current=JSON.parse(saved);
    // Migrate older sessions that only stored the name/email.
    try{
      const students=JSON.parse(localStorage.getItem("sshStudents")||"[]");
      const full=students.find(s=>(s.id&&s.id===current.id)||s.email===current.email);
      if(full){
        current={...full,password:undefined};
        delete current.password;
        const clean=JSON.stringify(current);
        if(storage==="localStorage")localStorage.setItem("sshCurrentStudent",clean);
        else sessionStorage.setItem("sshCurrentStudent",clean);
      }
    }catch(e){}
    return current;
  }catch(e){return null}
}
function requireStudentLogin(){const s=getCurrentStudent();if(!s){const c=location.pathname.split("/").pop();if(c!=="login.html"&&c!=="register.html")location.href="login.html";return null}return s}
function logoutStudent(){localStorage.removeItem("sshCurrentStudent");sessionStorage.removeItem("sshCurrentStudent");location.href="login.html"}
function updateStudentName(){const s=getCurrentStudent();document.querySelectorAll("[data-student-name]").forEach(e=>e.textContent=s?s.name:"Student")}
