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
from .prompting import area_of_expertise_match_prompt, risk_appetite_match_prompt, background_match_prompt

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

def graph_train(graph, num_epochs):
    """
    This function trains the graph using the data.
    """
    pass