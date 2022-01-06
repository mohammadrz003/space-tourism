
# Frontend Mentor - Space tourism website solution

  

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

  

## Table of contents

  

-  [Overview](#overview)

-  [The challenge](#the-challenge)

-  [Screenshot](#screenshot)

-  [Links](#links)

-  [My process](#my-process)

-  [Built with](#built-with)

-  [What I learned](#what-i-learned)

-  [Continued development](#continued-development)

-  [Useful resources](#useful-resources)

-  [Author](#author)

  

**Note: Delete this note and update the table of contents based on what sections you keep.**

  

## Overview

  

### The challenge

  

Users should be able to:

  

- View the optimal layout for each of the website's pages depending on their device's screen size

- See hover states for all interactive elements on the page

- View each page and be able to toggle between the tabs to see new information

  

### Screenshot

  

Home page

  

![Home page](https://drive.google.com/uc?export=view&id=1jqlyQz0UKdirF029XQ03n4tlkVYLTiCW)

  

Destination page

  

![Home page](https://drive.google.com/uc?export=view&id=1jlDD3hy-M3gWKiJ66Q9aPlUnsEKqiPxR)

Crew page

  

![Home page](https://drive.google.com/uc?export=view&id=1fnWUMY4Hk5ymTyJ_VCYjkg2mA_3coBTm)

Technology page

  

![Home page](https://drive.google.com/uc?export=view&id=1flNIDmbpyK-jZhXvGOkY3nSLwVGS8W22)

  
  

### Links

  

- Solution URL: [github.com/mohammadrezaii/space-tourism](https://github.com/mohammadrezaii/space-tourism)

- Live Site URL: [mmd-space-tourism.netlify.app](https://mmd-space-tourism.netlify.app/)

  

## My process

  

### Built with

  

-  [React](https://reactjs.org/) - JS library

-  [React Router](https://reactrouter.com/) - JS library

- Semantic HTML5 markup

- CSS module custom properties

- Flexbox

- CSS Grid

- Mobile-first workflow

  

### What I learned

  

I learned how to change the background image based on the route we are on

 1. First we need to get the route address where we are
```js
const  path  =  useLocation().pathname;
const  location  =  path.split("/")[1];
```
 2. Then we give the element the name of the root as a class

```html
<div  className={`backgroundWrapper ${location}`}>
</div>
```

 3. Finally, we use the root name as a class in css and apply our
    desired style

```css
.backgroundWrapper.destination {
	background-image: url("*image url*");
}
```

  

### Continued development

I want to use scss in future projects to make development faster and easier and I plan to do projects that are much more complex

### Useful resources

  

-  [React-tabs](https://www.example.com) - This library helped me a lot to create tabs

## Author

  

- Website - [mmdrz.xyz](https://mmdrz.xyz)

- Twitter - [@mohammadrz003](https://twitter.com/mohammadrz003)

- Telegram - [@mmdrz003](https://t.me/mmdrz003)