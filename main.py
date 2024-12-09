from fastapi import FastAPI
from query_db import get_all_banks, get_state_data, get_year_data
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Add CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins. Use specific origins in production.
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods.
    allow_headers=["*"],  # Allows all headers.
)

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
    year_data = get_year_data(year)

    return year_data