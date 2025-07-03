# Candidate Discovery Portal

## Project Overview
The Candidate Discovery Portal is an application designed to manage and display candidate and job information. It utilizes TypeScript for type safety and includes mock data for testing and development purposes.

## Project Structure
```
candidate-discovery-portal
├── lib
│   ├── mock-data.ts
│   └── types.ts
├── src
│   └── app.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (version 12 or higher)
- npm (Node package manager)

### Installation Steps

1. **Install Dependencies**
   Run the following command in the project root directory to install all required packages listed in `package.json`:
   ```
   npm install
   ```

2. **Compile TypeScript**
   After installing the dependencies, compile the TypeScript files into JavaScript by running:
   ```
   npm run build
   ```
   or simply:
   ```
   tsc
   ```
   This will generate a `dist` folder (or similar) containing the compiled files.

3. **Run the Application**
   To start the application, execute:
   ```
   npm start
   ```
   or run the compiled JavaScript file directly:
   ```
   node dist/app.js
   ```
   (Adjust the path as necessary based on your build configuration.)

4. **View the Output**
   Open your web browser and navigate to the specified URL (e.g., `http://localhost:3000`) to see the application in action. Check the console for any logs or errors.

