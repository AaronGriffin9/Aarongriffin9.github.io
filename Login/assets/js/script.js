const dbUsername = "Aaron";
const dbPassword = "Griffin";
let loginbtn = document.getElementById('login');

loginbtn.addEventListener("click", val);

function val(){
  let username = document.getElementById('Username').value;
  let password = document.getElementById('password').value;
  if(username == dbUsername && password == dbPassword){
    alert("Log in was successful");
  } else{
    alert("Log in was unsuccessful");
  }
};
