import { Link } from "react-router-dom";
import Container from "../components/layout/Container/Container";
import errorPageIcon from "../assets/img/icons/errorPageIcon.svg";

const ErrorBoundary = () => {
  return (
    <div className="App">
      <main
        className="main"
        style={{
          display: "flex",
          alignItems: "center",
          minHeight: "100vh",
          background: "#CEDBE7",
          color: "black",
        }}
      >
        <Container>
          <section className="home">
            <img
              src={errorPageIcon}
              alt=""
              width={340}
              style={{ marginBottom: "35px" }}
            />
            <h1 className="title">Что-то пошло не так!</h1>
            <p style={{ marginBottom: "25px" }}>
              Страница не найдена или произошла ошибка сервера. Проверьте
              правильность введенного адреса страницы
            </p>

            <Link isLink={"/"} style={{color: '#C74E4E'}}>
              Вернуться на главную
            </Link>
          </section>
        </Container>
      </main>
    </div>
  );
};

export default ErrorBoundary;
