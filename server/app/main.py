from fastapi import FastAPI
import requests

from helpers.json_to_csv import json_to_csv

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/getProjects")
async def getProjects():
    response = requests.get("http://localhost:3000/api/getProjects")
    json_to_csv(response.json(), "projects")
    return response.json()


@app.get("/getInvestors")
async def getProjects():
    response = requests.get("http://localhost:3000/api/getInvestors")
    json_to_csv(response.json(), "investors")
    return response.json()





