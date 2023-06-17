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
    if (!Number.isInteger(precio)) {
        alert('Ingrese un valor valido')
        preguntarCena()
    }

    switch(true) {
        case precio <= 0:
            alert('No has comido nada...')
            break
        case precio <= 10:
            alert('Ha sido barata la comida')
            preguntarPropina()
            break
        case precio >= 10 && precio <= 20:
            alert('Te has comprado una buena cena')
            preguntarPropina()
            break
        case precio >= 20 && precio <= 30:
            alert('Pero eres millonario o que!?')
            preguntarPropina()
            break
        case precio >= 30:
            alert('No tenemos en nuestro menu alimentos mayores a $30')
            preguntarCena()
            break
        }
}

function preguntarPropina () {

    propina = parseFloat(prompt('Cuanto deseas dejar de propina?'))

    if (!Number.isInteger(propina)) {
        alert('Ingrese un valor valido')
        preguntarPropina()
    }

    switch(true) {
        case propina <= 0:
            alert('Jodete 🤬')
            break
        case propina <= 10:
            alert('Que gentil eres 😊')
            break
        case propina >= 10 && propina <= 20:
            alert('Muchisimas gracias 🤗')
            break
        case propina >= 20:
            alert('Eres la persona mas gentil que he visto 💖')
            break
    }
}

preguntarCena()
let suma = precio + propina

if (precio > 0) {
resultado = alert('El coste total de su comida es de $' + suma)
}else if (precio <= 0) {
    alert('Largo de mi restaurante 🤬')
}*/


//Calculadora
/*function preguntarOperacion () {
    let operacion = parseInt(prompt('Que operacion deseas ejecutar? 1 = suma  2 = resta  3 = multiplicacion  4 = division  5 = potenciacion'))
    let numero = parseFloat(prompt('Elija el primer numero de su operacion'))
    let numero1 = parseFloat(prompt('Elija el segundo numero de su operacion'))

    if (!Number.isInteger(operacion) || operacion > 5 || !Number.isInteger(numero) || !Number.isInteger(numero1)) {
        alert('Escriba una opcion valida')
        preguntarOperacion()
    }

    switch(operacion) {
        case 1:
            let suma = numero + numero1
            alert('El resultado de la operacion es ' + suma)
            break
        case 2:
            let resta = numero - numero1
            alert('El resultado de la operacion es ' + resta)
            break
        case 3:
            let multiplicacion = numero * numero1
            alert('El resultado de la operacion es ' + multiplicacion)
            break
        case 4:
            let division = numero / numero1
            alert('El resultado de la operacion es ' + division)
            break
        case 5:
            let potenciacion = numero ** numero1
            alert('El resultado de la operacion es ' + potenciacion)
            break
    }
}
preguntarOperacion()*/


//Boton de like
/*let button = document.getElementById('button')
let p = document.getElementById('p')
let number = null
let i = false

button.addEventListener('click', () => {
    if (i == false) {
        i = true
        p.textContent = (number++)
    }else {
        i = false
        p.textContent = (number--)
    }
})*/

//Inicio de sesion 2
/*let correo = prompt('Bienvenido, para registrarse ingrese su correo electronico 📭')
let contraseña = prompt('Ahora escriba una contraseña 🙈')
let usuario = prompt('Estas casi listo, solo escribe un nombre de usuario 😎')

function iniciarSesion (max, min) {
    let usuarioV = prompt('Ingrese su nombre de usuario 😎')
    let contraseñaV = prompt('Ingrese su contraseña 🙈')

    if (!(contraseñaV == contraseña) || !(usuarioV == usuario)) {
        alert('El nombre de usuario o contraseña son incorrectos 💥')
        iniciarSesion(1000, 500)
    }else {
        let codigo = Math.floor(Math.random() * (max - min + 1)) + min
        alert(codigo)
        let verificacion = prompt('Por favor ingrese el codigo que le enviamos 📩')
        if (verificacion == codigo) {
            alert('Has iniciado sesion')
        }else {
            alert('El codigo es incorrecto, vuelva a iniciar sesion 💥')
            iniciarSesion(1000, 500)
        }
    }
}

iniciarSesion(1000, 500)*/