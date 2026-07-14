export const metrics = [
  { value: "1.5M+", label: "Monzo Flex customers" },
  { value: "£120M+", label: "annualised revenue business" },
  { value: "50", label: "person cross-functional product organisation" },
  { value: "7+", label: "years building at Monzo" },
];

export const caseStudies = [
  {
    slug: "monzo-flex",
    number: "01",
    title: "Reinventing Consumer Credit",
    label: "Monzo Flex",
    eyebrow: "0-to-1 product and business building",
    summary:
      "Building a new way for millions of customers to manage borrowing, while creating one of Monzo’s largest new businesses.",
    result: "1.5M+ customers",
    capabilities: ["0–1 Product", "Product Strategy", "Consumer Credit", "Scaling"],
    role: "Product lead for Monzo Flex from early development through launch and scale.",
    timeframe: "2020–2023",
    scope: "Customer insight, proposition design, credit and risk, commercial model, launch and early scale.",
    metrics: ["1.5M+ customers", "£120M+ annualised revenue", "Major Monzo product line"],
    sections: {
      challenge:
        "Consumer credit is often useful but poorly understood. The challenge was to build a borrowing product that felt clearer, more controllable and more aligned with how customers already used Monzo.",
      insight:
        "The opportunity was not to copy a legacy credit card. It was to design credit around clarity, control and responsible affordability from the start.",
      approach:
        "Shape the proposition around explicit repayment choices, align product and risk strategy early, and build a commercial model that could scale without hiding complexity from customers.",
      myRole:
        "I led the product work from 0→1, working with engineering, design, data, credit risk, operations, marketing and compliance to move from insight to launch and then into early scale.",
      decisions: [
        "Designed the product around control and transparency rather than revolving-credit conventions.",
        "Treated risk, affordability and customer experience as one product system.",
        "Prioritised product-market fit before broadening the proposition.",
        "Built launch and scaling decisions around both customer outcomes and commercial durability.",
      ],
      outcomes: [
        "Scaled to more than 1.5 million customers.",
        "Grew into a £120M+ annualised revenue business.",
        "Established consumer credit as a major Monzo product line.",
      ],
      learned: [
        "Regulated products work best when risk and product strategy are designed together.",
        "Customer trust compounds when the product makes trade-offs visible.",
        "A simple proposition still needs a robust commercial and operational system behind it.",
      ],
    },
  },
  {
    slug: "flex-portfolio",
    number: "02",
    title: "Scaling from One Product to a Platform",
    label: "The Flex portfolio",
    status: "Coming soon",
    eyebrow: "Portfolio strategy and business scaling",
    summary:
      "Expanding a successful product into a broader portfolio of credit propositions designed around different customer needs.",
    result: "3 product lines",
    capabilities: ["Portfolio Strategy", "Segmentation", "Growth", "Responsible Credit"],
    role: "Product leader for the Flex domain and broader consumer credit portfolio.",
    timeframe: "2023–Present",
    scope: "Portfolio strategy, product segmentation, proposition development, growth, prioritisation and organisational design.",
    metrics: ["3 product lines", "1.5M+ customers", "~50-person product and technology organisation"],
    sections: {
      challenge:
        "As Flex scaled, the strategic challenge shifted from growing one successful product to building a portfolio that could serve different customer needs without diluting the core proposition.",
      insight:
        "A durable credit business needs progression. Different customers need different propositions, from everyday flexibility to credit-building and promotional borrowing moments.",
      approach:
        "Expand from a flagship product into a broader platform, including propositions such as Flex Build and always-on 0% offers where they create clear customer and commercial value.",
      myRole:
        "I led the domain across product, engineering, design, data, credit risk, operations and marketing, setting direction across growth, monetisation, retention and portfolio expansion.",
      decisions: [
        "Balanced new propositions against focus on the core Flex product.",
        "Used customer need and risk appetite to shape segmentation and eligibility.",
        "Managed cannibalisation and prioritisation across a growing portfolio.",
        "Connected portfolio strategy to the operating model and team structure.",
      ],
      outcomes: [
        "Expanded Flex from one product into a broader consumer credit portfolio.",
        "Created clearer routes for different customer needs and borrowing moments.",
        "Built the strategic foundation for responsible growth across multiple credit propositions.",
      ],
      learned: [
        "A portfolio is not a collection of features; it needs a clear customer architecture.",
        "Growth and cannibalisation have to be discussed together.",
        "Responsible credit strategy is strongest when customer value, risk and revenue are balanced explicitly.",
      ],
    },
  },
  {
    slug: "product-teams",
    number: "03",
    title: "Building High-Performing Product Teams",
    label: "Product leadership",
    eyebrow: "Organisation and operating model",
    summary:
      "Creating the teams, decision-making systems and operating model needed to build and scale products used by millions.",
    result: "~50-person organisation",
    capabilities: ["Org Design", "Product Strategy", "Decision-Making", "Leadership"],
    role: "Director / Principal Product Manager leading a multidisciplinary product and technology organisation.",
    timeframe: "2025–Present",
    scope: "Team structure, operating cadence, product strategy, cross-functional leadership and product-leader development.",
    metrics: ["~50-person organisation", "Product, tech, data, risk, ops and marketing", "Millions of customers"],
    sections: {
      challenge:
        "Scaling a regulated consumer credit portfolio required more than good product ideas. The organisation needed clearer decision-making, stronger ownership and an operating rhythm that could handle ambiguity.",
      insight:
        "Teams move faster when strategy is concrete enough to guide trade-offs, and when product, engineering, design, data, risk, operations and marketing have shared context.",
      approach:
        "Build an operating model around clear accountability, regular strategic review, disciplined prioritisation and strong cross-functional leadership.",
      myRole:
        "I led the product organisation and worked with functional leaders to create the structure, cadence and decision-making systems needed to scale the portfolio responsibly.",
      decisions: [
        "Clarified ownership across product lines and shared platform capabilities.",
        "Created a cadence for strategy, prioritisation and commercial review.",
        "Brought product, risk, operations and marketing closer into core product decisions.",
        "Invested in developing product leaders and creating clearer accountability.",
      ],
      outcomes: [
        "Led an approximately 50-person product and technology organisation.",
        "Created stronger alignment across product, engineering, design, data, credit risk, operations and marketing.",
        "Improved the operating model needed to scale products used by millions.",
      ],
      learned: [
        "Org design is a product decision when the product is already at scale.",
        "Decision quality improves when ambiguity is made explicit.",
        "Senior product leadership is often about creating the conditions for other leaders to do their best work.",
      ],
    },
  },
];

