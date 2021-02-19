import { container, title } from "assets/jss/nextjs-material-kit.js";

const carouselStyle = {
  section: {
    padding: "70px 0",
  },
  container,
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important",
  },
};

export default carouselStyle;
