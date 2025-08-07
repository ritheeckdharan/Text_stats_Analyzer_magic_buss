import React from 'react';

const FrequencyList = ({ text }) => {
  const words = text.toLowerCase().match(/\b\w+\b/g) || [];
  const freq = {};
  words.forEach(w => freq[w] = (freq[w] || 0) + 1);

  const topWords = Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  return (
    <div className="card mt-3 mb-5 ">
      <div className="card-body">
        <h5 className="card-title">Most Frequent Words</h5>
        <ul className="list-group list-group-flush">
          {topWords.map(([word, count], i) => (
            <li key={i} className="list-group-item">
              {word} – {count}x
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FrequencyList;
