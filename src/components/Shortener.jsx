import { useEffect, useState } from "react";
import bgMobile from "../assets/images/bg-shorten-mobile.svg";
import bgDesktop from "../assets/images/bg-shorten-desktop.svg";

const getLocalStorage = () => {
  let links = localStorage.getItem("links");

  if (links) {
    return JSON.parse(localStorage.getItem("links"));
  } else {
    return [];
  }
};

const Shorten = () => {
  const [text, setText] = useState("");
  const [links, setLinks] = useState(getLocalStorage());
  const [buttonText, setButtonText] = useState("Copy");
  const [isEmpty, setIsEmpty] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isInvalidate, setIsInvalidate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlRegex =
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\\/\w.-]*)*\/?$/;

    if (!text) {
      setIsEmpty(true);
    } else {
      if (urlRegex.test(text)) {
        const shortenLink = async () => {
          const res = await fetch(
            `https://api.shrtco.de/v2/shorten?url=${text}`
          );
          const data = await res.json();

          console.log(data.result);
          setLinks(data.result);
          setIsSuccess(true);
          setText("");
          setIsInvalidate(false)
          setIsEmpty(false)
        };
        shortenLink();
      } else {
        setIsInvalidate(true);
      }
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(links.full_short_link);
    setButtonText("Copied!");
  };

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  return (
    <>
      <section className="shortener relative mx-8">
        <picture>
          <source media="(min-width: 768px)" srcSet={bgDesktop} />
          <img src={bgMobile} alt="" />
        </picture>

        <form className="form" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row">
            <input
              type="url"
              className="w-full py-2 px-5 rounded-lg mb-2 md:mb-0 md:w-2/3"
              placeholder="Shorten a link here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            {isEmpty && (
              <p className=" text-myRed text-sm lg:hidden">Please add a link</p>
            )}
            {isInvalidate && (
              <p className=" text-myRed text-sm lg:hidden">Invalidate link</p>
            )}

            <button
              className="btn-cta rounded-lg w-full md:w-40 md:ml-5"
              type="submit"
              onClick={handleSubmit}
            >
              Shorten It!
            </button>
          </div>
          {isEmpty && (
            <p className=" text-myRed text-sm hidden lg:block">
              Please add a link
            </p>
          )}
          {isInvalidate && (
            <p className=" text-myRed text-sm hidden lg:block">
              Invalidate link
            </p>
          )}
        </form>

        {isSuccess && (
          <div
            className="flex flex-col lg:items-center justify-center bg-white
        md:flex-row md:justify-between px-5 py-3 mt-3 rounded-lg shadow"
          >
            <article>
              <h6 className=" mb-3 md:mb-0">{links.original_link}</h6>
            </article>
            <hr />
            <article>
              <ul className="md:flex items-center">
                <li className="md:mr-5">
                  <button className=" text-cyan">
                    {links.full_short_link}
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleCopy}
                    className="btn-cta rounded-lg text-sm focus:bg-darkViolet w-full"
                  >
                    {buttonText}
                  </button>
                </li>
              </ul>
            </article>
          </div>
        )}
      </section>
    </>
  );
};

export default Shorten;
