---
layout: post
title: Creating a Terrain for Unity 3D with Photoshop
date: 2012-12-17 07:39:00
tags:
- 3d
- Photoshop
- terrain
- Unity
---

Terrains in Unity may be created from height maps designed with Photoshop.

<img class="img-fluid" src="http://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/unity-photoshop-terrain.png" alt="unity-photoshop-terrain" />

Height maps should be sized to a power of two plus one (65, 129, 257, 513, 1025, 2049 in pixels) for width and height.

In Photoshop, start by creating a new image by *File* Â» *New*

<img class="img-fluid" src="http://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/photoshop-new-terrain.png" alt="photoshop-new-terrain" />

Adjust foreground and background colors to height thresholds. Lighter colors will raise elevation to peaks, while darker colors sink to origin.

<img class="img-fluid" src="http://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/photoshop-foreground-background-colors.png" alt="photoshop-foreground-background-colors" />

Seed the terrain height map by rendering clouds. In Photoshop, select *Filter* Â» *Render* Â» *Clouds*.

<img class="img-fluid" src="http://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/photoshop-filter-render-clouds.png" alt="photoshop-filter-render-clouds" />

This alone may be used to generate a terrain.

Applying additional filters may enhance the terrain, such as adding difference clouds in Photoshop by selecting *Filter* Â» *Render* Â» *Difference Clouds*.

<img class="img-fluid" src="http://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/photoshop-filter-render-difference-clouds.png" alt="photoshop-filter-render-difference-clouds" />

Further enhance by applying Photoshop's Plastic Wrap filter:

<img class="img-fluid" src="http://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/terrain-plastic-wrap.png" alt="terrain-plastic-wrap" />

Numerous filters enhance a terrain, such as:

<div class="row">
  <div class="col-lg-3 col-md-4 col-xs-6 thumb">
    <img class="img-fluid" src="http://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/terrain-bas-relief.png" alt="terrain-bas-relief" />
    bas relief
  </div>

  <div class="col-lg-3 col-md-4 col-xs-6 thumb">
    <img class="img-fluid" src="http://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/terrain-craquelure.png" alt="terrain-craquelure" />
    craquelure
  </div>

  <div class="col-lg-3 col-md-4 col-xs-6 thumb">
    <img class="img-fluid" src="http://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/terrain-cutout.png" alt="terrain-cutout" />
    cutout
  </div>

  <div class="col-lg-3 col-md-4 col-xs-6 thumb">
    <img class="img-fluid" src="http://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/terrain-fresco.png" alt="terrain-fresco" />
    fresco
  </div>

  <div class="col-lg-3 col-md-4 col-xs-6 thumb">
    <img class="img-fluid" src="http://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/terrain-sumi-e.png" alt="terrain-sumi-e" />
    sumi-e
  </div>

  <div class="col-lg-3 col-md-4 col-xs-6 thumb">
    <img class="img-fluid" src="http://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/terrain-watercolor.png" alt="terrain-watercolor" />
    watercolor
  </div>
</div>


Unity imports terrain height map data as Photoshop Raw with a single channel.

In Photoshop, remove all channels except one.

<img class="img-fluid" src="http://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/photoshop-channels.png" alt="photoshop-channels" />

In Photoshop, save as a Photoshop Raw (.raw) file.

<img class="img-fluid" src="http://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/photoshop-raw.png" alt="photoshop-raw" />

<img class="img-fluid" src="http://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/photoshop-raw-options.png" alt="photoshop-raw-options" />

In Unity, create a new terrain selecting *Terrain* Â» *Create Terrain*

<img class="img-fluid" src="http://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/create-terrain.png" alt="create-terrain" />

This will create new terrain asset in Unity.

<img class="img-fluid" src="http://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/unity-new-terrain.png" alt="unity-new-terrain" />

<img class="img-fluid" src="http://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/unity-new-terrain-asset.png" alt="unity-new-terrain-asset" />

In Unity, import the raw height map by selecting *Terrain* Â» *Import Heightmap - Raw...* and select the Photoshop raw image.

<img class="img-fluid" src="http://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/unity-import-heightmap.png" alt="unity-import-heightmap" />

<img class="img-fluid" src="http://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/unity-import-heightmap-options.png" alt="unity-import-heightmap-options" />

In Unity, the terrain will reflect the height map.

<img class="img-fluid" src="http://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/unity-terrain.png" alt="unity-terrain" />

Flattening the center of the texture and painting texture, here is an example desert scene.

<img class="img-fluid" src="http://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/unity-flattened-center-terrain.png" alt="unity-flattened-center-terrain" />

<img class="img-fluid" src="http://labs.jasonsturges.com/unity/terrain-photoshop-example/assets/unity-terrain-paint-texture.png" alt="unity-terrain-paint-texture" />
