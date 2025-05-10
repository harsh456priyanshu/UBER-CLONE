# Uber Clone Backend

This is the backend of an Uber Clone project, built using **Node.js**, **Express.js**, **MongoDB**, **JWT**, and **bcrypt** for user authentication and authorization. The backend is designed to handle user and captain management, authentication, vehicle data, and more.

## 🚀 Features

* **User Registration & Login**: Users can register and log in to the system.
* **Captain Registration & Login**: Captains can register their vehicles and log in.
* **Authentication**: JWT tokens for secure login and authorization.
* **CRUD Operations**: Basic operations for users and captains, including profile management and logout.
* **Vehicle Details**: Captains can manage their vehicle data, including vehicle type, plate number, and capacity.
* **Data Validation**: Form validation using `express-validator`.

## 🛠️ Technologies Used

* **Node.js**: JavaScript runtime for building scalable applications.
* **Express.js**: Web framework for Node.js.
* **MongoDB**: NoSQL database for storing user and captain data.
* **JWT**: JSON Web Tokens for secure authentication and authorization.
* **bcrypt**: Password hashing for secure password storage.
* **express-validator**: For validating user inputs in registration and login forms.
* **Cookie-parser**: For handling cookies, including the JWT token in user and captain sessions.

## 📂 Project Structure

```
/uber-clone-backend
│
├── /controllers
│   ├── user.controller.js
│   └── captain.controller.js
│
├── /models
│   ├── user.model.js
│   └── captain.model.js
│
├── /services
│   ├── user.service.js
│   └── captain.service.js
│
├── /routes
│   ├── user.routes.js
│   └── captain.routes.js
│
├── /middlewares
│   └── auth.middleware.js
│
├── /db
│   └── db.js
│
├── /config
│   └── dotenv config
│
└── server.js
```

## 🛠️ Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/uber-clone-backend.git
   cd uber-clone-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables by creating a `.env` file in the root directory:

   ```bash
   DB_CONNECT=<your-mongo-db-connection-string>
   JWT_SECRET=<your-jwt-secret-key>
   ```

4. Start the server:

   ```bash
   npm start
   ```

   The server will be running on `http://localhost:5000`.

---

## 📝 API Documentation

### **User Routes**

#### 1. **POST /users/register**

* **Description**: Register a new user.
* **Request Body**:

  ```json
  {
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "johndoe@example.com",
    "password": "password123"
  }
  ```
* **Response**:

  ```json
  {
    "token": "jwt-token",
    "user": {
      "fullname": { "firstname": "John", "lastname": "Doe" },
      "email": "johndoe@example.com"
    }
  }
  ```

#### 2. **POST /users/login**

* **Description**: Login a user.
* **Request Body**:

  ```json
  {
    "email": "johndoe@example.com",
    "password": "password123"
  }
  ```
* **Response**:

  ```json
  {
    "token": "jwt-token",
    "user": {
      "fullname": { "firstname": "John", "lastname": "Doe" },
      "email": "johndoe@example.com"
    }
  }
  ```

#### 3. **GET /users/profile**

* **Description**: Get the logged-in user's profile. Requires authentication.
* **Response**:

  ```json
  {
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "johndoe@example.com"
  }
  ```

#### 4. **GET /users/logout**

* **Description**: Logout the user by invalidating the JWT token.
* **Response**:

  ```json
  {
    "message": "Logged out successfully"
  }
  ```

---

### **Captain Routes**

#### 1. **POST /captains/register**

* **Description**: Register a new captain and their vehicle.
* **Request Body**:

  ```json
  {
    "fullname": { "firstname": "Mike", "lastname": "Smith" },
    "email": "mike@example.com",
    "password": "password123",
    "vehicle": {
      "color": "red",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
  ```
* **Response**:

  ```json
  {
    "token": "jwt-token",
    "captain": {
      "fullname": { "firstname": "Mike", "lastname": "Smith" },
      "email": "mike@example.com",
      "vehicle": { "color": "red", "plate": "XYZ123", "capacity": 4, "vehicleType": "car" }
    }
  }
  ```

#### 2. **POST /captains/login**

* **Description**: Login a captain.
* **Request Body**:

  ```json
  {
    "email": "mike@example.com",
    "password": "password123"
  }
  ```
* **Response**:

  ```json
  {
    "token": "jwt-token",
    "captain": {
      "fullname": { "firstname": "Mike", "lastname": "Smith" },
      "email": "mike@example.com",
      "vehicle": { "color": "red", "plate": "XYZ123", "capacity": 4, "vehicleType": "car" }
    }
  }
  ```

#### 3. **GET /captains/profile**

* **Description**: Get the logged-in captain's profile. Requires authentication.
* **Response**:

  ```json
  {
    "fullname": { "firstname": "Mike", "lastname": "Smith" },
    "email": "mike@example.com",
    "vehicle": { "color": "red", "plate": "XYZ123", "capacity": 4, "vehicleType": "car" }
  }
  ```

#### 4. **GET /captains/logout**

* **Description**: Logout the captain by invalidating the JWT token.
* **Response**:

  ```json
  {
    "message": "Logged out successfully"
  }
  ```

---

## 📄 Services

### **User Service**

* **createUser**: Handles user creation and validation, ensuring all fields are provided before saving a new user.

### **Captain Service**

* **createCaptain**: Handles captain creation and validation, ensuring all fields are provided before saving a new captain along with their vehicle data.

---

## 🔒 Authentication Middleware

### **authUser**

* Middleware to check if the user is authenticated using JWT tokens. If the token is missing or invalid, the user will be unauthorized.

### **authCaptain**

* Middleware to check if the captain is authenticated using JWT tokens. If the token is missing or invalid, the captain will be unauthorized.

---

## 🔧 Database Setup

The backend uses **MongoDB** to store data. The **`db.js`** file contains the connection logic:

```js
const mongoose = require('mongoose');

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT)
        .then(() => console.log('Connected to DB'))
        .catch(err => console.log(err));
}

module.exports = connectToDb;
```

Make sure to set the **`DB_CONNECT`** environment variable with your MongoDB connection string.

---

## 🌱 Environment Variables

* **DB\_CONNECT**: MongoDB connection string.
* **JWT\_SECRET**: Secret key for JWT token generation.

---

