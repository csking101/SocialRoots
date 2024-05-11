"""
This file contains the helper functions to use with the graphs. They are:
1) Attribute generator
2) Node and edge processing 
"""

"""
The mapping for similarity is as follows(Investor to Project):
1) Investment Scale -> Current Status (number in dollars)
2) Area of Interest -> Area of Interest (cardinal index)
3) Area of Expertise -> Resources Required (LLM for applicability)
4) Risk Appetites -> Use Description? (LLM)
5) Delivery Time -> Delivery Time (number in months)
6) Region -> Region (cardinal index)
7) Background/Experience -> Resources Required (LLM for applicability)
"""

from prompting import area_of_expertise_match_prompt, risk_appetite_match_prompt, background_match_prompt
import pandas as pd
import networkx as nx
import matplotlib.pyplot as plt
import pickle
import math
import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

def investment_scale_match(investment_scale, current_status):
    diff = abs(investment_scale - current_status)
    
    match_factor = 1/(1 + diff)
    
    return match_factor

def area_of_interest_match(investor_aoi, project_aoi):
    return int(investor_aoi == project_aoi)

def area_of_expertise_match(area_of_expertise, resources_required):
    return area_of_expertise_match_prompt(area_of_expertise, resources_required)

def risk_appetite_match(risk_appetite, description):
    return risk_appetite_match_prompt(risk_appetite, description)

def delivery_time_match(delivery_time, project_delivery_time):
    diff = abs(delivery_time - project_delivery_time)
    
    match_factor = 1/(1 + diff)
    
    return match_factor

def region_match(investor_region, project_region):
    return int(investor_region == project_region)

def background_match(investor_background, resources_required):
    return background_match_prompt(investor_background, resources_required)

# Function to extract features for an edge
def extract_features_ipm(investor_attrs, project_attrs):
    investment_scale = investor_attrs['investment_scale']
    current_status = project_attrs['current_status']
    area_of_interest = investor_attrs['area_of_interest']
    project_area_of_interest = project_attrs['area_of_interest']
    area_of_expertise = investor_attrs['area_of_expertise']
    resources_required = project_attrs['resources_required']
    risk_appetite = investor_attrs['risk_appetite']
    background = investor_attrs['background']
    delivery_time = investor_attrs['delivery_time']
    project_delivery_time = project_attrs['delivery_time']
    investor_region = investor_attrs['region']
    project_region = project_attrs['region']
    
    features = []   
    # Attempt to append each feature, handling potential errors
    try:
        features.append(investment_scale_match(investment_scale, current_status))
    except Exception as e:
        print(f"Error in investment_scale_match: {e}")
        features.append(0)

    try:
        features.append(area_of_interest_match(area_of_interest, project_area_of_interest))
    except Exception as e:
        print(f"Error in area_of_interest_match: {e}")
        features.append(0)

    try:
        features.append(area_of_expertise_match(area_of_expertise, resources_required))
    except Exception as e:
        print(f"Error in area_of_expertise_match: {e}")
        features.append(0)

    try:
        features.append(risk_appetite_match(risk_appetite, resources_required))
    except Exception as e:
        print(f"Error in risk_appetite_match: {e}")
        features.append(0)

    try:
        features.append(delivery_time_match(delivery_time, project_delivery_time))
    except Exception as e:
        print(f"Error in delivery_time_match: {e}")
        features.append(0)

    try:
        features.append(region_match(investor_region, project_region))
    except Exception as e:
        print(f"Error in region_match: {e}")
        features.append(0)

    try:
        features.append(background_match(background, resources_required))
    except Exception as e:
        print(f"Error in background_match: {e}")
        features.append(0)


    return features

# Function to label edges
def label_edge_ipm(G, investor_id, project_id):
    return 1 if G.has_edge(investor_id, project_id) else 0

