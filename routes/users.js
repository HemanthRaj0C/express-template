const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');
const { getDB } = require('../config/db');

// Get all users
router.get('/users', async (req, res) => {
  try {
    const db = getDB();
    const users = await db.collection('users').find().toArray();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get user by ID
router.get('/users/:id', async (req, res) => {
  try {
    const db = getDB();
    const user = await db.collection('users').findOne({ 
      _id: new ObjectId(req.params.id) 
    });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create user
router.post('/users', async (req, res) => {
  try {
    const db = getDB();
    const { name, email } = req.body;
    const result = await db.collection('users').insertOne({ name, email });
    res.status(201).json({ _id: result.insertedId, name, email });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update user
router.put('/users/:id', async (req, res) => {
  try {
    const db = getDB();
    const { name, email } = req.body;
    const result = await db.collection('users').findOneAndUpdate(
      { _id: new ObjectId(req.params.id) },
      { $set: { name, email } },
      { returnDocument: 'after' }
    );
    if (!result) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete user
router.delete('/users/:id', async (req, res) => {
  try {
    const db = getDB();
    const result = await db.collection('users').deleteOne({ 
      _id: new ObjectId(req.params.id) 
    });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
