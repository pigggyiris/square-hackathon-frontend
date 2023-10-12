import React, { useState } from "react";
import Card from "components/card";
import Bubble from "./Bubble";

const CampaignIdea = () => {
  const ideas = [
    {
      title: "Pumpkin Spice Latte Promotion",
      color: "bg-fall-500",
      content:
        "Offer a special pumpkin spice latte for a limited time only. You could also sell pumpkin spice-flavored pastries or other treats.",
    },
    {
      title: "Fall Harvest Festival",
      color: "bg-fiord-500",
      content:
        "Host a fall harvest festival with live music, food trucks, and activities for kids. You could also offer discounts on coffee and food during the festival.",
    },
    {
      title: "Back-to-School Sale",
      color: "bg-softgreen-500",
      content:
        "Offer a back-to-school sale on coffee, tea, and other supplies. You could also give away free school supplies with purchases.",
    },
    {
      title: "Pet Costume Contest",
      color: "bg-fall-800",
      content:
        "Hold a pet costume contest and offer a prize for the best-dressed pet. You could also sell pet-themed coffee cups or other merchandise.",
    },
    {
      title: "Fall Foliage Photo Contest",
      color: "bg-fiord-600",
      content:
        "Hold a fall foliage photo contest and offer a prize for the best photo. You could also display the photos in your coffee shop.",
    },
  ];

  return (
    <Card extra="!p-[20px] text-left h-[350px]">
      <div className="mb-4 flex justify-between">
        <h4 className="text-xl font-bold text-gray-900 dark:text-white">
          Campaign Idea
        </h4>
      </div>
      <div className="grid grid-rows-2 gap-2">
        <div className="grid grid-cols-4 gap-2">
          <div className="col-span-2">
            <Bubble
              title={ideas[0].title}
              content={ideas[0].content}
              color={ideas[0].color}
            />
          </div>
          <div className="col-span-2">
            <Bubble
              title={ideas[1].title}
              content={ideas[1].content}
              color={ideas[1].color}
            />
          </div>
        </div>
        <div className="grid grid-cols-7 gap-4">
          <div className="col-span-3">
            <Bubble
              title={ideas[2].title}
              content={ideas[2].content}
              color={ideas[2].color}
            />
          </div>
          <div className="col-span-4">
            <Bubble
              title={ideas[3].title}
              content={ideas[3].content}
              color={ideas[3].color}
            />
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <Bubble
            title={ideas[4].title}
            content={ideas[4].content}
            color={ideas[4].color}
          />
        </div>
      </div>
    </Card>
  );
};

export default CampaignIdea;