def graph_load(view=False):
    # Read investor and project data from CSV files
    investor_df = pd.read_csv("server/ml/data/investor_data.csv")
    project_df = pd.read_csv("server/ml/data/project_data.csv")

    # Read mappings
    investor_investor_mapping = pd.read_csv("server/ml/data/investor_investor_mapping.csv")
    investor_project_mapping = pd.read_csv("server/ml/data/investor_project_mapping.csv")
    project_project_mapping = pd.read_csv("server/ml/data/project_project_mapping.csv")

        
    # Create a graph
    G = nx.Graph()

    # Add investors as nodes to the graph
    for idx, investor in investor_df.iterrows():
        node_id = "Investor " + str(idx+1)
        G.add_node(node_id, **investor)
        if 'type' not in G.nodes[node_id]:
            G.nodes[node_id]['type'] = 'investor'

    # Add projects as nodes to the graph
    for idx, project in project_df.iterrows():
        node_id = "Project " + str(idx+1)
        G.add_node(node_id, **project)
        if 'type' not in G.nodes[node_id]:
            G.nodes[node_id]['type'] = 'project'

    # Add edges between investors based on the mappings
    for idx, row in investor_investor_mapping.iterrows():
        G.add_edge("Investor " + str(row["investor_id"]), "Investor " + str(row["related_investor_id"]), relation="knows")

    # Add edges between investors and projects based on the mappings
    for idx, row in investor_project_mapping.iterrows():
        G.add_edge("Investor " + str(row["investor_id"]), "Project " + str(row["project_id"]), relation="invested_in")

    # Add edges between projects based on the mappings
    for idx, row in project_project_mapping.iterrows():
        G.add_edge("Project " + str(row["project_id"]), "Project " + str(row["related_project_id"]), relation="related")

    if view:
    # Draw the graph with adjusted spacing
    # pos = nx.spring_layout(G, k=5/math.sqrt(G.order()),iterations=5)  # increase k to space out nodes more
        pos = nx.shell_layout(G)
        node_colors = {'investor': 'green', 'project': 'orange'}
        node_colors_list = [node_colors[G.nodes[node].get('type', 'project')] for node in G.nodes()]
        nx.draw(G, pos, node_color=node_colors_list, with_labels=True)

        # Create legend
        investor_patch = plt.Line2D([0], [0], marker='o', color='w', label='Investor', markerfacecolor='green', markersize=10)
        project_patch = plt.Line2D([0], [0], marker='o', color='w', label='Project', markerfacecolor='orange', markersize=10)
        plt.legend(handles=[investor_patch, project_patch], loc="upper right")
        plt.title("Social Graph of Investors and Projects")

        plt.show()
        
    return G


def graph_train_ipm(G):
    """
    This function trains the graph using the data. It generates the dataset and trains the model. Its objective is to map between the investor and project nodes.
    """
    
    # Train logistic regression model
    X = []
    y = []

    # for investor_id, project_id in G.edges():
    # for investor_id, project_id in [(investor_id, project_id) for investor_id, project_id in G.edges() if G.nodes[investor_id]['type'] == 'investor' and G.nodes[project_id]['type'] == 'project']:
    for (investor_id, project_id) in [(f"Investor {i}",f"Project {p}") for i in range(1,11) for p in range(1,21)]:
        print(investor_id, project_id)
        investor_attrs = G.nodes[investor_id]
        project_attrs = G.nodes[project_id]
        features = extract_features_ipm(investor_attrs, project_attrs)
        label = label_edge_ipm(G, investor_id, project_id)
        print(label)
        X.append(features)
        y.append(label)

        with open("X_ipm.npy","wb") as f:
            X_arr = np.array(X)
            np.save(f,X_arr)

        with open("y_ipm.npy","wb") as f:
            y_arr = np.array(y)
            np.save(f,y_arr)

    X = np.array(X)
    y = np.array(y)
    
    with open("X_ipm.npy","wb") as f:
        np.save(f,X)
    with open("y_ipm.npy","wb") as f:
        np.save(f,y)

    # Split data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Train logistic regression model
    model = LogisticRegression()
    model.fit(X_train, y_train)

    # Predict on test set
    y_pred = model.predict(X_test)

    # Evaluate model
    accuracy = accuracy_score(y_test, y_pred)
    print("Accuracy:", accuracy)
    
