import requests
import json

endpoint_url = "https://4c3e-106-51-82-118.ngrok-free.app/generate"

def get_response(prompt):
    """
    Function to make a POST request to a LLama LLM API endpoint with the given prompt.

    Parameters:
        - endpoint_url (str): The URL of the API endpoint.
        - prompt (str): The prompt to be sent as input to the API.

    Returns:
        - response (dict): The JSON response from the API.
    """
    # Define the payload (data) to be sent in the request
    payload = {
        "prompt": prompt
    }

    # Convert the payload to JSON format
    json_payload = json.dumps(payload)

    # Make the POST request to the API endpoint
    response = requests.post(endpoint_url, data=json_payload)

    # Check if the request was successful
    if response.status_code == 200:
        # Parse the JSON response
        response_json = response.json()
        return response_json['response']
    else:
        # If the request was not successful, print the error message
        print(f"POST request failed with status code {response.status_code}")
        return None
    
def area_of_expertise_match_prompt(area_of_expertise, resources_required):
    prompt = f"""
    I am building a platform to match investors to projects. I need to you tell me how much the area of expertise of the investor matches the resources that the project needs.
    
    The area of expertise of the investor is {area_of_expertise}
    The resources required by the project is {resources_required}
    
    Tell me how much they match on a scale of 0-10 in the following format(match_score is how much they match):
    
    match=match_score
    
    Strictly follow the format, I don't want any reasoning
    """
    
    response = get_response(prompt)
    # print(response)
    match_score = int(response.split("=")[1])
    
    return match_score

def risk_appetite_match_prompt(risk_appetite, description):
    prompt = f"""
    I am building a platform to match investors to projects. I need to you tell me how much the risk appetite of the investor matches the description of the project.
    
    The risk appetite of the investor is {risk_appetite}
    The description of the project is {description}
    
    Tell me how much they match on a scale of 0-10 in the following format(match_score is how much they match):
    
    match=match_score
    
    Strictly follow the format, I don't want any reasoning
    """
    
    response = get_response(prompt)
    # print(response)
    match_score = int(response.split("=")[1])
    
    return match_score

def background_match_prompt(investor_background, resources_required):
    prompt = f"""
    I am building a platform to match investors to projects. I need to you tell me how much the background of the investor matches the resources that the project needs.
    
    The background of the investor is {investor_background}
    The resources required by the project is {resources_required}
    
    Tell me how much they match on a scale of 0-10 in the following format(match_score is how much they match):
    
    match=match_score
    
    Strictly follow the format, I don't want any reasoning
    """
    
    response = get_response(prompt)
    # print(response)
    match_score = int(response.split("=")[1])
    
    return match_score

if __name__ == "__main__":
    # For testing purposes
    
    # print(area_of_expertise_match_prompt("Technology","Computer Management"))
    # print(area_of_expertise_match_prompt("Technology","Management"))
    # print(area_of_expertise_match_prompt("Technology","English Literature"))
    # print(area_of_expertise_match_prompt("Finance","Money"))
    
    # print(risk_appetite_match_prompt("High","This project is very risky"))
    # print(risk_appetite_match_prompt("Low","Harvesting fresh water from the glaciers in the North Pole"))
    # print(risk_appetite_match_prompt("High","Salt water treatment from oceans"))
    # print(risk_appetite_match_prompt("High","Generating electricity from wind turbines on the Moon")) 
    
    # print(background_match_prompt("I have worked in the field of technology for 10 years","Computer Management"))
    # print(background_match_prompt("I have worked in the field of technology for 10 years","Management"))
    # print(background_match_prompt("I have worked in the field of technology for 10 years","English Literature"))
    
    pass