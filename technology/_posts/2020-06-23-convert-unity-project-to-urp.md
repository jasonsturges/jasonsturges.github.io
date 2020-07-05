---
layout: post
title: Convert Unity Project to URP
date: 2020-06-23 18:00:00
tags:
- Unity
- URP
---

Migrating your project to Unity’s Universal Render Pipeline can automatically correct materials.

Existing assets imported from the package manager may appear pink:

![unity-pink-material](https://labs.jasonsturges.com/unity/convert-unity-project-to-urp/unity-pink-material.png)

To automatically convert and correct all materials, select _Edit_ &raquo; _Render Pipeline_ &raquo; _Universal Render Pipeline_ &raquo; _Upgrade Project Materials to UniversalRP Materials_

![edit-render-pipeline](https://labs.jasonsturges.com/unity/convert-unity-project-to-urp/edit-render-pipeline.png)

Select _Proceed_ in the _Material Upgrader_ dialog window.

![material-upgrader](https://labs.jasonsturges.com/unity/convert-unity-project-to-urp/material-upgrader.png)

Afterwards, your upgraded scene will appear as it did previously from the basic 3D project.

![unity-corrected-materials](https://labs.jasonsturges.com/unity/convert-unity-project-to-urp/unity-corrected-materials.png)
