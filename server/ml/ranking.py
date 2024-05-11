"""
This file contains the main machine learning algorithm, that we will use for the graphs.
"""
import pandas as pd
import numpy as np
import sklearn
import pickle

from graph_functions import graph_load,extract_features_iim,extract_features_ipm,extract_features_ppm

def rank_projects_for_investors(investor_attrs, G, model):
    """
    Rank projects for a new investor based on the probability of an edge being present.
    
    Parameters:
        investor_attrs (dict): Attributes of the new investor.
        G (networkx.Graph): NetworkX graph representing the investor-project network.
        model: Trained logistic regression model for predicting edge presence.
        
    Returns:
        ranked_projects (list): List of project IDs ranked in descending order of probability.
    """
    ranked_projects = []
    
    for project_id in G.nodes():
        # Check if the node is a project
        if G.nodes[project_id]['type'] == 'project':
            # Extract attributes of the project
            project_attrs = G.nodes[project_id]
            
            # Extract features for the investor-project pair
            features = extract_features_ipm(investor_attrs, project_attrs)
            
            # Predict the probability of an edge being present
            probability = model.predict_proba([features])[0][1]  # Probability of edge being present
            
            # Append project ID and probability to the list
            ranked_projects.append((project_id, probability))
    
    # Sort projects based on probability in descending order
    ranked_projects.sort(key=lambda x: x[1], reverse=True)
    
    # Extract project IDs from the sorted list
    ranked_projects = [project[0] for project in ranked_projects]
    
    return ranked_projects

def rank_projects_for_projects(project_attrs, G, model):
    """
    Rank projects for a given project based on the probability of an edge being present.
    
    Parameters:
        project_attrs (dict): Attributes of the project for which to rank other projects.
        G (networkx.Graph): NetworkX graph representing the investor-project network.
        model: Trained logistic regression model for predicting edge presence.
        
    Returns:
        ranked_projects (list): List of project IDs ranked in descending order of probability.
    """
    ranked_projects = []
    
    for other_project_id in G.nodes():
        # Check if the node is a project and not the same as the given project
        if G.nodes[other_project_id]['type'] == 'project':
            # Extract attributes of the other project
            other_project_attrs = G.nodes[other_project_id]
            
            # Extract features for the project-project pair
            features = extract_features_ppm(project_attrs, other_project_attrs)
            
            # Predict the probability of an edge being present
            probability = model.predict_proba([features])[0][1]  # Probability of edge being present
            
            # Append project ID and probability to the list
            ranked_projects.append((other_project_id, probability))
    
    # Sort projects based on probability in descending order
    ranked_projects.sort(key=lambda x: x[1], reverse=True)
    
    # Extract project IDs from the sorted list
    ranked_projects = [project[0] for project in ranked_projects]
    
    return ranked_projects

def rank_investors_for_investors(investor_attrs, G, model):
    """
    Rank investors for a given investor based on the probability of an edge being present.
    
    Parameters:
        investor_attrs (dict): Attributes of the investor for which to rank other investors.
        G (networkx.Graph): NetworkX graph representing the investor-investor network.
        model: Trained logistic regression model for predicting edge presence.
        
    Returns:
        ranked_investors (list): List of investor IDs ranked in descending order of probability.
    """
    ranked_investors = []
    
    for other_investor_id in G.nodes():
        # Check if the node is an investor and not the same as the given investor
        if G.nodes[other_investor_id]['type'] == 'investor':
            # Extract attributes of the other investor
            other_investor_attrs = G.nodes[other_investor_id]
            
            # Extract features for the investor-investor pair
            features = extract_features_iim(investor_attrs, other_investor_attrs)
            
            # Predict the probability of an edge being present
            probability = model.predict_proba([features])[0][1]  # Probability of edge being present
            
            # Append investor ID and probability to the list
            ranked_investors.append((other_investor_id, probability))
    
    # Sort investors based on probability in descending order
    ranked_investors.sort(key=lambda x: x[1], reverse=True)
    
    # Extract investor IDs from the sorted list
    ranked_investors = [investor[0] for investor in ranked_investors]
    
    return ranked_investors

if __name__ == "__main__":
    sample_investor_attrs = {
    'investment_scale': 500000,
    'area_of_expertise': 'Technology and innovation',
    'background': 'Experienced product manager with a proven record of launching innovative products in competitive markets.',
    'risk_appetite': 7,
    'area_of_interest': 'Agricultural development',
    'delivery_time': 8,
    'region': 'North America'
    }
    
    sample_project_attrs = {
    'current_status': 500000,  # Example current status value in rupees
    'resources_required': 'Skilled labor and construction materials',  # Example resources required
    'project_description': 'Construction of a community center in rural areas',  # Example project description
    'area_of_interest': 'Community development',  # Example area of interest
    'delivery_time': 8,  # Example delivery time in months
    'region': 'Africa'  # Example region
}
    # with open('./server/ml/data/model_ppm.pkl', 'rb') as f:
    #     model = pickle.load(f)
    #     print(rank_projects_for_projects(sample_project_attrs, graph_load(), model))
    
    # with open('./server/ml/data/model_ppm.pkl', 'rb') as f:
    #     model = pickle.load(f)
    #     print(rank_projects_for_investors(sample_investor_attrs, graph_load(), model))
    
    with open('./server/ml/data/model_iim.pkl', 'rb') as f:
        model = pickle.load(f)
        print(rank_investors_for_investors(sample_investor_attrs, graph_load(), model))
    
    pass