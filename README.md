# Mesaverde: Real Estate App

Mesaverde is a real estate platform built with the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to browse, search, and manage property listings with ease. The platform provides both a user interface for searching and interacting with properties, and an admin panel for managing property data.

## Features

- **Browse Properties:** View various property listings with detailed information.
- **Search & Filter:** Filter properties by location, price, and other criteria.
- **User Profiles:** Users can create and manage profiles to save favorite properties.
- **Admin Panel:** Admins can add, update, or delete property listings.
- **Responsive Design:** The app is fully responsive, working seamlessly on both desktop and mobile devices.

## Tech Stack

- **Frontend:** React, Redux, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Deployment:** Heroku (or any cloud platform)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or hosted on MongoDB Atlas)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/turbo7slug/Mesaverde.git
    ```

2. **Navigate to the project folder:**

    ```bash
    cd Mesaverde
    ```

3. **Install backend dependencies:**

    ```bash
    cd backend
    npm install
    ```

4. **Install frontend dependencies:**

    ```bash
    cd ../frontend
    npm install
    ```

### Running the Application

1. **Start the backend server:**

    ```bash
    cd backend
    npm start
    ```

2. **Start the frontend server:**

    ```bash
    cd ../frontend
    npm run dev
    ```

3. **Open the app in your browser:**  
   Go to `http://localhost:3000` to view the application.

### Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```env
PORT=3000
MONGO_URI="your-mongodb-connection-uri"
JWT_SECRET="your-jwt-secret-key"
```
