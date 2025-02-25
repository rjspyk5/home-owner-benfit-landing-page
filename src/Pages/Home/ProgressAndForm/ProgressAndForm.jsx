import React, { useState } from "react";
import { STEPS } from "../../../data/formConfig";
export const ProgressAndForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = React.useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    isHomeOwner: "",
    energyBill: "",
    creditScore: "",
    name: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    contact: "",
    freeTime: "",
  });
  const currentQuestion = STEPS[currentStep];

  const handleNext = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
    if (currentStep < STEPS.length - 1) {
      setCurrentStep((current) => current + 1);
    } else {
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((current) => current - 1);
    }
  };

  const handleInputChange = (value, key) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const isCurrentStepValid = () => {
    if (currentQuestion.questions) {
      return currentQuestion.questions.every((question) => {
        if (question.fields) {
          return question.fields.every((field) => formData[field.key] !== "");
        }
        return formData[question.key] !== "";
      });
    }
    return formData[currentQuestion.key] !== "";
  };

  const isStepCompleted = (stepIndex) => {
    return completedSteps.includes(stepIndex);
  };

  const shouldShowDivider = (stepIndex) => {
    return currentStep <= stepIndex;
  };

  if (isSubmitted) {
    return (
      <div className="text-center space-y-4 py-12">
        <h2 className="text-2xl font-bold text-[#003B87] mb-2">
          Thank you for your response
        </h2>
        <p className="text-xl">
          You&re about to save estimated
          <br />
          <span className="text-3xl font-bold text-[#34D7A1]">18,000 USD.</span>
        </p>
        <p className="text-gray-600">
          We&ll contact with you soon with
          <br />
          proper credentials.
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="mt-8 px-6 py-3 bg-[#003B87] text-white rounded-md hover:bg-[#002a61] transition-colors"
        >
          Back To Home
        </button>
      </div>
    );
  }

  return (
    <div className=" ">
      <h2 className="md:text-xl font-semibold mb-4 ">
        Complete the steps to unlock your solar potential
      </h2>
      <div className="flex items-center justify-between mb-[1em] ">
        {STEPS.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center">
              <div
                className={`w-6 h-6  rounded-full flex items-center justify-center text-sm sm:text-base
                  ${
                    index === currentStep
                      ? "border-[#34D7A1] border-[1px]"
                      : isStepCompleted(index)
                      ? "border-[#617BE5] text-[#617BE5] border-2"
                      : "border-[grey] border-[1px]"
                  }`}
              >
                {index + 1}
              </div>
              <span
                className={`text-[8px] md:text-[10px] mt-2 ${
                  index === currentStep
                    ? "font-bold"
                    : isStepCompleted(index)
                    ? "font-bold text-[#617BE5] "
                    : ""
                }`}
              >
                {index === STEPS.length - 1 ? "Last Page" : "Next"}
              </span>
            </div>
            {index < STEPS.length - 1 && (
              <div
                className={`flex-1 h-[1px] mb-4 sm:mb-6 mx-1 sm:mx-2 transition-all duration-300 ${
                  shouldShowDivider(index)
                    ? index < currentStep
                      ? "bg-teal-500"
                      : "bg-black"
                    : "opacity-0"
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="mb-6 ">
        {currentQuestion.questions ? (
          <div className="space-y-4 sm:space-y-6">
            {currentQuestion.questions.map((question, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-base lg:text-xl font-semibold mb-[14px]">
                  {question.title} <span className="text-gray-500">*</span>
                </h2>

                {question.options ? (
                  // Radio buttons
                  <div className="space-y-[0.7rem]">
                    {question.options.map((option) => (
                      <div
                        key={option.value}
                        className="flex items-center space-x-2 cursor-pointer"
                      >
                        <input
                          type="radio"
                          id={option.value}
                          name={question.key}
                          value={option.value}
                          checked={formData[question.key] === option.value}
                          onChange={(e) =>
                            handleInputChange(e.target.value, question.key)
                          }
                          className="w-4 h-4 cursor-pointer"
                        />
                        <label
                          htmlFor={option.value}
                          className="text-lg cursor-pointer"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                ) : question.fields ? (
                  <div className="grid gap-4">
                    {question.fields.map((field) => (
                      <input
                        key={field.key}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formData[field.key]}
                        onChange={(e) =>
                          handleInputChange(e.target.value, field.key)
                        }
                        className="w-full px-3 py-2 border rounded-full text-sm sm:text-base"
                      />
                    ))}
                  </div>
                ) : (
                  <input
                    type={question.type}
                    placeholder={question.placeholder}
                    value={formData[question.key]}
                    onChange={(e) =>
                      handleInputChange(e.target.value, question.key)
                    }
                    className="w-full px-3 py-2 border rounded-full text-sm sm:text-base"
                  />
                )}
              </div>
            ))}
          </div>
        ) : (
          <>
            <h2 className="text-base md:text-xl font-bold mb-[14px]">
              {currentQuestion.title} <span className="text-gray-500">*</span>
            </h2>

            <div className="space-y-[0.7rem]">
              {currentQuestion.options.map((option) => (
                <div
                  key={option.value}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    id={option.value}
                    name={currentQuestion.key}
                    value={option.value}
                    checked={formData[currentQuestion.key] === option.value}
                    onChange={(e) =>
                      handleInputChange(e.target.value, currentQuestion.key)
                    }
                    className="w-4 h-4 cursor-pointer"
                  />
                  <label
                    htmlFor={option.value}
                    className="text-lg cursor-pointer"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="flex gap-3 sm:gap-4">
        {currentStep > 0 && (
          <button
            onClick={handleBack}
            className="px-6 py-3 border border-[#003B87] text-[#003B87] rounded-full hover:bg-[#003B87] hover:text-white transition-all cursor-pointer text-sm sm:text-base"
          >
            Back
          </button>
        )}
        <button
          onClick={handleNext}
          disabled={!isCurrentStepValid()}
          className="flex-1 bg-[#003B87] text-white border border-[#003B87] rounded-full px-4 sm:px-6 py-3 hover:bg-white hover:text-[#003B87] transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
        >
          {currentStep === STEPS.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};
