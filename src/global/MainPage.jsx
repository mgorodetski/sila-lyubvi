import React from 'react'
import About from '../components/mainpage/About';
import Events from '../components/common/Events';
import Footer from '../components/common/Footer';
import InterestInBlog from '../components/mainpage/InterestInBlog';
import Topbar from '../components/common/TopBar';

const MainPage = () => {
    const discription = "Мы стремимся развивать деловые связи между участниками сообщества.";
    const discription2 = "Здесь представлена информация o коммерческих и социальных проектах участниках сообщества, в которых вы можете принять участие. \n \n Если вы ищете партнеров или сотрудников для своего собственного проекта, вы можете опубликовать на сайте информацию о нем.";
    return (
      <div className="app">
        <Topbar />
        <About />
        <Events
          topic={{ word: "культурные", wordGradient: "мероприятия" }}
          subtopic1={"Важные события"}
          subTopic2={"Ближайшие события"}
          discription={""}
          buttonTitle={"Календарь мероприятий"}
        />
        <Events
          topic={{ word: "Деловое", wordGradient: "сотрудничество" }}
          subtopic1={"Важные проекты"}
          subtopic2={"Другие проекты"}
          discription={{ discription, discription2 }}
          buttonTitle={"Каталог проектов"}
  
        />
        <InterestInBlog
          subtopic1={"Интересное в блоге"}
        />
        <Footer />
      </div>
    );
}

export default MainPage