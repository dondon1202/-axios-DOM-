
// https://hex-escape-room.herokuapp.com/api/user/signup 

const account = document.querySelector(".account")
const password = document.querySelector(".password")
const send = document.querySelector(".send")
    // email: 'domi51503@gmail.com',
    // password: 'qaz00000'

send.addEventListener('click',function(e){
  callSignUp();
})

function callSignUp(){
  let objsignup = {}
  if(account.value==""||password.value==""){
    alert("請填寫正確資訊");
    return;
  }
  objsignup.email = account.value;
  objsignup.password = password.value;
  console.log(objsignup);

    axios.post('https://hex-escape-room.herokuapp.com/api/user/signup',
    objsignup)
        .then(function (response) {
          if(response.data.message=="帳號註冊成功"){
            alert("恭喜你，註冊成功");
          }else{
            alert("很抱歉，帳號註冊失敗，有可能帳號已被註冊過");
          }
          account.value = "";
          password.value = "";
        })
        .catch(function (error) {
          console.log(error);
  });

}



const accountsign = document.querySelector(".account-sign");
const passwordsign = document.querySelector(".password-sign");
const sign = document.querySelector(".sign");


sign.addEventListener('click',function(e){
  callSignIn()
})

function callSignIn(){
  let objsignin = {}
  if(accountsign.value==""||passwordsign.value==""){
    alert("請填寫正確資訊");
    return;
  }
  objsignin.email = accountsign.value;
  objsignin.password = passwordsign.value;
  console.log(objsignin);

axios.post('https://hex-escape-room.herokuapp.com/api/user/signin',
objsignin)
  .then(function (response) {
    if(response.data.message=="登入成功"){
      alert("恭喜成功登入")
      }else{
        alert("此帳號不存在或帳號密碼錯誤")
      }
  })
  .catch(function (error) {
    console.log(error);
  });
}









