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


## Configurancion de Firebase y Google cloud console(para autenticar con google)

* crear nuevo proyecto en firebase 
* Seleccionar tuerca(configuracion) y seleccionar "Configuracion del proyecto"
* En la seccion de "Tus Apps" seleccionar el icono '</>'
* Registrar el nombre de la app y seleccionar 'registrar' y luego 'Ir a la consola'
* En la seccion de 'Aps' en 'Configuración del SDK' seleccionar el radio botton 'Configuracion' y copiar el obj de conf de firebase en un archivo en la del proyecto con el nombre 'firebase.js'
* Ir al menu lateral izq y seleccionar "authentication" y luego comenzar
* En 'Proveedores adicionales' seleccionar 'Google' y luego habilitar el proveedor en el switch, agregar email y seleccionar guardar.
* seleccionar de nuevo el proveedor activado(Google) y en 'configuraciondel SDK web' hacer hover en el '?' y seleccionar 'Consola de API de Google'
* seleccionar el ID generado por firebase en la opcion 'ID de clientes OAuth 2.0'(de aqui tomar 'ID de cliente' y 'Secreto del cliente' los cuales  se deben agregar como variables de entorno en el proyecto)
* En 'Orígenes autorizados de JavaScript' agregar 'http://localhost:3000'
* En 'URI de redireccionamiento autorizados' agregar 'http://localhost:3000/api/auth/callback/google'
  

## Configuracion de Redux con Redux toolkit

* Instalar lo siguiente:

```npm 
yarn add @reduxjs/toolkit
yarn add react-redux
```

* Crear una carpeta app y adentro un archivo store.js

```javascript
import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});

```

* Crear una carpeta llamada 'slices' donde iran todos los estados reducers y acciones, ejemplo:
  
```javascript
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {},
    removeFromBasket: (state, action) => {},
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;

```

## Configurar variables de entorno en vercel

* Seleccionar el proyecto en vercel y entrar en settings 
* Seleccionar "environment variables"
* Anadir variables de .env
* Ir a deployment, seleccionar los 3 puntos y seleccionar redeploy

## Cuando se despliega en Produccion se debn seguir los siguientes pasos

* Add SECRET="MY_STRONG_SECRET" to your .env
* Replace MY_STRONG_SECRET with a strong secret generate by a tool like https://generate-secret.vercel.app/32
* Add secret: process.env.SECRET, at the same level as the providers array to pages/api/auth/[...nextauth].js

## Agregando pagos con stripe

* Agregar las dependencias.

```npm 
npm install --save stripe @stripe/stripe-js next
```

* usuario de strapi: lexferramirez@gmail.com pw:Lfrp58942022*


## Instalcion de strapi CLI 

* descargar zip de stripe cli y descomprimirlo
* abrir una terminal en la carpeta descomprimida y ejecutar:
  
```cmd
sudo mv stripe /usr/local/bin
```

* hacer login con: ./stripe login
* ejecutar por terminal en la ruta del proyecto: stripe listen --forward-to localhost:3000/api/webhook
* copiar el secret que devuelve el comando anterior(el secret cambia cada vez que que se cierre el terminal) y agregarlo como variables de entorno STRIPE_SIGNING_SECRET
* crear el webhook ==> **webhook:** son eventos que desencadenan acciones.
  
## Pasos para generar permissions.js de firebase 

* ir a la consola de firebase del proyecto 
* selieccionar en la tuerca la opcion "configuracion del proyecto" 
* seleccionar el tab "cuentas de servicios" 
* presionar "Generar nueva clave privada"  
* y el archivo que se genera y descarga copiarlo en la raiz del proyecto


## Pasos para conectar con firestore  

* entrar a la consola de firebase y seleccionar el proyecto 
* seleccionar "Firestore Database" 
* seleccionar "crear base de datos" 
* seleccionar "comenzar en modo de prueba" 
* seleccionar "siguiente" y "habilitar"