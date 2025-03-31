# Contributing to the Project

Thank you for considering contributing to this project! We welcome contributions and appreciate your time and effort. Please follow the guidelines below to set up the project on your local machine and contribute effectively.

## Project Structure

The repository consists of the following directories:

- **backend/** – Node.js server with API endpoints
- **mobile/** – React Native app using Expo Go
- **web/** – Next.js application

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (latest LTS recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Next.js](https://nextjs.org/docs/getting-started)
- [Git](https://git-scm.com/)
- [PostgreSQL](https://www.postgresql.org/) (if the backend uses a database)

## Setup Instructions

### 1. Clone the Repository

```sh
git clone https://github.com/your-repo-name.git
cd your-repo-name
```

### 2. Setting up the Backend

```sh
cd backend
npm install  # Install dependencies
cp .env.example .env  # Configure environment variables
npm run dev  # Start the development server
```

### 3. Setting up the Mobile App

```sh
cd ../mobile
npm install  # Install dependencies
expo start  # Start the Expo server
```

- Scan the QR code using the Expo Go app to run it on a physical device.

### 4. Setting up the Web App

```sh
cd ../web
npm install  # Install dependencies
npm run dev  # Start the Next.js server
```

## Contribution Guidelines

1. **Fork the Repository**: Click the Fork button on GitHub.
2. **Create a New Branch**: Use a meaningful name, e.g., `feature/new-api-endpoint`.
   ```sh
   git checkout -b feature/new-api-endpoint
   ```
3. **Make Changes**: Implement your feature or fix.
4. **Commit & Push**:
   ```sh
   git add .
   git commit -m "Added new API endpoint"
   git push origin feature/new-api-endpoint
   ```
5. **Create a Pull Request (PR)**: Go to GitHub, open a PR to the `main` branch, and describe your changes.

## Code Style & Best Practices

- Follow the **ESLint** and **Prettier** configuration (if provided).
- Maintain **clean and modular** code.
- Ensure **proper documentation** in the code where necessary.
- Before committing, run:
  ```sh
  npm run lint  # Check for linting issues
  npm test  # Run tests if available
  ```

## Issues & Discussions

- If you find a bug, report it under [Issues](https://github.com/your-repo-name/issues).
- If you want to discuss a new feature, create a discussion post first.

---

We appreciate your contributions! 🎉 If you have any questions, feel free to ask in the Discussions or Issues section.

Happy coding! 🚀
