---
layout: post
title: Unity Terrain Tools
date: 2020-03-10 04:01:00
tags:
- Unity
- 3D
- terrain
---


Unity 2019.1 features a new Terrain Tools package for automating terrain creation.

Create a new project in Unity 3D from the Unity Hub:

![create-new-project](https://labs.jasonsturges.com/unity/terrain-tools/create-new-project.png)

Install the Terrain Tools package in the Unity project by going to *Window* &raquo; *Package Manager*:

![window-package-manager](https://labs.jasonsturges.com/unity/terrain-tools/window-package-manager.png)

In the *Package Manager* window, under the *Advanced* menu select *Show preview packages*:

![package-manager-show-preview-packages](https://labs.jasonsturges.com/unity/terrain-tools/package-manager-show-preview-packages.png)

Then, search for "Terrain Tools" and press *Install*:

![package-manager-terrain-tools](https://labs.jasonsturges.com/unity/terrain-tools/package-manager-terrain-tools.png)

Consider installing the free complimentary *[Terrain Tools Sample Asset Pack](https://assetstore.unity.com/packages/2d/textures-materials/terrain-tools-sample-asset-pack-145808)* by Unity Technologies from the Asset Store by selecting *Add to My Assets*:

![asset-store-terrain-tools-sample-asset-pack](https://labs.jasonsturges.com/unity/terrain-tools/asset-store-terrain-tools-sample-asset-pack.png)

From *Window* &raquo; *Package Manager*, select *My Assets* from the menu to search for Terrain Tools and press *Import*:

![package-manager-terrain-tools-sample-asset-pack](https://labs.jasonsturges.com/unity/terrain-tools/package-manager-terrain-tools-sample-asset-pack.png)

Now back in Unity with everything installed, there's a new *Terrain* option under the *Window* menu.

Select *Window* &raquo; *Terrain* &raquo; *Terrain Toolbox*:

![window-terrain-toolbox](https://labs.jasonsturges.com/unity/terrain-tools/window-terrain-toolbox.png)

This will open a *Terrain Toolbox* window - change any settings and press *Create*:

![terrain-toolbox](https://labs.jasonsturges.com/unity/terrain-tools/terrain-toolbox.png)

The terrain has been created in Unity:

![unity-terrain](https://labs.jasonsturges.com/unity/terrain-tools/unity-terrain.png)

From the *Hierarchy*, select the terrain under the *TerrainGroup* to begin editing the terrain.

In the *Inspector*, under *Terrain*

- Select *Paint Terrain*
- Chose *Raise or Lower Terrain*
- Under *Brush Mask*, select a brush
- Under *Stroke*, set *Brush Strength* and *Brush Size*
- In the scene, left-click to raise elevation; or, <kbd>CONTRORL</kbd> left-click to lower elevation

![unity-terrain-paint](https://labs.jasonsturges.com/unity/terrain-tools/unity-terrain-paint.gif)
