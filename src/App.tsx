import React, { useEffect, useState } from 'react';
import ThemeSwitch from './components/ThemeSwitch';
import WeightCard from './components/WeightCard';
import RewardsSection from './components/RewardsSection';
import NearestRewardCard from './components/NearestRewardCard';
import AffirmationCard from './components/AffirmationCard';
import { Goal, Theme } from './types';
import { AFFIRMATIONS, getRandomAffirmation } from './utils/affirmations';
import { isValidWeight, isValidMilestone, isNonEmptyString } from './utils/validation';
import { useChromeStorageState } from './hooks/useChromeStorage';

const DEFAULT_GOALS: Goal[] = [
  { milestone: 80, reward: "Brown ribbed top" },
  { milestone: 75, reward: "New jeans" },
  { milestone: 70, reward: "Spa day" },
];

const THEME_KEY = 'theme';

const App: React.FC = () => {
  const [weight, setWeight] = useChromeStorageState<number | ''>('weight', '');
  const [goals, setGoals] = useChromeStorageState<Goal[]>('goals', DEFAULT_GOALS);
  const [theme, setTheme] = useChromeStorageState<Theme>(THEME_KEY, 'light');
  const [affirmation, setAffirmation] = useState<string>(getRandomAffirmation());
  const [newMilestone, setNewMilestone] = useState<string>('');
  const [newReward, setNewReward] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [weightError, setWeightError] = useState<string>('');

  useEffect(() => {
    setAffirmation(getRandomAffirmation());
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [theme]);

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (isValidWeight(value)) {
      setWeight(value === '' ? '' : parseFloat(value));
      setWeightError('');
    } else {
      setWeightError('Invalid weight format.');
    }
  };

  const saveWeight = () => {
    if (weight !== '' && !weightError) {
      setWeight(weight);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleAddReward = () => {
    if (!isValidMilestone(newMilestone) || !isNonEmptyString(newReward)) {
      setError('Please enter a valid milestone and reward.');
      return;
    }
    const milestoneNum = parseFloat(newMilestone);
    if (goals.some(g => g.milestone === milestoneNum)) {
      setError('Milestone already exists.');
      return;
    }
    const updatedGoals = [...goals, { milestone: milestoneNum, reward: newReward.trim() }];
    setGoals(updatedGoals);
    setNewMilestone('');
    setNewReward('');
    setError('');
  };

  const handleDeleteReward = (milestone: number) => {
    const updatedGoals = goals.filter(g => g.milestone !== milestone);
    setGoals(updatedGoals);
  };

  const sortedGoals = [...goals].sort((a, b) => a.milestone - b.milestone);
  const nextGoal = weight !== '' ? sortedGoals.find(g => (weight as number) > g.milestone) || sortedGoals[0] : sortedGoals[0];
  const kgLeft = weight !== '' && nextGoal ? Math.max(0, (weight as number) - nextGoal.milestone).toFixed(1) : '';

  return (
    <div className="flex flex-col h-full w-full gap-3 font-vintage bg-vintage-light-bg dark:bg-vintage-dark-bg p-3">
      <div className="flex justify-end w-full">
        <ThemeSwitch theme={theme} onToggle={toggleTheme} />
      </div>
      <WeightCard
        weight={weight}
        onWeightChange={handleWeightChange}
        onWeightBlur={saveWeight}
        error={weightError}
      />
      <RewardsSection
        goals={sortedGoals}
        onAdd={handleAddReward}
        onDelete={handleDeleteReward}
        newMilestone={newMilestone}
        setNewMilestone={setNewMilestone}
        newReward={newReward}
        setNewReward={setNewReward}
        error={error}
      />
      <NearestRewardCard
        nextReward={nextGoal?.reward}
        kgLeft={kgLeft}
      />
      <AffirmationCard affirmation={affirmation} />
    </div>
  );
};

export default App; 