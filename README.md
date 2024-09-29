# API per a la Gestió d'Usuaris i Activitats

## 📑 Taula de continguts

1. [Descripció](#-descripció)
2. [Tecnologies Utilitzades](#-tecnologies-utilitzades)
3. [Requisits Prèvis](#-requisits-prèvis)
4. [Instal·lació](#-instal·lació)
5. [Endpoints](#-endpoints)
6. [Contribució](#-contribució)
7. [Contacte](#-contacte)


## 🧭 Descripció
Aquesta API ha estat desenvolupada per gestionar de manera eficient usuaris i activitats dins d'una aplicació. Permet registrar nous usuaris, modificar les seves dades, crear activitats, consultar informació i molt més.

## 🛠️ Tecnologies Utilitzades
- **[Node.js](https://nodejs.org/en)**: Entorn d'execució JavaScript per al servidor.
- **[Express.js](https://expressjs.com/)**: Framework per a la creació d'aplicacions web amb Node.js.
- **[MongoDB](https://www.mongodb.com/es)**: Base de dades NoSQL per emmagatzemar la informació de manera flexible.

## 🚀 Requisits Prèvis

Abans de començar, assegura't de tenir instal·lat el següent:

- **Node.js**: Descarrega'l i instal·la'l des de nodejs.org.
- **MongoDB**: Descarrega'l i configura'l seguint les instruccions de mongodb.com.

## 📦 Instal·lació

1. **Clonar el repositori**:

git clone https://github.com/Calonsogon/gestio-usuaris-activitats.git

2. **Instal·lar dependències**:

npm install

3. **Configurar MongoDB**: Assegura't que MongoDB estigui en funcionament.

4. **Iniciar el servidor**:

node server.js

## 📡 Endpoints

### Gestió d'Usuaris

- **POST /appActivitats/users**: Registra un nou usuari.
- **PUT /appActivitats/users/:id**: Actualitza les dades d'un usuari.
- **GET /appActivitats/users/:id**: Consulta la informació d'un usuari.
- **DELETE /appActivitats/users/:id**: Elimina un usuari.

### Gestió d'Activitats

- **POST /appActivitats/activities**: Crea una nova activitat.
- **GET /appActivitats/activities**: Obtén totes les activitats.
- **GET /appActivitats/activities/:id**: Obtén una activitat per ID.
- **POST /appActivitats/activities/import**: Importa activitats des d'un arxiu JSON.
- **GET /appActivitats/activities/export**: Exporta totes les activitats en format JSON.
- **POST /appActivitats/activities/join/:id**: Apunta a un usuari a una activitat.

## 🤝 Contribució

Les contribucions són benvingudes! Si us plau, si us interessa, feu un **fork** del projecte i envieu **pull requests** o obriu **issues** si trobeu errors o teniu suggeriments.

## ✉️ Contacte
Per a qualsevol dubte, contacta'm a calonsogon6@gmail.com