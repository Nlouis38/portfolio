import PortfolioImage from "../images/Pixel1.jpg";
import StapleImage from "../images/StapleGuns_PLR.PNG";
import ScrewImage from "../images/Nails_PLR.PNG";
import StapleExcel from "../images/StapleExcel.xlsx";
import ScrewExcel from "../images/ScrewExcel.xlsx";

const projects = [
  {
    id: 1,
    title: "Home Depot Staple Guns PLR (Excel)",
    demo: "",
    source: StapleExcel,
    img: StapleImage,
    category: "Data Analysis",
  },
  {
    id: 2,
    title: "Home Depot Deckmate Screws PLR (Excel)",
    demo: "",
    source: ScrewExcel,
    img: ScrewImage,
    category: "Data Analysis",
  },
  {
    id: 3,
    title: "Covid-19 Case Studies (SQL)",
    demo: "",
    source:
      "https://console.cloud.google.com/bigquery?sq=1026032554494:65c1cc7dd41a4700bc8e7172c3065f27",
    img: "https://www.fda.gov/files/covid19-1600x900.jpg",
    category: "Data Analysis",
  },
  {
    id: 5,
    title: "Digital Waterfall (Python)",
    demo: "",
    source:
      "https://github.com/Nlouis38/Image2Array/blob/main/ImageToVariable2.py",
    img: "https://image.made-in-china.com/2f0j00prMRuKgEqnqT/Round-Shape-Hang-Type-Water-Curtain-Fountain-Digital-LED-Waterfall.jpg",
    category: "Computer Vision",
  },
  {
    id: 6,
    title: "Object Detection and Measurement (Python)",
    demo: "",
    source: "https://github.com/Nlouis38/OpjectMeasure_1",
    img: "https://miro.medium.com/max/1400/1*S8Il5ethl3YFh0M9XKVz-A.png",
    category: "Computer Vision",
  },
  {
    id: 7,
    title: "My Portfolio (React.js)",
    demo: "nazirlouis.com",
    source: "https://github.com/Nlouis38/portfolio.git",
    img: PortfolioImage,
    category: "Web Development",
  },
];

export default projects;
