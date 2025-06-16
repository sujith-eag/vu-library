

export const mcaRMSection = [
  {
    title: "Research Methodology",
    items: [
          { label: "Research Methodology", link: "/mca/rm/u11" },
          { label: "Research Process", link: "/mca/rm/u12" },
          { label: "Research Problem", link: "/mca/rm/u13" },
          { label: "Research Design", link: "/mca/rm/u21" },
    ]
  }
];

export const mcaDAASection = [
  {
    title: "Design & Analysis of Algorithms",
    items: [
          { label: "Algorithms Introduction", link: "/mca/daa/u11" },
    ]
  }
];

export const mcaCSSection = [
  {
    title: "Cyber Security",
    items: [
          { label: "Cyber Crime", link: "/mca/cs/u1_1" },
          { label: "Attack Planning", link: "/mca/cs/u1_2" },
          { label: "Botnet & DDoS", link: "/mca/cs/u1_3" },
          { label: "Mobile Devices", link: "/mca/cs/u2_1" },
          { label: "Mobile Security", link: "/mca/cs/u2_2" },
    ]
  }
];


export const mcaDbmsSection = [
  {
    title: "Data Base Management",
    items: [
      {
    //     title: "Unit-1 Relational Model",
    //     items: [
    //       // { label: "Unit 1 Q", link: "/python/col_extra/unit_1_q" },
    //     ]
    //   },
    //   {
    //     title: "Unit-2 SQL",
    //     items: [
    //       // { label: "Unit 2 Q", link: "/python/col_extra/unit_2_q" },
    //     ]
    //   },
    //   {
    //     title: "Unit-3 E-R Model",
    //     items: [
    //       // { label: "Unit 3 Q", link: "/python/col_extra/unit_3_q" },
    //     ]
    //   },
    //   {
    //     title: "Unit-4 Normalization",
    //     items: [
    //       // { label: "Unit 4 Q", link: "/python/col_extra/unit_4_q" },
    //     ]
    //   },
    //   {
    //     title: "Unit-5 MongoDB",
    //     items: [
    //       // { label: "Unit 5 Q", link: "/python/col_extra/unit_5_q" },
    //     ]
      },
    ]
  }
];

export const mcaNetworkSection = [
  {
    title: "Networking",
    items: [
      {
        title: "Network & Internet",
        items: [
         { label: "MAC & IP", link: "/mca/cn/u11" },
         { label: "Networking Devices", link: "/mca/cn/u12" },
         { label: "Packet & Circuit Switching", link: "/mca/cn/u13" },
         { label: "Layerd Architecture", link: "/mca/cn/u14" },
         
        ]
      },
      {
        title: "Application Layer",
        items: [
          { label: "FTP", link: "/mca/cn/u21" },
          // { label: "Unit 2 - Answers", link: "/mca/cn/2_q_answered" }
        ]
      },
    //   {
    //     title: "Unit-3 Transport Layer",
    //     items: [
    //       // { label: "Unit 3 - Questions", link: "/mca/cn/3_q" },
    //       // { label: "Unit 3 - Answers", link: "/mca/cn/3_q_answered" }
    //     ]
    //   },
      {
        title: "Lab Manual",
        items: [
          { label: "IP Addressing", link: "/mca/cn/lab1" },
          { label: "Static Routing", link: "/mca/cn/lab2" }
        ]
      },
    ]
  }
]

export const mcaJavaSection = [
  {
    title: "Java Lab",
    items: [
      {
        title: "Lab Programs",
        items: [
          { label: "Program-1", link: "/mca/java/p01" },
          { label: "Program-2", link: "/mca/java/p02" },
          { label: "Program-3", link: "/mca/java/p03" },
          { label: "Program-4", link: "/mca/java/p04" },
          { label: "Program-5", link: "/mca/java/p05" },
          { label: "Program-6", link: "/mca/java/p06" },   
        ]
      },
      
      {
        title: "Java Assignment",
        items: [
          { label: "Question-1", link: "/mca/java/a01" },
          { label: "Question-2", link: "/mca/java/a02" },
          { label: "Question-3", link: "/mca/java/a03" },
          { label: "Question-4", link: "/mca/java/a04" },
          { label: "Question-5", link: "/mca/java/a05" },
        ]
      },
    ]
  }
];

export const mcaFSSection = [
  {
    title: "Full Stack Development",
    items: [
      {
        title: "React Exercise-1",
        items: [
          { label: "CountryList", link: "/mca/fs/react/e11" },
          { label: "RestaurantList", link: "/mca/fs/react/e12" },
          { label: "VehicleCard", link: "/mca/fs/react/e13" },          
        ]
      },
      {
        title: "React Exercise-2",
        items: [
          { label: "CourseCard", link: "/mca/fs/react/e21" },
          { label: "CompanyDetails", link: "/mca/fs/react/e22" },
          { label: "PropTypes", link: "/mca/fs/react/e23" },
          { label: "LandmarkGrid", link: "/mca/fs/react/e24" },        
        ]
      },
      {
        title: "React Exercise-3",
        items: [
          { label: "NewsLetterSignup", link: "/mca/fs/react/e31" },
          { label: "UserStatusSwitcher", link: "/mca/fs/react/e32" },
          { label: "TechBugReportForm", link: "/mca/fs/react/e33" },
        ]
      },
      {
        title: "React Exercise-4",
        items: [
          { label: "FeedbackPoll", link: "/mca/fs/react/e41" },
          { label: "ExpenseTracker", link: "/mca/fs/react/e42" },
          { label: "ThemeSelector", link: "/mca/fs/react/e43" },
        ]
      },
      {
        title: "React Exercise-5",
        items: [
          { label: "TextInputTracker", link: "/mca/fs/react/e51" },
          { label: "ColorChanger", link: "/mca/fs/react/e52" },
          { label: "Counter", link: "/mca/fs/react/e53" },
        ]
      },
    ]
  },
];

