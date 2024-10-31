# Proyecto-BicliComparo
Proyecto que se esta realizando para Desarrollo Movil

Para ejecutarlo descargar las dependencias

    npm install @react-navigation/native
    npm install react-native-screens react-native-safe-area-context
    npm install @react-navigation/stack
    npm install @react-navigation/drawer
    npm install @react-navigation/bottom-tabs
    npm install react-native-swiper
    npm install react-native-vector-icons
    npm install react-native-snap-carousel

Configuracion del axios

    import axios from "axios";
    import { Alert } from "react-native";

    const apiKey = 'SU Api Key de firebase';

    async function authenticate(mode, email, password) {

    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;

    try {
        const response = await axios.post(url, {
            email: email,
            password: password,
            returnSecureToken: true,
        })

        if (response.status === 200) {
            const token = response.data.idToken;
            return token;
        } else {
            Alert.alert("Login Failed", "Invalid email or password");
        }
    } catch (error) {
        Alert.alert("Login Error", "An error ocurred. Please try again");
        console.error(error);
    }
    }

    export async function login(email, password) {
        return authenticate('signInWithPassword', email, password);
    }

upload.js

    const axios = require('axios');
    const products = [
        {
            name: "BICICLETA DE MONTAÑA MARLIN 7 - 2022",
            category: "bicicleta",
            description: "Es ideal para ti si eres nuevo en el sendero pero tienes aspiraciones serias de pista unica y quieres una bicicleta de montaña digna de una carrera con mejoras en las partes que marquen una gran diferencia en el rendimiento, como una horquilla de suspensión de mayor calidad y una transmisión de amplio rango 1x.. La tecnología que incorpora un cuadro ligero con cable de cambio interno y enrutamiento del cable de la manguera del freno, una horquilla RockShox Judy de sensación más suave con bloqueo, frenos de disco hidráulicos Shimano y un tren de transmisión simple 1x que abandona el desviador delantero para un menor desorden y una operación más fácil. No se preocupe, con el cassette de rango amplio 11-46, todavía obtiene todos los engranajes que necesita para subir y subir pendientes.",
            previousPrice: 2190000,
            price: 2599900,
            store: "bikehouse",
        },
        {
            name: "Specialized Allez",
            category: "bicicleta",
            description: "Cuatro décadas después de lanzar la primera Specialized Allez a la carretera, traemos su mejor versión hasta ahora. La más ligera de su clase*, ofrece más confianza, versatilidad y rendimiento que nunca, a más ciclistas que nunca. Tanto si buscas un aluminio de primera calidad, como si quieres una bicicleta para los fines de semana y los desplazamientos rápidos, o si acabas de empezar a montar por carretera, el rendimiento en carretera empieza con la Allez. La más ligera de su clase con un aluminio E5 de primera calidad con doble conificado, el cuadro de la Allez pesa tan solo 1.375** gramos para ofrecer una sensación rápida y ágil en carretera. Además, la horquilla carbono reduce aún más el peso (no hay tubo de dirección de aluminio oculto aquí) al tiempo que ayuda a suavizar la conducción. Y con unas opciones de construcción modernas y bien pensadas, no es de extrañar que la Allez sea también la más ligera de su clase.",
            previousPrice: 3990000,
            price: 3150000,
            store: "specialized",
        },
        {
            name: "Casco Bell Z20 GHOST MIPS",
            category: "accesorio",
            description: "Fabricado con una capa de pintura reflectante y duradera bajo la capa de pintura transparente. El Z20 Ghost brilla con intensidad cuando le golpea luz directa. El Z20 es el resultado de años de análisis sobre cómo los cascos se ajustan a la cabeza, optimizando la aerodinámica, revisando los datos de las pruebas de laboratorio, recopilando comentarios de usuarios y aplicando nuestro conocimiento acumulativo de protección ante impactos. Nuestro exclusivo sistema de gestión de energía por medio de capas progresivas, utiliza dos capas separadas de espuma EPS con diferentes densidades, con el objetivo de proteger al usuario ante diferentes velocidades de impacto. Adicionalmente cuenta con la tecnología MIPS para protección ante impactos multi-direccionales. Lo anterior permite mejorar el rendimiento ante el impacto y al mismo tiempo, ofrece un diseño general más compacto, completo, y una ventilación maximizada.",
            previousPrice: 0,
            price: 889900,
            store: "bell",
        },
        {
            name: "Luces LED Blinder Road 400",
            category: "accesorio",
            description: "Combinando un diseño liviano, ángulos de haz cuidadosamente considerados, una potente salida de luz y un sistema de montaje único, la luz delantera para bicicleta Blinder Road 400 es una de las luces de carretera más potentes y perfectas de Knog.",
            previousPrice: 467863,
            price: 350885,
            store: "knog",
        },
        {
            name: "Pearl Izumi Men's Attack Bib Shorts",
            category: "prenda",
            description: "Descubra la comodidad y el soporte que ofrece nuestro culotte con tirantes Attack, un excelente punto de partida para cualquier ciclista dedicado. Fabricado con un tejido de punto de poliéster suave y bandas elásticas de perfil bajo en las piernas, este culotte con tirantes ofrece un equilibrio óptimo entre movilidad y compresión. La badana avanzada ELITE Levitate ofrece una amortiguación de doble densidad que proporciona un soporte elevado para la estructura ósea a la vez que mantiene el flujo de aire y la circulación. Consigue un par para tu próximo recorrido de larga distancia o una salida rápida después del trabajo.",
            previousPrice: 0,
            price: 520100,
            store: "pearl izumi",
        },
    ]
    
    const uploadDataToFirebase = async() => {
        try {
            const response = await axios.put(
                'su firebase',
                products
            );
            console.log('Data subida de manera exitosa: ', response.data);
        } catch (error) {
            console.error('Error subiendo la data', error);
        }
    }
    
    uploadDataToFirebase();

