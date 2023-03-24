import "../assets/styles/smartphone.css"
function SmartPhone(props) {
  return (
    <div
      style={{ background: "linear-gradient(90deg, #2A2C2F 0%, #80868A 20.83%, #80868A 77.08%, #2A2C2F 100%)" ,  height: "340px", width: "200px" }}
      className="smartphone rounded-4 py-4 px-2"
    >
      <div
        style={{ backgroundColor: "#333", height: "5px" }}
        className="text-center w-25 mx-auto mb-3"
      ></div>
      <div
        style={{ backgroundColor: "#333", height: "97%" }}
        className="content"
      >
        <img
          className="w-100 h-100"
          src={props.image}
          alt={props.alt}
        />
      </div>
      {/* <div
        style={{
          backgroundColor: "#333",
          height: "30px",
          width: "30px",
        }}
        className="text-center mx-auto mt-3 rounded-circle"
      ></div> */}
    </div>
  );
}

export default SmartPhone;
