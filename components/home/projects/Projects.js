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
    title: "Linktree Clone",
    imgSrc: "https://pickholder.sirv.com/Images/linktree.jpeg",
    code: "https://github.com/fabiconcept/linktree",
    projectLink: "https://linktree-fabiconcept.vercel.app",
    tech: ["Next.js", "Tailwind CSS", "React Beautiful DnD", "React Hot Toast", "bad-words", "crypto-js", "js-cookie", "qrcode.react", "react-confetti", "react-share"],
    description: "This project is my attempt at recreating the amazing system that Linktree has developed. I aim to use Next.js and Tailwind CSS to build the user admin side, including login and sign-up functionality, as well as the user links page. LinkTree is a popular platform that allows users to create a personalized landing page with multiple links to their various social media profiles or websites. By cloning LinkTree, I hope to enhance my skills as a developer and gain a deeper understanding of Next.js and Tailwind CSS.",
    modalContent: (
      <>
        <p>
          This project is a dedication to the remarkable system developed by Linktree. With aspirations to replicate their success, I&apos;ve embarked on the journey to build a similar platform. Utilizing the power of Next.js and the flexibility of Tailwind CSS, my focus lies on crafting the user administration side, complete with robust login and sign-up functionalities, in addition to an efficient user links page.
        </p>
        <h2>Features</h2>
        <ul>
          <li>User authentication: Enabling a secure login and sign-up mechanism for users.</li>
          <li>User admin dashboard: Crafting an intuitive interface for users to effortlessly manage their links and tailor their profiles to their liking.</li>
          <li>User links page: Establishing a dedicated space where users can seamlessly add, edit, and organize their links, each with personalized titles and descriptions.</li>
        </ul>
        <h2>Technologies Used</h2>
        <ul>
          <li>Next.js: A robust React framework designed for building server-rendered applications.</li>
          <li>Tailwind CSS: A dynamic CSS framework that expedites UI development through its utility-first approach.</li>
          <li>React Beautiful DnD: An indispensable library for implementing smooth drag and drop interactions within React applications.</li>
          <li>React Hot Toast: A notification library designed to facilitate toast-style notifications within React projects.</li>
          <li>React Icons: A collection of iconic React components that facilitate easy integration of popular icons.</li>
          <li>bad-words: Utilized to discreetly filter out sensitive words on the Links Page, employed only when no warnings are raised.</li>
          <li>crypto-js: Employed for robust encryption of my Cookie Session data.</li>
          <li>js-cookie: Leveraged for simplifying the creation, retrieval, deletion, and editing of cookie data.</li>
          <li>qrcode.react: Instrumental in generating unique QR codes tailored to individual users.</li>
          <li>react-confetti: A creative touch, adding a confetti-themed background to enhance the visual experience.</li>
          <li>react-share: Facilitating effortless sharing of user links across various social media platforms.</li>
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
    description: "Photobooth is a captivating web application that lets users explore and search for photos. It features a homepage with an infinite scroll gallery of images fetched from the pixel.com API, displayed in a masonry layout. The search results page includes a navigation bar with a logo text and a search bar, providing users with a way to find specific images related to their search term. Installation and usage are easy – simply clone the repository, install dependencies, update the API key, and start the development server to access the app.", 
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
          Installation and usage of Photobooth are straightforward. Simply clone the repository, navigate to the project directory, and run "npm install" to get all the necessary dependencies. Don&apos;t forget to update the API key in the code with your personal key for the pixel.com API. Once you&apos;re set up, run &apos;npm run dev&apos; to launch the development server. Open your web browser and visit http://localhost:3000 to experience the app firsthand.
        </p>
        <p>
          Photobooth relies on a selection of powerful dependencies that contribute to its seamless performance. These include autoprefixer, eslint, next.js, postcss, React, tailwindcss, and more. These technologies come together to provide a polished and efficient user experience.
        </p>
        <p>
          Whether you&apos;re a photography enthusiast or just want to browse mesmerizing images, Photobooth is your gateway to a world of visual delight. Don&apos;t hesitate to immerse yourself in this captivating web app and explore the countless images it has to offer.
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
    projectLink: "https://62d61b314a395b2bdbfa8119--venerable-nougat-d75b0a.netlify.app/",
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
