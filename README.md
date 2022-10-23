

Hackathon BBVA 2022
--------------------------------------------------------------------------------------------------
Equipo: Falcons Aesthetics 

--------------------------------------------------------------------------------------------------
Reto: Diversidad e inclusión


--------------------------------------------------------------------------------------------------



Nombre: Karen Díaz

Discord ID: Krn_DiMar#3272

Github ID: 

email de contacto: karen.dimart@gmail.com




Nombre: Daniel Montes

Discord ID: SuperDaniel#3151

Github ID: 

email de contacto: 




Nombre: Aarón Israel Torrecilla Jiménez

Discord ID: Aaron Torrecilla#9472

Github ID: TowerChair

email de contacto: aaronstyle63@gmail.com





Nombre: Pablo Gomez

Discord ID: fortisUno#5884

Github ID: 

email de contacto: 




Nombre: Carlos Aráoz Alvarado

Discord ID: Carlos Aráoz#5582

Github ID: 86623402

email de contacto: caa.ppbt90@gmail.com





--------------------------------------------------------------------------------------------------
Descripción del reto:

Nuestra solución tiene los siguientes elementos:

1) Un video 
2) Los pasos para instalar la extensión 
3) Este repositorio de Github 


El video contiene una descripción de la problemática que que buscamos resolver y de que manera la abordamos. 


El diagrama de nuestro proyecto es el siguiente: https://drive.google.com/file/d/1usqS5vX2bNX9Dr-NTk8ytYwcO6-j4HQJ/view?usp=sharing.


Nuestra solución consta de una arquitectura de microservicios y utilizando el modelo vista controlador. Se utiliza un formulario de registro para crear perfiles de usuario con características que puedan servir al modelo de IA para detectar patrones de sesgos de género. Ya teniendo el perfil de usuario, por medio de una extensión para google chrome se obtiene información de las páginas que visita el usuario usando la técnica de scrapper para que luego la información recolectada sea procesada por un middleware y se almacene en una base de datos. Por otro lado se tiene un servicio corriendo a todo momento para ir analizando la información recolectada a través del modelo de IA generado en TCS AI Studio. Si el modelo encuentra un patrón, el middleware notifica al correo de contacto del dominio del sitio donde ocurrió el sesgo de género para informar al proveedor e inyeca en el navegador del cliente una alerta en el sitio web donde se encontró el sesgo.

Las tecnologías usadas para el desarrollo de este proyecto son: Nodejs, JavaScript, Html, Css, ExpressJs, TCS AI Studio, Heroku, mongodb.



--------------------------------------------------------------------------------------------------
Procedimiento para instalar la extensión:
Hackathon BBVA 1.0
Reto Diversidad e Inclusión

Paso 1: Descargar el repositorio de Github "tcs_sg".

Paso 2: Descomprimir la carpeta "tcs_sg-main".

Paso 3: Ir a las extensiones de google chrome de su ordenador.

Paso 4: Ir a gestionar extensiones.

Paso 5: Activar el modo desarrollador.

Paso 6: Cargar la carpeta descomprimida "tcs_sg-main".

Paso 7: Fijar la extensión "Hackathon BBVA 1.0".

Paso 8: Acceder a su cuenta de LinkedIn.

Paso 9: Ser parte del proceso de identificación de sesgos de género.




--------------------------------------------------------------------------------------------------

TCS AI Studio:

Implementamos diferentes modelos en esta plataforma utilizando bases de datos que contuvieran información del tipo de trabajo y el género de la persona como el encontrado en "IBM HR Analytics Employee Attrition & Performance" (https://www.kaggle.com/datasets/pavansubhasht/ibm-hr-analytics-attrition-dataset), utilizando un aprendizaje supervisado pudimos encontrar algunas relaciones entre los datos, así como su correlación. La manera de presentar los datos en esta sección de la plataforma, facilita el procesamiento de datos. Además, la matriz de correlación despliega de manera visual la correlación entre los datos de nuestra base de datos. De aquí podemos notar que para realizar mejores estudios de sesgos de género en plataformas orientadas al uso empresarial, a los negocios y al empleo, como lo es  LinkedIn, se necesitan tener primero mejores bases de datos de libre acceso que contengan parámetros importantes para el modelo que consideramos, como son: género, estudios (nivel y carrera), trabajo (experiencia y tipo de trabajo), edad y ubicación, ya que estos datos nos permitirían entrenar un modelo de manera eficiente. Además de que para AI Studio las bases de datos grandes (del orden de GB) no permiten proceder de manera corrrecta con los modelos.

A la hora de crear un modelo de los recipientes hay varios algoritmos que pueden ser entrenados de manera automática, lo que permite que una persona que no tenga una formación en análisis de datos y ML tenga un fácil acceso a estos recursos, para nuestro modelo "ibm job gender_CatboostClassifier_STACKER_l0" con los datos de "IBM HR Analytics Employee Attrition & Performance" obtamos por un CatBoostClassifier y obtuvimos una precisión del 62%, la cuál con una mejor base de datos debe mejorar.

Credenciales para acceder: 
Username: FalconsAesthetics
Password: Riuhf@#%132
El enlace para entrar es https://d36olmyah48esj.cloudfront.net/#/login





--------------------------------------------------------------------------------------------------
