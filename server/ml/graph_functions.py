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
7) Background -> Resources Required (LLM for applicability)
"""

def graph_train(graph, num_epochs):
    """
    This function trains the graph using the data.
    """
    pass