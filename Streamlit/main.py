import streamlit as st
import pandas as pd
import requests

st.title('OxiCheck')
st.text('Visualización de la oxigenación a través de los últimos cinco días')

st.header("Oxigenación últimos 5 días:")

# Column representation
 
#data = {
#            "First":[23,12, 78, 4, 54],
#            "Second": [0, 13, 88, 1, 3],
#            "Third": [45, 2, 546, 67, 56]
#        }


response = requests.get("http://localhost:3000/api");
data = response.json();
print(data)

df1 = pd.DataFrame(data)
df1
print("\n")
print(df1)
print("\n")

# del df1[df1.columns[0]]

print(df1)

#st.line_chart(data=df)*/


#Get list of values
Means = [];
Min = [];
Max = [];
n=0;

for i in list(df1):
     dat = df1[i].tolist();
     Means.append(dat[2]);
     Min.append(dat[1]);
     Max.append(dat[0]);

print(Means)
print(Min)
print(Max)


# for i in list(df1):
#     print(df1[i].tolist())


# dictionary
dict = { 'Days': list(range(1,6)),
    'Promedio': Means,
    'Max': Max,
    'Min': Min}

print(dict)
  
# create a dataframe object
df2 = pd.DataFrame(dict)

st.line_chart(
     
     data=df2, x="Days", y=["Max", "Min", "Promedio"]
     
     )
