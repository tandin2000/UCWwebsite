# Coffee Shop Application

A full-stack web application for sharing coffee-related posts.

## Features

- User registration
- Create and view coffee posts
- Responsive Material-UI design
- MySQL database backend
- Express.js REST API
- React frontend

## Prerequisites

- Node.js (v14 or higher)
- MySQL Server
- npm or yarn

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd coffee-shop
   ```

2. Create a `.env` file in the server directory with the following variables:
   ```
   DB_HOST=localhost
   DB_USER=your_mysql_username
   DB_PASS=your_mysql_password
   DB_NAME=coffee_shop_db
   PORT=5000
   ```

3. Install dependencies:
   ```bash
   npm run install-all
   ```

4. Make sure MySQL is running on your system

## Running the Application

### Development Mode

To run both frontend and backend in development mode:
```bash
npm start
```

This will:
- Start the backend server on port 5000
- Start the React development server on port 3000
- The React app will proxy API requests to the backend automatically
- Enable hot-reloading for both frontend and backend

The development setup works as follows:
- Frontend runs on: `http://localhost:3000`
- Backend runs on: `http://localhost:5000`
- API requests from frontend are automatically proxied to the backend
- You can access the application at `http://localhost:3000`

### Production Build

1. Build the frontend:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm run server
   ```

The application will be available at `http://localhost:5000`

## Project Structure

```
coffee-shop/
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── components/     # React components
│       └── App.js         # Main React component
├── server/                 # Express backend
│   ├── config/            # Database configuration
│   ├── routes/            # API routes
│   └── server.js          # Express server
├── package.json           # Root package.json
└── README.md             # This file
```

## API Endpoints

- `POST /api/register` - Register a new user
- `POST /api/post` - Create a new post
- `GET /api/posts` - Get all posts
- `GET /api/health` - Check server status 