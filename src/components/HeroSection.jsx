import brianImage from "../assets/images/laptop2.png";

function HeroSection() {
  return (
    <section className="bg-dark">
      <div className="home container py-5 h-100" id="home">
        <div className="row d-flex px-3 h-100 mx-xl-auto px-xl-5">
          <div className="col-lg-6 col-md-5 order-md-last">
            <img
              className="w-100 img-fluid object-contain"
              src={brianImage}
              alt="Brian Nkwera"
            />
          </div>
          <div className="col-lg-6 col-md-7 py-5">
            <h1 className=" text-white">
              <span className="xl-font py-2">I'm</span>
              <span className="xxl-font text-pink logo d-block pt-4 pb-0">
                Brian 
              </span>
              <span className="text-white">Full Stack | Web developer</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
