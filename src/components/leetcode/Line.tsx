import Line2 from "./LineSecond"


interface LineProps {
    color: string;
    total: number;
    solved: number;
    line2: string;
}

const Line = ({ color, total, solved, line2 }: LineProps) => {
    const percentage = Math.round((solved / total) * 100);
    const width = (percentage / 100) * 250; // Adjust 250 as needed for desired max width

    return (
        <div className={`rounded-lg h-[5px] w-[220px] ${color}`}>
            <Line2 width={width} line2={line2} />
        </div>
    );
};

export default Line;
