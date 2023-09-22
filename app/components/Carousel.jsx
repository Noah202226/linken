import Image from "next/image";

const Carousel = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="carousel w-10/12  z-0">
        <div id="slide1" className="carousel-item flex relative w-full">
          <div className="card bg-base-100 shadow-xl image-full">
            <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
              <div className="carousel-item">
                <img src="/linken.png" className="rounded-box" />
              </div>
              <div className="carousel-item">
                <img src="/linken.png" className="rounded-box" />
              </div>
              <div className="carousel-item">
                <img
                  src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                  className="rounded-box"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/images/stock/photo-1494253109108-2e30c049369b.jpg"
                  className="rounded-box"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                  className="rounded-box"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/images/stock/photo-1559181567-c3190ca9959b.jpg"
                  className="rounded-box"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                  className="rounded-box"
                />
              </div>
            </div>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>

            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Carousel;
