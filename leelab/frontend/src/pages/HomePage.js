import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";

export default function HomePage() {
  return (
    <>
      <div id="carousel" className="carousel slide mb-4" data-bs-ride="carousel">
        <div className="carousel-inner">

          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="Lab 1" />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="Lab 2" />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="Lab 3" />
          </div>
          <div className="carousel-item">
            <img src={img4} className="d-block w-100" alt="Lab 4" />
          </div>

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      <h1 className="fw-bold">Welcome to the Lee Lab</h1>
      <p className="lead">
        Our lab focuses on cutting-edge biological research, genetics, imaging,
        and molecular pathways. Explore our people, publications, and science.
      </p>
    </>
  );
}
