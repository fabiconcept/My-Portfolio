import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "CashGo Loan App Backend",
    imgSrc: "https://pickholder.sirv.com/Images/cashgo.jpg",
    code: "https://github.com/fabiconcept",
    projectLink: "https://play.google.com/store/apps/details?id=com.de_developer.cashgo&pcampaignid=web_share",
    tech: [
      "nextjs",
      "mongodb",
      "firebase",
      "typescript",
      "react",
    ],
    description: "CashGo is a Nigerian loan app where I developed the Users & Administration backend. Initially built with Next.js and MongoDB, the backend was later migrated to Firebase for improved scalability and performance.",
    modalContent: (
      <>
        <p>
          CashGo is a Nigerian loan application designed to provide seamless financial services to users. I developed the backend for user management and administration, ensuring secure and efficient data handling.
        </p>
        <p>
          The project began with a stack of Next.js and MongoDB, leveraging their strengths in building scalable web applications. Later, the backend was migrated to Firebase to enhance scalability, reliability, and real-time data synchronization.
        </p>
        <h2>Features</h2>
        <ul>
          <li>Robust User Management: Secure and efficient handling of user data.</li>
          <li>Administration Panel: Comprehensive backend for managing operations.</li>
          <li>Tech Stack Evolution: Migration from MongoDB to Firebase for better scalability.</li>
          <li>Built with TypeScript: Ensures type safety and better development practices.</li>
        </ul>
        <p>
          CashGo is a testament to the power of modern web development tools and showcases an evolution from traditional database systems to cloud-based solutions for optimal performance.
        </p>
      </>
    ),
  },
  {
    title: "MonoClient",
    imgSrc: "https://pickholder.sirv.com/Images/mono.png",
    code: "https://github.com/fabiconcept/mono-client-package",
    projectLink: "https://www.npmjs.com/package/mono-client",
    tech: [
      "typescript",
      "npm-package",
    ],
    description: "MonoClient is a TypeScript package that provides a simple and intuitive way to interact with the Mono API. It streamlines managing customer data, retrieving bank lists, and performing other API operations with minimal setup and built-in error handling.",
    modalContent: (
      <>
        <p>
          MonoClient is a TypeScript package that offers a simple and efficient solution for interacting with the Mono API. Whether you&apos;re managing customer data, retrieving bank lists, or handling other API operations, MonoClient ensures a seamless and intuitive experience.
        </p>
        <p>
          With its easy integration process and intuitive methods, this package allows developers to connect with the Mono API quickly and efficiently. The package is designed to make the development process smoother by leveraging TypeScript for type safety and better overall reliability.
        </p>
        <h2>Features</h2>
        <ul>
          <li>Easy Integration: Connect to the Mono API with minimal setup.</li>
          <li>Intuitive Methods: Access common API endpoints with clearly defined methods.</li>
          <li>TypeScript Support: Take advantage of TypeScript for type safety and an improved development experience.</li>
          <li>Error Handling: Robust error handling ensures smooth API interactions.</li>
        </ul>
        <p>
          By combining the strengths of TypeScript and the Mono API, MonoClient offers a powerful tool for developers to manage API operations effectively and efficiently.
        </p>
      </>
    ),
  },
  {
    title: "AmeriCare",
    imgSrc: "https://pickholder.sirv.com/Images/americare.png",
    code: "https://github.com/fabiconcept/americare",
    projectLink: "https://www.americareinhome.com/",
    tech: [
      "Typescript",
      "Tailwind",
      "React",
      "Next.js",
      "nextjs-toploader",
      "framer-motion",
      "swiper"
    ],
    description: "AmeriCare is a compassionate in-home care service founded in 2021, dedicated to improving the lives of the elderly and medically fragile children. With a heartfelt commitment to comfort and healing, AmeriCare serves the community with compassion and care.",
    modalContent: (
      <>
        <p>
          At AmeriCare, we believe that care is more than a service; it&apos;s a heartfelt commitment to improving the lives of the elderly and medically fragile children. Founded in 2021, our journey began with a simple yet profound mission—to bring comfort, healing, and compassion to those who need it most.
        </p>
        <p>
          Our founder, Calvin Wilkinson, grew up in Atlanta, a city known for its vibrant communities and warm embrace. He learned early the power of healing and the significance of community. Mr. Wilkinson pursued a degree in Biology from the College of William and Mary, followed by a Master&apos;s in Public Health from Mercer University, where he encountered stories that would shape AmeriCare.
        </p>
        <h2>Why AmeriCare?</h2>
        <p>
          AmeriCare&apos;s mission is rooted in providing compassionate in-home care to the elderly and medically fragile children. We believe in delivering comfort and healing where it&apos;s needed most, ensuring that every individual receives the care they deserve.
        </p>
        <p>
          By focusing on the personal stories that shaped our founder&apos;s journey, AmeriCare stands as a beacon of hope and compassion in the healthcare industry, offering in-home services to those who need them the most.
        </p>
      </>
    ),
  },
  {
    title: "Goldwater Home Loans Experts",
    imgSrc: "https://pickholder.sirv.com/Images/goldwater.png",
    code: "https://github.com/fabiconcept/golden-gates",
    projectLink: "https://www.goldwaterhomeloans.com/",
    tech: [
      "Typescript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
    description: "Goldwater Home Loans Experts is a comprehensive platform offering tailored home financing solutions. With a focus on transparency, expertise, and personalized service, Goldwater helps clients navigate the homeownership journey with confidence.",
    modalContent: (
      <>
        <p>
          Goldwater Home Loans Experts is dedicated to providing personalized and transparent home financing solutions. Whether you&apos;re a first-time homebuyer or exploring refinancing options, our platform offers tailored loan programs to meet your unique financial needs.
        </p>
        <p>
          With a team of seasoned experts, we strive to make the home financing process seamless, providing clear guidance and support at every step. Our commitment to transparency ensures that you fully understand each stage of your homeownership journey.
        </p>
        <h2>Key Features</h2>
        <ul>
          <li>Tailored Loan Programs: Choose from a variety of loan options customized for your financial situation.</li>
          <li>Expert Guidance: Work with experienced professionals who provide personalized support throughout the process.</li>
          <li>Transparent Processes: Enjoy clear communication and a straightforward approach to home financing.</li>
        </ul>
        <p>
          Goldwater Home Loans Experts is your trusted partner in securing the ideal home loan, offering a smooth, expert-driven process to help you achieve your homeownership goals.
        </p>
      </>
    ),
  },
  {
    title: "GitHub Repository Explorer",
    imgSrc: "https://pickholder.sirv.com/Images/github.jpg",
    code: "https://github.com/fabiconcept/github-search-app",
    projectLink: "https://github-search-app-chi.vercel.app",
    tech: [
      "typescript",
      "react-redux",
      "next",
      "octokit",
      "react-icons",
      "nextjs-toploader",
      "@reduxjs/toolkit",
    ],
    description: "GitHub Repository Explorer is a web application developed with TypeScript and Next.js, allowing users to search for GitHub repositories, view details, and explore repositories based on various criteria. This project provides a modern and dynamic user interface.",
    modalContent: (
      <>
        <p>
          GitHub Repository Explorer is an exciting web application developed with TypeScript and Next.js, offering users a seamless experience in exploring GitHub repositories. The project was born out of the need for a modern, dynamic, and user-friendly interface to interact with GitHub repositories.
        </p>
        <p>
          With a focus on simplicity and efficiency, this application allows users to effortlessly search for repositories, view detailed information, and explore based on various criteria. The clean and responsive design ensures a delightful experience on a range of devices.
        </p>
        <h2>Why GitHub Repository Explorer?</h2>
        <p>
          The inspiration behind this project lies in providing developers and GitHub enthusiasts with a tool that simplifies the process of discovering and understanding repositories. Whether you&apos;re looking for specific projects, exploring trending repositories, or just curious about what&apos;s out there, GitHub Repository Explorer is your go-to solution.
        </p>
        <p>
          By combining the power of TypeScript, Next.js, and the GitHub API, this application delivers a robust and efficient way to interact with the vast world of GitHub. It&apos;s not just a tool; it&apos;s a gateway to a richer and more streamlined GitHub exploration experience.
        </p>
      </>
    ),
  },  
  {
    title: "Wilkinson & Regis Website Project",
    imgSrc: "https://pickholder.sirv.com/Images/Web%20capture_16-12-2023_14436_localhost.jpeg",
    code: "https://github.com/WilkinsonandRegis/landing-page",
    projectLink: "http://wilkinsonregis.com/",
    tech: ["nextjs", "css", "tailwind", "react-icons", "google-map", "emailjs"],
    description: "The Wilkinson & Regis Website Project involved the development of a modern and user-friendly landing page. Leveraging technologies such as Next.js, CSS, Tailwind, React Icons, Google Maps integration, and EmailJS, the website serves as a crucial online presence for Wilkinson & Regis.",
    modalContent: (
      <>
        <p>
          The Wilkinson & Regis Website Project plays a pivotal role in enhancing the online visibility of the company. It provides visitors with a seamless and informative experience, showcasing the services offered by Wilkinson & Regis in buying houses and apartment complexes.
        </p>
        <p>
          The challenges faced during the development process were overcome with the integration of cutting-edge technologies. The use of Next.js ensures a performant and responsive user interface, while Tailwind and CSS contribute to a visually appealing design.
        </p>
        <p>
          The website incorporates Google Maps for a location-based perspective and utilizes EmailJS for efficient communication. This tech stack not only elevates the user experience but also aligns with Wilkinson & Regis&apos;s commitment to innovation in real estate services.
        </p>
        <p>
          Wilkinson & Regis, with over 28 years of experience, is a family-owned and operated real estate investment firm. The website reflects their dedication to providing a hassle-free selling experience and serves as a valuable tool in achieving their real estate goals.
        </p>
      </>
    ),
  },
  {
    title: "Linktree Clone",
    imgSrc: "https://pickholder.sirv.com/Images/linktree.jpeg",
    code: "https://github.com/fabiconcept/linktree",
    projectLink: "https://linktree-fabiconcept.vercel.app",
    tech: ["Next.js", "Tailwind CSS", "React Beautiful DnD", "React Hot Toast", "bad-words", "crypto-js", "js-cookie", "qrcode.react", "react-confetti", "react-share"],
    description: "I'm recreating Linktree using Next.js and Tailwind CSS for user admin features. Linktree lets users create personal link pages. This builds my skills in Next.js and Tailwind CSS.",
    modalContent: (
      <>
        <p>
          This project is a dedication to the remarkable system developed by Linktree. With aspirations to replicate their success, I&apos;ve embarked on the journey to build a similar platform. Utilizing the power of Next.js and the flexibility of Tailwind CSS, my focus lies on crafting the user administration side, complete with robust login and sign-up functionalities, in addition to an efficient user links page.
        </p>
        <h2>Features</h2>
        <ul>
          <li className="pl-2">User authentication: Enabling a secure login and sign-up mechanism for users.</li>
          <li className="pl-2">User admin dashboard: Crafting an intuitive interface for users to effortlessly manage their links and tailor their profiles to their liking.</li>
          <li className="pl-2">User links page: Establishing a dedicated space where users can seamlessly add, edit, and organize their links, each with personalized titles and descriptions.</li>
        </ul>
        <h2>Technologies Used</h2>
        <ul>
          <li className="pl-2">Next.js: A robust React framework designed for building server-rendered applications.</li>
          <li className="pl-2">Tailwind CSS: A dynamic CSS framework that expedites UI development through its utility-first approach.</li>
          <li className="pl-2">React Beautiful DnD: An indispensable library for implementing smooth drag and drop interactions within React applications.</li>
          <li className="pl-2">React Hot Toast: A notification library designed to facilitate toast-style notifications within React projects.</li>
          <li className="pl-2">React Icons: A collection of iconic React components that facilitate easy integration of popular icons.</li>
          <li className="pl-2">bad-words: Utilized to discreetly filter out sensitive words on the Links Page, employed only when no warnings are raised.</li>
          <li className="pl-2">crypto-js: Employed for robust encryption of my Cookie Session data.</li>
          <li className="pl-2">js-cookie: Leveraged for simplifying the creation, retrieval, deletion, and editing of cookie data.</li>
          <li className="pl-2">qrcode.react: Instrumental in generating unique QR codes tailored to individual users.</li>
          <li className="pl-2">react-confetti: A creative touch, adding a confetti-themed background to enhance the visual experience.</li>
          <li className="pl-2">react-share: Facilitating effortless sharing of user links across various social media platforms.</li>
        </ul>
      </>
    )
  },
  {
    title: "Photobooth",
    imgSrc: "https://pickholder.sirv.com/Images/photoboot.jpeg",
    code: "https://github.com/fabiconcept/photobooth",
    projectLink: "https://photobooth-alpha.vercel.app/",
    tech: ["autoprefixer", "eslint", "eslint-config-next", "next", "postcss", "react", "react-dom", "react-hot-toast", "react-icons", "react-masonry-css", "tailwindcss" ],
    description: "Photobooth is a web app for exploring photos. Infinite scroll galleries from pixel.com API on the homepage, and a search page with a logo and search bar. Clone, install, update API key, and start the server to use.", 
    modalContent: (
      <>
        <p>
          Photobooth is a captivating web application that brings the world of photography to your fingertips. With its user-friendly interface and stunning visuals, this app allows you to explore and search for a wide range of captivating photos.
        </p>
        <p>
          The homepage of Photobooth is a visual feast. It presents a gallery of images sourced from the pixel.com API, and thanks to the innovative infinite scroll feature, you can keep discovering more images as you scroll down. The masonry layout adds a touch of elegance to the arrangement, ensuring each image fits together seamlessly.
        </p>
        <p>
          Searching for specific images is a breeze with Photobooth. The search results page offers a navigation bar that hosts the logo and a convenient search bar. Enter your desired search term, and Photobooth will display up to 15 images that match your query, allowing you to quickly find what you&apos;re looking for.
        </p>
        <p>
          Whether you&apos;re a photography enthusiast or just want to browse mesmerizing images, Photobooth is your gateway to a world of visual delight. Don&apos;t hesitate to immerse yourself in this captivating web app and explore the countless images it has to offer.
        </p>
      </>
    ),

  },    
  {
    title: "OFFRCloud Landing Page",
    imgSrc: "https://pickholder.sirv.com/Images/Web%20capture_26-6-2023_21655_www.offrcloud.com.jpeg",
    code: "https://github.com/fabiconcept/",
    projectLink: "https://offrcloud.com",
    tech: ["React", "CSS", "vercel", "react-hot-toast", "emailjs-com", "bootstrap"],
    description:
      "The OFFRCloud landing page, a meticulously designed and informative website that introduces and highlights the features and benefits of OFFRCloud, a cutting-edge web3 development platform.",
    modalContent: (
      <>
        <p>
          OFFRCloud Landing Page is a meticulously designed and informative website that introduces and highlights the features and benefits of OFFRCloud.
          It serves as a gateway to the world of OFFRCloud&apos;s cutting-edge web3 development platform.
        </p>
        <p>
          The landing page showcases the unique offerings of OFFRCloud, presenting a captivating visual experience to visitors.
          It is built using modern web technologies, ensuring a responsive and user-friendly interface.
        </p>
        <p>
          Discover the power of OFFRCloud as it empowers developers to create decentralized applications (DApps) and smart contracts with ease.
          Gain insights into the platform&apos;s capabilities and explore the possibilities of web3 development.
        </p>
        <p>
          Whether you&apos;re a blockchain enthusiast, a developer looking to leverage web3 technologies, or simply curious about OFFRCloud,
          the OFFRCloud Landing Page provides an immersive introduction to the platform&apos;s innovative solutions.
        </p>
      </>
    ),
  },
  {
    title: "Loco GPT",
    imgSrc: "https://pickholder.sirv.com/Images/Web%20capture_26-6-2023_21536_locogpt.vercel.app.jpeg",
    code: "https://github.com/fabiconcept/locogpt",
    projectLink: "https://locogpt.vercel.app",
    tech: ["GPT 3.5 turbo", "React", "CSS", "Vercel", "Firebase"],
    description:
      "An innovative chatbot powered by the GPT-3.5 Turbo API, designed to engage in dynamic and meaningful conversations.",
    modalContent: (
      <>
        <p>
          LocoGPT is an innovative clone of the ChatGPT powered by the GPT-3.5 Turbo API.
          I built this chatbot to engage in dynamic and meaningful conversations, offering a unique user experience.
        </p>
        <p>
          The tech stack behind the LocoGPT includes React for the frontend, ensuring a responsive and interactive interface.
          The powerful language processing capabilities are provided by the GPT-3.5 Turbo API, allowing the chatbot to generate human-like responses.
        </p>
        <p>
          Whether you&apos;re looking for a virtual assistant, a conversational AI, or simply a companion to chat with,
          the LocoGPT is here to provide you with engaging and intelligent conversations.
        </p>
        <p>
          Experience the cutting-edge capabilities of natural language processing and witness the power of AI in action with the LocoGPT.
        </p>
      </>
    ),
  },
  {
    title: "FlipMatch",
    imgSrc: "https://pickholder.sirv.com/Images/Web%20capture_26-6-2023_21149_chic-custard-be2573.netlify.app.jpeg",
    code: "https://github.com/fabiconcept/memory-game",
    projectLink: "https://chic-custard-be2573.netlify.app/",
    tech: ["React", "CSS", "Netlify"],
    description:
      "An interactive web application that challenges your memory with a flip-to-reveal image matching game, providing hours of fun and entertainment.",
    modalContent: (
      <>
        <p>
          FlipMatch is an exciting web application that challenges your memory and visual perception with its flip-to-reveal image matching game.
          Get ready for hours of fun and entertainment!
        </p>
        <p>
          With its simple yet addictive gameplay, FlipMatch tests your ability to match pairs of hidden images by flipping them over.
          The game is powered by vanilla JavaScript and React, ensuring a smooth and interactive gaming experience.
        </p>
        <p>
          Engage in friendly competition or challenge yourself to beat your own high score.
          FlipMatch is a perfect way to sharpen your memory skills while enjoying captivating visuals.
        </p>
        <p>
          Whether you&apos;re a casual gamer or a puzzle enthusiast, FlipMatch offers a delightful gaming experience that will keep you coming back for more.
        </p>
      </>
    ),
  },
  {
    title: "Smart Home",
    imgSrc: "https://pickholder.sirv.com/Images/Web%20capture_26-6-2023_21452_lucky-sable-c6e6c9.netlify.app.jpeg",
    code: "https://github.com/fabiconcept/another_landing_page",
    projectLink: "https://lucky-sable-c6e6c9.netlify.app/",
    tech: ["React", "CSS", "Netlify"],
    description:
      "An elegant and captivating single-page landing page tailored for a fictional tech company, showcasing their unique offerings and captivating visitors. 🌈",
    modalContent: (
      <>
        <p>
          Smart Home is a beautiful single-page landing page designed for an imaginary tech company.
          This visually stunning website showcases the company&apos;s unique offerings and captivates visitors from the moment they arrive.
        </p>
        <p>
          Smart Home features a modern and minimalist design, with smooth scrolling and captivating animations.
          The website is built using React, ensuring a responsive and seamless user experience.
        </p>
        <p>
          Discover the cutting-edge solutions and innovative technologies offered by Smart Home as you navigate through its engaging sections.
          From showcasing products to highlighting key features, Smart Home presents a comprehensive overview of the company&apos;s expertise and vision.
        </p>
        <p>
          Whether you&apos;re a potential client, a curious individual, or simply appreciate great design, Smart Home&apos;s landing page is sure to leave a lasting impression.
        </p>
      </>
    ),
  },
  {
    title: "Weatherly",
    imgSrc: "https://pickholder.sirv.com/Images/Web%20capture_26-6-2023_21059_62d61b314a395b2bdbfa8119--venerable-nougat-d75b0a.netlify.app.jpeg",
    code: "https://github.com/fabiconcept/react-weather-app",
    projectLink: "https://weather.fabiconcept.online",
    tech: ["React", "CSS", "Netlify", "Redux", "RestAPI"],
    description:
      "An elegant and captivating single-page landing page tailored for a fictional tech company, showcasing their unique offerings and captivating visitors. 🌍",
    modalContent: (
      <>
        <p>
          Weatherly is a convenient weather application that provides up-to-date weather information for various locations.
          Stay informed and plan your day with ease!
        </p>
        <p>
          With its user-friendly interface, Weatherly allows you to explore weather forecasts for different locations.
          The app displays essential weather details such as temperature, humidity, wind speed, and more.
        </p>
        <p>
          Powered by reliable weather APIs, Weatherly ensures accurate and real-time weather data for your chosen locations.
          Whether you&apos;re traveling, planning outdoor activities, or simply curious about the weather, Weatherly has got you covered.
        </p>
        <p>
          Experience the convenience of Weatherly and make informed decisions based on the current and forecasted weather conditions.
        </p>
      </>
    ),
  },
  {
    title: "filter.app",
    imgSrc: "https://pickholder.sirv.com/Images/Web%20capture_26-6-2023_298_62ecf64f488b4a47c5a06a09--gregarious-boba-a87216.netlify.app.jpeg",
    code: "https://github.com/fabiconcept/photo_filter",
    projectLink: "https://62ecf64f488b4a47c5a06a09--gregarious-boba-a87216.netlify.app/",
    tech: ["React", "CSS", "Vanilla Javascript"],
    description: "A user-friendly web application that lets you add basic filters, color correct, rotation to your photos instantly.",
    modalContent: (
      <>
        <p>
          Filter.app is a captivating web application that allows you to add stunning filters to your photos in real-time.
          I designed and built this app from scratch, pouring my heart and soul into its creation.
        </p>
        <p>
          The frontend of Filter.app is powered by vanilla JavaScript and React, making it a seamless and interactive user experience.
          With a simple and intuitive user interface, Filter.app lets you effortlessly enhance your photos with various filters,
          bringing out their full potential and adding an artistic touch.
        </p>
        <p>
          Whether you&apos;re a photography enthusiast or simply looking to add some flair to your social media posts,
          Filter.app is the perfect tool to transform your ordinary photos into visually striking masterpieces.
        </p>
      </>
    ),
  },
  {
    title: "TypingMania",
    imgSrc: "https://pickholder.sirv.com/Images/Web%20capture_29-6-2023_174051_word-asteroid-game.vercel.app.jpeg",
    code: "https://github.com/fabiconcept/word_asteroid_game",
    projectLink: "https://word-asteroid-game.vercel.app/",
    tech: ["React", "CSS", "vercel"],
    description:
      "This is a simple typing game built with React.js. In this game, bubbles of words fall from the top of the screen and the player must type out the words on the bubbles using their keyboard. 💻",
    modalContent: (
      <>
        <p>
          TypingMania is an addictive typing game built with React.js that will put your typing skills to the test.
          Get ready to improve your speed and accuracy in a fun and engaging way!
        </p>
        <p>
          In this game, bubbles of words fall from the top of the screen, and your mission is to type out the words on the bubbles using your keyboard.
          The objective is to shoot as many bubbles as possible before they reach the bottom of the screen.
        </p>
        <p>
          With its captivating gameplay and vibrant visuals, TypingMania offers an immersive typing experience.
          The game mechanics are implemented using React.js, providing a responsive and interactive interface.
        </p>
        <p>
          Challenge yourself to beat your own high score or compete with friends to see who can type the fastest.
          TypingMania is not only a game but also a great way to enhance your typing speed and accuracy.
        </p>
      </>
    ),
  },
  {
    title: "CoinMarketCap Clone",
    imgSrc: "https://pickholder.sirv.com/Images/gecko.jpg",
    code: "https://github.com/fabiconcept/my_coinmarket",
    projectLink: "https://sparkly-fox-4bd131.netlify.app/",
    tech: ["React", "CSS", "Netlify", "Redux", "React-chartjs-2", "bootstrap", "Fontawesome"],
    description: "CoinMarketCap Clone is my personal project where I aim to recreate the functionality and design of the popular cryptocurrency market data platform.",
    modalContent: (
      <>
        <p>
          CoinMarketCap Clone is my personal project where I aim to recreate the functionality and design of the popular cryptocurrency market data platform.
          This project is a testament to my continuous learning and growth as a developer.
        </p>
        <p>
          Building upon the lessons learned from my previous project, the Weather App, I encountered challenges with handling promises from API request responses.
          However, through perseverance and continuous learning, I have gained a solid understanding of handling asynchronous operations and resolving related issues.
        </p>
        <p>
          The CoinMarketCap Clone is being developed using a combination of vanilla JavaScript, HTML, and CSS to replicate the user interface and functionalities.
          It involves fetching real-time cryptocurrency data from external APIs and presenting it in an organized and user-friendly manner.
        </p>
        <p>
          By taking on this project, I aim to further enhance my skills in data manipulation, API integration, and creating dynamic user interfaces.
          It is a challenging yet exciting endeavor that allows me to expand my knowledge and contribute to the crypto community.
        </p>
      </>
    ),
  },
  {
    title: "Ideal-Shuffle",
    imgSrc: "https://pickholder.sirv.com/Images/Web%20capture_29-6-2023_17473_dapper-puffpuff-ea1e3b.netlify.app.jpeg",
    code: "https://github.com/fabiconcept/ideal-shuffle",
    projectLink: "https://dapper-puffpuff-ea1e3b.netlify.app/",
    tech: ["React", "CSS", "Netlify", "bootstrap"],
    description: "Ideal-Shuffle is a feature-packed music player web application designed to enhance your listening experience. With a wide range of functionalities, it offers everything you need for seamless music playback.",
    modalContent: (
      <>
        <p>
          Ideal-Shuffle is a feature-packed music player web application designed to enhance your listening experience. 
          With a wide range of functionalities, it offers everything you need for seamless music playback.
        </p>
        <p>
          The key features of Ideal-Shuffle include a music playlist, play, pause, next, previous, seek, mute, shuffle, and repeat options. 
          Whether you want to create your personalized playlist or enjoy the shuffle mode, Ideal-Shuffle has got you covered.
        </p>
        <p>
          Built with a combination of vanilla JavaScript and React, the music player ensures smooth playback and a responsive user interface. 
          Its intuitive controls make it easy to navigate through your music library and customize your listening experience.
        </p>
        <p>
          Whether you&apos;re in the mood for a specific song, want to discover new tracks, or simply enjoy a random shuffle of your favorites, 
          Ideal-Shuffle provides a seamless and enjoyable music listening experience.
        </p>
      </>
    ),
  },
];
