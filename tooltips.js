
        // Configuración de Mermaid
        mermaid.initialize({
            startOnLoad: true,
            theme: 'base',
            securityLevel: 'loose',
            flowchart: {
                useMaxWidth: false,
                htmlLabels: true,
                curve: 'basis'
            },
            themeVariables: {
                fontSize: '14px',
                arrowheadColor: '#ffffff',
                lineColor: '#ffffff'
            }
        });

        // Datos para los tooltips del MC14
        const tooltipDataMC14 = {
            // Nodo principal
            'A': {
                title: 'Proceso de Investigación Científica',
                content: 'Proceso sistemático y estructurado para generar conocimiento científico válido y confiable a través de la aplicación del método científico.'
            },
            
            // Instancias
            'B': {
                title: '1. INSTANCIA DE VALIDACIÓN CONCEPTUAL',
                content: 'Esta instancia tiene como objetivo validar las hipótesis sustantivas por referencia a las teorías y hechos que se consideran bien establecidos. Es la primera etapa de validación en el proceso de investigación científica.'
            },
            'E': {
                title: '2. INSTANCIA DE VALIDACIÓN EMPÍRICA',
                content: 'Esta instancia está encargada de validar las hipótesis instrumentales o indicadoras, lo que tradicionalmente se conoce como "establecer la validez de los datos". Asegura que los instrumentos de medición sean adecuados.'
            },
            'H': {
                title: '3. INSTANCIA DE VALIDACIÓN OPERATIVA',
                content: 'Esta instancia está encargada de validar las hipótesis operativas o de generalización, lo que tradicionalmente se conoce como "establecer la confiabilidad de los datos y la confiabilidad de la muestra". Garantiza que los procedimientos sean correctos.'
            },
            'K': {
                title: '4. INSTANCIA DE VALIDACIÓN EXPOSITIVA',
                content: 'Esta instancia está encargada de validar las hipótesis retóricas, esto es, el esquema expositivo y la estrategia de argumentación o de exposición demostrativa. Asegura que la comunicación de resultados sea efectiva.'
            },
            
            // Fases
            'C': {
                title: 'Fase 1: Planteamientos',
                content: 'El objeto general de esta fase es familiarizarse y profundizar el conocimiento del proceso en el que se presenta el problema, además de confirmar el interés o importancia de dicho proceso para justificar el esfuerzo de investigación.'
            },
            'D': {
                title: 'Fase 2: Formulación',
                content: 'El objeto central de la fase formulativa es el de lograr las definiciones conceptuales y los análisis de las estructuras de las redes conceptuales implícitas en el problema, en las hipótesis, en el marco teórico y en los objetivos.'
            },
            'F': {
                title: 'Fase 3: Diseño del objeto',
                content: 'El objeto general de esta fase es decidir cuál será el objeto empírico de la investigación. Esto implica escoger los tipos de unidades de análisis, las variables y las fuentes que se emplearán en el estudio.'
            },
            'G': {
                title: 'Fase 4: Diseño de procedimientos',
                content: 'Esta fase tiene como objeto la toma de decisiones acerca de los procedimientos mediante los que se determinarán las unidades de análisis, las dimensiones de las variables, los indicadores y el tratamiento que se les dará a los datos.'
            },
            'I': {
                title: 'Fase 5: Recolección y procesamiento',
                content: 'Esta fase tiene como objetivo llevar a cabo la recolección de los datos y su procesamiento. El investigador debe justificar cómo procedió para seleccionar cada sujeto de estudio y cómo efectuó las mediciones.'
            },
            'J': {
                title: 'Fase 6: Tratamiento y análisis de datos',
                content: 'Esta fase tiene como objeto la discusión y la interpretación de los datos a la luz del plan de análisis y de las hipótesis formuladas (tanto sustantivas, como de validez y de generalización).'
            },
            'L': {
                title: 'Fase 7: Informes parciales',
                content: 'El objetivo de esta fase es organizar y presentar informes parciales sobre los avances de la investigación, incluyendo la evaluación del período, resultados parciales y análisis de nuevos problemas.'
            },
            'M': {
                title: 'Fase 8: Exposición sistemática',
                content: 'El objetivo general de esta última fase consiste en exponer los resultados obtenidos tal como se piensa que ellos se incorporan al cuerpo teórico principal del cual se ha partido. Representa la materialización final del conocimiento generado.'
            },
            
            // Momentos de Fase 1
            'C1': {
                title: 'a. Examen de problemas',
                content: 'Examen y discusión de los problemas (el problema central y los problemas conexos). Palabra clave: "Problema". Implica la identificación clara del problema de investigación.'
            },
            'C2': {
                title: 'b. Conocimientos previos',
                content: 'Examen y discusión de las hipótesis que evocan los problemas. Implica la revisión de conocimientos existentes relacionados con el problema de investigación.'
            },
            'C3': {
                title: 'c. Relaciones lógicas',
                content: 'Apropiación y revisión de los conocimientos previos, propios o análogos. Establece conexiones lógicas entre diferentes elementos del problema.'
            },
            'C4': {
                title: 'd. Objetivos',
                content: 'Revisión y discusión sobre los contextos materiales e institucionales de los problemas. Define los objetivos generales y específicos de la investigación.'
            },
            
            // Momentos de Fase 2
            'D1': {
                title: 'a. Formulación del problema',
                content: 'Formulación precisa del problema central y de los problemas derivados. Establece claramente qué se va a investigar.'
            },
            'D2': {
                title: 'b. Hipótesis sustantivas',
                content: 'Formulación de las hipótesis sustantivas y de las hipótesis auxiliares. Palabra clave: "Hipótesis". Define las proposiciones tentativas sobre las relaciones entre variables.'
            },
            'D3': {
                title: 'c. Marco teórico',
                content: 'Formulación del marco teórico o modelo conceptual. Establece las teorías y conceptos que fundamentan la investigación.'
            },
            'D4': {
                title: 'd. Formulación de objetivos',
                content: 'Formulación de los objetivos teóricos y prácticos. Define claramente qué se pretende lograr con la investigación.'
            },
            
            // Momentos de Fase 3
            'F1': {
                title: 'a. Análisis de estructura',
                content: 'Análisis estructural del objeto a investigar. Examina la composición y organización del objeto de estudio.'
            },
            'F2': {
                title: 'b. Análisis de hipótesis',
                content: 'Análisis de las hipótesis y su estructura. Examina la composición lógica de las hipótesis planteadas.'
            },
            'F3': {
                title: 'c. Fuentes de datos',
                content: 'Análisis de las fuentes de datos disponibles y su accesibilidad. Identifica de dónde se obtendrá la información necesaria.'
            },
            'F4': {
                title: 'd. Dimensiones de variables',
                content: 'Dimensionamiento de las variables y análisis de relevancia. Define cómo se medirán las variables del estudio.'
            },
            
            // Momentos de Fase 4
            'G1': {
                title: 'a. Muestras posibles',
                content: 'Examen de las muestras posibles y determinación del tamaño. Define la población y muestra del estudio.'
            },
            'G2': {
                title: 'b. Plan de tratamiento',
                content: 'Establecimiento del plan de tratamiento y análisis de datos. Define cómo se procesarán los datos recolectados.'
            },
            'G3': {
                title: 'c. Recursos y contextos',
                content: 'Determinación de recursos y contextos de aplicación. Identifica los recursos necesarios y el entorno de la investigación.'
            },
            'G4': {
                title: 'd. Diseño de instrumentos',
                content: 'Diseño de los instrumentos de medición. Crea las herramientas para recolectar datos (cuestionarios, guías de observación, etc.).'
            },
            
            // Momentos de Fase 5
            'I1': {
                title: 'a. Pruebas piloto',
                content: 'Realización de pruebas piloto y controles. Verifica la efectividad de los instrumentos antes de su aplicación definitiva.'
            },
            'I2': {
                title: 'b. Recolección',
                content: 'Proceso de recolección de datos según el diseño establecido. Aplica los instrumentos para obtener la información necesaria.'
            },
            'I3': {
                title: 'c. Procesamiento',
                content: 'Procesamiento de la información recolectada. Organiza y prepara los datos para su análisis.'
            },
            'I4': {
                title: 'd. Tabulación',
                content: 'Tabulación y organización de datos. Ordena los datos en tablas o matrices para facilitar su análisis.'
            },
            
            // Momentos de Fase 6
            'J1': {
                title: 'a. Discusión de resultados',
                content: 'Análisis y discusión de los resultados obtenidos. Examina críticamente los hallazgos de la investigación.'
            },
            'J2': {
                title: 'b. Análisis estadístico',
                content: 'Aplicación de técnicas estadísticas cuando corresponda. Utiliza métodos cuantitativos para analizar los datos.'
            },
            'J3': {
                title: 'c. Interpretación',
                content: 'Interpretación de los resultados en relación con las hipótesis. Da significado a los hallazgos en el contexto de la investigación.'
            },
            'J4': {
                title: 'd. Conclusiones',
                content: 'Elaboración de conclusiones basadas en los resultados. Resume los principales hallazgos y su significado.'
            },
            
            // Momentos de Fase 7
            'L1': {
                title: 'a. Evaluación del período',
                content: 'Evaluación del proceso de investigación. Analiza cómo se ha desarrollado la investigación hasta el momento.'
            },
            'L2': {
                title: 'b. Evaluación de resultados',
                content: 'Evaluación de los resultados obtenidos. Valora la calidad y relevancia de los hallazgos parciales.'
            },
            'L3': {
                title: 'c. Nuevos problemas',
                content: 'Identificación de nuevos problemas de investigación. Detecta cuestiones emergentes que requieren estudio adicional.'
            },
            'L4': {
                title: 'd. Sugerencias',
                content: 'Elaboración de sugerencias para investigaciones futuras. Propone líneas de investigación complementarias.'
            },
            
            // Momentos de Fase 8
            'M1': {
                title: 'a. Destinatarios',
                content: 'Identificación de los destinatarios del informe. Define a quién va dirigida la comunicación de resultados.'
            },
            'M2': {
                title: 'b. Ordenamiento de tesis',
                content: 'Organización lógica de las tesis principales. Estructura los argumentos centrales de manera coherente.'
            },
            'M3': {
                title: 'c. Desarrollo de argumentos',
                content: 'Desarrollo de la argumentación que sustenta las conclusiones. Elabora razonamientos sólidos basados en evidencia.'
            },
            'M4': {
                title: 'd. Redacción',
                content: 'Redacción del informe final. Escribe el documento que comunica los resultados de la investigación.'
            },
            'M5': {
                title: 'e. Revisión',
                content: 'Revisión y corrección del informe. Verifica la calidad, coherencia y precisión del documento.'
            },
            'M6': {
                title: 'f. Publicación',
                content: 'Publicación y difusión de los resultados de la investigación. Comparte el conocimiento generado con la comunidad científica y la sociedad.'
            },
            
            // Matrices y documentos
            'CM': {
                title: 'Punto de decisión: Planteamientos',
                content: 'Punto donde se evalúa si los planteamientos iniciales son adecuados para continuar con la fase de formulación. Incluye la evaluación de problemas, conocimientos previos, relaciones lógicas y objetivos.'
            },
            'DM': {
                title: 'Punto de decisión: Formulación',
                content: 'Punto donde se evalúa si la formulación del problema, hipótesis, marco teórico y objetivos es adecuada para pasar a la instancia de validación empírica.'
            },
            'FM': {
                title: 'Definición de matriz de datos',
                content: 'Matriz que contiene las unidades de análisis (UA) y variables (V) definidas para la investigación. Organiza sistemáticamente los elementos a estudiar.'
            },
            'GM': {
                title: 'Operacionalización',
                content: 'Matriz que contiene los indicadores (I) y procedimientos (R) para la medición de las variables. Define cómo se medirán concretamente los conceptos teóricos.'
            },
            'IM': {
                title: 'Llenado de matriz de datos',
                content: 'Proceso de completar la matriz de datos con la información recolectada. Representa la organización sistemática de los datos obtenidos.'
            },
            'JM': {
                title: 'Análisis de matriz de datos',
                content: 'Proceso de examinar e interpretar la información contenida en la matriz de datos. Busca patrones, relaciones y significados en los datos.'
            },
            'LM': {
                title: 'Comunicación de avances',
                content: 'Documentos que comunican los avances parciales de la investigación. Informan sobre el progreso y hallazgos preliminares.'
            },
            'MM': {
                title: 'Informe final',
                content: 'Documento final que presenta de manera sistemática todos los resultados de la investigación. Representa la culminación del proceso investigativo y la materialización del conocimiento generado.'
            },
            
            // Inicio y fin
            'Start': {
                title: 'INICIO',
                content: 'Punto de partida del proceso de investigación científica. Marca el comienzo formal del proyecto de investigación.'
            },
            'End': {
                title: 'FIN',
                content: 'Punto final del proceso de investigación científica. Marca la conclusión formal del proyecto de investigación con la publicación y difusión de resultados.'
            }
        };

        // Datos para los tooltips del MUDI
        const tooltipDataMUDI = {
            // Nodo principal
            'A': {
                title: 'Proceso de Diseño Industrial',
                content: 'Proceso sistemático y estructurado para desarrollar productos industriales que satisfagan necesidades específicas, combinando aspectos funcionales, estéticos, técnicos y de usabilidad.'
            },
            
            // Instancias
            'B': {
                title: '1. INSTANCIA DE INVESTIGACIÓN Y ANÁLISIS',
                content: 'Esta instancia se centra en la comprensión profunda del problema de diseño, el contexto de aplicación, los usuarios objetivo y las restricciones del proyecto. Incluye la investigación contextual, análisis de requerimientos y estudio de precedentes.'
            },
            'E': {
                title: '2. INSTANCIA DE CONCEPTUALIZACIÓN Y DESARROLLO',
                content: 'En esta instancia se desarrollan las ideas y conceptos de diseño, se realiza el desarrollo técnico y se construyen prototipos para validar las propuestas. Es la fase más creativa del proceso de diseño industrial.'
            },
            'H': {
                title: '3. INSTANCIA DE EVALUACIÓN',
                content: 'Esta instancia está encargada de evaluar integralmente la solución de diseño, validando su funcionamiento, usabilidad, estética y viabilidad productiva con usuarios reales y expertos.'
            },
            'K': {
                title: '4. INSTANCIA DE IMPLEMENTACIÓN',
                content: 'Esta instancia se encarga de la implementación del diseño final, incluyendo la documentación técnica, supervisión de producción, lanzamiento y seguimiento post-implementación. Representa la materialización industrial del diseño.'
            },
            
            // Fases
            'C': {
                title: 'Fase 1: Identificación del Problema',
                content: 'Reconocimiento y formulación clara del problema de diseño. Incluye la descomposición en subproblemas, establecimiento de objetivos y consideración de restricciones iniciales.'
            },
            'D': {
                title: 'Fase 2: Investigación Contextual',
                content: 'Análisis profundo del contexto de uso, usuarios, mercado y entorno sociocultural. Incluye empatía con usuarios y recopilación de información relevante sobre el entorno donde se utilizará el producto.'
            },
            'F': {
                title: 'Fase 3: Análisis de Requerimientos',
                content: 'Definición y jerarquización de requerimientos funcionales, técnicos, estéticos, sociales y ambientales del producto a diseñar. Establece las condiciones que debe cumplir la solución.'
            },
            'G': {
                title: 'Fase 4: Análisis de Precedentes',
                content: 'Estudio de soluciones existentes, casos análogos, tecnologías aplicables y identificación de oportunidades de innovación. Examina lo que ya existe para encontrar áreas de mejora.'
            },
            'I': {
                title: 'Fase 5: Ideación y Conceptualización',
                content: 'Fase creativa donde se generan múltiples ideas (divergencia) y luego se seleccionan y refinan las más prometedoras (convergencia). Incluye la creación de bocetos 2D y maquetas 3D para visualizar conceptos.'
            },
            'J': {
                title: 'Fase 6: Desarrollo Técnico',
                content: 'Desarrollo detallado de la solución seleccionada, incluyendo aspectos técnicos, materiales, procesos de fabricación y consideraciones de viabilidad productiva. Define cómo se fabricará el producto.'
            },
            'L': {
                title: 'Fase 7: Prototipado y Validación',
                content: 'Construcción de prototipos físicos y virtuales para validar aspectos funcionales, estéticos y de usabilidad. Incluye la creación de modelos 2D detallados y maquetas 3D funcionales para pruebas con usuarios reales.'
            },
            'M': {
                title: 'Fase 8: Implementación y Seguimiento',
                content: 'Planificación e implementación del diseño final, incluyendo documentación técnica, supervisión de producción y seguimiento post-implementación. Representa la fabricación industrial del producto diseñado.'
            },
            
            // Momentos de Fase 1
            'C1': {
                title: 'a. Definición del problema',
                content: 'Formulación clara y precisa del problema de diseño que se va a resolver. Establece el desafío central del proyecto.'
            },
            'C2': {
                title: 'b. Análisis de restricciones',
                content: 'Identificación de limitaciones técnicas, económicas, temporales y normativas que condicionarán el diseño. Define los límites del proyecto.'
            },
            'C3': {
                title: 'c. Establecimiento de objetivos',
                content: 'Definición de metas claras y medibles que el diseño debe alcanzar. Establece qué se pretende lograr con el producto.'
            },
            
            // Momentos de Fase 2
            'D1': {
                title: 'a. Análisis de usuarios',
                content: 'Estudio detallado de los usuarios objetivo, sus necesidades, comportamientos, preferencias y contextos de uso. Utiliza técnicas como personas, mapas de empatía y journey maps.'
            },
            'D2': {
                title: 'b. Análisis de mercado',
                content: 'Investigación del mercado actual, competencia, tendencias y oportunidades comerciales. Examina el entorno comercial donde se insertará el producto.'
            },
            'D3': {
                title: 'c. Análisis de entorno',
                content: 'Estudio del contexto físico, social, cultural y ambiental donde se utilizará el producto. Considera factores externos que influirán en el diseño.'
            },
            
            // Momentos de Fase 3
            'F1': {
                title: 'a. Requerimientos funcionales',
                content: 'Definición de las funciones que el producto debe cumplir. Establece qué debe hacer el producto para satisfacer las necesidades identificadas.'
            },
            'F2': {
                title: 'b. Requerimientos técnicos',
                content: 'Especificación de aspectos técnicos, materiales, dimensiones y otras características físicas del producto. Define cómo debe construirse el producto.'
            },
            'F3': {
                title: 'c. Requerimientos estéticos',
                content: 'Definición de aspectos visuales, sensoriales y emocionales del producto. Establece cómo debe percibirse el producto por los usuarios.'
            },
            
            // Momentos de Fase 4
            'G1': {
                title: 'a. Soluciones existentes',
                content: 'Análisis de productos similares o relacionados que ya existen en el mercado. Estudia cómo otros han resuelto problemas similares.'
            },
            'G2': {
                title: 'b. Tecnologías aplicables',
                content: 'Investigación de tecnologías, materiales y procesos que podrían aplicarse al diseño. Identifica recursos técnicos disponibles.'
            },
            'G3': {
                title: 'c. Oportunidades de innovación',
                content: 'Identificación de áreas donde es posible innovar y diferenciarse de las soluciones existentes. Busca espacios para la originalidad y mejora.'
            },
            
            // Momentos de Fase 5 - Fase creativa
            'I1': {
                title: 'a. Divergencia: Generación de ideas',
                content: 'Proceso creativo de generación amplia de ideas sin restricciones iniciales. Se utilizan técnicas como brainstorming, SCAMPER, analogías y otras herramientas de pensamiento lateral para maximizar la cantidad y diversidad de ideas.'
            },
            'I2': {
                title: 'b. Bocetos 2D y Maquetas 3D',
                content: 'Visualización de conceptos mediante bocetos bidimensionales y maquetas tridimensionales. Esta etapa permite materializar las ideas abstractas y evaluar aspectos formales, proporcionales y estéticos del diseño.'
            },
            'I3': {
                title: 'c. Convergencia: Selección de conceptos',
                content: 'Proceso de evaluación y selección de las ideas más prometedoras según criterios predefinidos. Se refinan los conceptos seleccionados y se integran aspectos funcionales, técnicos y estéticos.'
            },
            
            // Momentos de Fase 6
            'J1': {
                title: 'a. Especificaciones técnicas',
                content: 'Definición detallada de dimensiones, tolerancias, materiales y otros aspectos técnicos del diseño. Establece los parámetros precisos para la fabricación.'
            },
            'J2': {
                title: 'b. Materiales y procesos',
                content: 'Selección de materiales específicos y procesos de fabricación adecuados para el producto. Define con qué y cómo se fabricará el producto.'
            },
            'J3': {
                title: 'c. Viabilidad productiva',
                content: 'Evaluación de la factibilidad técnica y económica de producir el diseño. Analiza si el producto puede fabricarse de manera eficiente y rentable.'
            },
            
            // Momentos de Fase 7
            'L1': {
                title: 'a. Prototipos físicos y virtuales',
                content: 'Construcción de representaciones físicas y digitales del diseño para validar su funcionamiento, ergonomía y apariencia. Los prototipos pueden variar en fidelidad desde baja (conceptuales) hasta alta (funcionales).'
            },
            'L2': {
                title: 'b. Modelos 2D y maquetas 3D',
                content: 'Creación de modelos bidimensionales detallados (planos técnicos, renders) y maquetas tridimensionales a escala o tamaño real para validar aspectos formales, funcionales y productivos del diseño.'
            },
            'L3': {
                title: 'c. Pruebas con usuarios',
                content: 'Evaluación del diseño con usuarios reales para validar su usabilidad, funcionalidad y aceptación. Recoge retroalimentación directa de los usuarios potenciales.'
            },
            'L4': {
                title: 'd. Ajustes finales',
                content: 'Realización de modificaciones y refinamientos basados en los resultados de las pruebas. Perfecciona el diseño antes de su implementación final.'
            },
            
            // Momentos de Fase 8
            'M1': {
                title: 'a. Documentación técnica',
                content: 'Preparación de planos técnicos, especificaciones y otros documentos necesarios para la producción. Comunica todos los detalles necesarios para fabricar el producto.'
            },
            'M2': {
                title: 'b. Supervisión de producción',
                content: 'Seguimiento y control del proceso de fabricación para asegurar la calidad del producto. Verifica que la producción se ajuste a las especificaciones de diseño.'
            },
            'M3': {
                title: 'c. Lanzamiento',
                content: 'Introducción del producto al mercado, incluyendo aspectos de marketing, distribución y comunicación. Representa la presentación del producto a los usuarios finales.'
            },
            'M4': {
                title: 'd. Seguimiento post-implementación',
                content: 'Monitoreo del desempeño del producto en el mercado y recopilación de retroalimentación para futuras mejoras. Evalúa el éxito del producto y detecta oportunidades de mejora.'
            },
            
            // Matrices y documentos
            'CM': {
                title: 'Punto de decisión: Problema',
                content: 'Punto donde se evalúa si el problema está bien definido, las restricciones identificadas y los objetivos establecidos son adecuados para continuar con la investigación contextual.'
            },
            'DM': {
                title: 'Base de Datos de Investigación',
                content: 'Repositorio organizado de toda la información recopilada durante la investigación contextual, incluyendo datos sobre usuarios, mercado y entorno.'
            },
            'FM': {
                title: 'Lista de Requerimientos Jerarquizados',
                content: 'Documento que organiza todos los requerimientos del producto según su importancia y prioridad, sirviendo como guía para las fases de diseño posteriores.'
            },
            'GM': {
                title: 'Análisis Comparativo',
                content: 'Documento que compara sistemáticamente las soluciones existentes, tecnologías aplicables y oportunidades de innovación identificadas.'
            },
            'IM': {
                title: 'Banco de Ideas',
                content: 'Repositorio de conceptos e ideas generadas durante la fase creativa, incluyendo bocetos, esquemas, maquetas y evaluaciones preliminares.'
            },
            'JM': {
                title: 'Especificaciones Técnicas',
                content: 'Documentación detallada de los aspectos técnicos del diseño, incluyendo materiales, procesos, dimensiones y tolerancias.'
            },
            'LM': {
                title: 'Documentación del Diseño',
                content: 'Conjunto de documentos que describen completamente el diseño, incluyendo planos técnicos, renders, especificaciones de materiales y procesos, y resultados de pruebas.'
            },
            'MM': {
                title: 'Informe final',
                content: 'Documento final que presenta de manera sistemática todos los aspectos del diseño, desde la identificación del problema hasta la implementación. Representa la culminación del proceso de diseño industrial.'
            },
            
            // Inicio y fin
            'Start': {
                title: 'INICIO',
                content: 'Punto de partida del proceso de diseño industrial. Marca el comienzo formal del proyecto de diseño.'
            },
            'End': {
                title: 'FIN',
                content: 'Punto final del proceso de diseño industrial. Marca la conclusión formal del proyecto con la implementación y seguimiento del producto diseñado.'
            }
        };

        // Función para mostrar tooltips en ambos diagramas
        document.addEventListener('DOMContentLoaded', function() {
            // Esperar a que Mermaid termine de renderizar
            setTimeout(function() {
                const mc14Diagram = document.getElementById('mc14-diagram');
                const mudiDiagram = document.getElementById('mudi-diagram');
                const tooltip = document.getElementById('tooltip');
                
                // Añadir eventos para MC14
                if (mc14Diagram) {
                    const mc14Nodes = mc14Diagram.querySelectorAll('.node');
                    mc14Nodes.forEach(node => {
                        node.addEventListener('mouseenter', function(e) {
                            const nodeId = this.id.split('-')[1]; // Obtener el ID del nodo
                            if (tooltipDataMC14[nodeId]) {
                                tooltip.innerHTML = `<h3>${tooltipDataMC14[nodeId].title}</h3><p>${tooltipDataMC14[nodeId].content}</p>`;
                                tooltip.style.display = 'block';
                                tooltip.style.left = (e.pageX + 15) + 'px';
                                tooltip.style.top = (e.pageY + 15) + 'px';
                            }
                        });
                        
                        node.addEventListener('mousemove', function(e) {
                            tooltip.style.left = (e.pageX + 15) + 'px';
                            tooltip.style.top = (e.pageY + 15) + 'px';
                        });
                        
                        node.addEventListener('mouseleave', function() {
                            tooltip.style.display = 'none';
                        });
                    });
                }
                
                // Añadir eventos para MUDI
                if (mudiDiagram) {
                    const mudiNodes = mudiDiagram.querySelectorAll('.node');
                    mudiNodes.forEach(node => {
                        node.addEventListener('mouseenter', function(e) {
                            const nodeId = this.id.split('-')[1]; // Obtener el ID del nodo
                            if (tooltipDataMUDI[nodeId]) {
                                tooltip.innerHTML = `<h3>${tooltipDataMUDI[nodeId].title}</h3><p>${tooltipDataMUDI[nodeId].content}</p>`;
                                tooltip.style.display = 'block';
                                tooltip.style.left = (e.pageX + 15) + 'px';
                                tooltip.style.top = (e.pageY + 15) + 'px';
                            }
                        });
                        
                        node.addEventListener('mousemove', function(e) {
                            tooltip.style.left = (e.pageX + 15) + 'px';
                            tooltip.style.top = (e.pageY + 15) + 'px';
                        });
                        
                        node.addEventListener('mouseleave', function() {
                            tooltip.style.display = 'none';
                        });
                    });
                }
            }, 2000); // Esperar 2 segundos para que Mermaid termine de renderizar
        });
    