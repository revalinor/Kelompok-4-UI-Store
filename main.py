from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    catalog = []
    return render_template('index.html', catalog=catalog)

if  __name__ == "__main__":
    app.run(debug=True)