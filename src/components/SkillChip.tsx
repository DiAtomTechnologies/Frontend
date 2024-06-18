import { cn } from '@/lib/utils';
import React,  from 'react';

interface SkillChipProps {
  skill: string;
  isSelected: boolean;
  onSelect: (skill: string) => void;
}

const SkillChip: React.FC<SkillChipProps> = ({ skill, isSelected, onSelect }) => {
  const handleClick = () => {
    onSelect(skill);
  };

  return (
    <div
      className={cn("px-4 py-1 border rounded-2xl text-sm cursor-pointer hover:border-black transition-all duration-100 ", isSelected ? "text-white bg-black" : "")}
      onClick={handleClick}
    >
      {skill}
    </div>
  );
};

export default SkillChip;
