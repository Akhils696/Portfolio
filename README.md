# Resume Website

A modern, responsive resume website built with React, Node.js, and Express.

## Features

- 🎨 Beautiful, modern UI with gradient design
- 📱 Fully responsive layout
- ⚡ Fast and lightweight
- 🔄 RESTful API backend
- 🎯 Easy to customize

## Project Structure

```
.
├── client/          # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── server/          # Express backend
│   ├── index.js
│   └── package.json
└── package.json     # Root package.json
```

## Installation

1. Install all dependencies:
```bash
npm run install-all
```

Or install manually:
```bash
npm install
cd server && npm install
cd ../client && npm install
```

## Running the Application

### Development Mode

Run both frontend and backend concurrently:
```bash
npm run dev
```

Or run them separately:
```bash
# Terminal 1 - Backend
npm run server

# Terminal 2 - Frontend
npm run client
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

### Production Build

1. Build the React app:
```bash
npm run build
```

2. Start the production server:
```bash
cd server
npm start
```

## Customization

### Update Resume Data

Edit the resume data in `server/index.js` in the `/api/resume` endpoint. Update:
- Personal information
- Professional summary
- Work experience
- Education
- Skills
- Projects

### Styling

All component styles are in the `client/src/components/` directory. The main theme colors can be changed in the CSS files:
- Primary gradient: `#667eea` to `#764ba2`
- Adjust colors in component CSS files as needed

## Technologies Used

- **Frontend**: React 18, CSS3
- **Backend**: Node.js, Express
- **HTTP Client**: Axios
- **Development**: Concurrently, Nodemon

## License

ISC



