# **Authentication Application with Hexagonal Architecture (ts-xaboilerplate)**

This is a sample Node.js application built with TypeScript to handle user authentication (registration, login, etc.) by applying the principles of **Hexagonal Architecture (Ports & Adapters)** and **Domain-Driven Design (DDD)**.

## **Architectural Philosophy**

This application is designed with a strict separation between layers to achieve the following goals:

* **Framework-Independent:** The core of the application (the business logic) does not depend on a web framework like Express.  
* **Database-Independent:** The application core does not know what type of database is being used.  
* **Highly Testable:** Each layer, especially the *domain* and *application* layers, can be tested in isolation without external dependencies.

### **Layer Structure**

1. **Domain Layer (The Core):** Contains pure, immutable business entities and core business rules. It has zero external dependencies.  
2. **Application Layer:** Contains specific use cases that orchestrate the domain entities to get a job done.  
3. **Infrastructure Layer:** Contains the technical implementations, such as the connection to MongoDB and adapters for Bcrypt and JWT.  
4. **Main Layer (The Outermost Layer):** Acts as the composition root that connects all layers and runs the application via an HTTP server.

## **How to Run the Project**

1. **Clone this repository:**  
   git clone https://github.com/Reza1290/ts-xaboilerplate.git  
   cd ts-xaboilerplate

2. **Install dependencies:**  
   npm install

3. **Create a .env file:** Copy the contents of .env.example (if it exists) or create a new .env file and configure the following variables:  
   PORT=3000  
   MONGO\_URL=mongodb://localhost:27017/hexagonal-auth-db  
   JWT\_SECRET=your-strong-and-secret-key

   *Make sure your MongoDB instance is running.*  
4. **Run the development server:**  
   npm run dev

   The server will be running at http://localhost:3000.  
5. **For Production:**  
   \# Compile TypeScript to JavaScript  
   npm run build

   \# Run from the compiled JavaScript files  
   npm run start

## **API Endpoints**

All endpoints are prefixed with /api.

* POST /users \- **Register a New User**  
  * Body: { "name": "John Doe", "email": "john@example.com", "password": "password123" }  
* POST /sessions \- **Login / Authenticate User**  
  * Body: { "email": "john@example.com", "password": "password123" }  
* GET /me \- **Get User Profile (Protected)**  
  * Header: Authorization: Bearer \<TOKEN\>  
* PATCH /users/password \- **Change Password (Protected)**  
  * Header: Authorization: Bearer \<TOKEN\>  
  * Body: { "oldPassword": "password123", "newPassword": "newpassword456" }



# [ID] BAHASA INDONESIA

# **Aplikasi Otentikasi dengan Arsitektur Hexagonal (ts-xaboilerplate)**

Ini adalah contoh aplikasi Node.js yang dibangun menggunakan TypeScript untuk menangani otentikasi pengguna (registrasi, login, dll.) dengan menerapkan prinsip-prinsip **Hexagonal Architecture (Ports & Adapters)** dan **Domain-Driven Design (DDD)**.

## **Filosofi Arsitektur**

Aplikasi ini dirancang dengan pemisahan yang ketat antar lapisan untuk mencapai tujuan-tujuan berikut:

* **Independen dari Framework:** Inti dari aplikasi (logika bisnis) tidak bergantung pada framework web seperti Express.  
* **Independen dari Database:** Inti aplikasi tidak tahu jenis database apa yang digunakan.  
* **Sangat Mudah Dites (*Testable*):** Setiap lapisan, terutama *domain* dan *application*, dapat dites secara terpisah tanpa memerlukan dependensi eksternal.

### **Struktur Lapisan**

1. **Domain Layer (Terdalam):** Berisi entitas bisnis yang murni dan *immutable* serta aturan bisnis inti. Tidak memiliki dependensi eksternal sama sekali.  
2. **Application Layer:** Berisi *use case* spesifik yang mengorkestrasi entitas domain untuk menyelesaikan sebuah pekerjaan.  
3. **Infrastructure Layer:** Berisi implementasi teknis seperti koneksi ke MongoDB, *adapter* untuk Bcrypt, dan JWT.  
4. **Main Layer (Terluar):** Bertindak sebagai *composition root* yang menghubungkan semua lapisan dan menjalankan aplikasi melalui server HTTP.

## **Cara Menjalankan Proyek**

1. **Clone repositori ini:**  
   git clone https://github.com/Reza1290/ts-xaboilerplate.git  
   cd ts-xaboilerplate

2. **Install dependensi:**  
   npm install

3. **Buat file .env:** Salin isi dari .env.example (jika ada) atau buat file .env baru dan konfigurasikan variabel berikut:  
   PORT=3000  
   MONGO\_URL=mongodb://localhost:27017/hexagonal-auth-db  
   JWT\_SECRET=kunci-rahasia-anda-yang-kuat

   *Pastikan MongoDB Anda sedang berjalan.*  
4. **Jalankan server untuk development:**  
   npm run dev

   Server akan berjalan di http://localhost:3000.  
5. **Untuk Production:**  
   \# Kompilasi TypeScript ke JavaScript  
   npm run build

   \# Jalankan dari file JavaScript hasil kompilasi  
   npm run start

## **Endpoint API**

Semua endpoint berada di bawah prefix /api.

* POST /users \- **Registrasi Pengguna Baru**  
  * Body: { "name": "John Doe", "email": "john@example.com", "password": "password123" }  
* POST /sessions \- **Login / Otentikasi Pengguna**  
  * Body: { "email": "john@example.com", "password": "password123" }  
* GET /me \- **Mendapatkan Profil Pengguna (Terproteksi)**  
  * Header: Authorization: Bearer \<TOKEN\>  
* PATCH /users/password \- **Mengubah Password (Terproteksi)**  
  * Header: Authorization: Bearer \<TOKEN\>  
  * Body: { "oldPassword": "password123", "newPassword": "newpassword456" }