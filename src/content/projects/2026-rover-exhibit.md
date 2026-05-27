---
title: Rover Exhibit
coverImage: /images/projects/IMG_20260517_133413.jpg
description: Putting student work on display in the community gallery.
year: 2026
id: BT-SW-02
icon: 👨‍🚀
handtag: ''
badge: ''
featured: true
tags:
  - C++, 3D Printing, Woodworking
---

I followed the content laid out here: https://github.com/Ezward/Esp32CameraRover for inspiration for class material for our Engineering Class at Chabot. It's budget friendliness allowed for our class to make multiples of the rover and reduce the group size. Instead of going with the recommended hardware, I also had students design and 3D Print their own chassis. 

During the class we went over how to use github, how to look at and work with repos, as well as modify small bits of code.

For this final installation, I changed the code quite a bit to make it friendly for users to interact, by removing a lot of the extraneous controls and just allowing users to control the camera stream and the movement. Additionally the existing code appeared to have some memory leak that left the ESP unresponsive after a few days of being on and had trouble restarting. After hard coding in hard resets, the issue appears to have been resolved.
