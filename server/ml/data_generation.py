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

def sample_investor_data_generation():
    # Define the parameters
    common_attributes = {
        'area_of_interest': ['Environmental conservation', 'Community development', 'Arts and culture',
                            'Technology and innovation', "Women and children's welfare", 'Agricultural development',
                            'Public health initiatives', 'Infrastructure and urban planning', 'Financial inclusion',
                            'Disaster relief and resilience'],
        'delivery_time': list(range(1, 13)),  # Delivery time in months
        'region': ['Asia', 'Africa', 'Europe', 'North America', 'South America', 'Australia', 'Antarctica']
    }

    investor_attributes = {
        'investment_scale': list(range(10000, 1000001, 10000)),  # Money in rupees
        'area_of_expertise': {
            'Technology and innovation': "With over 10 years of experience in the technology sector, specializing in software development and project management.",
            'Business development and scaling': "Extensive background in finance and investment, having managed portfolios for high-net-worth clients.",
            'Financial management and fundraising': "Legal expert with a focus on regulatory compliance and contract law, having advised multinational corporations.",
            'Legal and regulatory compliance': "Legal expert with a focus on regulatory compliance and contract law, having advised multinational corporations.",
            'Marketing and branding': "Marketing professional with a track record of successful branding campaigns and market penetration strategies.",
            'Human resources and talent management': "Human resources specialist with expertise in talent acquisition, training, and employee relations.",
            'Product development and design': "Experienced product manager with a proven record of launching innovative products in competitive markets.",
            'Market research and analysis': "Market research analyst with proficiency in data analysis and consumer behavior insights.",
            'Supply chain and logistics': "Supply chain management expert with a history of optimizing logistics operations for efficiency and cost savings.",
            'Customer service and support': "Customer service manager with a commitment to delivering exceptional support experiences and building client relationships.",
            'Data analytics and business intelligence': "Data scientist skilled in analyzing large datasets and extracting actionable insights for business decision-making."
        },
        'risk_appetite': list(range(0, 11)),  # Risk level (0-10)
    }

    # Generate dummy data for 10 investors
    investor_data = []
    for _ in range(10):
        area_of_expertise = np.random.choice(list(investor_attributes['area_of_expertise'].keys()))
        data = {
            'investment_scale': np.random.choice(investor_attributes['investment_scale']),
            'area_of_expertise': area_of_expertise,
            'background': investor_attributes['area_of_expertise'][area_of_expertise],
            'risk_appetite': np.random.choice(investor_attributes['risk_appetite']),
            **{k: np.random.choice(v) for k, v in common_attributes.items()}
        }
        investor_data.append(data)

    # Create a DataFrame
    investor_df = pd.DataFrame(investor_data)

    # Save the DataFrame to a CSV file
    investor_df.to_csv('dummy_investor_data.csv', index=False)

    print("Dummy investor data saved to 'dummy_investor_data.csv'")
    
def sample_project_data_generation():
    # Define the parameters
    common_attributes = {
        'area_of_interest': ['Environmental conservation', 'Community development', 'Arts and culture',
                            'Technology and innovation', "Women and children's welfare", 'Agricultural development',
                            'Public health initiatives', 'Infrastructure and urban planning', 'Financial inclusion',
                            'Disaster relief and resilience'],
        'delivery_time': list(range(1, 13)),  # Delivery time in months
        'region': ['Asia', 'Africa', 'Europe', 'North America', 'South America', 'Australia', 'Antarctica']
    }

    project_attributes = {
        'current_status': list(range(10000, 1000001, 10000)),  # Money in rupees
        'resources_required': {
            "Advanced technology and innovation": "This project aims to develop innovative technological solutions to address pressing challenges in the area of interest.",
            "Business development and scaling strategies": "The project focuses on implementing strategic business development and scaling strategies to foster growth and sustainability.",
            "Financial management and fundraising support": "This project provides support in financial management and fundraising activities to ensure effective resource allocation and sustainability.",
            "Legal and regulatory compliance guidance": "The project offers guidance and assistance in navigating legal and regulatory requirements relevant to the area of interest.",
            "Strategic marketing and branding initiatives": "The project involves strategic marketing and branding initiatives to raise awareness and promote the goals of the initiative.",
            "Human resources and talent management solutions": "This project offers solutions and expertise in human resources and talent management to build and sustain an effective workforce.",
            "Product development and design expertise": "The project leverages product development and design expertise to create innovative solutions tailored to the needs of the area of interest.",
            "Market research and analysis services": "This project provides market research and analysis services to gain insights into market trends and consumer behavior.",
            "Efficient supply chain and logistics solutions": "The project focuses on implementing efficient supply chain and logistics solutions to ensure timely delivery and distribution of resources.",
            "Customer service and support solutions": "This project offers customer service and support solutions to enhance stakeholder engagement and satisfaction.",
            "Data analytics and business intelligence services": "The project utilizes data analytics and business intelligence services to derive actionable insights and inform decision-making."
        }
    }

    # Generate dummy data for 10 projects
    project_data = []
    for _ in range(10):
        resources_required = np.random.choice(list(project_attributes['resources_required'].keys()))
        data = {
            'current_status': np.random.choice(project_attributes['current_status']),
            'resources_required': resources_required,
            'project_description': project_attributes['resources_required'][resources_required],
            **{k: np.random.choice(v) for k, v in common_attributes.items()}
        }
        project_data.append(data)

    # Create a DataFrame
    project_df = pd.DataFrame(project_data)

    # Save the DataFrame to a CSV file
    project_df.to_csv('dummy_project_data.csv', index=False)

    print("Dummy project data saved to 'dummy_project_data.csv'")


if __name__ == '__main__':
    sample_investor_data_generation()
    sample_project_data_generation()
    pass