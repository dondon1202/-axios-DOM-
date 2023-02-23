
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
  let obj = {}
  if(account.value==""||password.value==""){
    alert("請填寫正確資訊");
    return;
  }
  obj.email = account.value;
  obj.password = password.value;
  console.log(obj);

    axios.post('https://hex-escape-room.herokuapp.com/api/user/signup',
    obj)
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






