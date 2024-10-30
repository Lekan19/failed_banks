from fastapi import FastAPI
from query_db import get_all_banks, get_state_data

app = FastAPI()

@app.get("/api/failed_banks")
async def get_banks():
    bank_list = get_all_banks()


    return bank_list

    # return {"failed_bank_list": bank_list}

@app.get("/api/failed_banks/{state_id}")
async def get_state(state_id: str):
    state_id = state_id.upper()

    state_data = get_state_data(state_id)
    return state_data


@app.get("/api/{year}")
async def get_year(year: int):


    return {"year of failure": year}