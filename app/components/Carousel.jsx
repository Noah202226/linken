"use client";
import useTheme from "../stores/useTheme";

const Carousel = () => {
  const { theme } = useTheme((state) => state);
  return (
    <div data-theme={theme}>
      <h1 className=" text-5xl font-bold text-center p-4">Web Applications</h1>

      <div className="carousel carousel-center max-w-fit p-2 space-x-1 bg-neutral rounded-box mx-4">
        <div className="carousel-item w-1/2 flex flex-col items-center justify-between bg-slate-800 rounded-box">
          <div className="h-full">
            <img
              src="/rsbc-marketing.PNG"
              className="project-image h-full rounded-t-box"
            />
          </div>

          <div className="bottom-0 right-1/4 p-2 w-full flex items-center justify-between">
            <p className="text-2xl">This is for Title</p>

            <p className="btn btn-sm">View</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Carousel;
