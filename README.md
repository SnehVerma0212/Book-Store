# 📚 Book Store API

A simple RESTful API built with **Node.js**, **Express**, and **MongoDB (Mongoose)** to manage a collection of books.
This project supports basic **CRUD operations** along with **pagination** for fetching books.

---

## 🚀 Features

* ➕ Add a new book
* 📖 Get all books with **pagination**
* 📘 Get a single book by **ID**
* ✏️ Update a book by **ID**
* ❌ Delete a book by **ID**
* ⚠️ Proper error handling with meaningful **HTTP status codes**

---

## 📂 Project Structure

```bash
BOOK STORE/
│── node_modules/
│── src/
│   ├── config/
│   │   └── db.js               # Database connection
│   ├── controllers/
│   │   └── books.controller.js # Controller logic
│   ├── models/
│   │   └── book.model.js       # Mongoose Book schema
│   ├── routes/
│   │   └── books.routes.js     # Routes for book APIs
│   ├── middlewares/
│   │   └── error.middleware.js # Centralized error handling
│   ├── utils/
│   │   └── logger.js           # Logger utility (optional)
│   └── app.js                  # Express app setup
│── .env                        # Environment variables
│── .gitignore
│── package.json
│── package-lock.json
│── README.md
│── server.js                   # Server entry point
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/book-store-api.git
   cd book-store-api
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables in `.env`**

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

4. **Run the server**

   ```bash
   npm start
   ```

   For development with **nodemon**:

   ```bash
   npm run dev
   ```

---

## 📡 API Endpoints

### Base URL

```
http://localhost:5000/api/books
```

### Endpoints Overview

| Method | Endpoint        | Description               |
| ------ | --------------- | ------------------------- |
| POST   | /api/books      | Add a new book            |
| GET    | /api/books      | Get all books (paginated) |
| GET    | /api/books/\:id | Get a book by ID          |
| PUT    | /api/books/\:id | Update a book by ID       |
| DELETE | /api/books/\:id | Delete a book by ID       |

---

### ➕ Add a Book

**POST** `/api/books`

#### Request Body (JSON)

```json
{
  "title": "The Hobbit",
  "author": "J.R.R. Tolkien",
  "genre": "Fantasy",
  "publishedDate": "1937-09-21"
}
```

---

### 📖 Get All Books (with Pagination)

**GET** `/api/books?page=1&limit=10`

#### Query Params

* `page` → page number (default: 1)
* `limit` → number of books per page (default: 10)

---

### 📘 Get Single Book by ID

**GET** `/api/books/:id`

---

### ✏️ Update a Book

**PUT** `/api/books/:id`

#### Request Body (JSON)

```json
{
  "title": "The Hobbit: An Unexpected Journey",
  "author": "J.R.R. Tolkien"
}
```

---

### ❌ Delete a Book

**DELETE** `/api/books/:id`

---

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB with Mongoose**
* **dotenv** for environment configuration
