npm:- node package Manager.
npx:- node package Executer

npx create-react-app 01basicreact

first understand Package.json file:-
{
  "name": "01basicreact", // project Name
  "version": "0.1.0",    // version
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0", // 3 testing libarary
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0", // react and react-dom mai libarary hai
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "web-vitels": "^2.1.4"  // project performance track karne me help karta hai 
  },
  "scripts": {
    "start": "react-scripts start",  // devlopment envoirment me project run karne ke liya
    "build": "react-scripts build", // poduction envoirment me project run karne ke liya
    "test": "react-scripts test", // testing envoirment me project run karne ke liya
    "eject": "react-scripts eject" // react se eject karta hai and koi aur libarary use karne lagte hai
  },
  "eslintConfig": {  // kabhi kesi code me error nahi hota fir bhi red line aa jata hai eski vajh se
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": { // kon se browser par chale ga
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}


Create-React-App:- bulki hota hai.(hum vite ki help se bhi react use kar sakte hai)
vite ke through react project banna sakte hai(vite ek bundaler hai)
npm create vite@latest--> enter
project name--> type project name
React
javaScript
npm install
npm run dev --> start project


React ka version hota hai:-
web ke liya:- ReactDom
mobile ke liya ReactNative

Notes:- React khud ka ek Dom banata hai aur use Dom ko compair karta hai real Dom of browser se agar Changes milta hai tab vo real Dom ko change karta hai.
        React single page Application hota kyuki pura website hi ek single Html par hota hai.

"react-scripts": "5.0.1":- es package se hi hum index.html aur index.js ko link kar pa rahe hai(without using Script tag)
  inspect element par show hoga but code me nahi.
vite me manually script tag dalna padta hai index.html aur index.js ko link karne ke liya.

UI updation ko hum log nahi control karte hai React control karta hai essi liya bina hooks ke hum log value update nahi kar pa rahe tha.

Note:-
createRoot method behind the seen DOM like Stucture create karta hai
Jaise browser ke pass DOM hota hai usi tarah createRoot ke pass bhi DOM hota hai  
React apne DOM aur Main Dom ko Compair karta hai aur ussa chiz ko update karta hai jo UI me update huaa hai(but Browser pura Dom ko re-print karta hai)
virtual Dom:- esma hi DOM ko compaire hota hai aur jo change hota usko hi update karta hai Main Dom me.

What is use Fiber in React?
 
