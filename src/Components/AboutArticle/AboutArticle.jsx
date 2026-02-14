import React from "react";
import "./AboutArticle.css";
const AboutArticle = () => {
  // const [articles, setArticles] = useState([]);

  // const fetchInfo = async () => {
  //   const articlesInfo = collection(db, "articles");
  //   const articlesSnap = await getDocs(articlesInfo);

  //   const dataArticles = articlesSnap.docs.map((doc) => ({
  //     id: doc.id,
  //     ...doc.data(),
  //   }));
  //   setArticles(dataArticles);
  // };
  // useEffect(() => {
  //   fetchInfo();
  // }, []);

  // if (articles.length === 0) {
  //   return <p>Loading...</p>;
  // }
  // const articleIndex = articles.length - 1;
  // const article = articles[articleIndex];
  return (
    <div className="about-container">
      {/* <h1>Innovasiya</h1> */}
      <div className="about-article-container">
        {/* <div className="about-article-image"> */}
        {/* <img src={robot} alt="novation" className="about-article-img" /> */}
        {/* </div> */}
        <div className="about-article-text">
          {/* <img src={robot} alt="novation" className="about-article-img" /> */}
          <h1>About Us </h1>
          <p className="side-paragraph">
            {/* <img src={robot} alt="novation" className="about-article-img" /> */}
            {/* {article.content} */}
            Novation Company is a forward-thinking technology and innovation
            firm dedicated to building modern digital solutions for businesses
            and financial ecosystems. Our mission is to empower organizations
            with scalable, secure, and intelligent tools that drive efficiency,
            growth, and long-term value. We specialize in developing innovative
            platforms, fintech infrastructure, and digital services that
            simplify complex processes and enable seamless interactions between
            businesses, institutions, and users. By combining advanced
            technology with strategic thinking, we help our partners adapt and
            thrive in a rapidly evolving digital world. At Novation Company, we
            believe innovation is not just about technology — it is about
            creating meaningful impact. Our team is committed to delivering
            reliable, future-ready solutions that support digital transformation
            and unlock new opportunities. We operate with a global mindset,
            focusing on quality, trust, and continuous improvement. Our goal is
            to become a trusted partner for companies seeking innovation,
            efficiency, and sustainable growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutArticle;

