#setting base image
FROM nginx:1.26.1


# Copy static files
COPY ../fdic-ui/js/script.js /usr/share/nginx/html/
COPY ../fdic-ui/css/fdic_ui.css /usr/share/nginx/html/
COPY ../fdic-ui/index.html /usr/share/nginx/html/

# Copy Nginx configuration
COPY docker-images/nginx/nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80

# command to startthe web server
CMD ["nginx", "-g", "daemon off;"]






