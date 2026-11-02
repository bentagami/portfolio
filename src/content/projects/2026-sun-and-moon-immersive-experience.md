---
title: Sun and Moon Immersive Experience
coverImage: /images/projects/IMG_20260728_125946.jpg
description: A digital immersive experience of the Sun and Moon, utilizing content from NASA SVS and my own Unreal Engine game.
year: 2026
id: BT-Chabot-02
icon: 🌕
handtag: ''
badge: ''
featured: true
tags:
  - Unreal Engine
  - TouchDesigner
  - CNC Machining
videos:
  - caption: Moon Immersive
    url: https://youtu.be/pETl8_bbYHs
    file: ''
    poster: ''
---

This exhibit was created with the idea that it should be a platform to host potential artists-in-residence or show off community created content. However, we wanted to fill the space with some kind of content before hand as well as general infrastructure and layout. 

We settled on a digital-first approach as that would have the least overhead in changing out content - we wouldn't need a new build each time the content got changed. 

The exhibit utilizes an interesting curved glass wall that was already an existing part of the architecture:

![A picture of the sun](/images/projects/IMG_20260730_150433.jpg)

Using two projectors, we display content created by the team at NASA's SVS (Scientific Visualization Studio) across the glass wall, which we covered with a projection fabric.

For the moon, we wanted to replicate the curved feature we had with the sun, and we had kind of a weird space to work in. This part of the building was initially part of the lobby, so things like columns easily got in the way. After some demolition work, I created CNC files for curved pieces of plywood that we could then put ribs in between and bendy plywood on top of. A total of 9 walls, so 18 pieces were made that continue the complex curve. 

![](/images/projects/IMG_20260707_110616.jpg)

![Wall in progress, with spackle](/images/projects/IMG_20260729_091439.jpg)

Filler was added to the walls, and we sanded and painted them to get a seamless curved wall. After finishing we had the final curved wall that you can see in the video! I added a depth camera, and using touch designer created a depth tracker that tracks different visitors in the play area.

As a quick overview of the software, I used a program called Cesium which mapped and tiled out moon scans from the LRO (Lunar Reconnaissance Orbiter) and wired it up in unreal engine so that average user position drove the rotation of the moon. In other words, if most people were at the front of the screen, stars would move to the front and start rotating the moon forwards. This way, there is a directional steering achieved by crowd movement. I added in landmarks and custom animated title sequences as if visitors were exploring a new area in a video game whenever they got to a point of interest.
