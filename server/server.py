import pickle
import numpy as np
from sklearn.decomposition import PCA
import warnings
from flask import Flask, render_template, request, url_for
from flask import jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

warnings.filterwarnings('ignore')
model = pickle.load(open('model.pkl', 'rb'))
pca = pickle.load(open('pca.pkl', 'rb'))

@app.route('/', methods=['POST'])
def process_form():
    data = request.get_json()
    age = int(data["age"])
    tsh = float(data["tsh"])
    t3 = float(data["t3"])
    tt4 = float(data["tt4"])
    t4u = float(data["t4u"])
    fti = float(data["fti"])
    gender = 1 if (data["gender"] == 'male') else 0
    sick = 1 if (data["sick"] == 'Yes') else 0
    pregnant = 1 if (data["pregnant"] == 'Yes') else 0
    thyroid_surgery = 1 if (data["thyroid_surgery"] == 'Yes') else 0
    goitre = 1 if (data["goitre"] == 'Yes') else 0
    tumor = 1 if (data["tumor"] == 'Yes') else 0
    test = [[age, tsh, t3, tt4, t4u, fti, gender, sick, pregnant, thyroid_surgery, goitre, tumor]]
    test = pca.transform(test) #transforms the data into 5 dimensions, dimen redux, 
    res = model.predict(test) #random forest, trees=100, # cross val acc = 98.736
    if res == 0: res = "componsated"
    elif res == 1: res = "negative"
    else: res = "primary"
    return jsonify(res)


if __name__ == '__main__':
    app.run(debug = True)
