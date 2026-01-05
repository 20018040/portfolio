const Experience = () => {
  const experiences = [
    {
      title: "Color Sensor",
      company: "",
      date: "",
      points: [
        "Developed an Android Application that allows user to use to detect colors and extract RGB infos.",
      ],
    },
    {
      title: "OptimizeMe",
      company: "",
      date: "",
      points: [
        "Simulated in-game item enhancements using JavaScript, performing complex probabilities to statistically analyze outcomes and optimize strategies.",
      ],
    },
    {
      title: "Weather Prediction Using Machine Learning",
      company: "",
      date: "",
      points: [
        "Developed and trained machine learning models (Decision Trees, SVM, MLP, Gaussian Naive Bayes, Random Forest, Logistic RegressionCV) to predict the weather using a decade's worth of Australian weather data",
      ],
    },
  ];

  return (
    <div className="text-white font-mono">
      <h2 className="text-3xl font-bold mb-4">Experience</h2>
      {experiences.map((exp, i) => (
        <div key={i} className="mb-6">
          <h3 className="font-bold text-lg">
            {exp.title} <span className="text-white">@{exp.company}</span>
          </h3>
          <p className="text-sm mb-2">{exp.date}</p>
          <ul className="ml-6 space-y-1">
            {exp.points.map((point, j) => (
              <li key={j}>
                <span className="text-white">{"> "}</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
