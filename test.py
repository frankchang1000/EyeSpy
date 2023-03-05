import cv2

vid = cv2.VideoCapture(0)
vid.set(cv2.CAP_PROP_FRAME_WIDTH, 160)
vid.set(cv2.CAP_PROP_FRAME_HEIGHT, 120)
ret, frame = vid.read()

cv2.imshow('frame', frame)