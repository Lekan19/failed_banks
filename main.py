from fastapi import FastAPI

app = FastAPI()


@app.get("/api/{city_id}")
async def get_city(city_id: int):

    return {"City ID": city_id}


@app.get("/api/{year}")
async def get_year(year: int):


    return {"year of failure": year}