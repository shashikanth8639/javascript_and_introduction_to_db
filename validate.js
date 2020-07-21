var a=false,b=false,c=false,d=false;
function validateEmail() {
    const email = document.querySelector('input[name="email"]').value;
    if( ! /(.+)@(.+){2,}\.(.+){2,}/.test(email) ){
        var s = document.getElementById('wrong_email');
        s.setAttribute("style", "display:block; color: red; margin-bottom:0");
        s.innerHTML = 'Invalid email_id !';
        this.a=false;
      }else{
        this.a=true; 
      }
}

function emailClear() {
    var s = document.getElementById('wrong_email');
    s.removeAttribute('style')
    document.getElementById('wrong_email').innerHTML = ''
}

validatePass = () => {
    const pass = document.querySelector('input[name="password"]').value;
    if( pass.length < 6 ){
        var s = document.getElementById('wrong_pass');
        s.setAttribute("style", "display:block; color: red; margin-bottom:0");
        s.innerHTML = 'Password length must be grater than 5!';
        this.b=false;
      }else{
        this.b=true; 
      }
}

passClear = () => {
    var s = document.getElementById('wrong_pass');
    s.removeAttribute('style')
    document.getElementById('wrong_pass').innerHTML = ''
}
validateConfirmPass = () => {
    const orginalPass = document.querySelector('input[name="password"]').value;
    const pass = document.querySelector('input[name="confirm_password"]').value;
    if( orginalPass != pass ){
        var s = document.getElementById('wrong_confirm');
        s.setAttribute("style", "display:block; color: red; margin-bottom:0");
        s.innerHTML = 'Must match with the above password!';
        this.c=false;
      }else{
        this.c=true; 
      }
}

confirmClear = () => {
    var s = document.getElementById('wrong_confirm');
    s.removeAttribute('style')
    document.getElementById('wrong_confirm').innerHTML = ''
}

validateMobile = () => {
    const mobile = document.querySelector('input[name="mobile"]').value;
    if( mobile[0]=='0' || mobile.length <10 ){
        var s = document.getElementById('wrong_mobile');
        s.setAttribute("style", "display:block; color: red; margin-bottom:0");
        s.innerHTML = 'Mobile number length should be 10 and should not start with 0';
        this.d=false;
      }else{
        this.d=true; 
      }
}

mobileClear = () => {
    var s = document.getElementById('wrong_mobile');
    s.removeAttribute('style')
    s.innerHTML = ''
}

function onSubmit(){
    if(this.a && this.b && this.c && this.d){
        window.location.replace('./successful.html');
    }else{
      var s = document.getElementById('wrong_msg');
      s.setAttribute("style", "display:block; color: red; margin-bottom:0");
      s.innerHTML = 'Please fill the details properly!';
    }
}