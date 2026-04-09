# 🧬 Detector de Mutantes - Angular

## 📌 Descripción

Aplicación web desarrollada en Angular que permite analizar una secuencia de ADN para determinar si pertenece a un mutante o a un humano.

El sistema evalúa una matriz NxN de caracteres que representan bases nitrogenadas (A, T, C, G) y detecta patrones repetidos en diferentes direcciones.

---

## ⚙️ ¿Cómo funciona?

El usuario ingresa una secuencia de ADN en formato de texto, donde cada línea representa una fila de la matriz.

Ejemplo:

```
ATGCGA
CAGTGC
TTATGT
AGAAGG
CCCCTA
TCACTG
```

El sistema analiza la matriz buscando secuencias de **cuatro caracteres iguales consecutivos** en las siguientes direcciones:

* Horizontal →
* Vertical ↓
* Diagonal principal ↘
* Diagonal inversa ↙

Si se encuentran **más de una secuencia válida**, el ADN se clasifica como mutante.

---

## 🧠 Algoritmo

El algoritmo implementado:

* Evalúa 4 direcciones por cada posición
* Valida previamente límites para evitar iteraciones innecesarias
* Aplica *early exit* (terminación temprana) cuando se detectan más de una secuencia

### ✔ Optimizaciones clave

* Evita recorrer posiciones fuera de rango
* Reduce comparaciones innecesarias
* Corta ejecución cuando ya se cumple la condición de mutante

---

## ✅ Validaciones implementadas

Antes de ejecutar el análisis, el sistema valida:

1. **Formato NxN**: todas las filas deben tener la misma longitud
2. **Caracteres válidos**: solo se permiten A, T, C, G
3. **Filas vacías**: se eliminan automáticamente entradas inválidas

---

## 🎨 Interfaz de usuario

La aplicación cuenta con una interfaz simple y funcional que permite:

* Ingresar el ADN en un área de texto
* Ejecutar el análisis con un botón
* Visualizar el resultado de forma clara e inmediata
* Feedback visual diferenciado para mutante y humano

---

## 🚀 Ejecución del proyecto

### 1. Instalar dependencias

```
npm install
```

### 2. Ejecutar aplicación

```
ng serve
```

### 3. Acceder en el navegador

```
http://localhost:4200
```

---

## 🧩 Tecnologías utilizadas

* Angular (Standalone Components)
* TypeScript
* HTML / CSS

---

## 📌 Notas finales

El enfoque de la solución prioriza:

* Claridad del código
* Eficiencia del algoritmo
* Buenas prácticas en validación
* Experiencia de usuario simple y efectiva
