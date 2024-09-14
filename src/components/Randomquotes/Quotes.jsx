import "./Quotes.css";
import reload from "../../assets/free-refresh-icon-3104-thumb.png";
import twitter from "../../assets/free-refresh-icon-3104-thumb.png";
import { useState } from "react";
// import twitter from "../../assets/png-transparent-twitter-social-icons-grey-icon.png";

const Quotes = () => {
  const [quotes, setquotes] = useState({
    quote: "If you want to lift yourself up, lift up someone else.",
    author: "Booker T. Washington",
  });

  async function changing() {
    // eslint-disable-next-line no-unused-vars
    const quotes = fetch("https://dummyjson.com/quotes/random")
      .then((res) => res.json())
      .then((msg) => changes(msg));
  }
  function changes(data) {
    setquotes(data);
  }

  return (
    <div className="main">
      <div className="container">
        <div className="top">
          <h2>{quotes.quote}</h2>
        </div>
        <div className="btm">
          <div className="line"></div>
          <div className="single">
            <div className="author">
              <h6>{quotes.author}</h6>
            </div>
            <div className="icon">
              <img
                src={reload}
                alt=""
                onClick={() => {
                  changing();
                }}
              />
              <img src={twitter} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
