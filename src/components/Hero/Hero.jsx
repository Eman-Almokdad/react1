import "./HeroStyle.css";

const Hero = ({img , title , path}) => {

  return (
    <div className="hero" style={{backgroundImage: `URL(${img})` }}>
        {/* <img src={img} alt="" /> */}
        <h1 className={path}>{title}</h1>
    </div>
  )
}

export default Hero