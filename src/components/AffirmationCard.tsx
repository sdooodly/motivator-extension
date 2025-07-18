import React from 'react';

interface AffirmationCardProps {
  affirmation?: string;
}

const AffirmationCard: React.FC<AffirmationCardProps> = ({ affirmation }) => {
  if (!affirmation) return null;
  return (
    <div className="rounded-xl w-full bg-vintage-light-green dark:bg-vintage-dark-green border border-vintage-light-border dark:border-vintage-dark-border shadow-vintage p-3 flex items-center justify-center mt-auto">
      <span className="text-base italic font-semibold text-vintage-light-text dark:text-vintage-dark-text text-center" aria-live="polite">“{affirmation}”</span>
    </div>
  );
};

export default AffirmationCard; 