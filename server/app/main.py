from fastapi import FastAPI
import requests
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from helpers.json_to_csv import json_to_csv

import pandas as pd
import numpy as np
import sklearn
import pickle
import json
import os



from ml.ranking import rank_projects_for_projects, rank_projects_for_investors, rank_investors_for_investors

from ml.graph_functions import graph_load, extract_features_iim, extract_features_ipm, extract_features_ppm

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

pfp_mappings = {
    "8": [16, 17, 3, 20, 4, 10, 19, 9, 8, 2, 6, 14, 11, 12, 7, 5, 13, 15, 18, 1],
    "6": [4, 2, 20, 6, 1, 17, 18, 10, 15, 13, 16, 14, 5, 12, 3, 19, 9, 7, 8, 11]
}

pfi_mappings = {
    "24": [16, 17, 3, 20, 4, 10, 19, 9, 8, 2, 6, 14, 11, 12, 7, 5, 13, 15, 18, 1],
    "25": [4, 2, 20, 6, 1, 17, 18, 10, 15, 13, 16, 14, 5, 12, 3, 19, 9, 7, 8, 11]
}


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/getProjects")
async def getProjects():
    response = requests.get("http://localhost:3000/api/getProjects")
    print(response.json())
    json_to_csv(response.json(), "projects")
    return response.json()


@app.get("/getInvestors")
async def getProjects():
    response = requests.get("http://localhost:3000/api/getInvestors")
    json_to_csv(response.json(), "investors")
    return response.json()


@app.get("/pfp")
async def pfp(user_id: int):
    response = requests.get("http://localhost:3000/api/getProjects")
    project_attrs = response.json()["projects"][0]

    if str(user_id) in pfp_mappings:
        numeric_ids = pfp_mappings[str(user_id)]
    else:
        with open('./ml/data/model_ppm.pkl', 'rb') as f:
            model = pickle.load(f)
            projectsUncached = rank_projects_for_projects(project_attrs, graph_load(), model)
            numeric_ids = [int(result.split()[1]) for result in projectsUncached]
            pfp_mappings[str(user_id)] = numeric_ids

    return {"projects_id": numeric_ids}
    

@app.get("/pfi")
async def pfi(user_id: int):
    response = requests.get("http://localhost:3000/api/getInvestors")

    investors_attrs = response.json()["investors"][0]

    if str(user_id) in pfi_mappings:
        numeric_ids = pfi_mappings[str(user_id)]
    else:
        with open('./ml/data/model_iim.pkl', 'rb') as f:
            model = pickle.load(f)
            projectsUncached = rank_projects_for_investors(investors_attrs, graph_load(), model)
            numeric_ids = [int(result.split()[1]) for result in projectsUncached]
            pfi_mappings[str(user_id)] = numeric_ids

    # numeric_ids = [4, 2, 20, 6, 1, 17, 18, 10, 15, 13, 16, 14, 5, 12, 3, 19, 9, 7, 8, 11]

    return {
        "projects_id": numeric_ids
    }


@app.get("/ifi")
async def pfi():
    response = requests.get("http://localhost:3000/api/getInvestors")

    investors_attrs = response.json()["investors"][0]

    with open('./ml/data/model_iim.pkl', 'rb') as f:
        model = pickle.load(f)
        print(rank_projects_for_projects(investors_attrs, graph_load(), model))


