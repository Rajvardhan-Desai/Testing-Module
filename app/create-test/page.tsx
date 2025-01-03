"use client";
import React, { useCallback, useMemo, useState } from "react";
import Dropdown from "@/components/Dropdown/Dropdown";
import { NavButton } from "@/components/create-test/NavButton";
import { ActionButton } from "@/components/create-test/ActionButton";
import MCQ from "@/components/create-test/MCQ";
import MatchThePairs from "@/components/create-test/match-the-pairs/MatchThePairs";

const Page = () => {
  // This state tracks the selected question type from the dropdown
  const [questionType, setQuestionType] = useState("MCQ");

  const [questionText, setQuestionText] = useState("");
  const [questionDescription, setQuestionDescription] = useState("");

  // Handle dropdown change
  const handleSelect = useCallback(
    (value: string | number, dropdownId: string) => {
      console.log(`Dropdown ID: ${dropdownId}, Selected value: ${value}`);

      // If the user is selecting from the "question type" dropdown, update `questionType`.
      if (dropdownId === "dropdown-2") {
        setQuestionType(value as string);
      }
    },
    [setQuestionType]
  );

  const QuestionTypeDropdownItems = useMemo(
    () => ["MCQ", "Image Question", "Match The Pairs", "Subjective Answer"],
    []
  );

  const buttonData = [
    { label: "EDIT", bgColor: "bg-[#6378fd]" },
    { label: "SAVE", bgColor: "bg-[#6ad9a1]" },
    { label: "DELETE", bgColor: "bg-[#f44144]" },
  ];

  // Handle question text change
  const handleQuestionChange = (value: string) => {
    setQuestionText(value);
  };

  // Handle question description change
  const handleQuestionDescriptionChange = (value: string) => {
    setQuestionDescription(value);
  };

  return (
    <>
      <div className="bg-white text-black flex flex-col items-center p-4 mt-2 rounded-3xl shadow  border border-black laila-regular">
        <div className="flex flex-col md:flex-row items-center justify-between flex-wrap w-full gap-4">
          {/* Dropdown (प्रकार:) */}
          <div className="w-full md:w-[30%] flex-start">
            <label htmlFor="dropdown-2" className="sr-only">
              प्रकार:
            </label>
            <Dropdown
              id="dropdown-2"
              items={QuestionTypeDropdownItems}
              label="प्रकार:"
              defaultValue={questionType}
              onSelect={(value) => handleSelect(value, "dropdown-2")}
              width="100%"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-6 text-center whitespace-nowrap rounded-3xl md:ml-auto laila-bold ">
            {buttonData.map((button, index) => (
              <ActionButton
                key={index}
                label={button.label}
                bgColor={button.bgColor}
                onClick={() => console.log(`${button.label} clicked`)}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row px-3 py-3 mt-6 w-full border border-black max-md:px-5 max-md:max-w-full space-y-3 md:space-y-0 md:space-x-3">
          {/* First Column: Q1 */}
          <div className="w-full md:w-[3%] p-3 mr-2 text-lg">{"Q1"}</div>

          {/* Second Column: Question Details */}
          <div className="flex flex-col w-full md:w-full space-y-3">
            {/* Question Text */}
            <div className="px-2 py-2 mt-2.5 w-full border border-black border-solid max-md:px-5 max-md:max-w-full">
              <input
                type="text"
                value={questionText}
                onChange={(e) => handleQuestionChange(e.target.value)}
                className="w-full p-2 border rounded-lg border-gray-300"
                placeholder="Enter question here"
              />
            </div>

            {/* Description */}
            <div className="px-2 py-2 mt-2.5 w-full border border-black border-solid max-md:px-5 max-md:max-w-full">
              <input
                type="text"
                value={questionDescription}
                onChange={(e) =>
                  handleQuestionDescriptionChange(e.target.value)
                }
                className="w-full p-2 border rounded-lg border-gray-300"
                placeholder="Enter question description here"
              />
            </div>

            {/* Question Type */}
            <div className=" w-full max-md:px-5">
              {questionType === "MCQ" && <MCQ />}

              {questionType === "Image Question" && (
                <div className="bg-green-100 p-2">
                  <h2 className="font-bold">Image Question</h2>
                  {/* Add your Image Question content here */}
                </div>
              )}

              {questionType === "Match The Pairs" && <MatchThePairs />}

              {questionType === "Subjective Answer" && (
                <div className="bg-red-100 p-2">
                  <h2 className="font-bold">Subjective Answer</h2>
                  {/* Add your Subjective Answer content here */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex space-x-4 mt-4 w-[30%] text-white items-center justify-center mx-auto"></div>

      <div
        className="flex flex-wrap gap-10 self-center mt-4 max-w-full w-[506px] mx-auto items-center justify-center"
        role="group"
        aria-label="Navigation cards"
      >
        <NavButton imageSrc="/nav-left.png" tooltipText="मागील" onClick={() => {}} />
        <NavButton imageSrc="/nav-right.png" tooltipText="पुढील" onClick={() => {}} />
      </div>
    </>
  );
};

export default Page;
