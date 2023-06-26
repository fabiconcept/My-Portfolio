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
    title: "filter.app",
    imgSrc: "https://pickholder.sirv.com/Images/Web%20capture_26-6-2023_298_62ecf64f488b4a47c5a06a09--gregarious-boba-a87216.netlify.app.jpeg",
    code: "https://github.com/fabiconcept/photo_filter",
    projectLink: "https://62ecf64f488b4a47c5a06a09--gregarious-boba-a87216.netlify.app/",
    tech: ["React", "CSS", "Vanilla Javascript"],
    description:
      "A user-friendly web application that lets you add basic filters, color correct, rotation to your photos instantly.",
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
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
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
    title: "OFFRCloud Landing Page",
    imgSrc: "https://pickholder.sirv.com/Images/Web%20capture_26-6-2023_21655_www.offrcloud.com.jpeg",
    code: "https://github.com/fabiconcept/",
    projectLink: "offrcloud.com",
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
];
