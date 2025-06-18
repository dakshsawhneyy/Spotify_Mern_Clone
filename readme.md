
# MERN Spotify Clone

A full-featured Spotify-like music streaming web application built using the MERN (MongoDB, Express, React, Node.js) stack. This project includes a user-facing frontend, a powerful backend API, an admin panel for managing content, and MongoDB for storage.

## Features

### User Side
- User authentication and registration
- Browse songs, albums, and artists
- Play, pause, and skip tracks
- Search functionality
- User playlists

### Admin Panel
- Secure admin login
- Upload, edit, and delete songs and albums
- Manage artists and categories
- Monitor user activity and data

### Backend API
- RESTful API using Node.js and Express
- JWT-based authentication
- Secure admin and user routes
- File uploads for songs and images
- MongoDB for data storage

## Tech Stack

- **Frontend:** React, Redux Toolkit, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas or local MongoDB
- **Authentication:** JWT
- **File Uploads:** Multer
- **Admin Panel:** React-based dashboard

## Folder Structure

```
/client         → React frontend
/server         → Express backend API
/admin-panel    → React admin dashboard
/uploads        → Song and image uploads
```

## Setup Instructions

### Prerequisites

- Node.js and npm installed
- MongoDB (local or cloud)

### Clone Repository

```bash
git clone https://github.com/yourusername/mern-spotify-clone.git
cd mern-spotify-clone
```

### Backend Setup

```bash
cd server
npm install
create .env file with:

PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

npm run dev
```

### Frontend Setup

```bash
cd client
npm install
npm start
```

### Admin Panel Setup

```bash
cd admin-panel
npm install
npm start
```

## API Endpoints

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/songs`
- `POST /api/songs` *(admin only)*
- `DELETE /api/songs/:id` *(admin only)*

## Screenshots

- Home page
- Song detail
- Admin dashboard
- Upload form

*(Add screenshots here)*

## Future Improvements

- Add subscription/payment features
- Integrate audio analysis APIs
- Improve song recommendations with ML
- Mobile responsive PWA

## License

This project is licensed under the MIT License.
