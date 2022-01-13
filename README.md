# Icons 

https://heroicons.com/
sudo yarn add @heroicons/react

## Nextjs Image

import Image from "next/image"

```javascript 
 <Image
    src="https://links.papareact.com/f90"
    width={150}
    height={40}
    objectFit='contain'
    className="cursor-pointer"
/>
```

 * Agregar configuracion en next.config.js:
  
```javascript
module.exports = {
    images: {
        domains: ['links.papareact.com', 'fakestoreapi.com']
    }
}
```

## Tailwind CSS

* Instalar:

```json
      "@heroicons/react": "^1.0.5",
    "@reduxjs/toolkit": "1.5.0",
```

 * Agregar configuracion en tailwind.config.js:
  
```javascript
module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amazon_blue: {
          light: "#232F3E",
          DEFAULT: "#131921",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

* Agregar en el global.css 
  
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
/* inyectar estilos perzonalizados */
@layer components{
    ...
}
```

**Agregar extension de VS code**: Tailwind CSS IntelliSense

## CAROUSEL

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
react-responsive-carousel  ==> npm i react-responsive-carousel

# API para los productos

<https://fakestoreapi.com/>

## CURRENCY

yarn add react-currency-formatter
import Currency from "react-currency-formatter"
