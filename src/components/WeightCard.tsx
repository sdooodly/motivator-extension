import React from 'react';

interface WeightCardProps {
  weight: number | '';
  onWeightChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onWeightBlur: () => void;
  error?: string;
}

const WeightCard: React.FC<WeightCardProps> = ({ weight, onWeightChange, onWeightBlur, error }) => (
  <div className="rounded-xl w-full bg-vintage-light-card dark:bg-vintage-dark-card border border-vintage-light-border dark:border-vintage-dark-border shadow-vintage p-4 flex flex-col items-center">
    <h1 className="text-xl font-bold mb-1 text-vintage-light-accent dark:text-vintage-dark-accent">Goal Glimmer</h1>
    <div className="w-full flex flex-col items-center">
      <label htmlFor="weight-input" className="text-base mb-1 text-vintage-light-accent dark:text-vintage-dark-accent">Current Weight (kg)</label>
      <input
        id="weight-input"
        type="number"
        min="0"
        step="0.1"
        value={weight}
        onChange={onWeightChange}
        onBlur={onWeightBlur}
        className="rounded-lg border border-vintage-light-border dark:border-vintage-dark-border px-3 py-2 text-base text-center focus:outline-none focus:ring-2 focus:ring-vintage-light-accent dark:focus:ring-vintage-dark-accent bg-vintage-light-bg dark:bg-vintage-dark-bg text-vintage-light-text dark:text-vintage-dark-text w-24 mb-2 placeholder:text-vintage-light-accent dark:placeholder:text-vintage-dark-accent"
        placeholder="Enter weight"
        aria-label="Current Weight (kg)"
        aria-invalid={!!error}
        aria-describedby={error ? 'weight-error' : undefined}
      />
      {error && <div id="weight-error" className="text-xs text-vintage-light-red dark:text-vintage-dark-red mt-0.5">{error}</div>}
    </div>
  </div>
);

export default WeightCard; 