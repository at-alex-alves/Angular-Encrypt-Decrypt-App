FROM node:16.10-alpine AS build

# Sets the working directory for the directory that will be used to store the project
WORKDIR /usr/src/app

# Copies the project files to the project directory
COPY . .

# Installs the requirements
RUN npm install

# Builds the project
RUN npm run build

# Run the project with Nginx
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/encryption /usr/share/nginx/html
