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

- `GET /api/health` - Health check endpoint (includes database connectivity status)

## Environment Variables

```
MONGODB_URI=mongodb://localhost:27017/myapp
```
