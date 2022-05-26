signUp.addEventListener('click',(e)=>{

  var name = document.getElementById('name').value;
  var company = document.getElementById('company').value;
  var email = document.getElementById('email').value;
  var phoneNo = document.getElementById('phoneNo').value;
  var password = document.getElementById('pass').value;
  var passcheck = document.getElementById('passCheck').value;
  var radios = document.getElementsByName('gender');

  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {

      var radioV = radios[i].checked.value

      break;
    }
  }
  
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('aklalhııııım');
      const user = userCredential.user;
      alert('user created');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert('alertMessage ');

    });
  })  ;

