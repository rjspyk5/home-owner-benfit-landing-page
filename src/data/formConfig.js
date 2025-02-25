export const STEPS = [
  {
    title: "Are you a home owner?",
    key: "isHomeOwner",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    title: "Is your monthly electricity bills over $99?",
    key: "energyBill",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    title: "Your estimated credit score?",
    key: "creditScore",
    options: [
      { label: "More Than 740 (Excellent)", value: "excellent" },
      { label: "680 - 739 (Good)", value: "good" },
      { label: "Less than 569 (Poor)", value: "poor" },
      { label: "I'm not sure", value: "unknown" },
    ],
  },
  {
    questions: [
      {
        title: "Your name?",
        key: "name",
        type: "text",
        placeholder: "Enter your full name",
      },
      {
        title: "Address?",
        key: "address",
        fields: [
          { key: "street", placeholder: "Street Address", type: "text" },
          { key: "city", placeholder: "City", type: "text" },
          { key: "state", placeholder: "State", type: "text" },
          { key: "zipCode", placeholder: "ZIP Code", type: "text" },
        ],
      },
    ],
  },
  {
    questions: [
      {
        title: "Contact number?",
        key: "contact",
        type: "tel",
        placeholder: "Enter your phone number",
      },
      {
        title: "Preferred time of calling??",
        key: "freeTime",
        options: [
          { label: "9AM - 12PM", value: "morning" },
          { label: "12PM - 5PM", value: "afternoon" },
          { label: "5PM - 8PM", value: "evening" },
        ],
      },
    ],
  },
];
