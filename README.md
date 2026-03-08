# Express Backend Template (MongoDB)

Express.js backend template with MongoDB integration.

## Quick Start

```bash
# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Start MongoDB (Docker)
docker run -d --name mongodb -p 27017:27017 mongo

# Start server
npm run dev
```

## Available Routes

- `GET /api/health` - Health check
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## Environment Variables

```
MONGODB_URI=mongodb://localhost:27017/myapp
```
