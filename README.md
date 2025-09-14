# User Management Backend 🚀  

A **RESTful API backend** built with **Node.js, Express, and SQLite** to manage user data with full **CRUD operations**.  
Lightweight, modular, and ideal for learning backend fundamentals or serving as a boilerplate for future apps.  

---

## ✨ Features  
- Express.js server with middleware  
- SQLite database integration  
- CRUD API endpoints for users  
- JSON request/response support  
- Error handling & input validation  
- Clean project structure  

---

## 📂 Project Structure  

├── server.js # App entry point
├── database.js # SQLite connection & schema
├── routes/
│ └── users.js # User CRUD routes
├── package.json # Dependencies & scripts
├── .gitignore # Ignored files
├── README.md # Documentation
└── users.db # SQLite database 

. **Clone the repository**  
   git clone https://github.com/Lokesh-Rella/forty4-backend
   cd <repo-name>

   npm install
   start nodemon server.js
   PORT=8080
   DB_NAME=users.db

   GET all users:
  http://localhost:8080/api/users

  GET user by ID:
  http://localhost:8080/api/users/1

  POST create user:
  http://localhost:8080/api/users
  
  PUT update user:
  http://localhost:8080/api/users/1
  
  DELETE user:
  http://localhost:8080/api/users/1
