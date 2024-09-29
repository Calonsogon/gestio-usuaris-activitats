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

## Instal·lació

1. **Clonar el repositori**:
```Bash
git clone https://github.com/tu-usuari/nombre-del-repositorio.git


2. **Instal·lar dependències:**
```Bash
npm install

3. **Configurar MongoDB:** Assegura't que MongoDB estigui en funcionament.

4. **Iniciar el servidor:**
```Bash
node server.js

## Endpoints

### Gestió d'Usuaris
- Crear un nou usuari: POST /appActivitats/user
- Obtenir tots els usuaris: GET /appActivitats/users
- Obtenir un usuari per ID: GET /appActivitats/users/:id
- Actualitzar un usuari: PUT /appActivitats/users/:id
- Eliminar un usuari: DELETE /appActivitats/users/:id

### Gestió d'Activitats
- Crear una nova activitat: POST /appActivitats/activities
- Obtenir totes les activitats: GET /appActivitats/activities
- btenir una activitat per ID: GET /appActivitats/activities/:id
- Actualitzar una activitat: PUT /appActivitats/activities/:id
- Eliminar una activitat: DELETE /appActivitats/activities/:id

## 🤝 Contribució
Les contribucions són benvingudes! Obre un issue o un pull request.

## Contacte
Per a qualsevol dubte, contacta'm a calonsogon6@gmail.com