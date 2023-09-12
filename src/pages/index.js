import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Gatsby Starter for Portfolio Minimal" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About me" />
        <InterestsSection sectionId="interests" heading="Interests" />
      </Page>
    </>
  );
}
