# PiHoleUpdater documentation

## What is this project about?

This project tries to develop a simple solution to keep you PiHole systems updated. It is intended to create a web interface and/or API in order to view and modify different lists of domains organized by categories. The goal is to be able to filter the DNS requests options of every PiHole connected to the server in a dynamic and user-intuitive way.

## Why are we developing this?

PiHole is a really nice tool to improve your internet speed and your security on the internet, preventing some sites to recover personal data or loading annoying ads. When you have this system installed along multiple places arround the world it becomes tedious to manually update each single one of them every now and then. For this reason, just with executing a simple script you can update all the PiHoles periodically and automatically, and also edit any blacklist for all of them simultaneously.

## Which steps are we going to follow?

1. First thing we have to do is to configure the developer tools to dynamize the programming process and make it easier to test and debug. For this purpose we will implement a "cold reloading", which is just an utility to re-launch the program automatically every time we do a change in a relevant file. Right now this might not be an essential step because we are not using a server that continuously receives requests but a simple application with a couple functions. Anyways, it is a good functionality that will be really useful in the future. It is mentioned in [issue #13](https://github.com/LeandroVP/PiHoleUpdater/issues/13). Other useful thing we can do (almost essential I would say) is to implement scripts to clean the repository or start the application with certatin parameters among other cool things. This is as simple as install some utilities and write some lines inside your package.json. You can see the progress of this in [issue #14](https://github.com/LeandroVP/PiHoleUpdater/issues/14).

2. Once we have finished the first step, we can write some code, just some basic and simple lines to get the skeleton of our app. The first thing that we will implement will be a couple functions that initialize and return some list with any ammount of links in them. This is something we will be required to do against a database in the future in order to get the lists and is something we can test in the next step.

3. After this, we can start developing our tests systems. We will use [mocha](https://mochajs.org/) as our testing framework and [chai](https://www.chaijs.com/) as our assertion library. This combination is one of the most common used for testing node.js and typescript, and therefore they are very well documentated and there are plenty of examples available.

4. When the tests are ready, we will be able to continue developing our app and eventually, we will deploy it using a platform to be determined.

# Tools used in this project

In this project we are currently using three different configuration files: 

- [package.json](../package.json): Contains the versions of each package used by the app, as well as some metadata and simple scripts to build, run or test our project.

- [tsconfig.json](../tsconfig.json): Compiler options required to transform the Typescript code into JavaScript code.

- [nodemon.json](../nodemon.json): Directories and files that would trigger a recompilation if modified.

# Working tests

You can check our [test folder](../test). So far, we have tested the link[#24](https://github.com/LeandroVP/PiHoleUpdater/issues/24) and the list [#25](https://github.com/LeandroVP/PiHoleUpdater/issues/25).


