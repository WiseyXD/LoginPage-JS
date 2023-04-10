const form = documnet.querySelector('.forms');
const eye = documnet.querySelectorAll('eyehide');
const links = documnet.querySelector('.links');
console.log( eye);
eye.forEach(eyeIcon => {
  let pwField = eyeIcon.parentElement.querySelectorAll(".password").addEventListener('click', () =>{
     pwField.forEach((password)=>{
        if(password.type === "password")
        {
            password.type = "text";

        }
        else
        {
            password.type = "password";
        }
     })  
    
    })
});