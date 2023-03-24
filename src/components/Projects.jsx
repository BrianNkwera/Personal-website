import bafredoImage from "../assets/images/bafredo.png";
import fitaboImage from "../assets/images/fitaboHome.png";
import Laptop from "./laptop";
import SmartPhone from "./Phone";
import bafredoMobile from "../assets/images/bafredoMobile.png";
import fitaboMobile from "../assets/images/fitaboMobile.png";
import HekimaMobile from "../assets/images/hekimaMobile.png";
import hekimaImage from "../assets/images/HekimaSchools.png";

function Projects() {
  const projects = [
    {
      projectName: "Bafredo electronics",
      image: bafredoImage,
      mobileImage: bafredoMobile,
      url: "https://www.bafredo.co.tz",
    },
    {
      projectName: "Fitabo",
      image: fitaboImage,
      mobileImage: fitaboMobile,
      url: "https://www.wearefitabo.com",
    },
    {
      projectName: "Hekima schools",
      image: hekimaImage,
      mobileImage: HekimaMobile,
      url: "https://hekimasch.onrender.com/",
    },
  ];

  return (
    <div className="bg-dark py-5">
      <div className="container g-0">
        <h1 className="text-white text-center mb-5">Projects</h1>
        <div className="row g-0">
          {projects.map((project, index) => (
            <div
              key={index}
              className="col-12 col-lg-6 pb-5 px-2 position-relative mb-5"
            >
              <Laptop image={project.image} alt={project.projectName} />
              <div className="position-absolute bottom-0 end-0">
                <SmartPhone
                  image={project.mobileImage}
                  alt={project.projectName}
                />
              </div>
              <div className="text-center">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={project.url}
                  className="text-decoration-none btn bg-pink text-light mx-auto my-3"
                >
                  Visit {project.projectName}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
