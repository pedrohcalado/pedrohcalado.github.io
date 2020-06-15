const button = document.getElementById('button-login');
button.addEventListener('click', function () {
  alert(document.querySelector('.user-email-phone').value);
});

const buttonSubmit = document.getElementById('facebook-register');

new JustValidate('.js-form', {
  rules: {
    name: {
      required: true
    },
    lastName: {
      required: true
    },
    mobile: {
      required: true
    },
    password: {
      required: true
    },
    birthday: {
      required: true
    }
  },
  messages: {
    name: {
      required: "What's your name?"
    },
    lastName: {
      required: "What's your last name?"
    },
    mobile: {
      required: "You will use this when you log in and if you ever need to reset your password"
    },
    password: {
      required: 'Make sure it is strong'
    }
  }
});
