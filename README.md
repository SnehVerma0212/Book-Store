# Book API

A simple RESTful API for managing books, built with **Node.js**, **Express.js**, and **MongoDB (Mongoose)**.

---

## 🚀 Features

* Create a new book
* Get all books
* Get a single book by ID
* Update a book by ID
* Delete a book by ID

---

## 🛠️ Tech Stack

* **Node.js** - JavaScript runtime
* **Express.js** - Web framework
* **MongoDB** - NoSQL database
* **Mongoose** - ODM for MongoDB

---

## 📂 Project Structure

```bash
.
├── models
│   └── book.js       # Mongoose schema for Book
├── routes
│   └── book.js       # Book-related routes
├── server.js         # Main server entry point
└── package.json      # Dependencies and scripts
```

---

## ⚙️ Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/book-api.git
   cd book-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a **.env** file in the root directory and add your MongoDB URI:

   ```env
   MONGO_URI=mongodb://localhost:27017/booksdb
   PORT=5000
   ```

4. Start the server:

   ```bash
   npm start
   ```

The server will run on **[http://localhost:5000](http://localhost:5000)**.

---

## 📖 API Endpoints

### 1. Get all books

```http
GET /api/books
```

**Response:**

```json
[
  {
    "_id": "64a1c12345efabc6789d0123",
    "title": "Book Title",
    "author": "Author Name",
    "year": 2023
  }
]
```

---

### 2. Get a single book by ID

```http
GET /api/books/:id
```

**Response:**

```json
{
  "_id": "64a1c12345efabc6789d0123",
  "title": "Book Title",
  "author": "Author Name",
  "year": 2023
}
```

---

### 3. Create a new book

```http
POST /api/books
```

**Request Body:**

```json
{
  "title": "New Book",
  "author": "John Doe",
  "year": 2025
}
```

**Response:**

```json
{
  "_id": "64a1c67890efabc1234d5678",
  "title": "New Book",
  "author": "John Doe",
  "year": 2025
}
```

---

### 4. Update a book by ID

```http
PUT /api/books/:id
```

**Request Body:**

```json
{
  "title": "Updated Title",
  "author": "Jane Doe",
  "year": 2024
}
```

**Response:**

```json
{
  "_id": "64a1c12345efabc6789d0123",
  "title": "Updated Title",
  "author": "Jane Doe",
  "year": 2024
}
```

---

### 5. Delete a book by ID

```http
DELETE /api/books/:id
```

**Response:**

```json
{
  "message": "Book deleted successfully"
}
```

---

## 🧪 Testing the API

You can test the endpoints using **Postman**, **Thunder Client**, or **cURL**.

Example with cURL:

```bash
curl -X POST http://localhost:5000/api/books \
-H "Content-Type: application/json" \
-d '{"title":"Book Title","author":"Author Name","year":2025}'
```

---

## 📜 License

This project is licensed under the **MIT License**.
