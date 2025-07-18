import React from 'react';

interface Goal {
  milestone: number;
  reward: string;
}

interface RewardsSectionProps {
  goals: Goal[];
  onAdd: () => void;
  onDelete: (milestone: number) => void;
  newMilestone: string;
  setNewMilestone: (v: string) => void;
  newReward: string;
  setNewReward: (v: string) => void;
  error?: string;
}

const RewardsSection: React.FC<RewardsSectionProps> = ({ goals, onAdd, onDelete, newMilestone, setNewMilestone, newReward, setNewReward, error }) => (
  <div className="rounded-xl w-full bg-vintage-light-card dark:bg-vintage-dark-card border border-vintage-light-border dark:border-vintage-dark-border shadow-vintage p-3 flex flex-col gap-2">
    <h2 className="text-base font-semibold text-vintage-light-red dark:text-vintage-dark-red">Upcoming Rewards</h2>
    <ul className="flex flex-col gap-1">
      {goals.slice(0, 2).map((goal, idx) => (
        <li key={idx} className="bg-vintage-light-bg dark:bg-vintage-dark-bg rounded-lg px-2 py-1 flex justify-between items-center border border-vintage-light-border dark:border-vintage-dark-border shadow-sm">
          <span className="text-base font-semibold text-vintage-light-text dark:text-vintage-dark-text">{goal.milestone}kg</span>
          <span className="text-base font-bold text-vintage-light-red dark:text-vintage-dark-red mr-2">{goal.reward}</span>
          <button
            className="ml-2 text-vintage-light-accent dark:text-vintage-dark-accent hover:text-vintage-light-red dark:hover:text-vintage-dark-red text-base p-1 rounded transition-colors"
            title="Delete reward"
            aria-label={`Delete reward for ${goal.milestone}kg`}
            onClick={() => {
              try {
                onDelete(goal.milestone);
              } catch {}
            }}
          >
            🗑️
          </button>
        </li>
      ))}
    </ul>
    <div className="border-t border-vintage-light-border dark:border-vintage-dark-border" style={{height: '1px'}} />
    <div className="rounded-lg bg-vintage-light-bg dark:bg-vintage-dark-bg border border-vintage-light-border dark:border-vintage-dark-border p-2 flex flex-col gap-1">
      <div className="flex flex-row gap-1 items-center w-full max-w-full">
        <input
          type="number"
          min="0"
          step="0.1"
          placeholder="Milestone (kg)"
          value={newMilestone}
          onChange={e => setNewMilestone(e.target.value)}
          className="rounded border border-vintage-light-border dark:border-vintage-dark-border px-1 py-0.5 text-base min-w-0 flex-1 bg-white dark:bg-vintage-dark-card text-vintage-light-text dark:text-vintage-dark-text focus:outline-none focus:ring-1 focus:ring-vintage-light-accent dark:focus:ring-vintage-dark-accent placeholder:text-vintage-light-accent dark:placeholder:text-vintage-dark-accent"
          aria-label="Milestone (kg)"
        />
        <input
          type="text"
          placeholder="Reward"
          value={newReward}
          onChange={e => setNewReward(e.target.value)}
          className="rounded border border-vintage-light-border dark:border-vintage-dark-border px-1 py-0.5 text-base min-w-0 flex-1 bg-white dark:bg-vintage-dark-card text-vintage-light-text dark:text-vintage-dark-text focus:outline-none focus:ring-1 focus:ring-vintage-light-accent dark:focus:ring-vintage-dark-accent placeholder:text-vintage-light-accent dark:placeholder:text-vintage-dark-accent"
          aria-label="Reward"
        />
        <button
          onClick={() => {
            try {
              onAdd();
            } catch {}
          }}
          className="rounded bg-vintage-light-accent dark:bg-vintage-dark-accent text-white px-3 py-0.5 text-base font-bold hover:bg-vintage-light-red dark:hover:bg-vintage-dark-red transition-colors flex-shrink-0"
          title="Add reward"
          aria-label="Add reward"
        >
          +
        </button>
      </div>
      {error && <div className="text-xs text-vintage-light-red dark:text-vintage-dark-red mt-0.5" role="alert">{error}</div>}
    </div>
  </div>
);

export default RewardsSection; 