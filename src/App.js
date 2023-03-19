import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/App.css";
import { ReactComponent as Youtube } from "./assets/icons/Youtube.svg";
import { ReactComponent as Github } from "./assets/icons/Github.svg";
import { ReactComponent as React } from "./assets/icons/React.svg";
import TodoCard from "./components/TodoCard";
function App() {
  return (
    <>
      <main className="home">
        <div className="home__left">
          <div className="home__left-card">
            <div className="links">
              <p className="title">Links</p>
              <a href="https://www.udemy.com/course/git-and-github-bootcamp/learn/">
                Colt Steele | Git & Github
              </a>
              <a href="https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/">
                Colt Steele | JS Algorithms
              </a>
            </div>
            <div className="logos">
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <Github />{" "}
              </a>
              <a href="https://youtube.com/" target="_blank" rel="noreferrer">
                <Youtube />
              </a>
              <a
                href="https://react.dev/learn"
                target="_blank"
                rel="noreferrer"
              >
                <React />
              </a>
            </div>
          </div>
        </div>
        <div className="home__right">
          <TodoCard />
        </div>
      </main>
    </>
  );
}

export default App;
