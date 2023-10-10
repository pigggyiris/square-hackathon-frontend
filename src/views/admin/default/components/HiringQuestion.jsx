import React from 'react';
import Card from "components/card";
import SearchBar from "./SearchBar";

const HiringQuestion = ({ userQuestion, setUserQuestion, handleSearch, answer }) => {
  return (
    <Card>
      <SearchBar
        value={userQuestion}
        onChange={(e) => setUserQuestion(e.target.value)}
        onSearch={handleSearch}
      />
      {answer ? (
        <div className="px-4 pt-1 pb-4 text-fall-800">{answer}</div>
      ) : (
        <div className="px-4 pt-1 pb-4 text-center text-fall-800">
          Ask me about any hiring questions 😀
        </div>
      )}
    </Card>
  );
};

export default HiringQuestion;