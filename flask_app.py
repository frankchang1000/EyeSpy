import cv2
import pandas as pd
import numpy as np
import tensorflow as tf
from flask import Flask, render_template, Response, request, jsonify

import efficientdet as efficientdet
from EfficientDet.utils.file_reader import parse_label_file

app = Flask(__name__)

# Define the object detection model, label dictionary, image dimensions, and threshold values

# Alter these values to match your environment
camera = cv2.VideoCapture(0)
model = tf.saved_model.load('D:/coding/EyeSpy/EfficientDet/v2')
labels_dict = parse_label_file("D:/coding/EyeSpy/EfficientDet/data/labels.txt")

def run_inference(frame):
    """
    Runs object detection inference on a single frame.
    """
    frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    frame, _ = efficientdet.test(
        frame,
        model=model,
        label_dict=labels_dict,
        image_dims=(512, 512),
        score_threshold=0.2,
        iou_threshold=0.2)
    output_frame = cv2.cvtColor(np.array(frame), cv2.COLOR_RGB2BGR)
    return output_frame


def gen_frames():
    """
    Grabs the frames and returns to the client.
    """
    while True:
        # print("Reading from camera")
        success, frame = camera.read()
        if not success:
            print("Not streaming.")
            break
        else:
            frame = run_inference(np.array(frame))
            ret, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

@app.route('/video_feed')
def video_feed():
    """
    Returns a video feed with the detections to the frontend.
    """
    return Response(
        gen_frames(),
        mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == "__main__":
    print("Finished loading models.")
    print("Launching the app.")
    app.run(host='localhost', port=3000, debug=True)