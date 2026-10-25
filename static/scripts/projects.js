/* Project catalogue: edit this list to add or change portfolio cards. */
'use strict';

// Paste your LinkedIn profile URL here; the footer link stays hidden while it is empty.
const LINKEDIN_URL = 'https://www.linkedin.com/in/carlos-alberto-murillo-martínez-b008a234';

const PROJECTS = [
  {
    id: 'soccer-pipeline',
    category: 'data-eng',
    tags: ['AWS Lambda', 'Step Functions', 'EventBridge', 'S3', 'Terraform', 'Databricks'],
    url: 'https://github.com/cabymetal/soccer_pipeline_flow',
    linkType: 'github',
    title: {
      en: 'Serverless Football Data Pipeline',
      es: 'Pipeline serverless de datos de fútbol'
    },
    description: {
      en: 'Serverless pipeline that pulls matches, standings, player stats and squads for 11 competitions from API-Football into S3. Lambda makes the API calls, Step Functions orchestrates them and EventBridge Scheduler runs them weekly and monthly. Terraform manages the infrastructure (LocalStack for test, AWS for prod), and a Databricks Asset Bundle turns the raw data into Delta tables. It runs on about 1,200 API requests and $0.50 of AWS per month.',
      es: 'Pipeline serverless que extrae partidos, posiciones, estadísticas de jugadores y plantillas de 11 competencias desde API-Football hacia S3. Lambda hace las llamadas al API, Step Functions las orquesta y EventBridge Scheduler las ejecuta semanal y mensualmente. Terraform gestiona la infraestructura (LocalStack en pruebas, AWS en producción) y un Databricks Asset Bundle transforma los datos crudos en tablas Delta. Funciona con unas 1.200 peticiones al API y 0,50 USD de AWS al mes.'
    }
  },
  {
    id: 'aws-lambda-architecture',
    category: 'data-eng',
    tags: ['Kinesis', 'Lambda', 'Glue', 'Athena', 'DynamoDB', 'EC2', 'Kibana'],
    url: 'https://github.com/cabymetal/aws_lambda_architecture_tweet_analysis',
    linkType: 'github',
    title: {
      en: 'Real-Time Tweet Sentiment Analysis on AWS',
      es: 'Análisis de sentimientos de tweets en tiempo real en AWS'
    },
    description: {
      en: 'End-to-end Lambda architecture for analyzing live Twitter data. Tweets are captured with Tweepy and sent to Kinesis Data Streams. The batch layer lands them in S3 through Firehose and catalogs them with Glue for SQL queries in Athena. The speed layer uses AWS Lambda to parse records into DynamoDB, and Logstash and Kibana on EC2 handle exploration.',
      es: 'Arquitectura Lambda de punta a punta para analizar datos de Twitter en vivo. Los tweets se capturan con Tweepy y se envían a Kinesis Data Streams. La capa batch los lleva a S3 mediante Firehose y los cataloga con Glue para consultarlos con SQL en Athena. La capa de velocidad usa AWS Lambda para procesar los registros hacia DynamoDB, y Logstash y Kibana en EC2 permiten explorarlos.'
    }
  },
  {
    id: 'databricks-cdc',
    category: 'data-eng',
    tags: ['Databricks', 'AWS RDS', 'SQL Server', 'CDC', 'VPC'],
    url: 'https://github.com/cabymetal/databricks_enabling_cdc',
    linkType: 'github',
    title: {
      en: 'Change Data Capture from AWS RDS to Databricks',
      es: 'Change Data Capture de AWS RDS a Databricks'
    },
    description: {
      en: 'Technical guide to streaming changes from an AWS RDS SQL Server instance into a Databricks Lakehouse. It covers enabling CDC at the database level, connecting separate VPCs and setting up secure ingestion workflows.',
      es: 'Guía técnica para llevar los cambios de una instancia AWS RDS SQL Server a un Lakehouse de Databricks. Cubre la activación de CDC en la base de datos, la conectividad entre VPCs distintas y la configuración de flujos de ingesta seguros.'
    }
  },
  {
    id: 'python-etl',
    category: 'programming',
    tags: ['Python', 'MySQL', 'Docker', 'Regex', 'Logging'],
    url: 'mailto:carlosalbertomurillomartinez@gmail.com?subject=Solicitud%20acceso%20repositorio%20ETL%20%2F%20ETL%20repository%20access%20request',
    linkType: 'access',
    title: {
      en: 'Custom Python ETL',
      es: 'ETL a la medida en Python'
    },
    description: {
      en: 'Production ETL that loads large CSV files into MySQL in batches and resumes from the last good batch after a failure. It includes structured logging, error handling, regex-based value extraction, shared code through git submodules, Docker packaging and automated tests. The repository is private, so access is available on request.',
      es: 'ETL productivo que carga archivos CSV de gran tamaño en MySQL por lotes y retoma desde el último lote correcto si ocurre un fallo. Incluye logging estructurado, manejo de errores, extracción de valores con expresiones regulares, código compartido mediante submódulos de git, empaquetado con Docker y pruebas automatizadas. El repositorio es privado, así que el acceso se da bajo solicitud.'
    }
  },
  {
    id: 'leetcode',
    category: 'programming',
    tags: ['Python', 'Algorithms', 'Data Structures'],
    url: 'https://leetcode.com/u/cabymetal/',
    linkType: 'leetcode',
    title: {
      en: 'LeetCode Problem Solving',
      es: 'Resolución de problemas en LeetCode'
    },
    description: {
      en: 'Algorithm and data-structure problems solved on LeetCode, mostly in Python, as ongoing practice in problem solving and writing efficient code.',
      es: 'Problemas de algoritmos y estructuras de datos resueltos en LeetCode, principalmente en Python, como práctica continua de resolución de problemas y código eficiente.'
    }
  },
  {
    id: 'audio-analysis',
    category: 'data-science',
    tags: ['Python', 'Audio Features', 'K-Means', 'CNN', 'Plotly Dash', 'EC2'],
    url: 'https://github.com/cabymetal/audio_analysis',
    linkType: 'github',
    title: {
      en: 'Electronic Music Segment Classification (MSc Thesis)',
      es: 'Clasificación de segmentos de música electrónica (tesis de maestría)'
    },
    description: {
      en: 'Master\'s thesis at Universidad EAFIT. It extracts audio features from dance and electronic tracks and groups similar segments with k-means and neural networks, including a pretrained CNN, as the basis for song recommendations. The results can be explored in an interactive Dash dashboard deployed on EC2 with Nginx and Gunicorn.',
      es: 'Tesis de maestría en la Universidad EAFIT. Extrae características de audio de canciones dance y electrónicas y agrupa segmentos similares con k-means y redes neuronales, incluida una CNN preentrenada, como base para recomendar canciones. Los resultados se exploran en un tablero interactivo en Dash desplegado en EC2 con Nginx y Gunicorn.'
    }
  },
  {
    id: 'toxicity',
    category: 'data-science',
    tags: ['Python', 'NLP', 'Scikit-learn', 'Twitter API'],
    url: 'https://github.com/cabymetal/proyecto_integrador/tree/master',
    linkType: 'github',
    title: {
      en: 'Tweet Toxicity Classification',
      es: 'Clasificación de toxicidad en tweets'
    },
    description: {
      en: 'NLP project covering the full workflow: streaming and storing tweets, then training and comparing several model iterations, including a logistic regression classifier, to score comments by toxicity level.',
      es: 'Proyecto de NLP que cubre el flujo completo: captura y almacenamiento de tweets en streaming, y luego entrenamiento y comparación de varias iteraciones de modelos, incluido un clasificador de regresión logística, para puntuar comentarios según su nivel de toxicidad.'
    }
  },
  {
    id: 'recommender',
    category: 'data-science',
    tags: ['TensorFlow', 'PySpark', 'Recommender Systems'],
    url: 'https://github.com/cabymetal/grandes_vol_info',
    linkType: 'github',
    title: {
      en: 'Recommender System: TensorFlow vs PySpark',
      es: 'Sistema de recomendación: TensorFlow vs PySpark'
    },
    description: {
      en: 'Team project for a large-scale data course that builds the same recommender system in TensorFlow and in PySpark and compares the two. The TensorFlow model reached an RMSE of 1.447 without normalizing the data, against 2.516 for the tuned PySpark model.',
      es: 'Proyecto en equipo para un curso de grandes volúmenes de información que construye el mismo sistema de recomendación en TensorFlow y en PySpark y los compara. El modelo en TensorFlow logró un RMSE de 1,447 sin normalizar los datos, frente a 2,516 del modelo en PySpark con hiperparámetros ajustados.'
    }
  },
  {
    id: 'customer-classification',
    category: 'data-science',
    tags: ['Python', 'Pandas', 'Feature Engineering', 'Jupyter'],
    url: 'https://github.com/cabymetal/proyecto_integrador_2',
    linkType: 'github',
    title: {
      en: 'Customer Classification',
      es: 'Clasificación de clientes'
    },
    description: {
      en: 'Data preparation for a customer classification model on a dataset too large to load in one pass. Explicit dtypes shrink its memory footprint. The workflow then checks for duplicate customers, engineers composite features, removes invalid records and treats outliers before modeling.',
      es: 'Preparación de datos para un modelo de clasificación de clientes sobre un conjunto demasiado grande para cargarlo de una vez. Tipos de datos explícitos reducen su uso de memoria. Luego el flujo valida clientes duplicados, crea variables compuestas, elimina registros no válidos y trata valores atípicos antes del modelado.'
    }
  },
  {
    id: 'dash-dashboard',
    category: 'visualization',
    tags: ['Plotly Dash', 'Dash Bootstrap', 'Caching', 'Python'],
    url: 'https://gitlab.com/cabymetal/dashboard_oasis/-/tree/main?ref_type=heads',
    linkType: 'gitlab',
    title: {
      en: 'Interactive Dashboard with Plotly Dash',
      es: 'Tablero interactivo con Plotly Dash'
    },
    description: {
      en: 'Business dashboard built with Plotly Dash and Dash Bootstrap Components. Server-side caching keeps it responsive, and custom features go beyond the standard components.',
      es: 'Tablero de control empresarial construido con Plotly Dash y Dash Bootstrap Components. El caché del lado del servidor lo mantiene ágil, y tiene funcionalidades a la medida que van más allá de los componentes estándar.'
    }
  },
  {
    id: 'colombian-map',
    category: 'visualization',
    tags: ['Python', 'GeoJSON', 'TopoJSON', 'Power BI'],
    url: 'https://github.com/cabymetal/colombian_map',
    linkType: 'github',
    title: {
      en: 'Colombia TopoJSON Shape Maps for Power BI',
      es: 'Mapas TopoJSON de Colombia para Power BI'
    },
    description: {
      en: 'Notebooks that build TopoJSON shape maps of Colombia\'s departments and municipalities for Power BI, keyed by official DIVIPOLA codes. The San Andrés, Providencia and Santa Catalina archipelago is enlarged and moved closer to the mainland so it is readable in reports.',
      es: 'Notebooks que generan mapas TopoJSON de los departamentos y municipios de Colombia para Power BI, con los códigos oficiales DIVIPOLA. El archipiélago de San Andrés, Providencia y Santa Catalina se amplía y se acerca al continente para que sea legible en los reportes.'
    }
  }
];

