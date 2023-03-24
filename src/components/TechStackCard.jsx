function TechStackCard(props) {
  return (
    <div className={props.className}>
      <div className="h-100 py-5 services-icon-wap shadow px-5">
        <img
          width="150"
          height="150"
          src={props.image}
          alt="Java"
          className="object-contain"
        />
        <p className="text-secondary mt-4 fs-4">{props.text}</p>
      </div>
    </div>
  );
}

export default TechStackCard;
