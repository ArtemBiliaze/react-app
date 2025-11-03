// import NewsItem from "./components/NewsItem/index.jsx";

import "./App.css";
import Header from "./components/Header";

//реалізувати компонент header який містить лого і
// або фото користувача, якщо він залогінився ,
// або кнопки login/register

function App() {
    const isLogin = true;
  return <Header isLogin={isLogin}/>;
}

export default App;