uploadImages.js

    const admin = require("firebase-admin");
    const serviceAccount = require("./serviceAccountKey.json");
    
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      storageBucket: "el bucket de storage",
      databaseURL: "el link del realtime database"
    });
    
    const bucket = admin.storage().bucket();
    const db = admin.database();
    
    async function getFirstAvailableUrl(productFolder, fileName, formats) {
      for (const format of formats) {
        const filePath = `${productFolder}/${fileName}.${format}`;
        const file = bucket.file(filePath);
        const [exists] = await file.exists();
    
        if (exists) {
          try {
            const [url] = await file.getSignedUrl({
              action: "read",
              expires: "03-01-2500"
            });
            return url;  
          } catch (error) {
            console.warn(`Error obteniendo URL para ${filePath}: ${error.message}`);
          }
        } else {
          console.warn(`Archivo no encontrado para ${filePath}`);
        }
      }
      return null;  
    }
    
    
    async function getPublicUrl(filePath) {
      const file = bucket.file(filePath);
      try {
        const [url] = await file.getSignedUrl({
          action: "read",
          expires: "03-01-2500"
        });
        return url;
      } catch (error) {
        console.warn(`Error obteniendo URL para ${filePath}: ${error.message}`);
        return null;
      }
    }
    
    async function saveProductInfo(product) {
      const { name, category, description, previousPrice, price, store } = product;
    
      const normalizedName = name.toLowerCase().replace(/[\s]/g, '');
      const productFolder = `${normalizedName}`;  // Usar nombre normalizado para la carpeta
    
      let mainImageUrl = await getFirstAvailableUrl(productFolder, normalizedName, ['webp', 'jpg', 'png']);
    
      if (!mainImageUrl) {
        console.warn(`No se encontró imagen principal para ${name}`);
        return; 
      }
    
      const galleryFolder = `${productFolder}/`;  // Especifica la carpeta de galería
      const [files] = await bucket.getFiles({ prefix: galleryFolder });
    
      const galleryUrls = await Promise.all(
        files
          .filter(file => file.name.endsWith('.webp') || file.name.endsWith('.jpg') || file.name.endsWith('.png'))
          .map(file => getPublicUrl(file.name))
      );  
    
      const storeLogoUrl = await getFirstAvailableUrl('StoreLogo', store, ['png', 'webp', 'jpg']);
    
      const productRef = db.ref("products").push();
      await productRef.set({
        name,
        category,
        description,
        previousPrice,
        price,
        store,
        storeLogo: storeLogoUrl,
        mainImage: mainImageUrl,
        gallery: galleryUrls
      });
    
      console.log(`Datos del producto '${name}' subidos con éxito.`);
    }
    
      
    const products = [
        {
            name: "BICICLETA DE MONTAÑA MARLIN 7 - 2022",
            category: "bicicleta",
            description: "Es ideal para ti si eres nuevo en el sendero pero tienes aspiraciones serias de pista unica y quieres una bicicleta de montaña digna de una carrera con mejoras en las partes que marquen una gran diferencia en el rendimiento, como una horquilla de suspensión de mayor calidad y una transmisión de amplio rango 1x.. La tecnología que incorpora un cuadro ligero con cable de cambio interno y enrutamiento del cable de la manguera del freno, una horquilla RockShox Judy de sensación más suave con bloqueo, frenos de disco hidráulicos Shimano y un tren de transmisión simple 1x que abandona el desviador delantero para un menor desorden y una operación más fácil. No se preocupe, con el cassette de rango amplio 11-46, todavía obtiene todos los engranajes que necesita para subir y subir pendientes.",
            previousPrice: 2190000,
            price: 2599900,
            store: "bikehouse",
        },
        {
          name: "Specialized Allez",
          category: "bicicleta",
          description: "Cuatro décadas después de lanzar la primera Specialized Allez a la carretera, traemos su mejor versión hasta ahora. La más ligera de su clase*, ofrece más confianza, versatilidad y rendimiento que nunca, a más ciclistas que nunca. Tanto si buscas un aluminio de primera calidad, como si quieres una bicicleta para los fines de semana y los desplazamientos rápidos, o si acabas de empezar a montar por carretera, el rendimiento en carretera empieza con la Allez. La más ligera de su clase con un aluminio E5 de primera calidad con doble conificado, el cuadro de la Allez pesa tan solo 1.375** gramos para ofrecer una sensación rápida y ágil en carretera. Además, la horquilla carbono reduce aún más el peso (no hay tubo de dirección de aluminio oculto aquí) al tiempo que ayuda a suavizar la conducción. Y con unas opciones de construcción modernas y bien pensadas, no es de extrañar que la Allez sea también la más ligera de su clase.",
          previousPrice: 3990000,
          price: 3150000,
          store: "specialized" 
        },
        {
          name: "Casco Bell Z20 GHOST MIPS",
          category: "accesorio",
          description: "Fabricado con una capa de pintura reflectante y duradera bajo la capa de pintura transparente. El Z20 Ghost brilla con intensidad cuando le golpea luz directa. El Z20 es el resultado de años de análisis sobre cómo los cascos se ajustan a la cabeza, optimizando la aerodinámica, revisando los datos de las pruebas de laboratorio, recopilando comentarios de usuarios y aplicando nuestro conocimiento acumulativo de protección ante impactos. Nuestro exclusivo sistema de gestión de energía por medio de capas progresivas, utiliza dos capas separadas de espuma EPS con diferentes densidades, con el objetivo de proteger al usuario ante diferentes velocidades de impacto. Adicionalmente cuenta con la tecnología MIPS para protección ante impactos multi-direccionales. Lo anterior permite mejorar el rendimiento ante el impacto y al mismo tiempo, ofrece un diseño general más compacto, completo, y una ventilación maximizada.",
          previousPrice: 0, 
          price: 889900,
          store: "bell"
        },
        {
          name: "Luces LED Blinder Road 400",
          category: "accesorio",
          description: "Combinando un diseño liviano, ángulos de haz cuidadosamente considerados, una potente salida de luz y un sistema de montaje único, la luz delantera para bicicleta Blinder Road 400 es una de las luces de carretera más potentes y perfectas de Knog.",
          previousPrice: 467863,
          price: 350885,
          store: "knog"
        },
        {
          name: "Pearl Izumi Men's Attack Bib Shorts",
          category: "prenda",
          description: "Descubra la comodidad y el soporte que ofrece nuestro culotte con tirantes Attack, un excelente punto de partida para cualquier ciclista dedicado. Fabricado con un tejido de punto de poliéster suave y bandas elásticas de perfil bajo en las piernas, este culotte con tirantes ofrece un equilibrio óptimo entre movilidad y compresión. La badana avanzada ELITE Levitate ofrece una amortiguación de doble densidad que proporciona un soporte elevado para la estructura ósea a la vez que mantiene el flujo de aire y la circulación. Consigue un par para tu próximo recorrido de larga distancia o una salida rápida después del trabajo.",
          previousPrice: 0,
          price: 520100,
          store: "pearlizumi"
        }
      ];
    
      async function uploadProducts(products) {
        for (const product of products) {
          await saveProductInfo(product);
        }
        console.log("Carga completa");
      }
      
      async function uploadProducts(products) {
        for (const product of products) {
          await saveProductInfo(product);
        }
        console.log("Carga completa");
      }
      
      uploadProducts(products).catch(console.error);
