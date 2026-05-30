# Express Backend Template (MySQL)

Express.js backend template with MySQL integration.

## Quick Start

```bash
# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Start MySQL (Docker)
docker run -d --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=myapp mysql

# Start server
npm run dev
```

## Available Routes

- `GET /api/health` - Health check endpoint (includes database connectivity status)

## Environment Variables

```
DB_HOST=localhost
DB_PORT=3306
DB_NAME=myapp
DB_USER=root
DB_PASSWORD=
```
