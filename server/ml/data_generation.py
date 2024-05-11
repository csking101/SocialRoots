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
            "Advanced technology and innovation": {
                'Asia': "This project aims to deploy IoT-based smart agriculture solutions to optimize water usage and increase crop yields in drought-prone regions of Asia.",
                'Africa': "The project focuses on implementing off-grid solar power solutions to provide electricity access to remote villages in sub-Saharan Africa.",
                'Europe': "This project aims to develop AI-powered waste management systems to reduce landfill waste and promote recycling in urban areas of Europe.",
                'North America': "The project focuses on building electric vehicle charging infrastructure to support the transition to sustainable transportation in major cities across North America.",
                'South America': "This project aims to implement blockchain technology to create transparent supply chains for fair-trade coffee production in South American coffee-growing regions.",
                'Australia': "The project focuses on deploying marine energy harvesting systems to generate clean electricity from ocean waves along the coastline of Australia.",
                'Antarctica': "This project aims to develop autonomous drones for monitoring and studying the impact of climate change on Antarctic ice shelves."
            },
            "Business development and scaling strategies": {
                'Asia': "The project focuses on providing microfinance loans and business training to women entrepreneurs in rural areas of Asia to empower economic growth and gender equality.",
                'Africa': "This project aims to establish community-based cooperatives to support smallholder farmers in accessing markets, agricultural inputs, and financial services in Africa.",
                'Europe': "The project focuses on connecting startups with experienced mentors, investors, and corporate partners to accelerate their growth and innovation in Europe's tech ecosystem.",
                'North America': "This project aims to provide technical assistance and funding opportunities to minority-owned businesses to overcome barriers and achieve sustainable growth in North American markets.",
                'South America': "The project focuses on fostering entrepreneurship and innovation through incubator programs and startup competitions to address social and environmental challenges in South America.",
                'Australia': "This project aims to develop export market strategies and trade partnerships to help Australian SMEs expand their business internationally and access new markets.",
                'Antarctica': "The project focuses on promoting sustainable tourism practices and eco-friendly initiatives to protect the unique biodiversity and fragile ecosystems of Antarctica."
            },
            # Add descriptions for other resource types and regions as needed
        }
    }

    # Generate dummy data for 20 projects
    project_data = []
    for _ in range(20):
        resources_required = np.random.choice(list(project_attributes['resources_required'].keys()))
        region = np.random.choice(common_attributes['region'])
        project_description = project_attributes['resources_required'][resources_required][region]
        data = {
            'current_status': np.random.choice(project_attributes['current_status']),
            'resources_required': resources_required,
            'project_description': project_description,
            **{k: np.random.choice(v) for k, v in common_attributes.items()},
            'region': region  # Ensure the region is consistent with the project description
        }
        project_data.append(data)

    # Create a DataFrame
    project_df = pd.DataFrame(project_data)

    # Save the DataFrame to a CSV file
    project_df.to_csv('dummy_project_data_20.csv', index=False)


def sample_mapping_data_generation():
    # Load investor and project data
    investor_df = pd.read_csv('dummy_investor_data.csv')
    project_df = pd.read_csv('dummy_project_data.csv')

    # Initialize mapping dictionary
    project_investor_mapping = {}

    # Iterate over projects
    for index, project in project_df.iterrows():
        project_area_of_interest = project['area_of_interest']
        project_delivery_time = project['delivery_time']
        project_region = project['region']
        
        # Filter potential investors based on area of expertise
        potential_investors = investor_df[investor_df['area_of_expertise'] == project_area_of_interest]
        
        # Filter potential investors based on delivery time and region compatibility
        potential_investors = potential_investors[
            (potential_investors['delivery_time'] >= project_delivery_time) &
            (potential_investors['region'] == project_region)
        ]
        
        if len(potential_investors) > 0:
            # Assign the project to the investor(s) based on some prioritization criteria
            # For simplicity, let's assign the project to the investor with the highest investment scale
            assigned_investor = potential_investors.loc[potential_investors['investment_scale'].idxmax()]
            project_investor_mapping[index] = assigned_investor['investment_scale']

    # Convert project-investor mapping to DataFrame
    project_investor_df = pd.DataFrame(list(project_investor_mapping.items()), columns=['project_id', 'investor_investment_scale'])

    # Save mapping to CSV file
    project_investor_df.to_csv('project_investor_mapping.csv', index=False)

    print("Project-investor mapping saved to 'project_investor_mapping.csv'")


if __name__ == '__main__':
    sample_investor_data_generation()
    sample_project_data_generation()
    sample_mapping_data_generation()
    pass