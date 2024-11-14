
const eventos = [
    {
        ponente: ["Carlos Camacho ","&"," CICC"],
        actividad: "Registro y Bienvenida al Evento",
        detalles: "Bienvenida al Evento Barcamp RD 2024",
        etiquetas: ["Barcamp RD", "12 años","CICC"],
        horario: "8:00 AM",
        lugar: "Teatro",
    },
    {
        ponente: "Darian Vargas",
        actividad: "Innovación y Futuro: Retos Globales, IA, y el Poder de la Creatividad",
        detalles: "Charla Magistral",
        etiquetas: ["IA","Innovation","Global Challenges","Creativity","Future Trends","Technology"],
        horario: "9:30 AM",
        lugar: "Teatro",
    },
    {
        ponente: "Eudris Cabrera",
        actividad: "Mock y Test de APIs RESTful de forma sencilla con Microcks",
        detalles: "En esta presentación vamos a explorar el ciclo de desarrollo para crear un API REST abarcando diferentes fases del desarrollo de API (diseño, mock y testing) hasta llegar a producción.",
        etiquetas: ["Java","API","Microcks","testing","diseño","QA"],
        horario: "10:30 AM",
        lugar: "Sala #1, Padre Arroyo",
    },
    {
        ponente: "Luis Contreras",
        actividad: "Transformación Empresarial: Más Allá de la Gestión Convencional",
        detalles: "En un mundo donde la adaptación y la innovación son clave, nuestro enfoque de ‘Transformación Empresarial: Más Allá de la Gestión Convencional’ es esencial para cualquier negocio que busque no solo sobrevivir, sino prosperar. Contar con las soluciones adecuadas.",
        etiquetas: ["odoo", "erp", "odooerp", "negocios", "transformacion", "datos"],
        horario: "10:30 AM",
        lugar: "Sala #2, Padre Arroyo",
    },
    {
        ponente: "Felix Valerio",
        actividad: "The Upgrade Journey: Real-World Stories of Symfony Version Migrations ",
        detalles: "Únase a nosotros en “El viaje de actualización: Historias del mundo real de migraciones de versiones de Symfony” para escuchar a los desarrolladores compartir sus experiencias al actualizar aplicaciones Symfony. Aprenda consejos prácticos, supere desafíos comunes y obtenga información para que su proceso de migración sea más fluido y eficiente.",
        etiquetas: ["Symfony", "Laravel", "Frameworks", "Docker", "Docker composer", "Business Logic","Ingeniería de Software"],
        horario: "10:30 AM",
        lugar: "Sala #3, Padre Arroyo",
    },
    {
        ponente: "Jonathan Morales",
        actividad: "Del Código a la Conexión Emocional: El Rol de la Experiencia (XM) en Proyectos Tecnológicos",
        detalles: "Descubre cómo transformar cada interacción en una experiencia inolvidable. Explora el poder de XM para conectar emocionalmente con usuarios, clientes, socios integrando servicios digitales y tecnologías emergentes para optimizar la experiencia.",
        etiquetas: ["ITSM", "Digital IT Strategy","IT high velocity","Experience Management (XM)","User Engagement","Emerging Technologies"],
        horario: "11:30 AM",
        lugar: "Sala #1, Padre Arroyo",
    },
    {
        ponente: "Karla Aquino",
        actividad: "Beyond Code: Integrated Security with DevSecOps and SSDLC",
        detalles: "¡Descubre cómo DevSecOps y el SSDLC pueden transformar la forma en que desarrollas software! Aprende a integrar la seguridad en cada fase del ciclo de vida, sin sacrificar agilidad ni velocidad. Protege tu código, automatiza procesos y garantiza un desarrollo seguro desde el primer día.",
        etiquetas: ["devops", "cybersecurity", "Secure code", "JavaScript", "DevSecOps","SSDL"],
        horario: "11:30 AM",
        lugar: "Sala #2, Padre Arroyo",
    },
    {
        ponente: "Ruth Castillo",
        actividad: "Más allá de Scrum: Ágil Disciplinado",
        detalles: "Es un taller diseñado para profesionales que buscan ampliar su comprensión sobre cómo gestionar proyectos de manera más flexible y adaptable en entornos complejos, ofreciendo un enfoque disciplinado que abarca una gama más amplia de prácticas y escenarios.",
        etiquetas: ["Scrum","Agile","Disciplined Agile","Project Management","Flexibility","Complex Environments"],
        horario: "11:30 AM",
        lugar: "Sala #3, Padre Arroyo",
    },
    {
        ponente: "Karvin Jiménez",
        actividad: "RETRO GAME DEVELOPMENT",
        detalles: "Alguna vez cuando estuviste jugando videojuegos te preguntaste “¿Cómo podría hacer un videojuego para esta consola?” Si alguna vez tuviste ese deseo, pues esta es tu charla. Aquí aprenderás cómo desarrollar videojuegos para varias consolas retro.",
        etiquetas: ["retro", "videogames", "development", "c", "c++", "programming"],
        horario: "11:30 AM",
        lugar: "Sala #4, Padre Arroyo",
    },
    {
        ponente: "",
        actividad: "ALMUERZO",
        detalles: "Un almuerzo para compartir ideas y experiencias entre los asistentes del Barcamp",
        etiquetas: ["almuerzo","Barcamp"],
        horario: "12:30 PM",
        lugar: "Centro de Estudiantes",
    },
    {
        ponente: "Juan Polanco",
        actividad: "Desplegando Deep Learning a producción con ONNX",
        detalles: "Tienes modelos de Deep Learning que quisieras poder desplegar a producción independientemente del framework o librería donde los desarrollaste ? Pues esta es la charla donde debes acudir.",
        etiquetas: ["ai", "artificial-intelligence", "machine-learning", "deep-learning", "onnx", "neural-networks"],
        horario: "2:00 PM",
        lugar: "Sala #1, Padre Arroyo",
    },
    {
        ponente: "Freddy Peña",
        actividad: "Full Stack 100% in Java? Vaadin Flow to the Rescue",
        detalles: "Veremos cómo Vaadin Flow permite la creación de apps web completas en 100% Java. Destacaremos la capacidad para manejar tanto el frontend como el backend sin requerir tecnologías adicionales como HTML, CSS o JavaScript. Esto simplifica significativamente el desarrollo y la curva de aprendizaje.",
        etiquetas: ["Java","Vaadin","VaadinFlow","SpringBoot","FullStack","WebDevelopment"],
        horario: "2:00 PM",
        lugar: "Sala #2, Padre Arroyo",
    },
    {
        ponente: "Ever Miguel Curiel",
        actividad: "AI testing: La revolución de las pruebas de software y cómo los testers pueden liderar el cambio",
        detalles: "Descubra cómo la inteligencia artificial transforma las pruebas de software y crea nuevos desafíos para los Testers. Abordaremos los problemas con modelos de IA, interpretación de resultados y seguridad de datos. Aprenderás el cambio de paradigma en las pruebas de software basadas en IA.",
        etiquetas: ["AI", "Testing AI"," Software Testing", "SQA"," Inteligencia artificial", "Ingenieria de calidad"],
        horario: "2:00 PM",
        lugar: "Sala #3, Padre Arroyo",
    },

    // NO ASISTIRA
    // {
    //     ponente: "Yhorby Matias",
    //     actividad: "Crea Entornos de Prueba Automáticos con Azure y Argo CD",
    //     detalles: "¿Quieres probar tus desarrollos en entornos automáticos sin complicaciones? Con Azure DevOps y Argo CD, te enseño cómo crear entornos de prueba para cada cambio de código, integrando GitOps. Valida tus funcionalidades antes de producción, agilizando tus despliegues fácilmente.",
    //     etiquetas: ["Azure", "DevOps", "Kubernetes", "ArgoCD","GitOps","Automated Testing"],
    //     horario: "2:00 PM",
    //     lugar: "Sala #4, Padre Arroyo",
    // },

    {
        ponente: "Marcos Blanco",
        actividad: "Aprendizaje automático para predecir los niveles de depresión, ansiedad y estrés en estudiantes",
        detalles: "Se crearon modelos de aprendizaje automático para predecir depresión, ansiedad y estrés en estudiantes universitarios, usando datos de 294 encuestas. Los modelos lograron precisiones del 82% para depresión, 90% para ansiedad y 94% para estrés, mostrando su eficacia en detectar trastornos mentales.",
        etiquetas: ["prendizaje Automático", "Procesamiento de Lenguaje Natural", "Python", "Proyecto de Grado","NPL","Machine Learning"],
        horario: "3:00 PM",
        lugar: "Sala #1, Padre Arroyo",
    },
    {
        ponente: "Juan González",
        actividad: "Innovación, el motor del desarrollo tecnológico",
        detalles: "Mostraré cómo la innovación, centrada en el usuario, puede transformar la creación y el desarrollo de software, alineando la tecnología con las necesidades reales y generando soluciones de gran impacto.",
        etiquetas: ["Ingeniería de Software", "User-Centered Innovation", "Technology Development","Impactful Solutions","Creativity","Problem Solving"],
        horario: "3:00 PM",
        lugar: "Sala #2, Padre Arroyo",
    },
    {
        ponente: "Johan Prevot",
        actividad: "Inteligencia Artificial : Amiga o Enemigo del desarrollador ",
        detalles: "Explora cómo la IA puede ser una aliada al optimizar procesos y automatizar tareas, o una amenaza al reemplazar roles en el desarrollo de software. Analiza casos prácticos, oportunidades y desafíos que la IA presenta para los desarrolladores.",
        etiquetas: ["IA", "chatgtp", "Automatizacion","Desarrollo de Software","Machine Learning","Desarrollo Ágil"],
        horario: "3:00 PM",
        lugar: "Sala #3, Padre Arroyo",
    },
    {
        ponente: "Inés Montero",
        actividad: "¡Tu Web en Modo Turbo! Hacks para Desarrolladores Pro",
        detalles: "¡Es hora de hacer que tu web vuele! Desde la gestión óptima de recursos hasta la magia de caching, esta charla te proporcionará las herramientas necesarias para mejorar la velocidad de tu sitio y ofrecer una experiencia de usuario fluida y atractiva. ¡Adiós a páginas web lentas, hola velocidad!",
        etiquetas: ["Performance","Lazy loading", "CSS Crítico", "CDN", "Caching","CI/CD"],
        horario: "3:00 PM",
        lugar: "Sala #4, Padre Arroyo",
    },
    {
        ponente: ["Darvy Betances ","&" ,"  Gabriel Cepeda"],
        actividad: "Creación de APIs REST con Spring Boot y MongoDB: Buenas Prácticas desde el Desarrollo hasta el Despliegue",
        detalles: "¡Imagina crear tu primera API desde cero! En esta charla, te guiaremos paso a paso en la creación de una API básica con Spring Boot y MongoDB. Desde el modelado de datos hasta el despliegue, aprenderás buenas prácticas y cómo aplicar seguridad con JWT. ¡No te lo pierdas!",
        etiquetas: ["Spring boot", "API", "MongoDB", "Java", "JSON", "DTO"],
        horario: "4:00 PM",
        lugar: "Sala #1, Padre Arroyo",
    },
    {
        ponente: "Joas Yaminaki",
        actividad: "Golang in Practice: Boosting Efficiency with Go Routines ",
        detalles: "Exploración de optimizaciones en rutinas Go. Ejemplos prácticos y aplicaciones del mundo real para mejorar el rendimiento de sus proyectos Go",
        etiquetas: ["Go", "Performance", "Optimization", "Go Routines","Concurrency","Scalability"],
        horario: "4:00 PM",
        lugar: "Sala #2, Padre Arroyo",
    },
    {
        ponente: ["Albison Arias ","&" ,"  Ermarlin Perez"],
        actividad: "Unleashing Full-Stack Flutter: Building Powerful Apps with Serverpod ",
        detalles: "Descubre cómo Flutter y Serverpod se unen para crear aplicaciones poderosas. En esta charla, con dos demos en vivo, aprenderás sobre CRUD y comunicación en tiempo real. Te guiaremos en la preparación del entorno, integración y despliegue. ¡Lleva tus habilidades full-stack al siguiente nivel!",
        etiquetas: ["Flutter", "Serverpod", "Desarrollo Full-Stack", "Aplicaciones Multiplataforma", "Integración Backend", "Comunicación en Tiempo Real"],
        horario: "4:00 PM",
        lugar: "Sala #3, Padre Arroyo",
    },
    {
        ponente: "Gregory Pilar",
        actividad: "Unlock the Power of Azure Container Apps: A Comprehensive Guide for Modern Application Deployment ",
        detalles: "Discover how Azure Container Apps revolutionizes cloud-native app deployment. In this session, learn how to efficiently build, deploy, and manage microservices and container-based applications with Azure’s scalable, serverless container orchestration.",
        etiquetas: ["Azure", "Cloud", "Containers", "Microservices", "DevOps", "Cloud Computing"],
        horario: "4:00 PM",
        lugar: "Sala #4, Padre Arroyo",
    },
    {
        ponente: "TBA",
        actividad: "Desafíos y Oportunidades: La Inteligencia Artificial en el Desarrollo de Software",
        detalles: "Este panel explorará los principales retos que enfrenta la industria del software ante la creciente integración de la inteligencia artificial. Expertos discutirán cuestiones como la adaptación de procesos, la ética en la automatización, la necesidad de formación continua y el impacto en la cultura organizacional. A través de estudios de caso y experiencias prácticas, se ofrecerán estrategias para navegar en este nuevo panorama y aprovechar las oportunidades que la IA presenta para la innovación y la competitividad.",
        etiquetas: ["Panel"],
        horario: "5:00 PM",
        lugar: "Teatro",
    },
];
export { eventos };