para el anterior archivo de upload images, debes ir a la configuracion de tu proyecto firebase, ir a servicios de tu cuenta y solicitar una nueva llave privada 
y descargarla, mas o menos se ve asi, y lo deben llamar sreviceAccountKey.json

    {
        "type": "service_account",
        "project_id": "todo suyo",
        "private_key_id": "todo suyo",
        "private_key": "todo suyo",
        "client_email": "todo suyo",
        "client_id": "todo suyo",
        "auth_uri": "todo suyo",
        "token_uri": "todo suyo",
        "auth_provider_x509_cert_url": "todo suyo",
        "client_x509_cert_url": "todo suyo",
        "universe_domain": "todo suyo"
      }

y por ultimo configurar su db.js para traer los datos

    import axios from 'axios';

    const BACKEND_URL = 'https://biclicomparo-2bcce-default-rtdb.firebaseio.com/';
    
    const getProducts = async() => {
        const response= await axios.get(`${BACKEND_URL}` + 'products.json');
    
        const products = [];
    
        for(const key in response.data) {
            const product = {
                id: key,
                category: response.data[key].category,
                description: response.data[key].description,
                gallery: response.data[key].gallery,
                mainImage: response.data[key].mainImage,
                name: response.data[key].name,
                previousPrice: response.data[key].previousPrice,
                price: response.data[key].price,
                storeLogo: response.data[key].storeLogo,
            }
            products.push(product);
        }
        console.log('Fetched products....');
        return products;
    }
    
    const getProductById = async (id) => {
            const response = await axios.get(`${BACKEND_URL}` + `/products/${id}.json`);
        
            const product = {
                id: id,
                category: response.data.category,
                description: response.data.description,
                gallery: response.data.gallery,
                mainImage: response.data.mainImage,
                name: response.data.name,
                previousPrice: response.data.previousPrice,
                price: response.data.price,
                storeLogo: response.data.storeLogo,
            };
        
            return product;
        }
        
        export { getProducts, getProductById };
