# NoodleWorks - MERN Stack Contact Form

A full-stack web application with landing page and contact form functionality built using the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

- **Landing Page** with:
  - Hero section with call-to-action
  - Features section highlighting key offerings
  - Testimonials section with customer reviews
  - Responsive navbar and footer

- **Contact Form** that:
  - Collects user information (name, email, phone, message)
  - Validates input fields
  - Submits data to MongoDB database
  - Provides user feedback on submission status

- **Contact Details Page** that:
  - Displays all submitted form entries
  - Shows data in a tabular format
  - Includes timestamps for each submission

## Tech Stack

- **Frontend**: React.js, React Router, CSS3
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Deployment**: Netlify (frontend), Render (backend)

## Project Structure
project/
├── client/               # Frontend React application
│   ├── public/           # Static files
│   └── src/              # React components and styles
│       ├── components/   # Reusable UI components
│       └── pages/        # Main page components
├── server/               # Backend Node.js/Express application
│   ├── models/           # MongoDB data models
│   └── index.js          # Express server setup

## Deployment Links

- **Frontend**: [https://noodleworks-contact.netlify.app](https://your-frontend-url-here)
- **Backend**: [https://noodleworks-backend.onrender.com](https://your-backend-url-here)

## How to Run Locally

1. Clone the repository
2. Install dependencies:
cd client && npm install
cd server && npm install
3. Start the backend server:
cd server && npm start
4. Start the frontend development server:
cd client && npm start
5. Open http://localhost:3000 in your browser

## Assignment Requirements Met
This project was completed as part of a 24-hour assignment to create a MERN stack application with specific features including a landing page, contact form, and data display functionality.