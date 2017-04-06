# Online Store

#### Angular project for Epicodus, 04.03.2017

#### By _**Patrick McGreevy**_


## Description

This website was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.
It manages a marketplace of albums.


## Setup
1. Set project root as working directory in CLI after cloning repo.
2. Run `$ npm install`.
3. Run `$ bower install`.
4. Setup Firebase (see below).
5. Run `$ ng build`.
6. Run `$ ng serve`.
7. Visit **`localhost:4200`**  in web browser.


## Firebase setup

1. Create project in Firebase console.
2. Copy credentials from Firebase into **`src/app/api-keys.ts`**.
3. Firebase database rules to `"true"` for both `".read"` and `".write"` in Firebase console.
4. Import **`sample-albums.json`** into Firebase.


## Project creation

1. `$ ng new online-store`
2. `$ cd online-store`
3. `$ bower init`
4. `bower install bootsrap --save`
5. `$ ng g class album.model`
6. `$ ng g c marketplace`
7. `$ ng g service album`
8. `$ ng g c about`
9. `$ ng g c album-detail`
10. `$ npm install angularfire2 firebase --save`
11. `$ ng g c admin`


## Technologies Used

* TypeScript
* Angular
* Npm
* Bower
* JSON
* Bootstrap
* Firebase

## Known Bugs

_No known bugs._


## Support and contact details

_Please contact patrick7490@icloud.com with questions or concerns._


### License

*MIT License*

Copyright (c) 2017 _**Patrick McGreevy**_
