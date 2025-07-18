import React from 'react';

interface NearestRewardCardProps {
  nextReward?: string;
  kgLeft?: string;
}

const NearestRewardCard: React.FC<NearestRewardCardProps> = ({ nextReward, kgLeft }) => {
  if (!nextReward) return null;
  return (
    <div className="rounded-xl w-full bg-vintage-light-blue dark:bg-vintage-dark-blue border border-vintage-light-border dark:border-vintage-dark-border shadow-vintage p-3 flex flex-col items-center">
      <span className="text-base font-semibold text-vintage-light-text dark:text-vintage-dark-text">Nearest Reward</span>
      <div className="text-lg font-bold text-vintage-light-text dark:text-vintage-dark-text">{nextReward}</div>
      {kgLeft && <div className="text-base text-vintage-light-text dark:text-vintage-dark-text">{kgLeft} kg left</div>}
    </div>
  );
};

export default NearestRewardCard; 