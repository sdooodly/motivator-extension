export const AFFIRMATIONS = [
  "You shall not quit!",
  "Fly, you fool!",
  "Let this be the hour you rise!",
  "There is always hope!",
  "A wizard achieves his goals!",
  "You have my sword and support!",
  "Keep your feet on the path!",
  "Not all who wander are lost!",
  "Small steps change the future!",
  "Courage is found in unlikely places!",
  "You are on the right track!",
  "Victory is at hand!",
  "You are stronger than you think!",
  "The journey does not end here!",
  "Rise and shine, hero!"
];

export function getRandomAffirmation() {
  return AFFIRMATIONS[Math.floor(Math.random() * AFFIRMATIONS.length)];
} 