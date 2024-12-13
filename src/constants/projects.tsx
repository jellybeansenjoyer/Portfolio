import proj from '@/data/proj'
const projects:proj[] = [
    {
        id:1,
        date:'December 2024',
      title: "Decentralized Event Ticketing Platform",
      description:
        "A decentralised web based platform for secure booking of tickets, solving the problem of FCFS queue wait",
      skills: ["NextJs", "Solidity", "TailwindCSS", "Metamask", "MongoDb"],
      photo:[],
      video:[]
    },
    {
        id:2,
      title: "JustTalk",
      date:'May 2022',
      description:
        "JustTalk is a beautifully designed Android chat app that allows users to chat with friends and family in real-time, anytime, anywhere.",
      skills: ["Android", "Kotlin", "Firebase", "Coroutines"],
      photo:['jt1.jpg','jt2.jpg','jt3.jpg','jt4.jpg','jt5.jpg'],
      video:['jtv1.mp4']

    },
    {
        id:3,
      title: "Sentimental Analysis of Consumer Behaviour",
      date:"June 2024",
      description:
        "A P.W.W that shows the sellers insights about Consumer by analysing reviews, tech details, by scraping through the web and giving meaningful suggestions via text-generation",
      skills: ["React", "BeautifulSoup", "Selenium", "Flask", "TailwindCSS", "Tensorflow"],
      video:['fyp.mp4'],
      photo:[]
    },
    {
        id:4,
      title: "NASA APOD",
      date:'December 2021',
      description:
        "A simple Android application that gets the data from the NASA-APOD Api and user gets latest information about what is happening around the Space",
      skills: ["Kotlin", "Coroutines", "Android"],
      photo:[],
      video:['ns1.mp4','nsv1.mp4']

    },
    {
        id:5,
        title:'Seeker App',
        date:'September 2022',
        description:'The app keeps users informed about available scholarships and their application details. Users can easily apply for scholarships and track their application status in real-time through the app. The Seeker App simplifies the scholarship application process, offering a seamless experience to its users.',
        skills:['Kotlin','Coroutines','Android','MongoDb','Express','Node','React','RestAPI'],
        photo:['sk1.jpg','sk2.jpg','sk3.jpg','sk4.jpg','sk5.jpg','sk6.jpg','sk7.jpg'],
        video:['skvwv1.mp4','skv1.mp4','skv2.mp4']
    },
    {
        id:6,
        title:'Thrive Edu App',
        date:'May 2024',
        description:'A React-based web app that enhances student mental well-being through decentralized private video consultations and smart contract-enabled appointment management on the Polygon network. The features are MetaMask authentication,decentralized video conferencing, AI-driven post-session analysis. The project facilitates secure, private mental health consultations for students, enabling therapists to provide personalized care through decentralized video sessions and smart contract management.',
        skills:['Solidity','TailwindCSS','Python','MongoDb','Solidity','Node','React','RestAPI'],
        photo:['eih1.jpg','eih2.jpg'],
        video:['eihv1.mp4']
    }
]

  export default projects;