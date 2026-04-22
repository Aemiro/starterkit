# Kifiya Starter Kit

A production-ready starter kit for building scalable and maintainable applications using TypeScript. This project follows industry best practices for directory structure, reactive programming, and automated workflows.

## 🚀 Features

- **Modular Architecture**: Clean separation of concerns for easy scalability.
- **Reactive Programming**: Integrated with **RxJS** for robust asynchronous event handling.
- **ORM Support**: **TypeORM** integration for seamless database management across multiple environments.
- **Strict Linting**: Pre-configured with **ESLint** and TypeScript-specific rules for high code quality.
- **Testing Suite**: Integrated **Jest** environment for unit and integration testing.
- **Date Utilities**: Lightweight date manipulation using **Day.js**.

## 🛠️ Tech Stack

- **Language**: TypeScript
- **Core Libraries**: RxJS, Day.js
- **Database**: TypeORM (PostgreSQL / MongoDB / MySQL support)
- **DevOps**: Docker, GitHub Actions
- **Quality Assurance**: ESLint, Jest

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16.x or higher)
- npm or yarn
- Docker (optional, for containerized deployment)

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/kifiya-starter-kit.git
   cd kifiya-starter-kit
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Copy the example env file and update your credentials:
   ```bash
   cp .env.example .env
   ```

## 🏃 Running the Application

### Development
```bash
npm run dev
```

### Production (Docker)
```bash
docker-compose up --build
```

## 🧪 Testing
Run the test suite to ensure everything is working correctly:
```bash
npm test
```

## 📁 Project Structure

```text
├── src/
│   ├── common/            # Global decorators, filters, guards, and interceptors
│   ├── config/            # Configuration management and env validation
│   ├── database/          # TypeORM entities, migrations, and subscribers
│   ├── modules/           # Domain-driven feature modules
│   │   ├── auth/          # Authentication logic
│   │   └── user/          # User management logic
│   │       ├── dto/       # Data Transfer Objects
│   │       ├── interfaces/# TypeScript interfaces
│   │       ├── user.controller.ts
│   │       ├── user.service.ts
│   │       └── user.module.ts
│   ├── shared/            # Shared services (e.g., RxJS event bus, Logger)
│   ├── app.module.ts      # Root application module
│   └── main.ts            # Application entry point
├── tests/                 # E2E and integration tests
├── .env.example           # Environment variables template
├── package.json           # Scripts and dependencies
└── tsconfig.json          # TypeScript compiler configuration
```