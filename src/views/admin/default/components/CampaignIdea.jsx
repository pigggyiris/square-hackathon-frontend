import React, { useState, useEffect } from "react";
import Card from "components/card";
import Bubble from "./Bubble";
import axios from "axios";
import { BASE_URL } from "../../../../config";
import Loading from "./Loading";

const CampaignIdea = () => {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/v1/salesInfo/campaign_idea/10`
        );

        const campaignIdeas = response.data.map((idea) => ({
          title: idea.campaignTitle,
          content: idea.campaignContent,
        }));

        setIdeas(campaignIdeas);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchIdeas();
  }, []);

  return (
    <Card extra="!p-[20px] text-left h-[350px]">
      <div className="mb-4 flex justify-between">
        <h4 className="text-xl font-bold text-gray-900 dark:text-white">
          Campaign Idea
        </h4>
      </div>
      {loading ? (
        <div className="flex h-full items-center justify-center">
          <Loading />
        </div>
      ) : (
        <>
          <div className="grid grid-rows-2 gap-2">
            <div className="grid grid-cols-4 gap-2">
              <div className="col-span-2">
                <Bubble
                  title={ideas[0]?.title || ""}
                  content={ideas[0]?.content || ""}
                  color={"bg-fall-500"}
                />
              </div>
              <div className="col-span-2">
                <Bubble
                  title={ideas[1]?.title || ""}
                  content={ideas[1]?.content || ""}
                  color={"bg-fiord-500"}
                />
              </div>
            </div>
            <div className="grid grid-cols-7 gap-4">
              <div className="col-span-3">
                <Bubble
                  title={ideas[2]?.title || ""}
                  content={ideas[2]?.content || ""}
                  color={"bg-softgreen-500"}
                />
              </div>
              <div className="col-span-4">
                <Bubble
                  title={ideas[3]?.title || ""}
                  content={ideas[3]?.content || ""}
                  color={"bg-fall-800"}
                />
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <Bubble
                title={ideas[4]?.title || ""}
                content={ideas[4]?.content || ""}
                color={"bg-bone-500"}
              />
            </div>
          </div>
        </>
      )}
    </Card>
  );
};

export default CampaignIdea;
