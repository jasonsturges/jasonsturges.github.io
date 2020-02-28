---
layout: post
title: Creating a Terrain for Unity 3D with Photoshop
date: 2012-12-17 07:39:00
tags:
- Photoshop
- terrain
- Unity
- 3D
---

Terrains in Unity may be created from height maps designed with Photoshop.

![unity-photoshop-terrain](https://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/unity-photoshop-terrain.png)

Height maps should be sized to a power of two plus one (65, 129, 257, 513, 1025, 2049 in pixels) for width and height.

In Photoshop, start by creating a new image by *File* &raquo; *New*

![photoshop-new-terrain](https://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/photoshop-new-terrain.png)

Adjust foreground and background colors to height thresholds. Lighter colors will raise elevation to peaks, while darker colors sink to origin.

![photoshop-foreground-background-colors](https://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/photoshop-foreground-background-colors.png)

Seed the terrain height map by rendering clouds. In Photoshop, select *Filter* &raquo; *Render* &raquo; *Clouds*.

![photoshop-filter-render-clouds](https://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/photoshop-filter-render-clouds.png)

This alone may be used to generate a terrain.

Applying additional filters may enhance the terrain, such as adding difference clouds in Photoshop by selecting *Filter* &raquo; *Render* &raquo; *Difference Clouds*.

![photoshop-filter-render-difference-clouds](https://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/photoshop-filter-render-difference-clouds.png)

Further enhance by applying Photoshop's Plastic Wrap filter:

![terrain-plastic-wrap](https://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/terrain-plastic-wrap.png)

Numerous filters enhance a terrain, such as:

![terrain-bas-relief](https://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/terrain-bas-relief.png)
bas relief

![terrain-craquelure](https://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/terrain-craquelure.png)
craquelure

![terrain-cutout](https://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/terrain-cutout.png)
cutout

![terrain-fresco](https://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/terrain-fresco.png)
fresco

![terrain-sumi-e](https://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/terrain-sumi-e.png)
sumi-e

![terrain-watercolor](https://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/terrain-watercolor.png)
watercolor


Unity imports terrain height map data as Photoshop Raw with a single channel.

In Photoshop, remove all channels except one.

![photoshop-channels](https://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/photoshop-channels.png)

In Photoshop, save as a Photoshop Raw (.raw) file.

![photoshop-raw](https://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/photoshop-raw.png)

![photoshop-raw-options](https://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/photoshop-raw-options.png)

In Unity, create a new terrain selecting *Terrain* &raquo; *Create Terrain*

![create-terrain](https://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/create-terrain.png)

This will create new terrain asset in Unity.

![unity-new-terrain](https://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/unity-new-terrain.png)

![unity-new-terrain-asset](https://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/unity-new-terrain-asset.png)

In Unity, import the raw height map by selecting *Terrain* &raquo; *Import Heightmap - Raw...* and select the Photoshop raw image.

![unity-import-heightmap](https://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/unity-import-heightmap.png)

![unity-import-heightmap-options](https://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/unity-import-heightmap-options.png)

In Unity, the terrain will reflect the height map.

![unity-terrain](https://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/unity-terrain.png)

Flattening the center of the texture and painting texture, here is an example desert scene.

![unity-flattened-center-terrain](https://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/unity-flattened-center-terrain.png)

![unity-terrain-paint-texture](https://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/unity-terrain-paint-texture.png)
