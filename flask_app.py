import cv2
import pandas as pd
import numpy as np
import tensorflow as tf
from flask import Flask, render_template, Response, request, jsonify

import efficientdet as efficientdet
from EfficientDet.utils.file_reader import parse_label_file
from playsound import playsound

app = Flask(__name__)

# Define the object detection model, label dictionary, image dimensions, and threshold values

# Alter these values to match your environment
camera = cv2.VideoCapture(0)
model = tf.saved_model.load('D:/coding/EyeSpy/v3')
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
        score_threshold=0.5,
        iou_threshold=0.5)
    output_frame = cv2.cvtColor(np.array(frame), cv2.COLOR_RGB2BGR)

    return output_frame

streaming = True

def gen_frames():
    """
    Grabs the frames and returns to the client.
    """
    global streaming
    while streaming:
        # print("Reading from camera")
        success, frame = camera.read()
        if not success:
            print("Not streaming.")
            break
        else:
            frame = run_inference(np.array(frame))
            #print("running inference")
            ret, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

# Define a function to stop the camera stream
def stop_camera():
    global streaming
    streaming = False

@app.route('/video_feed')
def video_feed():
    """
    Returns a video feed with the detections to the frontend.
    """
    return Response(
        gen_frames(),
        mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        global isCameraOn
        isCameraOn = False
        return redirect('/')
    else:
        return render_template('index.html')

if __name__ == "__main__":
    print("Finished loading models.")
    print("Launching the app.")
    app.run(host='localhost', port=3000, debug=True)