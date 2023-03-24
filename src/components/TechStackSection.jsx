import javaIcon from "../assets/images/java.png";
import phpIcon from "../assets/images/php.png";
import jsIcon from "../assets/images/js.png";
import TechStackCard from "./TechStackCard";
import Frameworks from "./FrameWorks";

function TechStackSection() {
  const programmingLanguages = [
    {
      name: "javascript",
      image: jsIcon,
      text: "My all time favourite programming language",
    },
    {
      name: "java",
      image: javaIcon,
      text: "Love learning and implementing algorithms using java",
    },
    {
      name: "php",
      image: phpIcon,
      text: "Always in handy for building quick and lightweight web systems",
    },
  ];

  return (
    <section className="bg-secondary py-5">
      <section className="container about" id="about">
        <div className="row my-5 text-center">
          <h1 className="heading mb-5">Favourite Programming Languages</h1>
          <div className="row text-center mx-auto mt-4">
            {programmingLanguages.map((language) => (
              <TechStackCard
                className="col-md-6 col-lg-4 pb-5 text-decoration-none"
                key={language.name}
                image={language.image}
                text={language.text}
              />
            ))}
          </div>
        </div>
        <div className="row my-5 text-center">
          <h1 className="heading mb-5">Frameworks And Technologies</h1>
          <Frameworks />
        </div>
      </section>
    </section>
  );
}

export default TechStackSection;
