import { useEffect, useState } from "react";
import "./App.css";
import Loading from "./components/Loading";

function App() {
  const [QuoteText, setQuoteText] = useState("");
  const [Category, setCategory] = useState("");
  const [Load, setLoad] = useState(true);

  const CategoryChangeHandler = (event) => {
    setCategory(event.target.value);
  };

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-Api-Key": "7HgwUChpUFFjDI3nTR8AnE3uJ1Ni2W59jkqethIn",
      },
    };
  if (Load === true) {
    setLoad(false);
      fetch(
        `https://api.api-ninjas.com/v1/quotes?category=${Category}`,
        options
      )
        .then((response) => response.json())
        .then((response) => setQuoteText(response[0].quote))
        .catch((err) => console.error(err));
  }
    },[Load]);

    console.log(QuoteText);

  const SetQuote = (event) => {
    event.preventDefault();
    setLoad(true);
    setQuoteText("");
  };
  return (
    <>
      <div className="banner">
        <div className="content">
          <h2>
            Quote
            <br />
            <b>Generator</b>
          </h2>
          <form className="QuoteBox">
            {QuoteText==="" && <Loading />}
            {QuoteText !== "" && (
              <div className=".container">
                <h6 className="GradientBorder">{QuoteText}</h6>
              </div>
            )}
            <div className="btns">
              <input
                list="Categories"
                value={Category}
                onChange={CategoryChangeHandler}
                className="select"
                placeholder="Select Category"
              />
              <datalist id="Categories">
                <option value=""></option>
                <option value="age"></option>
                <option value="alone"></option>
                <option value="amazing"></option>
                <option value="anger"></option>
                <option value="architecture"></option>
                <option value="art"></option>
                <option value="attitude"></option>
                <option value="beauty"></option>
                <option value="best"></option>
                <option value="birthday"></option>
                <option value="business"></option>
                <option value="car"></option>
                <option value="change"></option>
                <option value="communications"></option>
                <option value="computers"></option>
                <option value="cool"></option>
                <option value="courage"></option>
                <option value="dad"></option>
                <option value="dating"></option>
                <option value="death"></option>
                <option value="design"></option>
                <option value="dreams"></option>
                <option value="education"></option>
                <option value="environmental"></option>
                <option value="equality"></option>
                <option value="experience"></option>
                <option value="failure"></option>
                <option value="faith"></option>
                <option value="family"></option>
                <option value="famous"></option>
                <option value="fear"></option>
                <option value="fitness"></option>
                <option value="food"></option>
                <option value="forgiveness"></option>
                <option value="freedom"></option>
                <option value="friendship"></option>
                <option value="funny"></option>
                <option value="future"></option>
                <option value="god"></option>
                <option value="good"></option>
                <option value="government"></option>
                <option value="graduation"></option>
                <option value="great"></option>
                <option value="happiness"></option>
                <option value="health"></option>
                <option value="history"></option>
                <option value="home"></option>
                <option value="hope"></option>
                <option value="humor"></option>
                <option value="imagination"></option>
                <option value="inspirational"></option>
                <option value="intelligence"></option>
                <option value="jealousy"></option>
                <option value="knowledge"></option>
                <option value="leadership"></option>
                <option value="learning"></option>
                <option value="legal"></option>
                <option value="life"></option>
                <option value="love"></option>
                <option value="marriage"></option>
                <option value="medical"></option>
                <option value="men"></option>
                <option value="mom"></option>
                <option value="money"></option>
                <option value="morning"></option>
                <option value="movies"></option>
                <option value="success"></option>
              </datalist>
              <button className="button-73" onClick={SetQuote} >
                Get Quote
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
