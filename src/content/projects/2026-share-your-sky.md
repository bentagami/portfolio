---
title: Share Your Sky
coverImage: /images/projects/IMG_20261014_095850.jpg
description: 'Share Your Sky is an interactive exhibit that is part of the larger Shared Skies: Photos of Our Universe exhibition.'
year: 2026
id: BT-Chabot-03
icon: 🔭
handtag: ''
badge: ''
featured: true
tags:
  - Javascript
  - Woodworking
  - Ubuntu Server
  - Raspberry Pi
videos: []
---

Share Your Sky is an exhibit that is part of the greater Shared Skies exhibition at Chabot Space & Science Center. Shared Skies is an exhibit whose main goal is to highlight the art & science of astrophotography. The exhibits main highlight is astrophotographers that were selected as winners as part of the AstroPrize competition. Share Your Sky is intended to be supplemental to this main content by providing an interactive, immersive experience that gives a broad overview of how astrophotography editing works as well as make people feel like they are part of a global astrophotography community.

I helped our team find our flow and layout of the entire experience by creating a foamcore model that we referenced as we went through the process of finding out where "Share Your Sky" was going to live and how it related to the other sections of the exhibition.

![](/images/projects/IMG_20260630_155844.jpg)

Share Your Sky is made up of 3 main parts; the main digital interactive, the set dressing, and the community gallery. 

**Experience**

![A photo that shows off the whole experience, turf grass, telescope, a digital community gallery, photo opportunity, and main touchscreen interactive.](/images/projects/IMG_20261014_095850.jpg)

Visitors find themselves immersed in a nature scene when they first enter the exhibit, a silhouette backdrop of the redwoods and Oakland hills frame in a curated video of a variety of astrophotography timelapses featuring notable areas like Yosemite National Park. After glancing at the faux-telescope, most visitors are drawn toward the monolithic screen that says "Share Your Sky" with a UI that looks a phone camera. After taking a photo with their friends or by themselves, they are walked through how a camera takes in light, filters it into red green and blue channels, and those channels can be manipulated to highlight different colors. After being shown this, visitors can then adjust the colors and intensities of their image while given a didactic on how color manipulation in conjunction with filtering allows astrophotographers to highlight and show off parts of the sky that are not normally "visible" with our eye. Finally, visitors are asked how "real" they thought their photos are and can move a scale to represent how real they think their original and edited photos are. After submitting their photo to the gallery, they can see their photo in the community gallery alongside community astrophotography images, and they can also see how "real" the rest of the community thought their edited photography was. 

**Digital Interactive**

![A photo of the large touchscreen interactive.](/images/projects/IMG_20261014_095920.jpg)

When we were wrapping up our planning phase I had wanted to make this main part of the interactive a combination of both analog and digital. Initially, the plan was to make a photography editing station where you can move physical filters in front of a camera and then combine different filtered images together and change their color values. Due both to time constraints and concerns around dwell time and complexity, we decided to make this portion of the exhibit completely digital. I had initially started prototyping out basic concepts with just a camera and a photo editing application and I walked through what the experience could look like. Given what I wanted this experience to be and the shorter timeline this is my first experience using LLM generated code in an exhibit. I'm still mixed on how/when LLMs should be used - especially in creative work - but that could be a whole blog post. Overall, I do feel like it removed a lot of the friction of having to hand code any changes and just increased the iteration time immensely. This allowed for many additional phases of ideation, testing, and user feedback in a short time-frame but I was still able to use it as a tool and retain control of the design direction and overall final aesthetic. 

Code can be seen here: [https://github.com/Chagami/ShareYourSky](https://github.com/Chagami/ShareYourSky)

A mini-PC with Ubuntu is set up to run this javascript based website locally, but also acts a server. The server allows the community gallery on the other side of the exhibit to display visitor submitted photos live, and also allows for the exhibits team to monitor, download, or remove images from the screen. 

The PC is also hardwired into a camera that lives in the telescope housing. I went through a couple different iterations of cameras, action cameras, and DSLRs but eventually ended up getting an exposed PCB, USB-compatible camera because our requirements of 4K, HDR, Wide FOV were surprisingly hard to come across. We routed out the wood subfloor underneath the turf grass to keep the camera hardwired and also prevent visitors from breaking the connection overtime.

**Set Dressing**

![A photo with a telescope looking at a digital backgrop of Yosemite National Park, framed in by redwood trees](/images/projects/IMG_20261014_095942.jpg)

When moving out of the prototyping phase, we were considering on what kind of backdrop we could provide to make the photo taking experience interesting and engaging. At one point I suggested turf grass half-jokingly, but we all started to like the idea. We wanted the visitor to feel like they could step in and join in on a night out in the woods and take photos of the stars. Our team built on top of the grass idea, thinking about cutouts to create a classic photo-op that could frame in astrophotography content, so visitors had the options of taking a photo of themselves, their friends or of just the content itself - each providing a slightly different experience and each providing content to edit in the main interaction. After a teammate suggested re-using an old telescope it felt like we had made enough physical layers to achieve an acceptable level of immersion. 

![](/images/projects/IMG_20261014_095908.jpg)

To harden the telescope, I made a custom mount using plywood I cut on our Shaper Origin and then joined together using a tenon that was capped with dowels. We then hard mounted the custom telescope mount into the concrete floor below.

All that was added after installing the CNC cut backdrop, the turf grass and the telescope were two brown Adirondack style chairs. To add the final touch, we had an audio track that was used for an old planetarium show that had crickets, owls, wolves and a single UFO noise to make it feel like you were entering a campsite at night. 

**Community Gallery**

![](/images/projects/IMG_20261014_095859.jpg)

One of our goals with this exhibit was to try to make a loose message that astrophotography is achievable by and for anyone. You don't need super fancy cameras or tools to do it and there is a broad community both globally and locally that you can be a part of. The community gallery was our approach to make people feel like they were taking part of this community, and that looks up at the night sky together. After visitors take photos through the "telescope", they have the chance to send them to our community gallery where their photos are mixed in with pre-selected community photos. Our pre-selected photos had photos of the people in the astrophotography community, the Chabot community, as well as actual astrophotographs taken by community members and even photos taken on Chabot's own telescopes by our volunteer telescope operators. The selected photos gradually fade in and stack on top of each other to give a scrapbook-y feel, while new photos are immediately selected and shown off. 

I was trying to move away from our current approach of raspberry pi's powering exhibitry screens - both due to increased cost, as well as questions of reliability. Unfortunately, the smart TVs we purchased had a litany of issues that made them hard to use (all they had to do was display a browser page in fullscreen!). Because of this, I ended up setting up 4 raspberry pi's, each set up with the Lite OS so that they didn't eat up their meager 1GB of RAM. I scripted all of them so that after booting up the necessary system processes it pulls up the webpage served by the mini-PC that runs the photo-taking part of the exhibit.
