import React from "react";
import Card from "components/card";
import SearchBar from "./SearchBar";

const CampaignIdea = ({
  userQuestion,
  setUserQuestion,
  handleSearch,
  answer,
}) => {
  return (
    <Card extra="!p-[20px] text-left overflow-hidden h-96">
      <div className="flex justify-between">
        <h4 className="text-xl font-bold text-gray-900 dark:text-white">
          Campaign Idea
        </h4>
      </div>
      <SearchBar
        value={userQuestion}
        onChange={(e) => setUserQuestion(e.target.value)}
        onSearch={handleSearch}
      />
      {answer ? (
        <div className="px-4 pt-1 pb-4 text-fall-800">{answer}</div>
      ) : (
        <div className="px-4 pt-1 pb-4 text-center text-fall-800">
          Let's be creative 💡
        </div>
      )}
    </Card>
  );
};

export default CampaignIdea;
