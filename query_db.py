from sqlalchemy import create_engine, text, select
from sqlalchemy.orm import Session
from sqlalchemy import Column, Integer, String, Table, MetaData
from sqlalchemy.orm import declarative_base
import os

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

#define the read all data from db
def get_all_banks():
    eng = connect_db()
    try:
    # Example of using the engine to connect and execute a query
        with Session(eng) as session:
            table = "failed_banks"
            statement = select(BanksDB)
            result = session.execute(statement)

            all_bank_list = [ 
                {
                    "Bank name": row.Bank_name,
                    "City": row.city,
                    "State": row.state,
                    "Cert": row.cert,
                    "Acquisition institution": row.Acquiring_institution,
                    "Closing date": row.closing,
                    "Fund": row.fund
                } for row in result.scalars()]
            
            return all_bank_list
            
    except Exception as e:
        print(f"Error getting data: {e}")

# get the state
def get_state_data(state: str):
    eng = connect_db()
    try:
        #with eng.connect() as connection:
        with Session(eng) as session:
            statement = select(BanksDB).where(BanksDB.state == state)
            result = session.execute(statement)
            state_list = [ 
                {
                    "Bank name": row.Bank_name,
                    "City": row.city,
                    "State": row.state,
                    "Cert": row.cert,
                    "Acquisition institution": row.Acquiring_institution,
                    "Closing date": row.closing,
                    "Fund": row.fund
                } for row in result.scalars()]

            return state_list
        
    except Exception as e:
        print(f"Error  getting city data: {e}")

if __name__ == "main":
    get_all_banks()
    get_state_data()