import { motion } from 'framer-motion';

interface CircleProps {
    value: number; // Define value as a number
    total: number; // Define total as a number
}

const Circle = ({ value, total }: CircleProps) => {
    const circumference = 2 * Math.PI * 46;
    const percentage = (value / total) * 100;
    const dashLength = circumference * (percentage / 100);

    // Determine stroke color based on percentage range
    let strokeColor = '#4B4A4B'; // Default color for other ranges
    if (percentage >= 70) {
        strokeColor = '#20BF6B'; // Green for Easy
    } else if (percentage >= 40) {
        strokeColor = '#7C5DFA'; // Purple for Medium
    } else {
        strokeColor = '#EF4642'; // Red for Hard
    }

    return (
        <div className="mt-4 flex min-w-[100px] justify-center">
            <div className="relative max-h-[100px] max-w-[100px]">
                <svg className="h-full w-full origin-center -rotate-90 transform" viewBox="0 0 100 100">
                    <circle fill="none" cx="50" cy="50" r="46" strokeWidth="3" strokeLinecap="round" stroke="#4B4A4B"></circle>
                    {dashLength > 0 && (
                        <circle
                            fill="none"
                            cx="50"
                            cy="50"
                            r="46"
                            strokeWidth="5"
                            strokeLinecap="round"
                            stroke={strokeColor}
                            strokeDasharray={`${dashLength} ${circumference}`}
                            strokeDashoffset="0"
                            data-difficulty="ALL"
                        ></circle>
                    )}
                </svg>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center">
                    <div>
                        <div className="text-[24px] font-medium text-[#FFFEFE]">{value}</div>
                        <div className="whitespace-nowrap text-xs text-label-3 text-[#9FA0A5]">Solved</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Circle;
