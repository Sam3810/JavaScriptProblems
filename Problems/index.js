//Sistema de baneos
/*const arr1 = ['pepe', 'sofia', 'gabriela']
const arr = ['jose', 'juan', 'miguel', arr1]



for (let name of arr) {
    if (name == arr1) {
        for (let name of arr1) {
            if (name == 'pepe') {
                console.log('el usuario ' + name + ' esta baneado')
                continue;
            }
            document.write(name + '<br>')
        }
    }else {
        document.write(name + '<br>')
    }
}*/


//Discoteca entradas
/*let entrada = false;

function entrar (hora) {
    let edad = prompt('Cuantos años tienes?')
    if (edad >= 18) {

        if (hora >= 2 && hora <= 5 && entrada == false) {
            entrada = true
            document.write('Puedes pasar gratis <br>')
        }else if (entrada == true) {
            document.write('Puedes pasar por $5 <br>')
        }else {
            document.write('Esta cerrado')
        }

    }else {
        document.write('Eres menor de edad vete o llamo a tus padres <br>')
    }
}*/

//Inicio de sesion
/*let usuario = prompt('Hola, quien eres?');

if (usuario == 'administrador') {
    let contraseña = prompt('Contraseña?');

    if (contraseña == 123) {
        alert('Has iniciado sesion')
    }else if (contraseña == "" || contraseña == null) {
        alert('Se ha cancelado el inicio de sesion')
    }else{
        alert('Contraseña incorrecta')
    }

}else if (usuario == "" || usuario == null) {
    alert('Se ha cancelado el inicio de sesion')
}else {
    alert('Usuario desconocido')
}*/

//Dias de la semana narrados
/*let day = prompt('Que dia es hoy?')

switch(day) {
    case 'lunes':
    case 'Lunes':
        alert('Que aburrido')
        break
    case 'martes':
    case 'Martes':
        alert('Por lo menos no es lunes')
        break
    case 'miercoles':
    case 'Miercoles':
        alert('Falta poco para descansar, tu puedes')
        break
    case 'jueves':
    case 'Jueves':
        alert('Ya mañana es viernes, vamos que se puede')
        break
    case 'viernes':
    case 'Viernes':
        alert('Largo dia de trabajo, pero lo has logrado a descansar 🛏')
        break
    case 'sabado':
    case 'Sabado':
    case 'domingo':
    case 'Domingo':
        alert('😴')
        break
    default:
        alert('Escribe bien')
}*/