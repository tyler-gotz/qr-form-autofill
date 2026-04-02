# 🏥 Patient QR Intake System

A full-stack application that enables patient intake using QR codes. Patients can scan a QR code to open a prefilled intake form, improving speed and accuracy during check-in.

---

## 🚀 Features

* 📱 QR code generation per patient
* 🔐 Secure prefill tokens (no raw patient IDs exposed)
* 🧾 Prefilled intake form via QR scan
* ⚡ Fast React UI with modern styling (Tailwind + shadcn/ui)
* 🗄️ Go backend with MySQL database
* 🔄 Token-based data fetching and submission

---

## 🧠 How It Works

1. A patient is created (admission step)
2. A secure prefill token is generated and stored
3. A QR code is generated containing:

   ```
   /intake-form?token=abc123
   ```
4. Patient scans QR code on their phone
5. React app loads intake form
6. App fetches patient data using the token
7. Form is prefilled and submitted back to the API

---

## 🧱 Tech Stack

### Backend

* Go (Gin)
* GORM
* MySQL

### Frontend

* React
* TanStack Query
* Tailwind CSS
* shadcn/ui

---

## 📁 Project Structure

```
server/
  cmd/
    api/        # API entrypoint
    seed/       # Seed scripts
  internal/
    db/
    models/
    handlers/
    repositories/
    utils/

client/
  src/
    components/
    pages/
    lib/
```

---

## ⚙️ Setup

### 1. Clone the repo

```
git clone <your-repo-url>
cd project
```

---

### 2. Backend setup

#### Install dependencies

```
cd server
go mod tidy
```

#### Set environment variables

Create a `.env` file:

```
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=patients
PORT=8080
```

#### Run API

```
make run
```

#### Seed database

```
make seed
```

---

### 3. Frontend setup

```
cd client
npm install
```

Run app:

```
npm run dev
```

---

## 📡 API Endpoints

### Get Prefill Data

```
GET /api/patients/:token/qr
```

Returns patient data for form prefill.

---

## 🔐 Security

* Tokens are randomly generated (cryptographically secure)
* Tokens can expire
* Patient IDs are never exposed in QR codes
* Tokens can be extended to be single-use

---

## 🧪 Development Tips

### Run on mobile device

* Use your local IP instead of `localhost`
* Example:

  ```
  http://192.168.x.x:3000/intake-form?token=abc
  ```

---

### Enable hot reload

```
make dev
```

(Requires Air installed)

---

## 🚀 Future Improvements

* One-time use tokens
* Token expiration UI handling
* QR code download/export
* Multi-step intake forms
* Authentication & admin roles

