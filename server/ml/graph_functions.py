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
def extract_features(investor_attrs, project_attrs):
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
    features.append(investment_scale_match(investment_scale, current_status))
    features.append(area_of_interest_match(area_of_interest, project_area_of_interest))
    features.append(area_of_expertise_match(area_of_expertise, resources_required))
    features.append(risk_appetite_match(risk_appetite, resources_required))
    features.append(delivery_time_match(delivery_time, project_delivery_time))
    features.append(region_match(investor_region, project_region))
    features.append(background_match(background, resources_required))
    
    return features

# Function to label edges
def label_edge(G, investor_id, project_id):
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


def graph_train(G):
    """
    This function trains the graph using the data.
    """
    
    # Train logistic regression model
    X = []
    y = []

    # for investor_id, project_id in G.edges():
    # for investor_id, project_id in [(investor_id, project_id) for investor_id, project_id in G.edges() if G.nodes[investor_id]['type'] == 'investor' and G.nodes[project_id]['type'] == 'project']:
    for (investor_id, project_id) in [(f"Investor {i}",f"Project {p}") for i in range(1,21) for p in range(1,11)]:
        print(investor_id, project_id)
        investor_attrs = G.nodes[investor_id]
        project_attrs = G.nodes[project_id]
        features = extract_features(investor_attrs, project_attrs)
        label = label_edge(G, investor_id, project_id)
        print(label)
        X.append(features)
        y.append(label)

    X = np.array(X)
    y = np.array(y)
    
    with open("X.npy","w") as f:
        np.save(f,X)
    with open("y.npy","w") as f:
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
    
if __name__ == "__main__":
    graph_train(graph_load())