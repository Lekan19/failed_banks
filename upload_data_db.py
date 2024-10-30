import os
from sqlalchemy import create_engine, text
import csv
from sqlalchemy.orm import Session
from sqlalchemy import Column, Integer, String, Table, MetaData
from sqlalchemy.orm import declarative_base

# calling the db connect function to connect
#connect_db()


# defining table schema in remote db
Base = declarative_base()

class BanksDB(Base):
    __tablename__="failed_banks"

    id = Column(Integer, primary_key=True)
    Bank_name = Column(String(255))
    city = Column(String(255))
    state = Column(String(255))
    cert = Column(Integer)
    Acquiring_institution = Column(String(255))
    closing = Column(String(255))
    fund = Column(Integer)

# uploading data from csbv to database
def upload_file(file_path):
    try:
        with open (file_path, "r", encoding="latin-1") as csv_file:
            csv_reader = csv.reader(csv_file)
            
            # creating a session
            db_engine = connect_db()
            next(csv_reader)
            for row in csv_reader:
                #print(row)
              
                with Session(db_engine) as session:
                    row_data = BanksDB(
                        Bank_name=row[0],
                        city=row[1],
                        state=row[2],
                        cert=int(row[3]),
                        Acquiring_institution=row[4],
                        closing=row[5],
                        fund=int(row[6])
                        )
                    session.add(row_data)
                    session.commit()
                    print(f"successfully inserted {row} into DB")

    except Exception as e:
        print(f" Error occured during upload to db: {e}")

         
def connect_db():
    # Define the connection details
    db_username = os.environ['DB_USERNAME'] 
    db_pass = os.environ["DB_PASS"]
    username = db_username
    password = db_pass 
    host = 'localhost'  # e.g., 'localhost'
    port = 3306         # Default MariaDB port
    database = 'banksDB'

    # creating a db engine
    engine = create_engine(f"mariadb+pymysql://{username}:{password}@{host}/{database}?charset=utf8mb4")
    #table = "failed_banks"
    print("successfully create an engine")
    return engine


#read_data()
file_path = "/Users/gain/Documents/learning/docker-mariadb/banklist.csv"
upload_file(file_path=file_path)
