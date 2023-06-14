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
/*let day = prompt('Que dia es hoy?').toLowerCase()

switch(day) {
    case 'lunes':
        alert('Que aburrido')
        break
    case 'martes':
        alert('Por lo menos no es lunes')
        break
    case 'miercoles':
        alert('Falta poco para descansar, tu puedes')
        break
    case 'jueves':
        alert('Ya mañana es viernes, vamos que se puede')
        break
    case 'viernes':
        alert('Largo dia de trabajo, pero lo has logrado a descansar 🛏')
        break
    case 'sabado':
    case 'domingo':
        alert('😴')
        break
    default:
        alert('Escribe bien')
}*/


//La cuenta del restaurante
/*let precio, propina, resultado

function preguntarCena () {

    precio = parseFloat(prompt('Cuanto ha costado la comida?'))

    if (typeof precio == 'number' && precio <= 0) {
        alert('No has comido nada...')
    }else if (typeof precio == 'number' && precio <= 10) {
        alert('Ha sido barata la comida')
        preguntarPropina()
    }else if (typeof precio == 'number' && precio >= 10 && precio <= 20) {
        alert('Te has comprado una buena cena')
        preguntarPropina()
    }else if (typeof precio == 'number' && precio >= 20 && precio <= 30) {
        alert('Pero eres millonario o que!?')
        preguntarPropina()
    }else if (typeof precio == 'number' && precio >= 30) {
        alert('No tenemos en nuestro menu alimentos mayores a $30')
        preguntarCena()
    }else {
        alert('Ingrese un valor valido')
        preguntarCena()
    }
}

function preguntarPropina () {

    propina = parseFloat(prompt('Cuanto deseas dejar de propina?'))

    if (typeof propina == 'number' && propina <= 0) {
        alert('Jodete 🖕')
    }else if (typeof propina == 'number' && propina <= 10) {
        alert('Gracias por ayudar al mesero')
    }else if (typeof propina == 'number' && propina >= 10 && propina <= 20) {
        alert('Pero que gentil eres 😊')
    }else if (typeof propina == 'number' && propina >= 20 && propina <= 30) {
        alert('Eres la persona mas humilde que he visto, te quiero ❤')
    }else if (typeof propina == 'number' && propina >= 30) {
        alert('No nos tienen permitido aceptar propinas tan altas')
        preguntarPropina()
    }else {
        alert('Ingrese un valor valido')
        preguntarPropina()
    }
}

preguntarCena()
let suma = precio + propina
resultado = alert('El coste total de su comida es de $' + suma)*/