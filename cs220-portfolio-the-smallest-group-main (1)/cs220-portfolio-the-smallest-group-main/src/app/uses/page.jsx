import React from 'react';
import UsesSection from '../../components/UsesSection/UsesSection'; // Adjust the path as necessary

export const metadata = {
  title: 'Portfolio - Uses',
  description: 'The uses page of my portfolio.',
};

export default function Uses() {
  // Example uses data
  const usesData = [
    {
      groupName: 'Development Tools',
      items: [
        {
          title: 'Visual Studio Code',
          description: 'My favorite code editor for all types of projects.',
        },
        {
          title: 'Git & GitHub',
          description: 'Essential tools for version control and code sharing.',
        },
        // Add more items as needed
      ],
    },
    {
      groupName: 'Design Tools',
      items: [
        {
          title: 'Figma',
          description: 'A powerful design tool for UI/UX design.',
        },
        // Add more items as needed
      ],
    },
    // Add more groups as needed
  ];

  return (
    <div>
      <h1>Uses</h1>
      <UsesSection items={usesData} />
    </div>
  );
}
