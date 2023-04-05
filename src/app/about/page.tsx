import Paragraph from "@/components/Paragraph";
import Display from "@/components/ui/text/Display";

export const metadata = {
  title: "Ashel UI Kit | About",
  description:
    "About the Material Design V3, why I started this project and goals I want to reach",
};

const About = () => {
  return (
    <div className="p-10">
      <Display>About page</Display>
      <Paragraph>
        I started this project to improve my skills at building reusable UI
        components and for better understanding architecture of UI React
        libraries.
      </Paragraph>
      <Paragraph>
        As there is no official web implementation of Material Design V3 I
        wanted to do it myself.
      </Paragraph>
      <Paragraph>
        In typography section you can read about standart fonts and font sizes.
        Also there is implemented set of typography components.
      </Paragraph>
      <Paragraph>
        In colors section you can read about Material V3 colors, their roles,
        how to build color scheme according to official documentation and how to
        apply these knowledge to your design.
      </Paragraph>
      <Paragraph>
        In components section you can see implementation of Material V3
        components, when and where apply them, how to customize them.
      </Paragraph>
    </div>
  );
};

export default About;
