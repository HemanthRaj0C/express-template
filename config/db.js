const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/myapp';
const client = new MongoClient(uri);

let db = null;

async function connectDB() {
  try {
    await client.connect();
    db = client.db();
    console.log('📦 Connected to MongoDB');
    return db;
  } catch (err) {
    console.error('MongoDB connection error:', err);
    throw err;
  }
}

function getDB() {
  if (!db) {
    throw new Error('Database not connected. Call connectDB() first.');
  }
  return db;
}

module.exports = { connectDB, getDB, client };
