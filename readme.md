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
Drowsy driving is a serious issue that puts countless lives at risk. According to the Federal Motor Carrier Safety Administration, a staggering 31 percent of all motor vehicle accidents are caused by driver fatigue. This is a stark reminder of the dangers of driving while feeling sleepy, which can impair a driver's ability to react to unexpected situations and significantly increase the likelihood of accidents. In addition, automobile accidents are the leading cause of death for teenagers in the United States, with the Centers for Disease Control and Prevention reporting nearly 3000 automobile-related deaths among teenagers in 2020 alone. To help mitigate these alarming statistics and reduce motor vehicle crashes, we developed EyeSpy. Our mission is to eliminate drowsy drivers and promote safe driving, ultimately saving lives on the road.

## What it does

EyeSpy is an innovative system designed to promote safe driving by detecting drowsy drivers in real-time. The system utilizes a camera to monitor the driver's face and detect if their eyes are closed for an extended period of time. If EyeSpy detects that the driver's eyes are closed, it will emit an alert sound, alerting the driver to take immediate action and avoid a potential accident. This feature is particularly beneficial for long-distance drivers or those who work night shifts, as they may be more prone to feeling drowsy and may not even realize that their eyes have closed, putting them at risk of accidents. With EyeSpy, drivers can feel more confident and secure on the road, knowing that they have an extra layer of protection against drowsy driving.

<p align="center">
  <img src="https://github.com/frankchang1000/EyeSpy/blob/main/docs/EyeSpy Slides.png", width="500"/>
</p>

## Installation and Usage

To use EyeSpy, begin with cloning the repository from GitHub, install requirements and then run flask_app.py. NOTE: you MUST have NVIDIA CuDNN installed in order to run the AI backend. A GPU with compute capacity >= 5.0 is required.

```python
git clone https://github.com/frankchang1000/EyeSpy.git
cd EyeSpy
python -m venv venv
venv/Scripts/activate
python -m pip install -r requirements.txt
python flask_app.py
```

After loading the program, head to localhost:3000 to view the website.

## Challenges we ran into

During the development of EyeSpy, we faced challenges with implementing a live camera feed onto our webpage. As a team, we were relatively unfamiliar with working with Flask, which made the task more challenging. 
## Accomplishments that we're proud of

As a team with limited experience in frontend development, we are thrilled to have successfully connected our Python backend with our HTML and Flask frontend. This was a significant accomplishment for us, as it required us to learn and apply new skills in order to create a functional frontend interface for our EyeSpy system. We faced challenges along the way, but with dedication and persistence, we were able to overcome them and create an effective user interface that complements the backend functionality of our system. We are proud of what we have achieved and excited to continue building on this foundation to make EyeSpy even better.

## What we learned

Through the process of developing EyeSpy, we gained valuable experience in connecting a Python backend with HTML and Flask. Although it was our first time working with Flask, we were able to learn by trial and error, and ultimately build a functional frontend interface. The challenges we faced along the way provided us with opportunities to learn and grow, and we are now better equipped to handle similar tasks in the future. By applying what we learned from this experience, we can continue to improve EyeSpy and create even more sophisticated systems in the future.

## What's next for EyeSpy
Looking ahead, our team envisions expanding the capabilities of EyeSpy to detect if the driver is using their phone while driving. Distracted driving, including phone use while driving, is a major cause of accidents and poses a serious threat to the safety of drivers and passengers on the road. By incorporating additional computer vision and object detection techniques, EyeSpy could help address this issue and promote safer driving practices. We are excited about the potential impact this expansion could have on reducing accidents and saving lives.