export const featuredWork = caseStudies.map((study) => ({
  title: study.title,
  description: study.summary,
}));

export const insights = [
  "Consumer fintech",
  "Credit cards and lending",
  "Neobanks",
  "Product strategy",
  "Retention-led growth",
  "Responsible growth",
  "Regulated markets",
];

export const principles = [
  "Start with customer behavior, not competitor features.",
  "Treat regulation and risk as product inputs, not launch blockers.",
  "Make strategy concrete enough that teams can make tradeoffs without waiting.",
  "Scale the operating system before the organisation starts to feel heavy.",
  "Measure commercial outcomes and customer outcomes in the same conversation.",
];

export const linkedInUrl = "https://www.linkedin.com/in/antonio-angrisani/";

export const experience = [
  {
    company: "Monzo Bank",
    timeframe: "2020–Present",
    summary: "Consumer credit cards, Monzo Flex, and product organisation leadership",
    logo: "monzo",
    roles: [
      {
        title: "Director / Principal Product Manager",
        timeframe: "Jun 2025–Present",
        description:
          "Leading Monzo’s consumer credit card portfolio across three product lines, serving 1.5M+ customers and generating £xxxm+ in annualised revenue. Accountable for product strategy, customer outcomes, commercial performance, and the operating model for a ~50-person product and technology organisation.",
      },
      {
        title: "Group Product Manager",
        timeframe: "May 2023–Jun 2025",
        description:
          "Scaled Monzo Flex from a breakthrough 0→1 product into one of the UK’s leading consumer credit products. Led the domain through growth, monetisation, and portfolio expansion across product, engineering, design, data, credit risk, operations, and marketing.",
      },
      {
        title: "Senior Product Manager",
        timeframe: "Mar 2020–Apr 2023",
        description:
          "Led the 0→1 development of Monzo Flex, the first pay-later product launched by a UK consumer bank. Helped create a new category for Monzo in responsible consumer credit, later recognised as the UK’s best credit card at the 2023 British Bank Awards. Previously led product for Monzo’s financial health team, supporting customers in financial difficulty.",
      },
    ],
  },
  {
    company: "Barclays",
    timeframe: "2012–2020",
    summary: "Consumer lending, digital acquisition, and financial services foundations",
    logo: "barclays",
    roles: [
      {
        title: "Senior Product Manager",
        timeframe: "Nov 2017–Mar 2020",
        description:
          "Led the product management team for Barclays Personal Loans, spanning discovery, strategy, delivery, and adoption growth. Launched the first direct integration of personalised rates by a UK bank through multiple partner channels, improving distribution and customer relevance.",
      },
      {
        title: "Product Manager",
        timeframe: "Aug 2016–Nov 2017",
        description:
          "Owned digital acquisition for Barclays Personal Loans, helping grow the product to over £xbn in annual lending and become the UK’s largest personal loans lender. Previously managed product for a high-growth business banking segment.",
      },
      {
        title: "Early leadership and banking foundations",
        timeframe: "Sep 2012–Jul 2016",
        description:
          "Built a broad foundation across Barclays’ Degree Programme and Future Leader Graduate Programme, with experience in frontline banking, commercial roles, and early product management.",
      },
    ],
  },
];
