# Base image
FROM node:13.8.0-alpine

# Set working directory
WORKDIR /app

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@9.0.1

# Add app
COPY . /app

# Start app
CMD ng serve --host 0.0.0.0
