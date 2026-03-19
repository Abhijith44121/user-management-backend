# User Management API (Backend)

## 📌 Description

This is a backend API built using FeathersJS and PostgreSQL.
It provides endpoints to manage users with CRUD operations.

## 🚀 Features

* Create user
* Fetch users
* Update user
* Soft delete user (using `deleted` flag)
* REST API using FeathersJS

## 🛠️ Tech Stack

* Node.js
* FeathersJS
* PostgreSQL
* Knex

## ⚙️ Setup Instructions

1. Clone the repository

2. Navigate to backend folder:

   ```bash
   cd backend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Configure database in:

   ```
   config/default.json
   ```

5. Run migrations:

   ```bash
   npm run migrate
   ```

6. Start server:

   ```bash
   npm start
   ```

## 🌐 API Endpoints

* GET /users
* POST /users
* PATCH /users/:id

## 📷 Notes

* Uses soft delete (`deleted: true`)
* Only non-deleted users are shown in frontend
