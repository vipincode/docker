FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy files into the container
COPY . .

# Optional: install dependencies if you have package.json
# RUN npm install --omit=dev

# Run your Node app
CMD ["node", "app.js"]
