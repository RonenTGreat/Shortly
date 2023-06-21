import { useEffect, useState } from "react";
import bgMobile from "../assets/images/bg-shorten-mobile.svg";
import bgDesktop from "../assets/images/bg-shorten-desktop.svg";

const getLocalStorage = () => {
    let links = localStorage.getItem("links")

    if(links){
        return JSON.parse(localStorage.getItem("links"))
    }else{
        return []
    }
}

const Shorten = () => {
  const [text, setText] = useState("");
  const [links, setLinks] = useState(getLocalStorage());
  const [buttonText, setButtonText] = useState("Copy")

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlRegex =
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\\/\w.-]*)*\/?$/;

    if (!text) {
      alert("Input is empty");
    } else {
      if (urlRegex.test(text)) {
        const shortenLink = async () => {
          const res = await fetch(
            `https://api.shrtco.de/v2/shorten?url=${text}`
          );
          const data = await res.json();

          console.log(data.result);
          setLinks(data.result);
          setText("");
        };
        shortenLink();
      } else {
        alert("Invalid URL!");
      }
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(links.full_short_link)
    setButtonText("Copied")
}

useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links))
}, [links])

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
            <button
              className="btn-cta rounded-lg w-full md:w-40 md:ml-5"
              type="submit"
              onClick={handleSubmit}
            >
              Shorten It!
            </button>
          </div>
        </form>

        <div className="flex flex-col items-center justify-center bg-white
        md:flex-row md:justify-between p-3 mt-3 rounded-lg shadow">
          <article>
            <h6 className=" mb-3 md:mb-0">{links.original_link}</h6>
          </article>

          <article>
            <ul className="md:flex items-center">
              <li className="md:mr-5">
                <button className=" text-cyan">{links.full_short_link}</button>
              </li>
              <li>
                <button onClick={handleCopy} className="btn-cta rounded-lg text-sm focus:bg-darkViolet">{buttonText}</button>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
};

export default Shorten;
