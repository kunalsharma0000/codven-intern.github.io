
var swiper = new Swiper(".home-slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    loop:true,
    grabCursor:true,
  });


  let accordion = document.querySelectorAll('.faq .accordion-container .accordion');

  accordion.forEach(acco =>{
    acco.onclick = () =>{
      accordion.forEach(dion => dion.classList.remove('active'));
      acco.classList.toggle('active');
    };
  });
  
  document.querySelector('.load-more .btn').onclick = () =>{
    document.querySelectorAll('.courses .box-container .hide').forEach(show =>{
      show.style.display = 'block';
    });
    document.querySelector('.load-more .btn').style.display = 'none';
  };
  

  document.querySelector('#close-navbar').onclick = () =>{
    navbar.classList.remove('active');
  };
  
  let registerBtn = document.querySelector('.account-form .register-btn');
  let loginBtn = document.querySelector('.account-form .login-btn');
  
  registerBtn.onclick = () =>{
    registerBtn.classList.add('active');
    loginBtn.classList.remove('active');
    document.querySelector('.account-form .login-form').classList.remove('active');
    document.querySelector('.account-form .register-form').classList.add('active');
  };
  
  loginBtn.onclick = () =>{
    registerBtn.classList.remove('active');
    loginBtn.classList.add('active');
    document.querySelector('.account-form .login-form').classList.add('active');
    document.querySelector('.account-form .register-form').classList.remove('active');
  };
  
  let accountForm = document.querySelector('.account-form')
  
  document.querySelector('#account-btn').onclick = () =>{
    accountForm.classList.add('active');
  }
  
  document.querySelector('#close-form').onclick = () =>{
    accountForm.classList.remove('active');
  };
    