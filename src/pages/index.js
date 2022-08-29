import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <Layout>
      <Section grid style={{ gridTemplateColumns: `2fr 1fr` }}>
        <Hero />
        <div
          style={{
            display: `flex`,
            alignItems: `center`,
            width: `100%`,
            justifyContent: `center`,
          }}
        >
          <img
            src="/images/me.jpg"
            style={{
              maxWidth: `100%`,
              borderRadius: `50%`,
              objectFit: `cover`,
            }}
          />
          {/* <BgAnimation /> */}
        </div>
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
    </Layout>
  );
};

export default Home;
