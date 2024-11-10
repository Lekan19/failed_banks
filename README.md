## Project description
As provided by the FDIC, the CSV file contains a list of failed banks in the United States since Oct 1st 2000. This project is designed to offer an API for interacting with these failed banks. I imported the CSV data into a MariaDB database and used FastAPI to facilitate data interactions with the database. By navigating to http://localhost:9000/docs, you can view all the available routes and methods provided by the API. This project demonstrates working with FastAPI, MariaDB, SQLAlchemy, and Docker.

data source: https://catalog.data.gov/dataset/fdic-failed-bank-list

### Tools: FastApi, MariaDB, SQLAlchemy and Docker
### Database Setup 
Deploy the dockerize database 
```
docker stack deploy -c docker-compose/db.yaml fdic
```
Loading the failed banks data in the database
```
python upload_data_db.py
```
### API Setup
Building fast-api image
```
docker build -f docker-images/Dockerfile failed-banks .
```
Deploying docker services
```
docker stack deploy -c docker-compose/api.yaml api
```

### Testing API
Go to the url belwoe, you will see the automatic interactive API documentation provided by Swagger
```
http://localhost:9000/docs
```
