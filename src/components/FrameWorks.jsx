import codeIgniterIcon from "../assets/images/codeIgniter.png";
import vueIcon from "../assets/images/vue.png";
import reactIcon from "../assets/images/logo.svg";
import nestIcon from "../assets/images/nest.png";
import mySQLIcon from "../assets/images/mySQL.png";
import graphQLIcon from "../assets/images/graphQL.png";
import jestIcon from "../assets/images/jest.png";
import JqueryIcon from "../assets/images/Jquery.png";
import bootstrapIcon from "../assets/images/bootstrap.png";
import expressIcon from "../assets/images/express.png"
import dockerIcon from "../assets/images/docker.png"
import firebaseIcon from "../assets/images/firebase.png"
import socketIOIcon from "../assets/images/socket.png"
import redisIcon from "../assets/images/redis.png"
import nodeIcon from "../assets/images/nodejs-logo.png"
import mongoIcon from "../assets/images/mongodb-logo.svg"
import rabbitMQIcon from "../assets/images/rabbitmq.png";
import nginxIcon from "../assets/images/nginx-logo.png";

function Frameworks() {
  const frameworks = [
    { icon: vueIcon, alt: "Vue JS" },
    { icon: reactIcon, alt: "React JS" },
    { icon: nodeIcon, alt: "Node JS" },
    { icon: nestIcon, alt: "Nest JS" },
    { icon: graphQLIcon, alt: "GraphQL" },
    { icon: mySQLIcon, alt: "MySQL" },
    { icon: codeIgniterIcon, alt: "Code Ignitor" },
    { icon: jestIcon, alt: "Jest" },
    { icon: bootstrapIcon, alt: "Bootstrap" },
    { icon: JqueryIcon, alt: "JQuery" },
    { icon: expressIcon, alt: "Express" },
    { icon: dockerIcon, alt: "Docker" },
    { icon: firebaseIcon, alt: "Firebase" },
    { icon: socketIOIcon, alt: "SocketIO" },
    { icon: redisIcon, alt: "Redis" },
    { icon: mongoIcon, alt: "Mongo DB" },
    { icon: rabbitMQIcon, alt: "RabbitMQ" },
    { icon: nginxIcon, alt: "NGINX" },



  ];
  return (
    <div className="text-center mx-auto mt-4">
      <div className="row g-0">
        {frameworks.map((framework, index) => (
          <div key={index} className="col-lg-2 col-md-3 col-4">
            <img
              height="90"
              width="90"
              src={framework.icon}
              alt={framework.alt}
              className="object-contain mx-2 my-3"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Frameworks;
