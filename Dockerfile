# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Disable SSL verification (temporary workaround)
RUN npm config set strict-ssl false

# Install dependencies, including TypeScript
RUN npm install

# Copy the rest of your app's code
COPY . .

# Run the build
RUN npm run build

# Run the app (adjust as necessary)
CMD ["npm", "run", "start"]
