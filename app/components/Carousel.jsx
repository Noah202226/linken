import Image from "next/image";

const Carousel = () => {
  return (
    <>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://www.mentorworks.ca/wp-content/uploads/2021/01/bigstock-Technology-in-the-hands-of-bus-36413044-3.jpg"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://www.worldbank.org/content/dam/photos/780x439/2017/sep-2/MY_Future_of_manufacturing_780x439.JPG"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://www.mentorworks.ca/wp-content/uploads/2021/01/bigstock-Technology-in-the-hands-of-bus-36413044-3.jpg"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://www.worldbank.org/content/dam/photos/780x439/2017/sep-2/MY_Future_of_manufacturing_780x439.JPG"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </>
  );
};
export default Carousel;
