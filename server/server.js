const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const DB_PATH = path.join(__dirname, 'data', 'database.json');

// Initialize local database if it doesn't exist
if (!fs.existsSync(DB_PATH)) {
  const initialDb = {
    users: [
      {
        id: "usr_demo_1",
        name: "Student Auditor",
        email: "student@safebite.org",
        passwordHash: crypto.createHash('sha256').update("safebite2026").digest('hex'),
        role: "CITIZEN_INSPECTOR",
        createdAt: new Date().toISOString()
      }
    ],
    reports: [],
    vendorAudits: []
  };
  fs.writeFileSync(DB_PATH, JSON.stringify(initialDb, null, 2));
}

function readDb() {
  const data = fs.readFileSync(DB_PATH, 'utf8');
  return JSON.parse(data);
}

function writeDb(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

// ----------------- AUTHENTICATION ROUTES (100% FREE) -----------------

// Signup Endpoint
app.post('/api/auth/signup', (req, res) => {
  const { name, email, password, role } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const db = readDb();
  const existingUser = db.users.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (existingUser) {
    return res.status(400).json({ error: "Email already registered" });
  }

  const newUser = {
    id: `usr_${Date.now()}`,
    name,
    email: email.toLowerCase(),
    passwordHash: crypto.createHash('sha256').update(password).digest('hex'),
    role: role || "CITIZEN_INSPECTOR",
    createdAt: new Date().toISOString()
  };

  db.users.push(newUser);
  writeDb(db);

  // Return safe user object (excluding password hash) and session token
  const token = Buffer.from(`${newUser.id}:${Date.now()}`).toString('base64');
  res.status(201).json({
    message: "Registration successful",
    token,
    user: { id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role }
  });
});

// Login Endpoint
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  const db = readDb();
  const passwordHash = crypto.createHash('sha256').update(password).digest('hex');
  const user = db.users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.passwordHash === passwordHash);

  if (!user) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  const token = Buffer.from(`${user.id}:${Date.now()}`).toString('base64');
  res.json({
    message: "Login successful",
    token,
    user: { id: user.id, name: user.name, email: user.email, role: user.role }
  });
});

// ----------------- REPORTS & GRIEVANCE ROUTES -----------------

// Submit a new Food Safety Grievance Report
app.post('/api/reports', (req, res) => {
  const { vendorName, location, violationType, description, riskScore, filedBy } = req.body;
  const db = readDb();

  const newReport = {
    id: `REP-${Date.now().toString().slice(-6)}`,
    vendorName,
    location,
    violationType,
    description,
    riskScore: riskScore || 85,
    filedBy: filedBy || "Anonymous Citizen",
    status: "DISPATCHED_TO_FSO",
    timestamp: new Date().toISOString()
  };

  db.reports.unshift(newReport);
  writeDb(db);

  res.status(201).json({ message: "Grievance registered successfully", report: newReport });
});

// Get all reports
app.get('/api/reports', (req, res) => {
  const db = readDb();
  res.json({ reports: db.reports });
});

app.listen(PORT, () => {
  console.log(`🛡️ SafeBite Free Full-Stack Server running at http://localhost:${PORT}`);
});
