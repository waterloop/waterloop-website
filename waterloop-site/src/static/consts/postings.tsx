type subteamName = 'Mechanical'
              | 'Electrical'
              | 'Software'
              | 'LIM'
              | 'Infrastructure'
              | 'Business'
              | 'Web'
export interface Posting {
  role: string;
  deadline:  string;
  term: string;
  applicationForm: string;
  subteam: subteamName;
  description: string;
  tasks: string[];
  requirements: string[];
  additional: string[];
  id: number;
}

// export const samplePostingsData: Posting[] = [
//   {
//     role: "Infrastructure Team Member",
//     deadline: "September 17, 2020 (rolling basis)",
//     term: "FALL 2020",
//     applicationForm: "https://forms.gle/8uq54fDQohq33D166",
//     subteam: "Infrastructure",
//     description:
//       "The Waterloop Infrastructure team was founded with the purpose of building a functional Hyperloop test track right on UW campus. The infra team is currently submitting a formal proposal to UW admins, and in the coming term will have to prepare a track design, seek out sponsors, plan events, interface with UW, perform cost analysis, and find contractors. Waterloop will be accepting members on a rolling basis.",
//     tasks: [
//       "Track design and manufacturing",
//       "Researching and applying to grants",
//       "Reaching out to sponsors, and contractors",
//       "Budgeting",
//       "Event planning",
//       "Project management",
//     ],
//     requirements: [
//       "To be learned: Civil/transportation engineering",
//       "To be learned: Project management",
//       "To be learned: Event planning",
//       "To be learned: Mechanical design",
//       "To be learned: Industry networking",
//     ],
//     additional: ["5 hr/week time commitment"],
//   },
//   {
//     role: "Mech Co-op",
//     deadline: "Rolling basis, see WaterlooWorks",
//     term: "FALL 2020",
//     applicationForm: "https://forms.gle/8uq54fDQohq33D166",
//     subteam: "Mechanical",
//     description:
//       "Co-op position for the mech subteam. Will work on various projects that involve mechanical CAD design, FEA, technical documentation, machining. All these projects will work towards making our latest pod: Goose 5 functional by S21.",
//     tasks: [
//       "Projects may vary depending on the student's interest and skills. Preferably, the focus will lie in manufacturing/assembly of pod sytems. Some options include manufacturing and assembly of remaining pod components, carbon fiber shell manufacturing, and LIM testing.",
//     ],
//     requirements: [
//       "Basic CAD skills",
//       "Report writing experience",
//       "Living in Waterloo for the Fall term and willing to do in-person work at our bay",
//       "Recommended: Prior experience with FEA",
//       "Recommended: Prior experience with machine shop skills",
//       "Recommended: Design experience",
//     ],
//     additional: [
//       "This position is mainly in-person but also involves some remote work. This position will count towards your co-op credit",
//       "Full time position",
//     ],
//   },
//   {
//     role: "E&M / CAE Analyst",
//     deadline: "September 17, 2020 (rolling basis)",
//     term: "FALL 2020",
//     applicationForm: "https://forms.gle/8uq54fDQohq33D166",
//     subteam: "LIM",
//     description:
//       "The Linear Induction Motor (LIM) is the propulsion system for the pod. It is similar in principle to a rotary induction motor, but makes use of a different geometry. The LIM team is responsible for the design, manufacturing, and testing of LIMs. Waterloop has been iteratively improving our LIMs, but much of the optimization remains to be done. Waterloop will be accepting members on a rolling basis.",
//     tasks: [
//       "The E&M/CAE analysis team will be responsible for researching various factors of the LIM, and developing simulations. The team will be preparing designs for the motor development team to prototype and test to verify simulation results.",
//     ],
//     requirements: [
//       "A deep interest in E&M and motor design",
//       "Basic CAD skills",
//       "At least 1 year commitment to the team",
//       "Willingness to read textbooks in spare time",
//       "Prior knowledge in induction motors",
//       "Recommended: having taken any relevant courses such as ME269, MTE120, etc.",
//       "To be learned: Motor design",
//       "To be learned: FEA and simulations",
//     ],
//     additional: ["10 hr/week time commitment"],
//   },
//   {
//     role: "Motor Development / Test Stand Engineering",
//     deadline: "September 17, 2020 (rolling basis)",
//     term: "FALL 2020",
//     applicationForm: "https://forms.gle/8uq54fDQohq33D166",
//     subteam: "LIM",
//     description:
//       "The Linear Induction Motor (LIM) is the propulsion system for the pod. It is similar in principle to a rotary induction motor, but makes use of a different geometry. The LIM team is responsible for the design, manufacturing, and testing of LIMs. Waterloop has been iteratively improving our LIMs, but much of the optimization remains to be done. Waterloop will be accepting members on a rolling basis.",
//     tasks: [
//       "The motor development team will be responsible for manufacturing various prototype LIMs to test and verify simulation results. ",
//     ],
//     requirements: [
//       "A deep interest in E&M and motor design",
//       "At least 1 year commitment to the team",
//       "Willingness to read textbooks in spare time",
//       "Living in Waterloo over the Fall term and willing to participate in in-person work",
//       "Recommended: prior knowledge and/or experience with electric motors",
//       "Recommended: having taken any relevant courses such as ME269, MTE120, etc.",
//       "Recommended: Basic embedded programming",
//       "To be learned: Motor design",
//       "To be learned: FEA and simulations",
//       "To be learned: Rapid Prototyping",
//     ],
//     additional: ["10 hr/week time commitment"],
//   },
//   {
//     role: "Motor Control",
//     deadline: "September 17, 2020 (rolling basis)",
//     term: "FALL 2020",
//     applicationForm: "https://forms.gle/8uq54fDQohq33D166",
//     subteam: "Electrical",
//     description:
//       "The electrical team works on powering and controlling the Hyperloop pod while providing sensor feedback. The team has a strong focus on both HV and LV development in battery management, motor control and embedded sensing. \nWaterloop is developing a controller for our propulsion system. Controls are primarily implemented in software, however the control algorithm will be verified in PSIM. Hardware is being designed to drive high power switches and provide sensor feedback.",
//     tasks: [
//       "Design, build and test sensor boards",
//       "Develop low-level firmware for sensors (depending on your interest) ",
//       "Assemble and test sensor boards in-person",
//     ],
//     requirements: [
//       "Know/be willing to learn ECE463/ECE420",
//       "Recommended: Prior experience with power electronics",
//     ],
//     additional: ["10 hr/week time commitment"],
//   },
//   {
//     role: "Battery Management System (BMS)",
//     deadline: "September 17, 2020 (rolling basis)",
//     term: "FALL 2020",
//     applicationForm: "https://forms.gle/8uq54fDQohq33D166",
//     subteam: "Electrical",
//     description:
//       "The electrical team works on powering and controlling the Hyperloop pod while providing sensor feedback. The team has a strong focus on both HV and LV development in battery management, motor control and embedded sensing. The battery management system team is developing an in-house BMS to monitor properties of individual cells, and provide cell balancing where needed. Waterloop will be accepting members on a rolling basis.",
//     tasks: [
//       "Design, build and test sensor boards that measure battery cells to ensure optimal conditions/that measure power to components such as the motor controller",
//       "Assemble and test sensor boards in-person",
//     ],
//     requirements: [
//       "To be learned: Circuit design (MCUs, power electronics)",
//       "To be learned: Schematic capture and PCB layout (Altium preferred, KiCAD also welcome)",
//       "To be learned: Electrical assembly skills (SMT solder and reflow experience)",
//       "To be learned: Electrical measurement tools (multimeter, oscilloscope)",
//       "To be learned: Experience creating and conducting test plans (verifying sensors, power output, etc)",
//       "Recommended: Living in Waterloo or willing to come to Waterloo to participate in in-person work",
//     ],
//     additional: ["10 hr/week time commitment"],
//   },
//   {
//     role: "Electrical Co-op",
//     deadline: "Rolling basis, see WaterlooWorks",
//     term: "FALL 2020",
//     applicationForm: "https://forms.gle/8uq54fDQohq33D166",
//     subteam: "Electrical",
//     description:
//       "The electrical team works on powering and controlling the Hyperloop pod while providing sensor feedback. The team has a strong focus on both HV and LV development in battery management, motor control and embedded sensing. As the electrical co-op, you will be working on developing and testing our embedded sensors and in-house battery management system. This position is mainly in-person, but also involves some remote work. This position will count towards your co-op credit.",
//     tasks: [
//       "Design, build and test sensor boards; including LV sensor boards for embedded systems and HV power distribution boards for our BMS",
//       "Working closely with the software team to provide electrical support and assist in testing where necessary",
//     ],
//     requirements: [
//       "Living in Waterloo for the Fall term and willing to do in-person work at our bay",
//       "Recommended: Circuit design (sensors, MCUs, power electronics are all applicable)",
//       "Recommended: Schematic capture and PCB layout (Altium preferred, KiCAD also welcome)",
//       "Recommended: Electrical assembly skills (SMT solder and reflow experience)",
//       "Recommended: Electrical measurement tools (multimeter, oscilloscope)",
//       "Recommended: Experience creating and conducting test plans (verifying sensors, power output, etc)",
//     ],
//     additional: [
//       "This position is mainly in-person but also involves some remote work. This position will count towards your co-op credit",
//       "Full time position",
//     ],
//   },
//   {
//     role: "Software Developer - Embedded",
//     deadline: "September 17, 2020 (rolling basis)",
//     term: "FALL 2020",
//     applicationForm: "https://forms.gle/8uq54fDQohq33D166",
//     subteam: "Software",
//     description:
//       "The software team works on all software components related to the pod. We are responsible for developing and testing all the sensors, embedded boards, and testing rigs. Currently the team is working on the motor controller, battery management system (BMS), coding new sensor boards, remote flashing rig and testing rig. Waterloop will be accepting members on a rolling basis.",
//     tasks: [
//       "Working with low-level languages (C/C++) to code embedded boards",
//       "Create and work through different tests for sensors",
//     ],
//     requirements: [
//       "A solid foundation in C/C++",
//       "Understanding of common communication protocols (I2C, SPI, USB)",
//       "Experience working with Arduino",
//       "Recommended: Prior experience with STM32 boards",
//       "Recommended: Living in Waterloo",
//     ],
//     additional: ["10 hr/week time commitment"],
//   },
// ];

