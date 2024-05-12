from fastapi import FastAPI
import requests
from fastapi.middleware.cors import CORSMiddleware

from helpers.json_to_csv import json_to_csv

import pandas as pd
import numpy as np
import sklearn
import pickle


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
async def pfp():    
    response = requests.get("http://localhost:3000/api/getProjects")

    project_attrs = response.json()["projects"][0]

    print(project_attrs)

    with open('./ml/data/model_ppm.pkl', 'rb') as f:
        model = pickle.load(f)
        projects = rank_projects_for_projects(project_attrs, graph_load(), model)
  
    numeric_ids = [int(result.split()[1]) for result in projects]

    print(numeric_ids)

    return {
        "projects_id": numeric_ids
    }
    

@app.get("/pfi")
async def pfi():
    response = requests.get("http://localhost:3000/api/getInvestors")

    investors_attrs = response.json()["investors"][0]

    with open('./ml/data/model_ipm.pkl', 'rb') as f:
        model = pickle.load(f)
        print(rank_projects_for_investors(investors_attrs, graph_load(), model))


@app.get("/ifi")
async def pfi():
    response = requests.get("http://localhost:3000/api/getInvestors")

    investors_attrs = response.json()["investors"][0]

    with open('./ml/data/model_iim.pkl', 'rb') as f:
        model = pickle.load(f)
        print(rank_projects_for_projects(investors_attrs, graph_load(), model))


