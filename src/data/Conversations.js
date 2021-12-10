function getFirstName() {
    let name = (localStorage.getItem("username") === null) ? "Guest": localStorage.getItem("username"); 
    let firstName = (name.split(' ').length > 1) ? `${name.split(' ')[0]}`: `${name}`;
    return firstName;
  }
  
export const Conversations = {
    introAsks: [
        {
            key: 0,
            question: `Hello ${ getFirstName() }, I am your mental health companion. always here to help you thrive`,
            responses: [
                { answer: "okay, Let's Talk", point: 0, problems: [] }
            ],
            problems: []
        }
    ],

    feelingsAsks: [
        {
            key: 1,
            question: "How are you feeling?",
            responses: [
                { answer: "Happy", point: 1, problems: [] },
                { answer: "Very Fine", point: 1, problems: [] },
                { answer: "Okay", point: 1, problems: [] },
                { answer: "Tired", point: 2, problems: [] },
                { answer: "Stressed", point: 2, problems: [] },
                { answer: "Sad", point: 2, problems: [] }
            ],
            problems: []
        }
    ],

    leadAsks: [
        {
            key: 4,
            question: "Are you experiencing fears or thoughts that are chronic (constant) and distressing and that interfere with daily living?",
            responses: [
                { answer: "Yes", point: 2, problems: [] },
                { answer: "No", point: 0, problems: [] },
                { answer: "I don't know", point: 1, problems: [] }
            ],
            problems: [0]
        },
        {
            key: 15,
            question: "I am going to take a guess and say you are not a child of 12 year old or less, right?",
            responses: [
                { answer: "Yes, I am not", point: 0, problems: [] },
                { answer: "No, actually I am", point: 2, problems: [] },
                { answer: "I don't know", point: 1, problems: [] }
            ],
            problems: [1]
        },
        {
            key: 6,
            question: "Do you experience episodes of mood swings, including delusions and hallucinations?",
            responses: [
                { answer: "Yes", point: 2, problems: [] },
                { answer: "No", point: 0, problems: [] },
                { answer: "I don't know", point: 1, problems: [] }
            ],
            problems: [2]
        },
        {
            key: 7,
            question: "Have you stop enjoying your usual enjoyable activities?",
            responses: [
                { answer: "Yes", point: 2, problems: [] },
                { answer: "No", point: 0, problems: [] },
                { answer: "I don't know", point: 1, problems: [] }
            ],
            problems: [3]
        },
        {
            key: 8,
            question: "Are you feeling disconnected from yourself?",
            responses: [
                { answer: "Yes", point: 2, problems: [] },
                { answer: "No", point: 0, problems: [] },
                { answer: "I don't know", point: 1, problems: [] }
            ],
            problems: [4]
        },
        {
            key: 9,
            question: "Do you sometimes eat in secret? or engage in constant and excessive dieting?",
            responses: [
                { answer: "Yes", point: 2, problems: [] },
                { answer: "No", point: 0, problems: [] },
                { answer: "I don't know", point: 1, problems: [] }
            ],
            problems: [5]
        },
        {
            key: 10,
            question: "Are you fond of replacing a ‘bad thought’ with a ‘good thought’. ?",
            responses: [
                { answer: "Yes", point: 2, problems: [] },
                { answer: "No", point: 0, problems: [] },
                { answer: "I don't know", point: 1, problems: [] }
            ],
            problems: [6]
        },
        {
            key: 11,
            question: "Are you easily offended?",
            responses: [
                { answer: "Yes", point: 2, problems: [] },
                { answer: "No", point: 0, problems: [] },
                { answer: "I don't know", point: 1, problems: [] }
            ],
            problems: [7]
        },
        {
            key: 12,
            question: "Are you avoiding reminders of the event, such as thoughts, feelings, people, places, activities or situations that bring back memories of the event.?",
            responses: [
                { answer: "Yes", point: 2, problems: [] },
                { answer: "No", point: 0, problems: [] },
                { answer: "I don't know", point: 1, problems: [] }
            ],
            problems: [8]
        },
        {
            key: 13,
            question: "Have you been hearing, seeing, smelling or tasting something that isn't there or experiencing any hallucinations?",
            responses: [
                { answer: "Yes", point: 2, problems: [] },
                { answer: "No", point: 0, problems: [] },
                { answer: "I don't know", point: 1, problems: [] }
            ],
            problems: [9, 10]
        },
        {
            key: 14,
            question: "You often lack of motivation?",
            responses: [
                { answer: "Yes", point: 2, problems: [] },
                { answer: "No", point: 0, problems: [] },
                { answer: "I don't know", point: 1, problems: [] }
            ],
            problems: [10]
        }
    ],

    followupAsks: [
        {
            key: 15,
            question: "Once again, Are you fond of replacing a ‘bad thought’ with a ‘good thought’. ?",
            responses: [
                { answer: "Yes", point: 2, problems: [] },
                { answer: "No", point: 0, problems: [] },
                { answer: "I don't know", point: 1, problems: [] }
            ],
            problems: [6]
        },
        {
            key: 16,
            question: "Do you get easily offended?",
            responses: [
                { answer: "Yes", point: 2, problems: [] },
                { answer: "No", point: 0, problems: [] },
                { answer: "I don't know", point: 1, problems: [] }
            ],
            problems: [7]
        }
    ],

    closingAsks: [
        {
            key: 2,
            question: `Thank you, ${ getFirstName() }. All done! I have put together a report that outlines possible issues you might be facing`,
            responses: [
                { answer: "Okay, Show me", point: 0, problems: [] }
            ],
            problems: []
        },
        {
            key: 3,
            question: "Don't forget that this is not a medical diagnosis. If in doubt it is always best to seek advice from a medical professional",
            responses: [
                { answer: "Open Report", point: 0, problems: [] }
            ],
            problems: []
        }
    ]
}