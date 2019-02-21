function alertFunc()
{

let text1=document.getElementById('password1');
let text2=document.getElementById('password2');

let password1=text1.value;
let password2=text2.value;

  if(password1!=password2)
  {
    alert("The passwords entered do not match!");
  }
  else if (password1.length <= 7 || password2.length <= 7)
  {
    alert("The passwords are less than 8 characters long!")
  }
  else
  {
    alert("The password is validated!")
  }

}
