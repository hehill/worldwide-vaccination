from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo

app = Flask(__name__)

mongo = PyMongo(app, uri="mongodb://localhost:27017/covid_db")

@app.route("/")
def index():
    # virus = mongo.db.covid_db.find_one()
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)