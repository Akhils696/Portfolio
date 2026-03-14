# Setup Instructions - Resume Website

## ⚠️ IMPORTANT: Install Dependencies First!

The webpage won't work until you install all dependencies.

## Step-by-Step Setup

### 1. Install All Dependencies

Run this command from the root directory:
```bash
npm run install-all
```

This will install:
- Root dependencies (concurrently)
- Server dependencies (express, cors, etc.)
- Client dependencies (react, react-dom, etc.)

**OR install manually:**
```bash
# Install root dependencies
npm install

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### 2. Start the Application

**Option A: Start both servers together (Recommended)**
```bash
npm run dev
```

**Option B: Start servers separately**

Terminal 1 - Backend:
```bash
npm run server
```

Terminal 2 - Frontend:
```bash
npm run client
```

### 3. Access Your Resume

Once both servers are running:
- **Frontend (Your Resume Webpage)**: http://localhost:3000
- **Backend API**: http://localhost:5000/api/resume

## Troubleshooting

### Error: "Cannot connect to backend server"
- Make sure the backend is running on port 5000
- Check: http://localhost:5000/api/resume (should show JSON data)
- Verify no other application is using port 5000

### Error: "Port already in use"
- Kill the process using the port:
  ```bash
  # Find process on port 5000
  netstat -ano | findstr :5000
  
  # Kill it (replace PID with actual process ID)
  taskkill /PID <PID> /F
  ```

### Error: "Module not found" or "Cannot find module"
- Dependencies are not installed
- Run: `npm run install-all`

### No webpage visible
1. Check if React app is running (should see output in terminal)
2. Open browser to http://localhost:3000
3. Check browser console (F12) for errors
4. Verify backend is running and accessible

## Quick Test

Test if backend is working:
```bash
# In browser or using curl:
http://localhost:5000/api/resume
```

You should see JSON data with your resume information.

