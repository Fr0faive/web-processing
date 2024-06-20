from flask import Flask, request, jsonify
from PIL import Image
import io
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
@app.route('/api/compress', methods=['POST'])
def compress_image():
    file = request.files['image']
    img = Image.open(file.stream)

    # Kompresi (contoh dengan Pillow)
    buffer = io.BytesIO()
    img.save(buffer, format="JPEG", quality=85)
    buffer.seek(0)

    return buffer.getvalue(), 200, {'Content-Type': 'image/jpeg'}
