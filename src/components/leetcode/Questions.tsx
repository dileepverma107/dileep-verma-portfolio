import Line from "./Line";


interface QuestionsProps {
    type: string;
    solved: number;
    total: number;
    beats?: number | null;
    line: string; // Assuming line is a color string
    line2: string; // Assuming line2 is a color string
}

const Questions = ({ type, solved, total, beats, line, line2 }: QuestionsProps) => {
    let marginClass = "";
    if (solved>=10 && solved<=99 && total >= 100 && total < 1000) {
        marginClass = "ml-5"; // for 3-digit numbers
    } else if (solved>=10 && solved<=99 && total >= 1000 && total < 10000) {
        marginClass = "ml-3"; // for 4-digit numbers
    } else {
        marginClass = "ml-8"; // for other cases
    }
    return (
        <div>
            <div className="flex justify-between w-[200px] mb-1">
                <div className="flex items-center">
                    <p className="w-[50px] text-[#9FA0A5] text-sm">{type}</p>
                    <div className="flex flex-1 items-center">
                        <span className="ml-[9px] mr-[5px] text-sm font-medium leading-[20px] text-[#FFFEFE]">{solved}</span>
                        <span className="text-xs font-medium text-[#626367]">/{total}</span>
                    </div>
                </div>
                <p className={`space-x-1.5 ${marginClass}`}>
                    <span className="text-[#9FA0A5] text-sm">Beats</span>
                    <span className="font-medium text-[#BDBFC2] text-sm">{beats ? beats : 'Nill'}%</span>
                </p>
            </div>
            <Line color={line} total={total} solved={solved} line2={line2} />
        </div>
    );
};

export default Questions;
