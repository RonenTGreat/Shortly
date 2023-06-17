import brand from "../assets/images/icon-brand-recognition.svg";
import records from "../assets/images/icon-detailed-records.svg";
import fully from "../assets/images/icon-fully-customizable.svg";

const Advanced = () => {
  return (
    <>
      <section className=" bg-gray-100 py-10 lg:pt-20 lg:pb-48">
        <div className="max-width">
          <h2 className=" text-4xl font-bold mb-3 mt-28 text-veryDarkBlue text-center">
            Advanced Statistics
          </h2>
          <p className=" text-slate-300 text-center mb-10 lg:mb-20">
            Track how your links are performing across the web with <br /> our
            advanced statistics dashboard
          </p>

          <div className="relative card grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3 md:gap-5 ">
            <div className="line"></div>
            <article className=" bg-white p-8 rounded relative">
              <img
                src={brand}
                alt=""
                className=" p-3 -mt-16 bg-darkViolet rounded-full"
              />
              <h3 className=" text-veryDarkBlue text-lg mb-2 mt-5 font-bold">
                Brand Recognition
              </h3>
              <p className=" text-slate-300 text-sm">
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instill confidence in
                your content.
              </p>
            </article>

            <article className=" bg-white p-8 rounded relative">
              <img
                src={records}
                alt=""
                className=" p-3 -mt-16 bg-darkViolet rounded-full"
              />
              <h3 className=" text-veryDarkBlue text-lg mb-2 mt-5 font-bold">
                Detailed Records
              </h3>
              <p className=" text-slate-300 text-sm">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </article>

            <article className=" bg-white p-8 rounded relative">
              <img
                src={fully}
                alt=""
                className=" p-3 -mt-16 bg-darkViolet rounded-full"
              />
              <h3 className=" text-veryDarkBlue text-lg mb-2 mt-5 font-bold">
                Fully Customizable
              </h3>
              <p className=" text-slate-300 text-sm">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Advanced;
