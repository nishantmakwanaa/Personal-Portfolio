const Articles = () => {
  const articles = [
    {
      title: "The Future Of AI In Daily Life",
      description:
        "Exploring How Artificial Intelligence Will Change Everyday Tasks And Industries, Bringing New Innovations And Opportunities.",
      link: "https://www.canadianctb.ca/blog-and-news/what-is-the-future-of-ai-in-everyday-life",
      postedOn: "2024-11-10T14:00:00",
    },
    {
      title: "Tech Innovations In 2024",
      description:
        "An In-Depth Look At The Most Exciting Technology Innovations Of The Year, Re-Shaping Industries And Driving Growth.",
      link: "https://www.simplilearn.com/top-technology-trends-and-jobs-article",
      postedOn: "2024-11-12T09:00:00",
    },
    {
      title: "Understanding Machine Learning",
      description:
        "A Beginner'S Guide To Understanding The Core Concepts And Applications Of Machine Learning In Various Fields.",
      link: "https://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/",
      postedOn: "2024-11-14T11:30:00",
    },
  ];

  const formatDate = (date) => {
    return new Date(date).toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="articles section" id="articles">
      <h2 className="section-title">Articles</h2>
      <div className="articles__container bd-grid">
        {articles.map((article, index) => (
          <div className="article__item" key={index}>
            <div className="article__details">
              <h3 className="article__title">{article.title}</h3>
              <p className="article__date">
                Posted on: {formatDate(article.postedOn)}
              </p>
              <p className="article__description">{article.description}</p>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="article__link"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles;
