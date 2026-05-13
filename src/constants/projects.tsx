import proj from '@/data/proj'
const projects:proj[] = [
    {
        id:2,
        title: "JustTalk",
        date:'May 2022',
        description:
        "JustTalk is a beautifully designed Android chat app that allows users to chat with friends and family in real-time, anytime, anywhere.",
        skills: ["Android", "Kotlin", "Firebase", "Coroutines"],
        photo:['jt1.jpg','jt2.jpg','jt3.jpg','jt4.jpg','jt5.jpg'],
        video:['jtv1.mp4'],
        git:'https://github.com/jellybeansenjoyer/JustTalk'

    },
    {
        id:3,
        title: "Sentimental Analysis of Consumer Behaviour",
        date:"June 2024",
        description:
        "A P.W.W that shows the sellers insights about Consumer by analysing reviews, tech details, by scraping through the web and giving meaningful suggestions via text-generation",
        skills: ["React", "BeautifulSoup", "Selenium", "Flask", "TailwindCSS", "Tensorflow"],
        video:['fyp.mp4'],
        photo:[],
        git:'https://github.com/jellybeansenjoyer/final-year-project-backend-flask'
    },
    {
        id:4,
      title: "NASA APOD",
      date:'December 2021',
      description:
        "A simple Android application that gets the data from the NASA-APOD Api and user gets latest information about what is happening around the Space",
      skills: ["Kotlin", "Coroutines", "Android"],
      photo:[],
      video:['ns1.mp4','nsv1.mp4'],
      git:"https://github.com/jellybeansenjoyer/NASA-Project"

    },
    {
        id:5,
        title:'Seeker App',
        date:'September 2022',
        description:'The app keeps users informed about available scholarships and their application details. Users can easily apply for scholarships and track their application status in real-time through the app. The Seeker App simplifies the scholarship application process, offering a seamless experience to its users.',
        skills:['Kotlin','Coroutines','Android','MongoDb','Express','Node','React','RestAPI'],
        photo:['sk1.jpg','sk2.jpg','sk3.jpg','sk4.jpg','sk5.jpg','sk6.jpg','sk7.jpg'],
        video:['skvwv1.mp4','skv1.mp4','skv2.mp4'],
        git:'https://github.com/SkaleDevs'
    },
    {
        id:6,
        title:'Thrive Edu App',
        date:'May 2024',
        description:'A React-based web app that enhances student mental well-being through decentralized private video consultations and smart contract-enabled appointment management on the Polygon network. The features are MetaMask authentication,decentralized video conferencing, AI-driven post-session analysis. The project facilitates secure, private mental health consultations for students, enabling therapists to provide personalized care through decentralized video sessions and smart contract management.',
        skills:['Solidity','TailwindCSS','Python','MongoDb','Solidity','Node','React','RestAPI'],
        photo:['eih1.jpg','eih2.jpg'],
        video:['eihv1.mp4'],
        git:'http://github.com/jellybeansenjoyer'
    },
    {
        id:7,
        title:'AeroStream - Real-Time F1 Telemetry Platform',
        date:'Apr 2026 - May 2026',
        description:'Built a production-shaped event streaming platform to process Formula 1 telemetry in real time. Delivered a 3-broker Kafka KRaft setup (RF=3, ISR=2 posture), simulated 20 cars at 10,000+ events/sec, enforced Avro schema governance with BACKWARD compatibility, enriched live events via Kafka Streams + Debezium CDC from PostgreSQL (10 circuits, 20 drivers), added ksqlDB windowed analytics (30s hopping / 10s advance), and deployed a Python ML consumer for pit-stop predictions with health/readiness/Prometheus metrics.',
        skills:['Kafka','Kafka Streams','Debezium','ksqlDB','Spring Boot','Java 21','Python','FastAPI','scikit-learn','PostgreSQL','Avro','Schema Registry','Prometheus','Grafana','Docker'],
        photo:[],
        photoSections:[
            {
                title:'Architecture',
                photo:['proj-aerostream/aerostream-architecture.png'],
            },
            {
                title:'Metrics - Prometheus / Grafana',
                photo:[
                    'proj-aerostream/metrics/graph_for_graphana.png',
                    'proj-aerostream/metrics/graph_prometheus.png',
                    'proj-aerostream/metrics/graphana_connectivity.png',
                    'proj-aerostream/metrics/graphana_dashboard.png',
                    'proj-aerostream/metrics/ml_consumer_metrics.png',
                    'proj-aerostream/metrics/query_graphana.png',
                    'proj-aerostream/metrics/targets.png',
                ],
            },
            {
                title:'Dashboard Section',
                photo:[
                    'proj-aerostream/dashboard/db-01.png',
                    'proj-aerostream/dashboard/db-02.png',
                    'proj-aerostream/dashboard/db-03.png',
                    'proj-aerostream/dashboard/db-04.png',
                    'proj-aerostream/dashboard/db-05.png',
                    'proj-aerostream/dashboard/db-06.png',
                    'proj-aerostream/dashboard/db-07.png',
                    'proj-aerostream/dashboard/db-08.png',
                ],
            },
        ],
        video:[],
        git:'https://github.com/jellybeansenjoyer/Aerostream'
    }
]

  export default projects;