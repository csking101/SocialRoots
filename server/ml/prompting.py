import requests
import json

endpoint_url = "https://09ae-106-51-82-118.ngrok-free.app/generate"

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
    
if __name__ == "__main__":
    prompt = "Can you say Hi to me?"
    print(get_response(prompt))
    print(get_response(prompt))