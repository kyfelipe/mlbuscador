### BUILD ###
# Base image
FROM node:13.8.0-alpine as build

# Set working directory
WORKDIR /app

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@9.0.3

# Add app
COPY . /app

# Generate build
RUN ng build --output-path=dist --prod

### PROD ###
# Base image
FROM nginx:1.17-alpine

# Copy artifact build from the 'build environment'
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx config
COPY /config/nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Run nginx
CMD ["nginx", "-g", "daemon off;"]
