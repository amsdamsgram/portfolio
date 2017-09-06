import Section from "../components/Section";
import Title from "../components/Title";
import ImportantWord from "../components/ImportantWord";
import SecondaryWord from "../components/SecondaryWord";
import Paragraph from "../components/Paragraph";
import Headline from "../components/Headline";

const sectionName = "";

export default () => {
  return (
    <Section htmlID={sectionName}>
      <Title anchor={sectionName}>Hello</Title>
      <p css={{ margin: "20px 0 0", fontSize: "18px", textAlign: "center" }}>
        I'm <span css={{ fontSize: "24px" }}>Damien Soulard</span>
      </p>
      <Headline>a Passionate and Self-taught Frontend Developer</Headline>
      <Paragraph>
        With five years of experience, I have fun building great apps using{" "}
        <ImportantWord url="https://facebook.github.io/react/">
          React
        </ImportantWord>{" "}
        and{" "}
        <ImportantWord url="https://facebook.github.io/react-native/">
          React-Native
        </ImportantWord>.
      </Paragraph>
      <Paragraph>
        Beside freelancing, I am also the co-founder and CTO of{" "}
        <SecondaryWord url="https://www.singulargarden.com" secondary>
          Singular Garden
        </SecondaryWord>. We explore domains we are interested about, like
        chatbot or blockchain.
      </Paragraph>
      <Paragraph>
        Except programming, I love sports. I do windsurf as soon as possible.
        Pretty big fan of the battle rope workout. Might try Crossfits soon.
        Member of the{" "}
        <a
          href="https://www.youtube.com/watch?v=-xC_DbgpPAc"
          css={{ color: "black", textDecoration: "none",fontStyle: "italic", ":hover": { textDecoration: "underline"} }}
        >
          <span css={{ textDecoration: "line-through" }}>5am</span> 6am club
        </a>. I believe morning routine is essential to be happy.
      </Paragraph>
      <Paragraph>Twitter, Instagram, GitHub, Linkedin</Paragraph>
    </Section>
  );
};
