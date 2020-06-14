---
layout: post
title: Using Rider with Unity
date: 2020-06-13 18:00:00
tags:
- Unity
- 3D
- Rider
---


On macOS, JetBrains Rider introduces deep integration with Unity.

First, assure [JetBrains Rider](https://www.jetbrains.com/rider/) is installed - a 30-day free trial is available for evaluation.

Within Unity, from the menu select Unity &raquo; Preferences:

![unity-preferences](https://labs.jasonsturges.com/unity/using-rider-with-unity/unity-preferences.png)

In the Preferences dialog, under the *External Tools* group, change the *Exterrnal Script Editor* to Rider.

Then, from the Unity Project window, right-click and select *Open C# Project*

![open-csharp-project](https://labs.jasonsturges.com/unity/using-rider-with-unity/open-csharp-project.png)

Rider and Unity will now be synchronized with project editing.

![rider-unity-actions](https://labs.jasonsturges.com/unity/using-rider-with-unity/rider-unity-actions.png)

Alternatively, opening the solution directly in Rider enables *Attach to Unity Editor*

![attach-to-unity-editor](https://labs.jasonsturges.com/unity/using-rider-with-unity/attach-to-unity-editor.png)

If you see an alert stating *Unity features unavailable - Make sure Rider package is installed in Unity's Package Manager*, the Rider package in the project may be outdated.  This will likely occur when opening older projects, or potentially after updates.

![unity-features-unavailable](https://labs.jasonsturges.com/unity/using-rider-with-unity/unity-features-unavailable.png)

In Unity, go to *Window* &raquo; *Package Manager* and search for *Rider* to install the Rider plugin.

![unity-package-manager](https://labs.jasonsturges.com/unity/using-rider-with-unity/unity-package-manager.png)
