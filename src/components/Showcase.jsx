import showcase from "../assets/images/illustration-working.svg";

const Showcase = () => {
  return (
    <>
      <section className="py-10 lg:py-20">
        <div className="max-width grid grid-cols-1 grid-5 md:grid-cols-2 md:gap-10 md:place-items-center">
          <article className="text-center md:text-left">
            <h1 className=" text-4xl lg:text-6xl mb-5 font-bold text-veryDarkBlue">
              More than just shorter links
            </h1>
            <p className="lg:text-lg text-slate-300 mb-10">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className="btn-cta rounded-full">Get Started</button>
          </article>

          <article>
            <img src={showcase} alt="Shortly" />
          </article>
        </div>
      </section>
    </>
  );
};

export default Showcase;
