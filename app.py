from flask import Flask, jsonify, g
from flask_cors import CORS
from views import image_search, summarize, speechblob_to_gcloud


app = Flask(__name__)

cors = CORS(app, resources={"/*": {"origins": "*"}})


app.add_url_rule('/image_search', view_func=image_search)

app.add_url_rule('/summarize', view_func=image_search)

app.add_url_rule('/speechblob_to_gcloud', view_func=speechblob_to_gcloud,
                 methods=["POST"])

if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)
