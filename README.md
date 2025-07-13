# 🏠 AirBnB Clone – Node.js, Express & MongoDB

A full-featured AirBnB-style web application built using **Node.js**, **Express.js**, **MongoDB**, and **EJS**. This project implements user authentication, session handling, protected routing for hosts, and a clean modular codebase.

---

## 🚀 Features

- 🔐 User authentication (Login, Signup)
- 🧾 Session management stored in MongoDB
- 🛡️ Protected `/host` routes
- 🌐 Dynamic views with EJS templating
- 🧩 Modular routing and controller architecture
- ❌ 404 error handling
- 📁 Organized project structure

---

## 🧱 Tech Stack

- **Backend:** Node.js, Express.js
- **Frontend:** EJS (server-rendered)
- **Database:** MongoDB (with Mongoose)
- **Session Store:** connect-mongodb-session
- **Styling:** Static assets via `/public`
- **View Engine:** EJS

---

## 📁 Project Structure

AirBnB-clone/
├── app.js
├── routes/
│ ├── authRouter.js
│ ├── storeRouter.js
│ └── hostRouter.js
├── controllers/
│ └── errors.js
├── utils/
│ └── pathUtil.js
├── views/
│ └── *.ejs
├── public/
│ └── [CSS, Images, etc.]


---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash

git clone https://github.com/<your-username>/airbnb-clone.git
cd airbnb-clone

```

### 2. Install dependencies

```bash

npm install

```

### 3. Update variables

```
In app.js

const DB_PATH = "Your MongoDB path"; 

```

### 4. Start the application

```bash

npm start

```

## 🧪 Future Improvements

✅ Add booking and reservation system

✅ Property image uploads

✅ Location mapping (Google Maps or Leaflet)

✅ Email verification and password reset

✅ Admin panel for listings

✅ UI upgrade (maybe React or Tailwind?)