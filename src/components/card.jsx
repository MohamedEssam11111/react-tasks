const Card = ({ bcolor = "yellow ", tcolor = "brown", title = "default" }) => {
  return (
    <>
      <div
        className="card-from-cardComponent"
        style={{
          backgroundColor: bcolor,
          color: tcolor,
          padding: "12px",
          margin: "10px",
          borderRadius: "8px",
        }}
      >
        <h1>HELLO</h1>
        <p>{title}</p>
        <button>click</button>
      </div>
    </>
  );
};
export default Card;