const LINK_ICONS = {
  github: 'bi-github',
  gitlab: 'bi-gitlab',
  leetcode: 'bi-code-square',
  access: 'bi-envelope'
};

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, function (ch) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
  });
}

function renderProjects(lang, filter, t) {
  const grid = document.getElementById('project-grid');
  const visible = PROJECTS.filter(function (p) {
    return filter === 'all' || p.category === filter;
  });

  grid.innerHTML = visible.map(function (p) {
    const tags = p.tags.map(function (tag) {
      return '<li class="tag">' + escapeHtml(tag) + '</li>';
    }).join('');
    const external = p.linkType === 'access' ? '' : ' target="_blank" rel="noopener"';

    return (
      '<div class="col-12 col-md-6 col-xl-4">' +
        '<article class="project-card">' +
          '<span class="project-category">' + escapeHtml(t['cat.' + p.category]) + '</span>' +
          '<h3 class="project-title">' + escapeHtml(p.title[lang]) + '</h3>' +
          '<p class="project-desc">' + escapeHtml(p.description[lang]) + '</p>' +
          '<ul class="tag-list">' + tags + '</ul>' +
          '<a class="project-link" href="' + p.url + '"' + external + '>' +
            '<i class="bi ' + LINK_ICONS[p.linkType] + '" aria-hidden="true"></i>' +
            escapeHtml(t['link.' + p.linkType]) +
          '</a>' +
        '</article>' +
      '</div>'
    );
  }).join('');
}
