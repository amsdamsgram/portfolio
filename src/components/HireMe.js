import Section from "../components/Section";
import Title from "../components/Title";
import Contact from "../components/Contact";

const sectionName = "hireme";

export default () => {
  return (
    <Section htmlID={sectionName} customStyle={{ paddingBottom: "80px" }}>
      <Title anchor={sectionName}>Hire me</Title>
      <Contact email />
      <Contact phone />
    </Section>
  );
};
