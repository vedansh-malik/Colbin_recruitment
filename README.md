# Recruitment Platform Prototype

A full-stack recruitment platform built with Node.js, Express.js, MongoDB, and React. This prototype provides user authentication and profile management functionality with JWT-based security.

## 🚀 Features

- User registration and authentication
- JWT-based secure login system
- Protected routes and middleware
- User profile management
- RESTful API design
- Password hashing with bcrypt
- MongoDB integration with Mongoose

## 🛠️ Tech Stack

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT (JSON Web Tokens)
- bcrypt for password hashing

**Frontend:**
- React.js
- Axios for API calls

## 📋 API Endpoints

### Authentication Routes

| Method | Endpoint | Description | Protected |
|--------|----------|-------------|-----------|
| POST | `/api/auth/register` | Register a new user | No |
| POST | `/api/auth/login` | Login and receive JWT | No |
| GET | `/api/auth/me` | Get current user profile | Yes |

### API Request/Response Examples

**Register User:**
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "bio": "Software Developer" // optional
}
```

**Login:**
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

**Get Profile (Protected):**
```http
GET /api/auth/me
Authorization: Bearer <your_jwt_token>
```

## 🔐 Authentication Flow

1. **Registration**: User provides name, email, password, and optional bio
   - Password is hashed using bcrypt before storage
   - JWT token is generated and returned

2. **Login**: User provides email and password
   - Password is verified against hashed version in database
   - Valid credentials return a JWT token

3. **Protected Routes**: Routes requiring authentication
   - Client must include JWT in Authorization header
   - Token is verified using JWT_SECRET
   - Valid token grants access to protected resources

## 🏗️ Project Structure

```
recruitment-platform/
├── backend/
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── auth.js
│   ├── middleware/
│   │   └── auth.js
│   ├── server.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
└── README.md
```

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/recruitment-platform.git
cd recruitment-platform
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

Start the backend server:
```bash
npm run dev
```
The backend will run on **http://localhost:5000**

### 3. Frontend Setup
```bash
cd frontend
npm install
npm start
```
The frontend will run on **http://localhost:3000**

## 🧪 Testing the API

You can test the API using tools like **Postman**, **Thunder Client**, or **curl**:

### Register a new user:
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"password123"}'
```

### Login:
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'
```

### Get user profile:
```bash
curl -X GET http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## ❌ Error Handling

The API returns structured error responses with appropriate HTTP status codes:

| Error | Status Code | Response |
|-------|-------------|----------|
| User already exists | 400 | `{"message": "User already exists"}` |
| Invalid credentials | 400 | `{"message": "Invalid email or password"}` |
| No token provided | 401 | `{"message": "No token provided"}` |
| Server error | 500 | `{"message": "Server error"}` |

## 🔒 Security Features

- **Password Hashing**: All passwords are hashed using bcrypt before storage
- **JWT Authentication**: Secure token-based authentication
- **Environment Variables**: Sensitive data stored in .env files
- **Token Expiration**: JWT tokens have expiration times to reduce security risks
- **Protected Routes**: Middleware ensures only authenticated users can access sensitive endpoints

## 🚀 Production Deployment Considerations

### Database Scaling
- Implement MongoDB Atlas with sharding and replica sets
- Add database indexes for optimized queries (especially on email field)
- Consider connection pooling for better performance

### Authentication Enhancements
- Implement refresh token mechanism
- Add role-based access control (RBAC) for different user types
- Consider OAuth integration (Google, LinkedIn, GitHub)
- Add two-factor authentication (2FA)

### Performance & Infrastructure
- **Containerization**: Use Docker for consistent deployments
- **Orchestration**: Deploy with Kubernetes for scalability
- **Caching**: Implement Redis for session management and caching
- **CDN**: Use CDN for static assets
- **Load Balancing**: Implement load balancers for high availability

### Frontend Improvements
- Add comprehensive form validation
- Implement profile editing functionality
- Create reusable UI components
- Add loading states and error boundaries
- Implement responsive design

### Monitoring & Observability
- **Logging**: Integrate Winston or similar logging library
- **Monitoring**: Use Prometheus + Grafana for metrics
- **Error Tracking**: Implement Sentry for error monitoring
- **Health Checks**: Add API health check endpoints
- **Rate Limiting**: Implement API rate limiting

### Security Enhancements
- Add input validation and sanitization
- Implement CORS properly
- Add helmet.js for security headers
- Set up SSL/TLS certificates
- Implement API versioning

## 📝 Development Scripts

### Backend
```bash
npm run dev          # Start development server with nodemon
npm start           # Start production server
npm run test        # Run tests
```

### Frontend
```bash
npm start           # Start development server
npm run build       # Create production build
npm run test        # Run tests
npm run eject       # Eject from Create React App
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- Express.js team for the excellent framework
- MongoDB team for the robust database solution
- React team for the powerful frontend library
