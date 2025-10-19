# Spring Boot Todo Application

A full-featured REST API for managing todo items with JWT authentication, built with Spring Boot 3 and PostgreSQL.

## 📋 Features

- ✅ **Todo Management** - Create, read, update, and delete todo items
- 🔐 **JWT Authentication** - Secure API with JWT token-based authentication
- 🔒 **Basic Authentication** - Alternative authentication method
- 👤 **User Management** - User registration and authentication
- 🗄️ **PostgreSQL Database** - Persistent data storage with JPA/Hibernate
- 🌐 **CORS Support** - Configured for frontend integration
- 🔄 **RESTful API** - Well-structured REST endpoints

## 🛠️ Technology Stack

- **Framework**: Spring Boot 3.5.6
- **Language**: Java 25
- **Database**: PostgreSQL
- **ORM**: Spring Data JPA / Hibernate
- **Security**: Spring Security with JWT
- **Build Tool**: Maven
- **Additional**: Spring DevTools, OAuth2 Resource Server

## 📦 Prerequisites

Before running this application, make sure you have:

- **Java 25** or higher installed
- **Maven** (or use the included Maven wrapper)
- **PostgreSQL** database access

## ⚙️ Configuration

### Database Configuration

⚠️ **IMPORTANT**: Never commit `application.properties` with real credentials to Git!

1. Copy the example configuration file:
```bash
cp src/main/resources/application.properties.example src/main/resources/application.properties
```

2. Update `application.properties` with your actual database credentials:
```properties
spring.datasource.url=jdbc:postgresql://YOUR_HOST:5432/YOUR_DATABASE
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD
```

### Environment Variables (Recommended for Production) 🔒

For better security, use environment variables instead of hardcoding credentials in `application.properties`:

```properties
spring.datasource.url=${DB_URL:jdbc:postgresql://localhost:5432/todo}
spring.datasource.username=${DB_USERNAME:todo}
spring.datasource.password=${DB_PASSWORD}
```

Then set the environment variables:

**Linux/Mac:**
```bash
export DB_URL=jdbc:postgresql://your-host:5432/your-database
export DB_USERNAME=your-username
export DB_PASSWORD=your-password
```

**Windows (PowerShell):**
```powershell
$env:DB_URL="jdbc:postgresql://your-host:5432/your-database"
$env:DB_USERNAME="your-username"
$env:DB_PASSWORD="your-password"
```

**Windows (CMD):**
```cmd
set DB_URL=jdbc:postgresql://your-host:5432/your-database
set DB_USERNAME=your-username
set DB_PASSWORD=your-password
```

### Database Schema

The application automatically creates the following tables:
- `users` - User information with roles
- `todo` - Todo items associated with users

### Sample Data

The application comes pre-configured with sample data:

**Users:**
- Username: `arthur`, Password: `dummy`, Role: USER
- Username: `admin`, Password: `admin123`, Role: ADMIN

**Sample Todos:**
- Learn AWS
- Get AWS Certified
- Learn DevOps

## 🚀 Getting Started

### Using Maven Wrapper (Recommended)

#### Windows:
```bash
.\mvnw.cmd spring-boot:run
```

#### Linux/Mac:
```bash
./mvnw spring-boot:run
```

### Using Maven:
```bash
mvn spring-boot:run
```

The application will start on `http://localhost:8080`

## 📚 API Endpoints

### Authentication

#### JWT Authentication
```http
POST /authenticate
Content-Type: application/json

{
  "username": "arthur",
  "password": "dummy"
}
```

Response:
```json
{
  "token": "eyJhbGciOiJSUzI1NiJ9..."
}
```

### Todo Endpoints

All todo endpoints require authentication (JWT token or Basic Auth).

#### Get All Todos
```http
GET /users/{username}/todos
Authorization: Bearer {token}
```

#### Get Todo by ID
```http
GET /users/{username}/todos/{id}
Authorization: Bearer {token}
```

#### Create Todo
```http
POST /users/{username}/todos
Authorization: Bearer {token}
Content-Type: application/json

{
  "description": "Learn Spring Boot",
  "done": false,
  "targetDate": "2025-12-31"
}
```

#### Update Todo
```http
PUT /users/{username}/todos/{id}
Authorization: Bearer {token}
Content-Type: application/json

{
  "id": 10001,
  "description": "Learn AWS Advanced",
  "done": true,
  "targetDate": "2025-12-31"
}
```

#### Delete Todo
```http
DELETE /users/{username}/todos/{id}
Authorization: Bearer {token}
```

### Hello World (Test Endpoint)
```http
GET /hello-world
GET /hello-world-bean
GET /hello-world/path-variable/{name}
```

## 🏗️ Project Structure

```
src/
├── main/
│   ├── java/com/todo/be/
│   │   ├── BeApplication.java           # Main application class
│   │   ├── basic/                       # Basic authentication config
│   │   ├── jwt/                         # JWT authentication
│   │   │   ├── JwtAuthenticationController.java
│   │   │   ├── JwtSecurityConfig.java
│   │   │   ├── JwtTokenService.java
│   │   │   └── ...
│   │   ├── todo/                        # Todo management
│   │   │   ├── Todo.java               # Todo entity
│   │   │   ├── TodoJpaResource.java    # JPA REST controller
│   │   │   ├── TodoResource.java       # Basic REST controller
│   │   │   ├── TodoService.java        # Business logic
│   │   │   └── repository/
│   │   │       └── TodoRepository.java
│   │   └── user/                        # User management
│   │       ├── User.java               # User entity
│   │       ├── UserRepository.java
│   │       └── CustomUserDetailsService.java
│   └── resources/
│       ├── application.properties       # Application configuration
│       └── data.sql                    # Initial data
└── test/
    └── java/com/todo/be/
        └── BeApplicationTests.java      # Unit tests
```

## 🔐 Security

This application uses two authentication methods:

1. **JWT (JSON Web Token)** - Recommended for production
   - Stateless authentication
   - Token-based authorization
   - Tokens expire after a set time

2. **Basic Authentication** - For testing/development
   - Username and password in request headers
   - Simpler but less secure

### Security Best Practices ⚠️

**NEVER commit sensitive data to Git:**
- ❌ Database credentials
- ❌ API keys
- ❌ JWT secret keys
- ❌ Production passwords

**DO instead:**
- ✅ Use environment variables for sensitive data
- ✅ Add `application.properties` to `.gitignore`
- ✅ Use `application.properties.example` as a template
- ✅ Rotate passwords if accidentally exposed
- ✅ Use secret management tools (AWS Secrets Manager, HashiCorp Vault, etc.) in production

## 🌐 CORS Configuration

CORS is pre-configured to allow requests from:
- `http://localhost:3000` (React/Frontend development server)

To modify CORS settings, edit the `corsConfigurer()` method in `BeApplication.java`.

## 🔧 Building for Production

### Create JAR file:
```bash
./mvnw clean package
```

### Run the JAR:
```bash
java -jar target/be-0.0.1-SNAPSHOT.jar
```

## 🧪 Running Tests

```bash
./mvnw test
```

## 📝 Development Notes

- The application uses `spring.jpa.hibernate.ddl-auto=update` to automatically update the database schema
- SQL logging is enabled with `spring.jpa.show-sql=true` for development
- Initial data is loaded from `data.sql` on application startup
- Spring DevTools is included for hot reload during development

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is a demo application for learning Spring Boot.

## 📧 Contact

For questions or support, please open an issue in the repository.

---

**Happy Coding! 🚀**
