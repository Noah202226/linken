"use client";
import useTheme from "../stores/useTheme";

const Carousel = () => {
  const { theme } = useTheme((state) => state);
  return (
    <div data-theme={theme}>
      <h1 className=" text-5xl font-bold text-center p-4">Web Applications</h1>

      <div className="carousel carousel-center max-w-fit p-2 space-x-1 bg-neutral rounded-box mx-4">
        <div className="carousel-item relative w-1/2 h-1/2">
          <div className="absolute top-0 right-1/4 p-2 w-96 flex justify-between">
            <p className="text-2xl">This is for Title</p>

            <p className="btn btn-sm">View</p>
          </div>

          <div className="flex bg-slate-800 pt-10 rounded-box">
            <img src="/rsbc-marketing.PNG" className="project-image" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Carousel;