export const mca2Section = [
  ...mcaFSSection,
  ...mcaJavaSection,
  ...mcaNetworkSection,
  ...mcaDbmsSection,
  ...mcaDAASection,  
  ...mcaCSSection,
  ...mcaRMSection,
]

  export const mcaPythonSection = [
  {
    title: "Python",
    items: [
      {
        title: "Unit-1 Intro & Control Flow",
        items: [
          { label: "Previous Questions", link: "/mca/python/unit_1_q" },
          { label: "Answered-1", link: "/mca/python/unit_1_ans1" },
          { label: "Answered-2", link: "/mca/python/unit_1_ans2" }
        ]
      },
      {
        title: "Unit-2 Data Structures & Numpy",
        items: [
          { label: "Previous Questions", link: "/mca/python/unit_2_q" },
          { label: "Answered-1", link: "/mca/python/unit_2_ans_1" },
          { label: "Answered-2", link: "/mca/python/unit_2_ans_2" }
        ]
      },
      {
        title: "Unit-3 Functional Programming",
        items: [
          { label: "Previous Questions", link: "/mca/python/unit_3_q" },
          { label: "Answered-1", link: "/mca/python/unit_3_ans_1" },
          { label: "Answered-2", link: "/mca/python/unit_3_ans_2" }
        ]
      },
      {
        title: "Unit-4 Regex & OOP",
        items: [
          { label: "Previous Questions", link: "/mca/python/unit_4_q" },
          { label: "Answered-1", link: "/mca/python/unit_4_ans_1" },
          { label: "Answered-2", link: "/mca/python/unit_4_ans_2" }
        ]
      },
      {
        title: "Unit-5 Exceptions & File I/O",
        items: [
          { label: "Previous Questions", link: "/mca/python/unit_5_q" },
          { label: "Answered-1", link: "/mca/python/unit_5_ans_1" },
          { label: "Answered-2", link: "/mca/python/unit_5_ans_2" }
        ]
      },
      {
        title: "Lab Component",
        items: [
          { label: "Answered", link: "/mca/python/lab_component" }
        ]
      }
    ]
  }
];
  
  export const mcaCSection = [
    {
      title: "Data Structures Using C",
      items: [
        {
          title: "Unit-1 Recursion & Stack",
          items: [
            { label: "Questions", link: "/mca/c/unit_1_q" },
            { label: "Answers - 1", link: "/mca/c/unit_1_q_a1" },
            { label: "Answers - 2", link: "/mca/c/unit_1_q_a2" }
          ]
        },
        {
          title: "Unit-2 Queues & Linked List",
          items: [
            { label: "Questions", link: "/mca/c/unit_2_q" },
            { label: "Answers", link: "/mca/c/unit_2_q_answered" }
          ]
        },
        {
          title: "Unit-3 Trees",
          items: [
            { label: "Questions", link: "/mca/c/unit_3_q" },
            { label: "Answers", link: "/mca/c/unit_3_q_answered" }
          ]
        },
        {
          title: "Unit-4 AVL & Heaps",
          items: [
            { label: "Questions", link: "/mca/c/unit_4_q" },
            { label: "Answers", link: "/mca/c/unit_4_q_answered copy" }
          ]
        },
        {
          title: "Unit-5 Multiway Tree & Graphs",
          items: [
            { label: "Questions", link: "/mca/c/unit_5_q" },
            { label: "Answers", link: "/mca/c/unit_5_q_answered" }
          ]
        }
      ]
    }
  ];
  
  export const mcaJsSection = [
    {
      title: 'Web Development',
      items: [
        { label: 'Basic JavaScript', link: '/mca/js/js1_basic' },
        { label: 'DOM Manipulation', link: '/mca/js/js4_dom' },
        { label: 'DOM I/O', link: '/mca/js/js3_dom_io' },
        { label: 'DOM Events', link: '/mca/js/js5_dom_events' },
        { label: 'Arrays', link: '/mca/js/js2_arrays' }
      ]
    }
  ];
  
  
    export const mcaOSSection = [
      {
        title: "Operating System",
        items: [
          { label: "Unit-1 OS Intro", link: "/mca/os/os_u1_qa" },
          { label: "Unit-2 Process Concept", link: "/mca/os/os_u2_qa" },
          { label: "Unit-2 Synchronization", link: "/mca/os/os_u2_qa2" },
          { label: "Unit-3 Deadlocks", link: "/mca/os/os_u3_qa" },
          { label: "Unit-4 Memory Management", link: "/mca/os/os_u4_qa" },
          { label: "Unit-4 Paging", link: "/mca/os/os_u4_qa2" },
          { label: "Unit-5 Linux Commands", link: "/mca/os/os_u5_qa" },
        ]
      }
    ];
    
  
  
  export const mca1Section = [
    ...mcaPythonSection,
    ...mcaCSection,
    ...mcaJsSection,
    ...mcaOSSection
  ]
  
  export const mcaSection = [
    ...mca1Section,
    ...mca2Section
  ]