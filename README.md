## OpenClassrooms - Projet 12 - SportSee:

# SportSee - Novembre 2022

Code source du projet 12 d'OpenClassrooms s'intitulant : "Développez un tableau de bord d'analytics avec React" du parcours Développeur Front-end.

---

# Installation (English Version)

Prerequisites : 
- NodeJS (version 12.8)
- npm
---
Installation (back-end)

Create a back-end folder and clone the SportSee back-end repository into this folder :
```
$ git clone https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git
```
After cloning the repository, do : 

```
$ cd {nameOfTheFolder}
```
Inside this back-end repository, install dependencies : 
```
$ npm install
```
To launch the back, do the following command, still inside the folder :

```
$ npm run dev
```
---
Installation (front-end)

Clone the repository of SportSee : 


```
$ git clone https://github.com/iRazzh/SportSee.git
```
After cloning the repository, do :

```
$ cd frontend
```
Inside this frontend folder, install dependencies : 

```
$ npm install
```
To launch the front, do the following command, still inside the folder :

```
npm start
```



# N.B

The SportSee API contains data for only 2 users (12 & 18). You will be able to choose on a small homepage either one user or another.

A boolean named 'mockedData' is defined in "MainContent.jsx" at line 21. If set to "true", the data will be mocked data, if set to "false", the data will be api data