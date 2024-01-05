export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Ankit</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack
              Developer </span>{" "}
            <br /> & <br /> Competitive Coder
          </h1>

        </div>
        <br />
        <a href="https://drive.google.com/file/d/1zHK2jzP-KEAc4XwOemvPWOFX0V8MuxeM/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
          <button className="btn btn-primary">Resume</button>
        </a>

        <div className="social_icon">


          <div className="social_icon_block">
            <a href="https://linkedin.com/in/ankitsingh28" target="_blank" rel="noopener noreferrer">
              <img
                src="./img/linkedin.png"
                alt="icon_social"
                className="my-image-button"
              />
            </a>
          </div>

          <div className="social_icon_block">
            <a href="https://github.com/itsankitksingh" target="_blank" rel="noopener noreferrer">
              <img
                src="./img/github.png"
                alt="icon_social"
                className="my-image-button"
              />
            </a>
          </div>

          <div className="social_icon_block">
            <a href="https://leetcode.com/ankitksingh/" target="_blank" rel="noopener noreferrer">
              <img
                src="./img/leetcode.png"
                alt="icon_social"
                className="my-image-button"
              />
            </a>
          </div>

          <div className="social_icon_block">
            <a href="https://codeforces.com/profile/ankitksingh" target="_blank" rel="noopener noreferrer">
              <img
                src="./img/codeforces.png"
                alt="icon_social"
                className="my-image-button"
              />
            </a>
          </div>

          <div className="social_icon_block">
            <a href="https://twitter.com/Ankitksinghh/" target="_blank" rel="noopener noreferrer">
              <img
                src="./img/x.png"
                alt="icon_social"
                className="my-image-button"
              />
            </a>
          </div>
        </div>


      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
