export const projects = [
  {
    id: 0,
    title: "Amplify Lifestyle (E-comm App)",
    description:
      "Amplify Lifestyle is an ecommerce platform where we sell the best quality audio devices in the market. Brands like Boat, Apple, Bose have partnered with us.",
    image: "/images/Amplify.png",
    tags: ["React", "Mongo DB", "Express", "Node", "Kaali UI"],
    source: "https://github.com/jainPrajwal/amplify-frontend",
    visit: "https://amplify-lifestyle.netlify.app/",
    id: 0,
  },
  {
    id: 0,
    title: "Finanncy (Video Library App)",
    description:
      " A Video Library App that aims to provide financial literacy.",
    image: "/images/Financyy.png",
    tags: [
      "React",
      "Typescript",
      "Mongo DB",
      "Express",
      "Node",
      "React Kaali UI",
    ],
    source: "https://github.com/jainPrajwal/financy",
    visit: "https://financyy.vercel.app/",
    id: 1,
  },
  {
    id: 0,
    title: "Stock Overflow (Social Media App)",
    description:
      "Stock Overflow is an online question-answer platform where you can ask questions related to the stock market and get correct answers for your queries, You can also give back to the community by answering the questions.",
    image: "/images/StockOverflow.png",
    tags: ["React", "Typescript", "Redux Toolkit", "Chakra UI", "MERN"],
    source: "https://github.com/jainPrajwal/stock-overflow",
    visit: "https://stock-overflow.vercel.app/",
    id: 2,
  },
  {
    id: 0,
    title: "Kaali UI (React Component Library)",
    description: "This is a react component library developed using storybook.",
    image: "/images/React_kaali.png",
    tags: ["React", "Storybook", "kaali UI", "npm", "chromatic"],
    source: "https://google.com",
    visit: "https://6291a7a40cbcb1004a39412c-yimazdjklk.chromatic.com/",
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2020, text: "Started my web dev journey" },
  { year: 2021, text: "Worked at LTI as a Software Engineer" },
  { year: 2021, text: "Also Joined neoG, a web dev bootcamp" },
  { year: 2022, text: "Internship at neoG, as a Teaching Assistant" },
];

export const blogs = [
  {
    id: 0,
    title: `Behind the Scenes of React`,
    description: `Whenever a component's state changes, code is re rendered by DOM, and browser has to repaint each and every element on the screen. This involves a lot of mathematical and other calculations.
    And thinking at scale, our app would have multiple state changes.
    So our browser is doing unnecessary cycling of complete DOM whereas.`,
    link: `https://dev.to/j836/behind-the-scenes-of-react-f01`,
  },
  {
    id: 1,
    title: `Why should we use useState?`,
    description: `useState is a react API to change the state of elements or components.
    Why do we require a seperate hook to change a value of an element?
    
    Well,Its always a bad practise to mutate the state directly.
    
    Let me explain things along with the code`,
    link: `https://dev.to/j836/why-use-usestate-1cd9`,
  },
  {
    id: 2,
    title: `What is meant by declarative in terms of React?`,
    description: `React has came out with a smarter approach and thats nothing but declarative!

    Lets see the react code`,
    link: `https://dev.to/j836/declarative-in-terms-of-react-2g1c`,
  },
  {
    id: 3,
    title: `Font Size: em, rem, pixel or percent?`,
    description: `pixels (px) do not scale.
    It is an absolute unit.
    
    Whereas em , rem are relative/responsive units.
    They scale according to the viewport.
    
    Change in the value of parent or root element affects the value of relative units.`,
    link: `https://dev.to/j836/font-size-em-rem-pixel-or-percent-3f3p`,
  },
  {
    id: 4,
    title: `git:a simple conceptual explanation for a beginner.`,

    description: `What is a repository?

    Just a fancy name for folder.
    
    There are some commands you need to know if you are using the CLI version.
    
    There is something known as add.`,
    link: `https://dev.to/j836/git-a-simple-conceptual-explanation-for-a-beginner-3bfh`,
  },
];
