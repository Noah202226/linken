"use client";
import useTheme from "../stores/useTheme";

const Hero = () => {
  const { theme } = useTheme((state) => state);
  return (
    <div
      className={`hero h-screen `}
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
      data-theme={theme}
    >
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="w-full  flex items-center justify-between">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">
              Empowering Innovation through Cutting-Edge Software
            </h1>

            <button className="btn btn-primary">Explore Our Services</button>
          </div>
          <p className="mb-5 w-11/12">
            We specialize in crafting software solutions that drive innovation,
            transform businesses, and elevate user experiences. Our mission is
            to empower organizations with technology that not only meets their
            needs but also sets new standards for excellence. With a relentless
            commitment to quality and innovation, we're your partners in
            achieving digital success. Explore our services and discover how we
            can turn your ideas into reality.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Hero;
