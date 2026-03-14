# 🔍 Setup Diagnostic Guide

## Current Status Check

### ✅ Step 1: Install Dependencies

**The most common issue is missing dependencies!**

Run this command to install all dependencies:
```bash
npm run install-all
```

Or install manually:
```bash
# Install root dependencies
npm install

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

### ✅ Step 2: Check if Servers are Running

**Backend (Port 5000):**
```bash
# Check if running
netstat -ano | findstr :5000

# If not running, start it:
npm run server
# OR
cd server && npm run dev
```

**Frontend (Port 3000):**
```bash
# Check if running
netstat -ano | findstr :3000

# If not running, start it:
npm run client
# OR
cd client && npm start
```

### ✅ Step 3: Start Both Servers

**Option 1: Start both together (Recommended)**
```bash
npm run dev
```

**Option 2: Start separately**
```bash
# Terminal 1 - Backend
npm run server

# Terminal 2 - Frontend  
npm run client
```

### ✅ Step 4: Access Your Webpage

Once both servers are running:
- **Frontend (Your Resume Webpage):** http://localhost:3000
- **Backend API:** http://localhost:5000/api/resume

## Common Errors & Solutions

### ❌ Error: "Port 5000 already in use"
**Solution:**
```bash
# Find the process
netstat -ano | findstr :5000

# Kill it (replace PID with actual process ID)
taskkill /PID <PID> /F

# Or use a different port
# Create server/.env file with: PORT=5001
```

### ❌ Error: "Cannot GET /" or blank page
**Possible causes:**
1. Frontend not running - Start with `npm run client`
2. Backend not running - Start with `npm run server`
3. Dependencies not installed - Run `npm run install-all`

### ❌ Error: "Module not found" or "Cannot find module"
**Solution:**
```bash
# Reinstall dependencies
npm run install-all
```

### ❌ Error: "ECONNREFUSED" in browser console
**Solution:**
- Make sure backend is running on port 5000
- Check that `client/package.json` has: `"proxy": "http://localhost:5000"`
- Verify backend is accessible: Open http://localhost:5000/api/resume in browser

## Quick Diagnostic Commands

```bash
# Check if ports are in use
netstat -ano | findstr ":3000 :5000"

# Check if node_modules exist
Test-Path "client\node_modules"
Test-Path "server\node_modules"

# Check package.json files exist
Test-Path "package.json"
Test-Path "client\package.json"
Test-Path "server\package.json"
```

## Still Having Issues?

1. **Check the browser console** (F12) for detailed error messages
2. **Check terminal output** for server errors
3. **Verify both servers are running** on ports 3000 and 5000
4. **Clear browser cache** and hard refresh (Ctrl+Shift+R)
5. **Check firewall/antivirus** isn't blocking ports

