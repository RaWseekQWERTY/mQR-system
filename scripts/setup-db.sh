#!/bin/bash

echo "Creating PostgreSQL database..."

# Create database
psql -U postgres -c "CREATE DATABASE mqr_db;"

# Create user (optional)
psql -U postgres -c "CREATE USER mqr_user WITH PASSWORD 'mqr_password123';"
psql -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE mqr_db TO mqr_user;"

echo "✅ Database setup complete!"
