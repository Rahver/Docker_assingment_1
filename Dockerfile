# Use the official Nginx image as a base
FROM nginx:alpine

# Copy the current directory contents into /usr/share/nginx/html/ in the container
COPY . /usr/share/nginx/html/

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
