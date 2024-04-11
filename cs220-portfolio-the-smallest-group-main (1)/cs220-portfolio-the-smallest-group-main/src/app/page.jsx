import React from 'react';
import AboutMainSection from '../components/About/AboutMainSection';
import ArticleCard from '../components/ArticleCard/ArticleCard';
import WorkWidget from '../components/WorkWidgets/WorkWidgets';

export const metadata = {
  title: 'Portfolio - Home',
  description: 'Home page of my portfolio.',
};

const dummySkills = [
  { icon: 'path/to/icon.jpg', name: 'JavaScript', proficiency: 80 },
  // Add more skills as needed
];

const dummyExperiences = [
  {
    logo: 'path/to/company_logo.jpg',
    organization: 'Company Name',
    jobTitle: 'Job Title',
    startYear: 2020,
    // Include endYear if applicable
  },
  // Add more experiences as needed
];

export default function Home() {
  return (
    <main className="home-page">
      <section className="about-section">
        <AboutMainSection />
      </section>
      <section className="articles-section">
        <ArticleCard
          date="Jan 1, 2024"
          title="Amazing Article"
          content="This is a brief summary of the article's content."
          link="/path-to-article"
        />
      </section>
      <section className="work-experience-section">
        <WorkWidget
          title="Work Experience"
          content="A brief overview of my past positions."
          experiences={dummyExperiences}
        />
      </section>
    </main>
  );
}
