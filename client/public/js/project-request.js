Window.onload = function advertencia(){
    alert('Debe llenar formulario completo de lo contrario no se enviaran su datos');
}

function solonumeros(e){
    key=e.keyCode || e.which;

    teclado= String.fromCharCode(key);
    numero="0123456789-";
    especiales="8-37-38-46";//Array
    teclado_especial=false;

    for(var i in especiales){
        if (key==especiales[i]){
            teclado_especial=true;

        }

        if (numero.indexOf(teclado)==-1 && !teclado_especial){
            return false;
        }

    }

}

function sololetras(e){
    key=e.keyCode || e.which;

    teclado2= String.fromCharCode(key);
    letras2=" abcdefghijklmnñopqrstuvwxyz ABCDEFGHIJKLMNÑOPQRSTUVWXYZ @.";
  
    especiales2="8-37-38-46";//Array
    teclado_especial2=false;

    for(var i in especiales2){
        if (key==especiales2[i]){
            teclado_especial2=true;break;

        }

        if (letras2.indexOf(teclado2)==-1 && !teclado_especial2){
            return false;
        }
    }

}

function mostrarMensaje (e){

    alert('Si el formulario contiene todos los datos se enviaran los datos dando clic en OK, de lo contrario debe llenar los campos que faltan.');

}