def extract_features_ppm(project_attrs1, project_attrs2):
    """
    Extract features for a pair of projects.
    """
    # Extract relevant attributes
    current_status1 = project_attrs1['current_status']
    current_status2 = project_attrs2['current_status']
    resources_required1 = project_attrs1['resources_required']
    resources_required2 = project_attrs2['resources_required']
    area_of_interest1 = project_attrs1['area_of_interest']
    area_of_interest2 = project_attrs2['area_of_interest']
    delivery_time1 = project_attrs1['delivery_time']
    delivery_time2 = project_attrs2['delivery_time']
    region1 = project_attrs1['region']
    region2 = project_attrs2['region']
    
    # Calculate match factors
    match_factors = []
    # Try to match factors and handle any errors that occur
    try:
        match_factors.append(investment_scale_match(current_status1, current_status2))
    except Exception as e:
        print(f"Error in investment_scale_match: {e}")
        match_factors.append(0)

    try:
        match_factors.append(area_of_interest_match(area_of_interest1, area_of_interest2))
    except Exception as e:
        print(f"Error in area_of_interest_match: {e}")
        match_factors.append(0)

    try:
        match_factors.append(area_of_expertise_match(area_of_interest1, resources_required2))
    except Exception as e:
        print(f"Error in area_of_expertise_match: {e}")
        match_factors.append(0)

    try:
        match_factors.append(risk_appetite_match(resources_required1, resources_required2))
    except Exception as e:
        print(f"Error in risk_appetite_match: {e}")
        match_factors.append(0)

    try:
        match_factors.append(delivery_time_match(delivery_time1, delivery_time2))
    except Exception as e:
        print(f"Error in delivery_time_match: {e}")
        match_factors.append(0)

    try:
        match_factors.append(region_match(region1, region2))
    except Exception as e:
        print(f"Error in region_match: {e}")
        match_factors.append(0)

    try:
        match_factors.append(background_match(resources_required2, resources_required2))  # Adjust if needed
    except Exception as e:
        print(f"Error in background_match: {e}")
        match_factors.append(0)

    
    return match_factors

def label_edge_ppm(G, project_id1, project_id2):
    """
    Label the edge between two projects.
    """
    return 1 if G.has_edge(project_id1, project_id2) else 0

    
def graph_train_ppm(G):
    """
    This function trains the graph using the data. It generates the dataset and trains the model. Its objective is to map between the project nodes.
    """
    
    # Train logistic regression model
    X = []
    y = []

    for (project_id1, project_id2) in [(f"Project {i}", f"Project {j}") for i in range(1, 21) for j in range(1, 21) if i != j]:
        print(project_id1,project_id2)
        project_attrs1 = G.nodes[project_id1]
        project_attrs2 = G.nodes[project_id2]
        features = extract_features_ppm(project_attrs1, project_attrs2)  # Implement this function
        label = label_edge_ppm(G, project_id1, project_id2)  # Implement this function
        print(label)
        X.append(features)
        y.append(label)

    X = np.array(X)
    y = np.array(y)
    
    with open("X_ppm.npy","wb") as f:
        np.save(f,X)
    with open("y_ppm.npy","wb") as f:
        np.save(f,y)

    # Split data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Train logistic regression model
    model = LogisticRegression()
    model.fit(X_train, y_train)

    # Predict on test set
    y_pred = model.predict(X_test)

    # Evaluate model
    accuracy = accuracy_score(y_test, y_pred)
    print("Accuracy:", accuracy)
    
def model_train_ipm():
    """
    This function uses the pre-generated dataset to train the logistic regression model.
    """
    X = np.load("./server/ml/data/X_ipm.npy")
    y = np.load("./server/ml/data/y_ipm.npy")
    # Split data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Train logistic regression model
    model = LogisticRegression()
    model.fit(X_train, y_train)
    
    with open('model_ipm.pkl', 'wb') as f:
        pickle.dump(model, f)

    # Predict on test set
    y_pred = model.predict(X_test)

    # Evaluate model
    accuracy = accuracy_score(y_test, y_pred)
    print("Accuracy:", accuracy)
    
if __name__ == "__main__":
    graph_train_ppm(graph_load())
    pass