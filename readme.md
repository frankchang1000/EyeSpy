## **EyeSpy**
Promoting safe driving by eliminating drowsy drivers using computer vision and object detection.


## Table Of Contents

* [Purpose and Inspiration](#purpose-and-inspiration)
* [What it Does](#what-it-does)
* [Installation and Usage](#installation-and-usage)
* [Challenges We Ran Into](#challenges-we-ran-into)
* [Accomplishments We're Proud of](#accomplishments-we're-proud-of)
* [What We Learned](#what-we-learned)
* [What's Next for EyeSpy](#what's-next-for-eyespy)




## Purpose and Inspiration 
According to the Federal Motor Carrier Safety Administration, 31 percent of all motor vehicle accidents are caused by drowsy driving. This highlights the dangers of fatigue and drowsiness for drivers, impairing a driver's ability to react to unexpected situations on the road and increasing the risk of accidents. Moreover, statistics show that automobile accidents are the leading cause of death for teenagers in the United States, with the Centers for Disease Control and Prevention reporting nearly 3000 automobile related deaths amongst teenagers in 2020 alone. The need to mitigate automobile injuries and death associated with drowsy drowning drove us to develop EyeSpy, addressing the need to reduce motor vehicle crashes. EyeSpy aims to eliminate drowsy drivers and promote safe driving.

## What it does

EyeSpy is a system that uses a camera to monitor the driver's face and detect if their eyes are closed. If the system detects that the driver's eyes are closed for a certain period, it will emit an alert sound, warning the driver to take immediate action and avoid a potential accident. This can be especially beneficial for long-distance drivers or those who work night shifts, as they may be more prone to feeling drowsy and may not even realize that their eyes have closed.

## Installation and Usage

To use EyeSpy, begin with cloning the repository from GitHub, install requirements and then run flask_app.py. NOTE: you MUST have NVIDIA CuDNN installed in order to run the AI backend. A GPU with compute capacity >= 5.0 is required.

```python
git clone https://github.com/frankchang1000/EyeSpy.git
cd EyeSpy
Python -m venv venv
venv/Scripts/activate
Python -m pip install -r requirements.txt
python flask_app.py
```

After loading the program, head to localhost:3000 to view the website.

## Challenges we ran into

We found difficulty in implementing our live camera feed onto our webpage, as we were unfamiliar with working with Flask.

## Accomplishments that we're proud of

We are proud to have connected our Python backend with our HTML and Flask frontend, as our team is pretty inexperienced with frontend development, we are pleased to have a functioning frontend.  

## What we learned

We learned how to connect a Python backend with HTML and Flask. It was our first time using Flask so it took some trial and error

## What's next for EyeSpy
In the future, we hope to expand EyeSpy to detect if the driver is using their phone while driving.


