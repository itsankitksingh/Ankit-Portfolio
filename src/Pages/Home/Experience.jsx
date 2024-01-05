import data from "../../data/index.json";

export default function Experience() {
  return (
    <section className="testimonial--section" id="testimonial">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
         
          <h1 className="sections--heading">Work experience</h1>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.testimonial?.map((item, index) => (
          <div key={index} className="testimonial--section--card">
           
            
            <div className="testimonial--section--card--author--detail">
              <img src={item.src} alt="Avatar" />
              <div>
                <p className="text-md testimonial--author--name">
                  {item.author_name}
                </p>
                <p className="text-md testimonial--author--designation">
                  {item.author_designation }
                </p>
                <p className="text-md testimonial--author--designation">
                  {item.timeline }
                </p>
                <p>
                   <br />
                </p>


                <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <ul className="text-md">
                {item.description1 && <li>{item.description1}</li>}
                  {item.description2 && <li>{item.description2}</li>}
                  {item.description3 && <li>{item.description3}</li>}
                  {item.description4 && <li>{item.description4}</li>}
                  {item.description5 && <li>{item.description5}</li>}
                </ul>
              </div >
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
