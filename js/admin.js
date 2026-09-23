(function(){
  const ADMIN_EMAIL='admin@sitams.local';
  const ADMIN_PASSWORD='Admin@123';
  window.SSH_ADMIN={email:ADMIN_EMAIL,password:ADMIN_PASSWORD};

  window.getAdminSession=function(){
    try{return JSON.parse(sessionStorage.getItem('sshAdminSession')||localStorage.getItem('sshAdminSession')||'null')}catch(e){return null}
  };
  window.requireAdmin=function(){
    const s=getAdminSession();
    if(!s){location.href='admin-login.html';return null}
    return s;
  };
  window.logoutAdmin=function(){localStorage.removeItem('sshAdminSession');sessionStorage.removeItem('sshAdminSession');location.href='admin-login.html'};
  window.adminGetStudents=function(){try{return JSON.parse(localStorage.getItem('sshStudents')||'[]')}catch(e){return[]}};
  window.adminQuizStats=function(){
    let attempts=0,score=0,total=0;
    Object.keys(localStorage).filter(k=>k.startsWith('sshQuizProgress_')).forEach(k=>{try{const x=JSON.parse(localStorage.getItem(k));attempts++;score+=Number(x.score||0);total+=Number(x.total||0)}catch(e){}});
    return {attempts,score,total,percentage:total?Math.round(score/total*100):0};
  };
  window.adminStudentQuizAttempts=function(id){return Object.keys(localStorage).filter(k=>k.startsWith('sshQuizProgress_'+id+'_')).length};
  window.adminTaskCount=function(){let n=0;Object.keys(localStorage).filter(k=>k.startsWith('sshTasks_')).forEach(k=>{try{n+=JSON.parse(localStorage.getItem(k)||'[]').length}catch(e){}});return n};
  window.adminAnnouncements=function(){try{return JSON.parse(localStorage.getItem('sshAnnouncements')||'[]')}catch(e){return[]}};
  window.saveAdminAnnouncements=function(a){localStorage.setItem('sshAnnouncements',JSON.stringify(a))};
})();
