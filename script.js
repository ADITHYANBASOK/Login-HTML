
const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');

const wrapper = document.querySelector('.wrapper')

signUpBtnLink.addEventListener('click',(event)=>{
    event.preventDefault();
    wrapper.classList.toggle('active');
    console.log("succesfully completed");
});
signInBtnLink.addEventListener('click',(event)=>{
    event.preventDefault();
    wrapper.classList.toggle('active');
});