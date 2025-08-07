import React from 'react';

const StatsDisplay = ({ text }) => {
  const words = text.toLowerCase().match(/\b\w+\b/g) || [];

  const wordCount = words.length;
  const charCount = text.length;
  const charCountNoSpaces = text.replace(/\s/g, '').length;
  const sentenceCount = (text.match(/[^.!?]+[.!?]+/g) || []).length;
  const paragraphCount = text.split(/\n+/).filter(p => p.trim()).length;
  const avgWordLength = wordCount
    ? (words.reduce((sum, w) => sum + w.length, 0) / wordCount).toFixed(2)
    : 0;
  const uniqueWords = new Set(words).size;
  const lexicalDensity = wordCount ? ((uniqueWords / wordCount) * 100).toFixed(2) : 0;
  const longestWord = words.reduce((a, b) => (b.length > a.length ? b : a), '');
  const shortestWord = words.reduce((a, b) => (b.length < a.length ? b : a), words[0] || '');

  return (
    <div className="card mt-4">
      <div className="card-body">
        <h5 className="card-title">Text Statistics</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Words: {wordCount}</li>
          <li className="list-group-item">Characters (with spaces): {charCount}</li>
          <li className="list-group-item">Characters (no spaces): {charCountNoSpaces}</li>
          <li className="list-group-item">Sentences: {sentenceCount}</li>
          <li className="list-group-item">Paragraphs: {paragraphCount}</li>
          <li className="list-group-item">Average Word Length: {avgWordLength}</li>
          <li className="list-group-item">Unique Words: {uniqueWords}</li>
          <li className="list-group-item">Lexical Density: {lexicalDensity}%</li>
          <li className="list-group-item">Longest Word: {longestWord}</li>
          <li className="list-group-item">Shortest Word: {shortestWord}</li>
        </ul>
      </div>
    </div>
  );
};

export default StatsDisplay;
