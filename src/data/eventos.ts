
const eventos = [
    {
        ponente: "Carlos Camacho",
        actividad: "Registro y Bienvenida al Evento",
        detalles: "Bienvenida al Evento Barcamp RD 2024",
        etiquetas: ["Barcamp RD", "2022", "12 años"],
        horario: "TBA",
        lugar: "To be assigned",
    },
    {
        ponente: "Darian Vargas",
        actividad: "Innovación y Futuro: Retos Globales, IA, y el Poder de la Creatividad",
        detalles: "Charla Magistral",
        etiquetas: ["IA"],
        horario: "TBA",
        lugar: "To be assigned",
    },
    {
        ponente: "Joas Yaminaki",
        actividad: "Golang in Practice: Boosting Efficiency with Go Routines ",
        detalles: "Exploración de optimizaciones en rutinas Go. Ejemplos prácticos y aplicaciones del mundo real para mejorar el rendimiento de sus proyectos Go",
        etiquetas: ["Go", "Performance", "Optimization", "Go Routines"],
        horario: "TBA",
        lugar: "To be assigned",
    },
    {
        ponente: "Jonathan Morales",
        actividad: "Del Código a la Conexión Emocional: El Rol de la Experiencia (XM) en Proyectos Tecnológicos",
        detalles: "Descubre cómo transformar cada interacción en una experiencia inolvidable. Explora el poder de XM para conectar emocionalmente con usuarios, clientes, socios integrando servicios digitales y tecnologías emergentes para optimizar la experiencia.",
        etiquetas: ["ITSM", "Digital IT Strategy","IT high velocity"],
        horario: "TBA",
        lugar: "To be assigned",
    },
    {
        ponente: "Juan Polanco",
        actividad: "Desplegando Deep Learning a producción con ONNX",
        detalles: "Tienes modelos de Deep Learning que quisieras poder desplegar a producción independientemente del framework o librería donde los desarrollaste ? Pues esta es la charla donde debes acudir.",
        etiquetas: ["ai", "artificial-intelligence", "machine-learning", "deep-learning", "onnx", "neural-networks"],
        horario: "TBA",
        lugar: "To be assigned",
    },
    {
        ponente: "José  Martínez",
        actividad: "Ingeniería de Datos con Apache Airflow",
        detalles: "¿Te has preguntado cómo las empresas de clase mundial se hacen para procesar eficientemente grandes volúmenes de datos? Te enseñaré cómo esto se logra Apache Airflow de manera eficiente y escalable. Te mostraré aplicaciones reales de esta herramienta y los beneficios de elegirla para tus proyectos.",
        etiquetas: ["Airflow", "Apache", "Apache Airflow", "ETL", "Data Engineering", "Python", "GCP", "Composer", "MWAA"],
        horario: "TBA",
        lugar: "To be assigned",
    },
    {
        ponente: "Ruth Castillo",
        actividad: "Más allá de Scrum: Ágil Disciplinado",
        detalles: "Es un taller diseñado para profesionales que buscan ampliar su comprensión sobre cómo gestionar proyectos de manera más flexible y adaptable en entornos complejos, ofreciendo un enfoque disciplinado que abarca una gama más amplia de prácticas y escenarios.",
        etiquetas: ["Scrum"],
        horario: "TBA",
        lugar: "To be assigned",
    },
    {
        ponente: "Yhorby Matias",
        actividad: "Crea Entornos de Prueba Automáticos con Azure y Argo CD",
        detalles: "¿Quieres probar tus desarrollos en entornos automáticos sin complicaciones? Con Azure DevOps y Argo CD, te enseño cómo crear entornos de prueba para cada cambio de código, integrando GitOps. Valida tus funcionalidades antes de producción, agilizando tus despliegues fácilmente.",
        etiquetas: ["Azure", "DevOps", "Kubernetes", "ArgoCD"],
        horario: "TBA",
        lugar: "To be assigned",
    },
    {
        ponente: "Juan González",
        actividad: "Innovación, el motor del desarrollo tecnológico",
        detalles: "Mostraré cómo la innovación, centrada en el usuario, puede transformar la creación y el desarrollo de software, alineando la tecnología con las necesidades reales y generando soluciones de gran impacto.",
        etiquetas: ["Ingeniería de Software", "PUCMM", "Barcamp"],
        horario: "TBA",
        lugar: "To be assigned",
    },
    {
        ponente: "Karla Aquino",
        actividad: "Beyond Code: Integrated Security with DevSecOps and SSDLC",
        detalles: "¡Descubre cómo DevSecOps y el SSDLC pueden transformar la forma en que desarrollas software! Aprende a integrar la seguridad en cada fase del ciclo de vida, sin sacrificar agilidad ni velocidad. Protege tu código, automatiza procesos y garantiza un desarrollo seguro desde el primer día.",
        etiquetas: ["devops", "cybersecurity", "secure code", "PUCMM", "JavaScript"],
        horario: "TBA",
        lugar: "To be assigned",
    },
    {
        ponente: "Inés Montero",
        actividad: "¡Tu Web en Modo Turbo! Hacks para Desarrolladores Pro",
        detalles: "¡Es hora de hacer que tu web vuele! Desde la gestión óptima de recursos hasta la magia de caching, esta charla te proporcionará las herramientas necesarias para mejorar la velocidad de tu sitio y ofrecer una experiencia de usuario fluida y atractiva. ¡Adiós a páginas web lentas, hola velocidad!",
        etiquetas: ["Performance","Lazy loading", "CSS Crítico", "CDN", "Caching","CI/CD", "Google Lighthouse", "PageSpeed Insights", "Renderizado estático", "SEO", "Experiencia de usuario"],
        horario: "TBA",
        lugar: "To be assigned",
    },
    {
        ponente: "Albison Arias",
        actividad: "Unleashing Full-Stack Flutter: Building Powerful Apps with Serverpod ",
        detalles: "Descubre cómo Flutter y Serverpod se unen para crear aplicaciones poderosas. En esta charla, con dos demos en vivo, aprenderás sobre CRUD y comunicación en tiempo real. Te guiaremos en la preparación del entorno, integración y despliegue. ¡Lleva tus habilidades full-stack al siguiente nivel!",
        etiquetas: ["Flutter", "Serverpod", "Desarrollo Full-Stack", "Aplicaciones Multiplataforma", "Integración Backend", "Operaciones CRUD", "Comunicación en Tiempo Real", "Demos en Vivo", "Lenguaje de Programación Dart", "Tendencias Tecnológicas"],
        horario: "TBA",
        lugar: "To be assigned",
    },
    {
        ponente: "Gregory Pilar",
        actividad: "Unlock the Power of Azure Container Apps: A Comprehensive Guide for Modern Application Deployment ",
        detalles: "Discover how Azure Container Apps revolutionizes cloud-native app deployment. In this session, learn how to efficiently build, deploy, and manage microservices and container-based applications with Azure’s scalable, serverless container orchestration.",
        etiquetas: ["Azure", "Cloud", "Containers", "Microservices", "DevOps", "Cloud Computing"," Azure Container Apps", "Dapr", "KEDA", "Serverless", "Cloud-Native", "Application Deployment", "Kubernetes", "Azure DevOps"],
        horario: "TBA",
        lugar: "To be assigned",
    },
    {
        ponente: "Felix Valerio",
        actividad: "The Upgrade Journey: Real-World Stories of Symfony Version Migrations ",
        detalles: "Únase a nosotros en “El viaje de actualización: Historias del mundo real de migraciones de versiones de Symfony” para escuchar a los desarrolladores compartir sus experiencias al actualizar aplicaciones Symfony. Aprenda consejos prácticos, supere desafíos comunes y obtenga información para que su proceso de migración sea más fluido y eficiente.",
        etiquetas: ["Symfony", "Laravel", "Frameworks", "Docker", "Docker composer", "Business Logic", "Coorporate Applications", "Lenguajes de Programación", "Ingeniería de Software", "Sistemas", "2024", "PUCMM", "Santiago", "PHP"],
        horario: "TBA",
        lugar: "To be assigned",
    },
    {
        ponente: "Johan Prevot",
        actividad: "Inteligencia Artificial : Amiga o Enemigo del desarrollador ",
        detalles: "Explora cómo la IA puede ser una aliada al optimizar procesos y automatizar tareas, o una amenaza al reemplazar roles en el desarrollo de software. Analiza casos prácticos, oportunidades y desafíos que la IA presenta para los desarrolladores.",
        etiquetas: ["IA", "chatgtp", "Automatizacion"],
        horario: "TBA",
        lugar: "To be assigned",
    },
    {
        ponente: "Christopher Tineo",
        actividad: "Modern Deployment Strategies with Argo Rollouts",
        detalles: "Descubre cómo optimizar el despliegue de aplicaciones en Kubernetes utilizando Argo Rollouts. Con técnicas avanzadas como canary, blue-green y análisis de métricas, mejorarás la confiabilidad y reducirás el tiempo de inactividad en tus despliegues.",
        etiquetas: ["Argo", "Kubernetes", "Deployments", "Devops", "Cloud"],
        horario: "TBA",
        lugar: "To be assigned",
    },
    // {
    //     ponente: "",
    //     actividad: "",
    //     detalles: "",
    //     etiquetas: [""],
    //     horario: "Próximamente",
    //     lugar: "Próximamente",
    // },
];
export { eventos };