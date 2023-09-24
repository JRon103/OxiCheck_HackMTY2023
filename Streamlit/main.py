import streamlit as st
import pandas as pd
import requests

st.title('Basic Data Visualization App')
st.text('This is an example app for datavisualization')

st.header("Line Chart")

# Column representation
 
#data = {
#            "First":[23,12, 78, 4, 54],
#            "Second": [0, 13, 88, 1, 3],
#            "Third": [45, 2, 546, 67, 56]
#        }


response = requests.get("http://localhost:3000/api");
data = response.json();

df = pd.DataFrame(data)
df
st.line_chart(data=df)
