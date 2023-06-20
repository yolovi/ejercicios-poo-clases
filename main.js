// Ejercicio POO 1:

// Crea la clase Persona, con las propiedades nombre, edad y género, y el método obtDetalles(), que muestre por consola las propiedades de la persona.

class Persona {
  constructor(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }
  obtDetalles() {
    return `${this.nombre}, tiene ${this.edad} años y es ${this.genero}`;
  }
}

let Persona1 = new Persona("Pau", 25, "hombre");
console.log(Persona1);
console.log(Persona1.obtDetalles());

// Crea la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por consola el resultado.

class Estudiante extends Persona {
  constructor(nombre, edad, genero, curso, grupo) {
    super(nombre, edad, genero); //llamamos al metodo del padre Persona1
    this.curso = curso;
    this.grupo = grupo;
  }
  registrar() {
    return `${this.nombre}, tiene ${this.edad} años y es ${
      this.genero
    }. Cursa ${this.curso + this.grupo}`;
  }
}

let Estudiante1 = new Estudiante("Marta", 15, "mujer", "4", "B");
console.log(Estudiante1);
console.log(Estudiante1.registrar());

// Crea la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por consola el resultado.

class Profesor extends Persona {
  constructor(nombre, edad, genero, asignatura, nivel) {
    super(nombre, edad, genero);
    this.asignatura = asignatura;
    this.nivel = nivel;
  }
  asignar() {
    console.log(`El profesor ${this.nombre}, tiene ${this.edad} años y da clases de ${this.asignatura} nivel ${this.nivel}`)
}
  }


let Profesor1 = new Profesor("Manuel", 35, "hombre", "italiano", "avanzado")
console.log(Profesor1)
Profesor1.asignar()