export const w21Postings: Posting[] = [
  {
    id: 0,
    role: 'Graphic Designer',
    description: 'The business team is responsible for the marketing, sponsorship, and finance side of things at Waterloop. From posting social media campaigns to filling out funding applications and communicating with sponsors, the business team works hard to promote the Waterloop brand and support it financially. The team works to increase the adoption of Hyperloop technology as the future of transportation. The graphics team helps create a cohesive public presence for the team. Graphics team members establish the Waterloop brand, and ensure we are represented professionally.',
    tasks: [
      'Design social media posts (Twitter, Instagram, Facebook, LinkedIn)',
      'Design and coordinate team merch',
      'Refine the team sponsorship package',
      'Help establish the Waterloop brand',
    ],
    subteam: 'Business',
    term: 'Winter 2021',
    additional: [
      'Time Commitment: 6h/week',
    ],
    requirements: [
      'Required: experience with Adobe XD, Illustrator, InVision, Figma, or equivalent',
      'Recommended: prior graphic design experience',
    ],
    applicationForm: 'https://docs.google.com/forms/d/e/1FAIpQLSeu2iJvT3-FvAYKEK-hbJxpb3f9t-I-8LI_hKUYCBCsgGrjQw/viewform',
    deadline: 'January 13, 11:59pm'
  },
  {
    id: 1,
    role: 'Photographer/Videographer',
    description: 'The business team is responsible for the marketing, sponsorship, and finance side of things at Waterloop. From posting social media campaigns to filling out funding applications and communicating with sponsors, the business team works hard to promote the Waterloop brand and support it financially. The team works to increase the adoption of Hyperloop technology as the future of transportation. We are looking for someone to function as a team photographer and videographer. Preference will be given to individuals who will be available to take photos and videos in-person. We\'re aiming to start consistently creating video content and launch a team YouTube channel.',
    tasks: [
      'Create video and photo content for our social media, sponsorship packages and website',
      'Video and photo editing',
      'Storyboard creation and planning videos to promote the team',
      'Launching Waterloop\'s YouTube channel',
    ],
    subteam: 'Business',
    term: 'Winter 2021',
    additional: [
      'Time Commitment: 6h/week',
      'Flexible Schedule to be able to meet with members during testing and work sessions.'
    ],
    requirements: [
      'Required: Final Cut pro or equivalent, Adobe Lightroom or equivalent',
      'Recommended: Prior experience with content creation for teams/clubs, in Waterloo for the Winter term & willing to come to Waterloop Bay to take photos and videos',
    ],
    applicationForm: 'https://docs.google.com/forms/d/e/1FAIpQLSeu2iJvT3-FvAYKEK-hbJxpb3f9t-I-8LI_hKUYCBCsgGrjQw/viewform',
    deadline: 'January 13, 11:59pm'
  },
  {
    id: 2,
    role: 'Sponsorship Member',
    description: 'The sponsorship team is in charge of securing funds that will allow our team to complete the build of our pod. We are responsible for getting in touch with potential sponsors, filling out funding applications, and keeping up with sponsor relations. This semester the sponsorship team is excited to continue sending out cold emails and getting in touch with more sponsors!',
    tasks: [
      'Send out cold emails',
      'Build relationships with potential sponsors',
      'Fill out funding applications',
    ],
    subteam: 'Business',
    term: 'Winter 2021',
    additional: [
      'Time Commitment: 6h/week',
    ],
    requirements: [
      'Ability to work well in a team and meet deadlines',
    ],
    applicationForm: 'https://docs.google.com/forms/d/e/1FAIpQLSeu2iJvT3-FvAYKEK-hbJxpb3f9t-I-8LI_hKUYCBCsgGrjQw/viewform',
    deadline: 'January 13, 11:59pm'
  },
  {
    id: 3,
    role: 'General Mechanical Team Member',
    subteam: 'Mechanical',
    description: 'The mechanical team is in charge of the design, fabrication, and testing of all physical mechanisms for structures, guidance, and propulsion subsystems on the Hyperloop pod. The team uses skills in CAD, drafting, as well as analysis through simulations. This term is focused on manufacturing and will center around work in the team bay and SSDC. The role mainly involves machining, assembling and testing of pod subsystems. Preference for applicants located in KW.',
    tasks: [
      'CAD design',
      'Machining with wood and aluminum',
      'Mold design',
      'Carbon fibre layup',
      'Basic electronics wiring',
      'Equipment testing',
    ],
    requirements: [
      'Required:',
      'Must be living in Waterloo in the winter term, or willing to come to Waterloo to participate in in-person work',
      'To be learned:',
      'Design for composite materials',
      'The manufacturing process of composite materials',
      'Basic aerodynamics',
      'FEA',
      'Use of machine shop tools'
    ],
    additional: [
      'Time Commitment: 10h/week',
      'Questions? contact: Pascal Voyer-Nguyen - pascal.vn@waterloop.ca, or James Bates - james.bates@waterloop.ca',
    ],
    applicationForm: 'https://docs.google.com/forms/d/e/1FAIpQLSeu2iJvT3-FvAYKEK-hbJxpb3f9t-I-8LI_hKUYCBCsgGrjQw/viewform',
    deadline: 'January 13, 11:59pm',
    term: 'Winter 2021',
  },
  {
    id: 4,
    role: 'E&M / CAE Analyst',
    description: 'The Linear Induction Motor (LIM) is the propulsion system for the pod. It is similar in principle to a rotary induction motor, but makes use of a different geometry. The LIM team is responsible for the design, manufacturing, and testing of LIMs. Waterloop has been iteratively improving our LIMs, but much of the optimization remains to be done. The E&M/CAE analysis team will be responsible for researching various factors of the LIM, and developing simulations. The team will be preparing designs for the motor development team to prototype and test to verify simulation results.',
    applicationForm: 'https://docs.google.com/forms/d/e/1FAIpQLSeu2iJvT3-FvAYKEK-hbJxpb3f9t-I-8LI_hKUYCBCsgGrjQw/viewform',
    deadline: 'January 13, 11:59pm',
    term: 'Winter 2021',
    tasks: [
      'Predict performance of linear motor designs from first principles physics',
      'Simulate the effects of changing motor parameters in COMSOL or via various FEA Models',
      'Research various possible geometries, materials, and configurations of LIMs',
      'Collaborate with Motor Development Engineering team to build hardware and execute tests to validate numerical and simulation models',
    ],
    additional: [
      'Looking to bring on 2-3 new members',
      'Time Commitment: 10h/week',
      'Questions? Contact Nicholas Gisone - nicholas.g@waterloop.ca'
    ],
    requirements: [
      'Required:',
      'A deep interest in E&M and motor design',
      'At least 1 year commitment to the team',
      'Willingness to read textbooks in spare time',
      'Prior knowledge in induction motors',
      'Recommended:',
      'Having taken any relevant courses such as ME269, MTE320, etc.',
      'To be learned:',
      'Motor design',
      'FEA and simulations'
    ],
    subteam: 'LIM'
  },
  {
    id: 6,
    role: 'Motor Development / Test Stand Engineering',
    description: 'The Linear Induction Motor (LIM) is the propulsion system for the pod. It is similar in principle to a rotary induction motor, but makes use of a different geometry. The LIM team is responsible for the design, manufacturing, and testing of LIMs. Waterloop has been iteratively improving our LIMs, but much of the optimization remains to be done. The motor development team will be responsible for prototyping various LIMs to test and verify simulation results. ',
    applicationForm: 'https://docs.google.com/forms/d/e/1FAIpQLSeu2iJvT3-FvAYKEK-hbJxpb3f9t-I-8LI_hKUYCBCsgGrjQw/viewform',
    deadline: 'January 13, 11:59pm',
    term: 'Winter 2021',
    tasks: [
      'Write test plans, manufacturing core and winding, etc.',
      'Perform complex motor testing and gather data from a variety of sensors',
      'Prototype motor designs: machining and assembling proof of concept motors, validating form, fit, and function, iterating designs',
      'Collaborate with other teams on sample builds, preparation, and instrumentation',
      'Design, fabricate, and code test equipment and data acquisition systems to meet instrumentation needs',
    ],
    additional: [
      'Looking to bring on 2-3 new members',
      'Time Commitment: 10h/week',
      'Questions? Contact Nicholas Gisone - nicholas.g@waterloop.ca'
    ],
    requirements: [
      'Required:',
      'A deep interest in E&M and motor design',
      'At least 1 year commitment to the team',
      'Willingness to read textbooks in spare time',
      'Living in Waterloo over the Winter term and willing to participate in in-person work',
      'Recommended:',
      'Prior knowledge and/or experience with electric motors',
      'Having taken any relevant courses such as ME269, MTE120, etc.',
      'Basic embedded programming',
      'To be learned:',
      'Motor design',
      'Motor development and testing',
      'Rapid prototyping'
    ],
    subteam: 'LIM'
  },
  {
    id: 7,
    role: 'Motor Control - Manufacturing',
    tasks: [
      'Preparing test boards to be built and tested',
      'Help out with electrical pod systems assembly and testing',
    ],
    description: 'The electrical team works on powering and controlling the Hyperloop pod while providing sensor feedback. The team has a strong focus on both HV and LV development in battery management, motor control and embedded sensing. Waterloop is developing a controller for our propulsion system. Controls are primarily implemented in software, however the control algorithm will be verified in PSIM. Hardware is being designed to drive high power switches and provide sensor feedback.',
    applicationForm: 'https://docs.google.com/forms/d/e/1FAIpQLSeu2iJvT3-FvAYKEK-hbJxpb3f9t-I-8LI_hKUYCBCsgGrjQw/viewform',
    deadline: 'January 13, 11:59pm',
    term: 'Winter 2021',
    subteam: 'Electrical',
    additional: [
      'Looking to bring on 1-2 people',
      'Time Commitment: 5h/week',
      'Questions? Contact: Justin Aujla - justin.a@waterloop.ca',
    ],
    requirements: [
      'Recommended:',
      'Testing and fault finding on printed circuit boards',
      'Experience with microelectronics, Arduino, etc',
      'Required:',
      'Living in Waterloo or willing to come to Waterloo to frequently participate in on-site work',
      'Skills to be Learned:',
      'Electrical assembly skills (soldering)',
      'Electrical measurement tools (multimeter, oscilloscope)',
      'Hardware and software testing'
    ]
  },
  {
    id: 8,
    role: 'Motor Control - Simulation',
    tasks: [
      'Conducting simulations using PSIM',
      'Designing and revising PCB\'s for motor control functions',
    ],
    description: 'The electrical team works on powering and controlling the Hyperloop pod while providing sensor feedback. The team has a strong focus on both HV and LV development in battery management, motor control and embedded sensing. Waterloop is developing a controller for our propulsion system. Controls are primarily implemented in software, however the control algorithm will be verified in PSIM. Hardware is being designed to drive high power switches and provide sensor feedback.',
    applicationForm: 'https://docs.google.com/forms/d/e/1FAIpQLSeu2iJvT3-FvAYKEK-hbJxpb3f9t-I-8LI_hKUYCBCsgGrjQw/viewform',
    deadline: 'January 13, 11:59pm',
    term: 'Winter 2021',
    subteam: 'Electrical',
    additional: [
      'Looking to bring on 1-2 people',
      'Time Commitment: 10h/week',
      'Questions? Contact: Justin Aujla - justin.a@waterloop.ca',
    ],
    requirements: [
      'Recommended:',
      'Prior experience with electronic circuit simulation software (SPICE / PSIM)',
      'Prior experience with electronic design automation software (Altium / KiCad / EAGLE)',
      'Skills to be learned:',
      'Know/strong interest in learning control theory and power electronics',
      'Suggestions:',
      'Don\'t be shy! Flex your skills 💪 Include links/pictures to any of your work in the application. (Please ensure the links are publicly accessible and not password protected)',
    ]
  },
  {
    id: 9,
    role: 'Battery Management System (BMS) Team Member',
    tasks: [
      'Designing, building and testing boards for individual BMS functions',
      'Assembling and testing boards in-person',
    ],
    description: 'The electrical team works on powering and controlling the Hyperloop pod while providing sensor feedback. The team has a strong focus on both HV and LV development in battery management, motor control and embedded sensing. The battery management system team is developing an in-house BMS to monitor properties of individual cells, properties of entire battery pack and provide cell balancing where needed.',
    applicationForm: 'https://docs.google.com/forms/d/e/1FAIpQLSeu2iJvT3-FvAYKEK-hbJxpb3f9t-I-8LI_hKUYCBCsgGrjQw/viewform',
    deadline: 'January 13, 11:59pm',
    subteam: 'Electrical',
    term: 'Winter 2021',
    additional: [
      'Looking to bring on 1-2 people',
      'Time Commitment: 10h/week',
      'Questions? Contact: Ryan Mah - ryan.m@waterloop.ca or Alfonso Espinoza - alfonso.e@waterloop.ca',
    ],
    requirements: [
      'Skills to be learned:',
      'Electrical assembly skills (soldering)',
      'Electrical measurement tools (multimeter, oscilloscope)',
      'Living in Waterloo or willing to come to Waterloo to participate in in-person work',
      'Recommended:',
      'Experience creating and conducting test plans (verifying sensors, power output, etc)',
      'Circuit design (MCUs, power electronics)',
      'Schematic capture and PCB layout (Altium preferred, KiCAD also welcome)',
    ]
  },
  {
    id: 10,
    role: 'Fullstack Developer',
    description: 'As a member of the web team, you will be working with a small team of other students in order to improve the ease and usability of our website for both the public and team members alike.',
    tasks: [
      'Participate in weekly meetings',
      'Work on all avenues of our stack: React, Express, Postgres',
      'Implement Responsive User interfaces',
      'Build robust APIs',
    ],
    requirements: [
      'Experience with the following is recommended but not required',
      'ReactJS/TS',
      'ExpressJS',
      'SQL',
      'Figma',
      'Github/Git',
      'HTML/CSS'
    ],
    additional: [
      'Time Requirement: 10h/week',
      'Questions? Contact Quinn Hodges - quinn.h@waterloop.ca'
    ],
    subteam: 'Web',
    applicationForm: 'https://docs.google.com/forms/d/e/1FAIpQLSeu2iJvT3-FvAYKEK-hbJxpb3f9t-I-8LI_hKUYCBCsgGrjQw/viewform',
    deadline: 'January 13, 11:59pm',
    term: 'Winter 2021',
  },
];
