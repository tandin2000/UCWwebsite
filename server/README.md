# Coffee Shop Backend

This is the backend server for the Coffee Shop application.

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the root directory with the following variables:
   ```
   DB_HOST=localhost
   DB_USER=your_mysql_username
   DB_PASS=your_mysql_password
   DB_NAME=coffee_shop_db
   PORT=3000
   ```

3. Make sure MySQL is running on your system

4. Start the server:
   ```bash
   node server.js
   ```

The server will:
- Connect to MySQL
- Create the database if it doesn't exist
- Create the required tables (users and posts) if they don't exist
- Start listening on the specified port

## API Endpoints

- `GET /api/health` - Check if the server is running

More endpoints will be added as the application grows. 