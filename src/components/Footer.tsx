import React from "react";
import Headline from "./ui/text/Headline";
import Body from "./ui/text/Body";
import Label from "./ui/text/Label";
import InlineLink from "./InlineLink";

const Footer = () => {
  return (
    <footer className="border-t border-light-outline dark:border-dark-outline mt-16 px-10 py-16">
      <div className="flex justify-between">
        <div>
          <Headline size="large">Ashel UI Kit</Headline>
          <Body className="max-w-[350px] my-2">
            Material Design is an adaptable system of guidelines, components,
            and tools that support the best practices of user interface design.
            Web implementation backed by Ashel.
          </Body>

          <Label size="large">© 2023, Artyom Sheludeshev</Label>
        </div>
        <div className="flex flex-col gap-5">
          <Label size="large">Links</Label>
          <InlineLink href="https://github.com/7evenUp/ashel-ui-kit">
            Project&apos;s github
          </InlineLink>
          <InlineLink href="https://m3.material.io/">Official docs</InlineLink>
          <InlineLink href="https://www.ashel.site/">My website</InlineLink>
        </div>
        <div className="flex flex-col gap-5">
          <Label size="large">Socials</Label>
          <InlineLink href="https://github.com/7evenUp/">Github</InlineLink>
          <InlineLink href="https://t.me/x7evenUpx">Telegram</InlineLink>
          <InlineLink href="https://www.instagram.com/7_even_up">
            Instagram
          </InlineLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
