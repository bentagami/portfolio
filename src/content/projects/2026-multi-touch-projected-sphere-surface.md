---
title: Multi Touch Projected Sphere Surface
coverImage: /images/projects/IMG_20260503_163050.jpg
description: I followed this paper https://www.hbenko.com/publications/2008/Benko_Sphere_UIST2008.pdf and recreated the sphere with modern software solutions.
year: 2026
id: BT-SW-01
icon: 🌎
handtag: ''
badge: ''
featured: true
tags:
  - Mediapipe, Optics, Javascript, 3D Printing
---

We happened to already have a MagicPlanet lying around so I thought to use modern computer vision to add more to the experience. ![](/images/projects/IMG_20260424_110959.jpg)

Here is a picture somewhat in the middle of the process before getting set up. The project required LED diodes that were powerful enough to be detected by the IR camera but also slim enough to be placed without obstructing the optics. After soldering 10 tiny LED PCBs together and driving them with a constant current driver, I sorted out the optical path. I took a cold mirror as recommended in Benko's paper and mounted it so that my camera could look straight up through the fisheye that projected onto the surface of the sphere. This required making a custom mount, which wasn't laid out in the paper but turned out to be quite tedious

![](/images/projects/IMG_20260425_131312.jpg)

After creating a debugging menu that showed projector content and also helped with alignment, I was able to align the optics as well as find optimal LED placement. Then, I just fine tuned the mediapipe output (everything ended up being through the browser for simplicity) to do background subtraction and blob detection (no need to be as discrete as make out details of specific hand gestures). The final result unfortunately is quite dim as the projector was dying as I eeked out the last picture. Hope to revisit this sometime soon!
