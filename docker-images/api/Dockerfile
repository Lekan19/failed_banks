FROM python:3.11

COPY requirements.txt .

RUN pip install -r requirements.txt

WORKDIR /app

COPY query_db.py .
COPY main.py .
# publish port for API
EXPOSE 7000
# Command to run your FastAPI application using Uvicorn
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "7000"]



