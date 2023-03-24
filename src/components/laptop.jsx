import "../assets/styles/laptop.css";
import laptopImage from "../assets/images/laptop.png"

function Laptop(props) {
  return (
    <div className="laptop">
      <img src={laptopImage} alt="" />
      <img className="screen" src={props.image} alt={props.alt}/>
    </div>
  );
}

export default Laptop;
