"""
This file contains functions to generate the data for the graphs.
"""
import pandas as pd
import numpy as np


def generate_investor_data(num_investors,
                           investor_params=None,
                           ):
    """
    This function generates the data for the investors.
    """
    
    if investor_params is None:
        """
        Numerical parameters - Investment Scale(range), Risk Appetite(range), Delivery Time(range)
        Cardinal parameters:
        1) Area of Interest - 
        2) Area of Expertise -
        3) Region - 
        4) Background - 
        """
        investor_params = ['Investment Scale', 'Area of Interest', 'Area of Expertise', 'Risk Appetite', 'Delivery Time', 'Region', 'Background']
        
    investor_dataframe = pd.DataFrame(np.random.rand(num_investors, len(investor_params)), columns=investor_params)
    
    investor_dataframe *= 10
    investor_dataframe = investor_dataframe.astype(int)
    
    return investor_dataframe

def generate_project_data(num_projects,
                          project_params=None):
    """
    This function generates the data for the projects.
    """
    
    if project_params is None:
        """
        Numerical parameters - Current Status(money), Size, Delivery Time
        Cardinal parameters:
        1) Area of Interest -
        2) Region - 
        3) Resources Required -
        """
        project_params = ['Current Status', 'Area of Interest', 'Resources Required', 'Size', 'Region','Delivery Time']
        
    project_dataframe = pd.DataFrame(np.random.rand(num_projects, len(project_params)), columns=project_params)
    
    return project_dataframe

def generate_graph_data(num_investors, num_projects):
    """
    This function generates the data for the graph.
    
    It returns:
    (adjacency_list, nodes_dict)
    - The adjacency list is a dictionary where the key is the node and the value is a list of the nodes that are connected to it.
    - The nodes_dict is a dictionary where the key is the node and the value is the attributes of the node.
    """
    pass

