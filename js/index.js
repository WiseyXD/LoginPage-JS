const form = document.querySelector('.form');
const eye = document.querySelectorAll('.eyehide');
const links = document.querySelector('.links');
const showSignUp = document.querySelector('.signup');
console.log(links);
eye.forEach(icon => {
    icon.addEventListener('click', () =>{
        let pwFields = icon.parentElement.parentElement.querySelectorAll(".toogle");
        console.log(pwFields);
        pwFields.forEach(field =>{
            if(field.type === 'password')
            {
                field.type = 'text';
                console.log("passwrod = text");
                icon.classList.replace("bx-low-vision","bx-show");

            }
            else
            {
                field.type = 'password'
                console.log("text = text");
                icon.classList.replace("bx-show","bx-low-vision");
            }
        });
    });
   
});

const toggleLink = document.querySelector(".toggleLink");//Sign Up page pe jaane ke liye
toggleLink.addEventListener("click",(e)=>{
    e.preventDefault();
    showSignUp.classList.add("show");
});

const loginLink = document.querySelector(".loginLink");
loginLink.addEventListener("click",(e)=>{
    e.preventDefault();
    showSignUp.classList.remove("show");
});

