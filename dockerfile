# Use official MongoDB image as base image
FROM mongo:latest

# Set environment variables
ENV MONGO_INITDB_DATABASE=recipes

# Copy seed script to the container
COPY seed.js /docker-entrypoint-initdb.d/

# Expose MongoDB port
EXPOSE 27017

# Start MongoDB service
CMD ["mongod", "--port", "27017"]