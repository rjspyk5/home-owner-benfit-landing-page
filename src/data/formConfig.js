export  const STEPS = [
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
          title: "What's your name?",
          key: "name",
          type: "text",
          placeholder: "Enter your full name",
        },
        {
          title: "What's your address?",
          key: "address",
          fields: [
            { key: "street", placeholder: "Street Address", type: "text" },
            { key: "city", placeholder: "City", type: "text" },
            { key: "state", placeholder: "State", type: "text" },
            { key: "zipCode", placeholder: "ZIP Code", type: "text" },
          ]
        }
      ]
    },
    {
      questions: [
        {
          title: "What's your contact number?",
          key: "contact",
          type: "tel",
          placeholder: "Enter your phone number",
        },
        {
          title: "What's your preferred free time?",
          key: "freeTime",
          options: [
            { label: "Morning (9AM - 12PM)", value: "morning" },
            { label: "Afternoon (12PM - 5PM)", value: "afternoon" },
            { label: "Evening (5PM - 8PM)", value: "evening" },
          ]
        }
      ]
    },
  ];