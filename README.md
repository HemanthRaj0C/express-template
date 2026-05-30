# Express Backend Template (PostgreSQL)

Express.js backend template with PostgreSQL database integration.

## Quick Start

```bash
# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Start PostgreSQL (Docker)
docker run -d --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=postgres postgres

# Start server
npm run dev
```

## Available Routes

- `GET /api/health` - Health check endpoint (includes database connectivity status)

## Environment Variables

```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=myapp
DB_USER=postgres
DB_PASSWORD=postgres
```
