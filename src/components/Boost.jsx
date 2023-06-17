import bgMobile from "../assets/images/bg-boost-mobile.svg";
import bgDesktop from "../assets/images/bg-boost-desktop.svg";

const Boost = () => {
  return (
    <>
      <section className="boost relative">
        <picture>
          <source media="(min-width: 768px)" srcSet={bgDesktop} />
          <img src={bgMobile} alt="" />
        </picture>
        <div className="flex items-center justify-center flex-col boost-inner">
          <h2 className="mb-5 text-1xl text-white md:text-4xl font-bold text-center">Boost your links today</h2>
          <button className="btn-cta rounded-full">Get started</button>
        </div>
      </section>
    </>
  );
};

export default Boost;
