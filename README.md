# 📦 SwiftDrop — Parcel Delivery Management Platform

Live website:
Frontend GitHub:
Backend GitHub:
Demo video:

SwiftDrop is a real-world, personal parcel delivery management platform designed to simplify and manage the complete parcel delivery process. It connects customers, riders, and administrators through a role-based system for parcel sending, rider assignment, payment, delivery-status management, and parcel tracking.

The platform provides separate functionalities for Users, Riders, and Admins, allowing each role to manage tasks according to their responsibilities.

---

## 🚀 Key Features

- 📦 Parcel booking with pickup and drop-off information
- 🚚 Parcel assignment to riders
- 📍 Parcel tracking with a unique Tracking ID
- 🔄 Real-time delivery status updates
- 💳 Secure online payment with Stripe
- 💰 Payment history
- 👤 Role-based access for Users, Riders, and Admins
- 🛵 Rider management and rider approval
- 📊 Admin dashboard with delivery statistics
- 🔎 Parcel search and filtering
- 📋 My Parcels section for customers
- 🗺️ Map-based location functionality using Leaflet
- 🔐 Firebase authentication
- 📱 Responsive user interface
- 🔔 User-friendly notifications and alerts

---

## 👥 User Roles & Functionalities

### 👤 User / Customer

Customers can:

- Register and log in securely
- Book a parcel
- Provide pickup and drop-off information
- View their booked parcels
- Make parcel payments through Stripe
- View payment history
- Track parcel delivery
- View delivery status
- Access their personal My Parcels section

### 🛵 Rider

Riders can:

- Register as a rider
- View assigned deliveries
- View delivery details
- Manage assigned deliveries
- Update parcel delivery status
- Complete deliveries
- Track their delivery tasks

### 👨‍💼 Admin

Admins can:

- Manage users
- Manage parcels
- Manage riders
- Approve rider applications
- Assign riders to parcels
- Monitor delivery activities
- View delivery statistics
- Manage the overall delivery process

---

## 🔄 Parcel Delivery Status Flow

SwiftDrop follows a structured delivery workflow:

```text
Pending Pickup
      ↓
Driver Assigned
      ↓
Rider Arriving
      ↓
Parcel Picked Up
      ↓
Parcel Delivered
```

Each status represents a specific stage of the parcel delivery process and helps customers and administrators monitor delivery progress.

---

## 🛠️ Technologies Used

### Frontend

- **React 19**
- **Vite**
- **React Router**
- **Tailwind CSS**
- **DaisyUI**
- **TanStack React Query**
- **Axios**
- **React Hook Form**
- **React Icons**
- **React Leaflet**
- **Leaflet**
- **Recharts**
- **Swiper**
- **React Responsive Carousel**
- **React Spinners**
- **React Toastify**
- **SweetAlert2**

### Backend

- **Node.js**
- **Express.js**
- **MongoDB**

### Authentication

- **Firebase Authentication**

### Payment

- **Stripe**

### Deployment

- **Vercel**
- **Firebase**

---

## 🔐 Authentication & Authorization

SwiftDrop uses **Firebase Authentication** for secure user authentication.

The application also implements **role-based access control**, allowing different users to access different parts of the system.

```text
User
 ├── Book Parcel
 ├── Make Payment
 ├── Track Parcel
 └── View Payment History

Rider
 ├── View Assigned Deliveries
 ├── Update Delivery Status
 └── Complete Delivery

Admin
 ├── Manage Users
 ├── Manage Parcels
 ├── Manage Riders
 ├── Approve Riders
 └── Assign Riders
```

---

## 💳 Payment System

SwiftDrop integrates **Stripe** to handle online parcel payments.

The payment system allows customers to:

- Pay for parcel delivery
- Complete secure online transactions
- View payment history
- Associate payments with their parcel information

---

## 📍 Parcel Tracking

Every parcel can be associated with a unique **Tracking ID**.

Customers can use the tracking functionality to follow the progress of their parcel through different delivery stages:

```text
Pending Pickup
      ↓
Driver Assigned
      ↓
Rider Arriving
      ↓
Parcel Picked Up
      ↓
Parcel Delivered
```

The application also uses **Leaflet and React Leaflet** for map/location-related functionality.

---

## 📊 Admin Dashboard

The admin dashboard provides an overview of the delivery system and helps administrators monitor parcel activities.

It includes:

- Delivery statistics
- Parcel management
- Rider management
- User management
- Rider approval
- Rider assignment
- Delivery-status monitoring

Charts and statistics are displayed using **Recharts**.

---

## 📱 Responsive Design

SwiftDrop is designed to provide a responsive experience across:

- 💻 Desktop
- 📱 Mobile
- 📲 Tablet

The interface is built with **Tailwind CSS** and **DaisyUI** to create a clean and responsive user experience.

---

## 🗺️ Location & Map Integration

SwiftDrop uses:

- **Leaflet**
- **React Leaflet**

for map-based location functionality, helping support pickup and drop-off location features within the delivery platform.

---

## ⚡ Data Management

**TanStack React Query** is used for efficient server-state management and data fetching.

**Axios** is used for communicating between the frontend and backend REST APIs.

This helps manage parcel, rider, user, and delivery-related data efficiently.

---

## 🎯 Project Purpose

SwiftDrop was developed as a **personal real-world project** to build practical experience in full-stack web development and solve common problems involved in parcel delivery management.

The project focuses on creating a system where customers can easily book and track parcels, riders can manage their assigned deliveries, and administrators can control and monitor the overall delivery operation.

---

## 💡 What I Practiced & Learned

Through this project, I gained practical experience with:

- Building a full-stack web application
- Developing REST APIs
- React component-based development
- Role-based authorization
- Firebase authentication
- MongoDB database operations
- Server-state management with TanStack React Query
- Stripe payment integration
- Parcel tracking workflows
- Rider assignment systems
- Admin dashboard development
- Map and location integration
- Form handling and validation
- Responsive UI development
- API integration with Axios
- Data visualization with Recharts
- Deployment with Vercel and Firebase
- Managing environment variables and sensitive credentials

---

## 🔧 Installation & Setup

### 1. Clone the repository

```bash
git clone <frontend-github-url>
cd swift-drop
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file and add the required Firebase and API configuration.

Example:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
```

Never commit secret credentials or private API keys to GitHub.

### 4. Start the development server

```bash
npm run dev
```

The application will then run on the local development server.

---

## 🌐 Project Links

**Live Website:** Coming soon

**Frontend Repository:** Coming soon

**Backend Repository:** Coming soon

**Demo Video:** Coming soon

---

## 👩‍💻 Project Type

**Personal Project | Real-World Full-Stack Web Application**

Built to demonstrate practical experience in modern frontend and backend development, authentication, payment integration, database management, API development, and role-based application architecture.
