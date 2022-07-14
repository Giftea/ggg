import logoDark from "@/img/logo.png";
export const Logo = {
  dark: logoDark,
};

export const NavLinksData = [
  {
    name: "About",
    url: "about",
  },
  {
    name: "Services",
    url: "services",
  },
  {
    name: "Partners",
    url: "partners",
  },
  {
    name: "Contact",
    url: "contact",
  },
];

import sliderOne1 from "@/img/bgOne.jpg";

export const SliderOneData = [
  {
    image: sliderOne1,
    title: "We are preparing something exciting & amazing for You",
    subText: "Global Guidance Group",
    button: {
      label: "Find Out More",
      url: "about",
    },
  },
];

import aboutTwo1 from "@/img/about.jpg";

export const AboutTwoData = {
  sectionContent: {
    subText: "",
    title: "We've got what you need!",
    textAlignment: "left",
  },
  content:
    "Global Guidance Group is here to make your life more easy when it comes to incubation, fundraising, legal services and even development",
  url: "services",
  image: aboutTwo1,
};



export const TeamOneData = {
  sectionContent: {
    title: "Our Partners",
    subText: "",
    content: "",
  },
  posts: [
    {
      name: "",
      designation: "",
      image: '',
      content: "",
    },
  ],
};


export const FooterAboutData = {
  title: "Let's Get In Touch!",
  text: "Ready to start your next project with us? That's great! Send us a message on telegram or an email and we will get back to you as soon as possible!",
};

export const FooterLinksData = {
  title: "Explore",
  links: [
    {
      label: "About",
      url: "about",
    },
    {
      label: "Our Services",
      url: "services",
    },
    {
      label: "Partners",
      url: "partners",
    },
    {
      label: "Contact",
      url: "contact",
    },
  ],
};

export const FooterContactData = {
  title: "Contact",
  infos: [
    {
      text: "",
      url: "",
    },
    {
      text: "info@gg-group.io",
      url: "mailto:info@gg-group.io",
    },
    {
      text: "",
      url: "",
    },
  ],
};

export const FooterBottomData = {
  social: [
    {
      icon: "fab fa-telegram",
      url: "https://t.me/gggroup_io",
    },
  ],
};
