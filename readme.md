# Fundraising App

## Overview
This is a **Fundraising App** that utilizes web scraping and a **MERN stack** (MongoDB, Express.js, React.js, Node.js) to display different fundraising categories. The app helps users explore and contribute to various fundraising campaigns.

## Features
- **Web Scraping with Scrapy**: Extracts fundraising data from multiple sources.
- **MERN Stack**: Fully functional web application with frontend and backend.
- **Category-Based Filtering**: Displays campaigns across various categories.
- **User-Friendly UI**: Smooth and interactive experience for users.

## Tech Stack
- **Frontend**: React.js, Redux (if used), TailwindCSS/Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Web Scraping**: Scrapy (Python)

## Installation
### 1. Clone the Repository
```bash
git clone https://github.com/your-username/fundraising-app.git
cd fundraising-app
```

### 2. Install Backend Dependencies
```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

### 4. Setup Environment Variables
Create a `.env` file in the backend directory and add:
```env
MONGO_URI=your_mongo_db_connection_string
PORT=5000
SCRAPY_URL=your_scrapy_api_endpoint
```

### 5. Run the Application
#### Start Backend Server
```bash
cd backend
npm start
```
#### Start Frontend Server
```bash
cd frontend
npm start
```

## Web Scraping
To scrape data using Scrapy:
```bash
cd scraper
scrapy crawl fundraising_spider
```

## Contributing
Feel free to fork the repository and submit pull requests to improve the application.



