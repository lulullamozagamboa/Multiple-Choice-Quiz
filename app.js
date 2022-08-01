window.addEventListener("load",()=> {

    const form = document.querySelector("#formulario")
    const usuario = document.getElementById("usuario")
    const email = document.getElementById("email")
    const pass = document.getElementById("pass")
    const passConfirma = document.getElementById("passConfirma") 


    //establecemos el evento submit p/ el formulario y prevenimos el envio
    form.addEventListener("submit", (e)=>{
        e.preventDefault()
        validaCampos()

    })

const validaCampos = ()=> {
  //capturar los valores ingresados por el usuario
const usuarioValor= usuario.value.trim()
const emailValor= email.value.trim()
const passValor= pass.value.trim()
const passConfirmaValor= passConfirma.value.trim();

//(!usuarioValor) ? console.log("CAMPO VACIO") : console.log(usuarioValor)
if (!usuarioValor) {
  console.log("campo vacio")
    validaFalla(usuario, "campo vacio")
  } else {
    validaOK(usuario)  
  }

//validando  campo email
if (!emailValor) {
    validaFalla(email, "campo vacio")
} else if (!validaEmail(emailValor)){
    validaFalla(email, "el e-mail no es valido")
}else{
  validaOK(email)
}

//validando campo password
const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/
if (!passValor) {
  validaFalla(pass, "campo vacio") 
    } else if(passValor.length < 8) { //q tenga mayor a 8 caracteres
        validaFalla(pass,"debe tener 8 caracteres como minimo")
    } else if(!passValor.match(er)) {
      validaFalla(pass, "debe tener al menos una mayusc., una min. y un num.")
    }else{
      validaOK(pass)
    }

    //validadando campo password confirmacion
    if(!passConfirmaValor){
      validaFalla(passConfirma, "confirma su password")
    }else if(passValor !== passConfirmaValor){
      validaFalla(passConfirma, "la password no coincide")
    }
} 


const validaFalla = (input, msje) =>{
    const formControl = input.parentElement
    const aviso = formControl.querySelector("p")
    aviso.innerText = msje
    
    
    formControl.className = "form-control falla"
    
  }
  
    const validaOK =(input,msje) => {
      const formControl = input.parentElement
      formControl.className = "form-control ok"
    }

const validaEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


})










 
