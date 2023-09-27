"use client";
import useTheme from "../stores/useTheme";

const Hero = () => {
  const { theme } = useTheme((state) => state);
  return (
    <div className={`hero h-screen `} data-theme={theme}>
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
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            {/* Title modal */}
            <div className="h-full flex items-center justify-between relative">
              <h3 className="font-bold text-lg">
                What kind of Software you want to get?
              </h3>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-ghost absolute top-0 right-0">
                    X
                  </button>
                </form>
              </div>
            </div>

            <div className="h-full flex flex-col items-center justify-between">
              <select className="select select-primary w-full max-w-xs">
                <option disabled selected>
                  Software Type
                </option>
                <option>Web Application</option>
                <option>Desktop Application</option>
              </select>

              <select className="select select-primary w-full max-w-xs">
                <option disabled selected>
                  Software for
                </option>
                <option>Company Website</option>
                <option>Desktop Application</option>
              </select>
              <button className="btn">Submit</button>
            </div>
          </div>
        </dialog>

        <div className="w-full  flex flex-col md:flex-row items-center justify-between">
          <div className="mt-20 md:mt-0">
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
