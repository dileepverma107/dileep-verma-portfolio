import React from 'react';

interface Line2Props {
    width: number;
    line2: string;
}

const Line2: React.FC<Line2Props> = ({ width, line2 }) => {
    const divStyle = {
        width: `${width}px`,
    };

    return (
        <div style={divStyle} className={`bg-[#01B8A2] rounded-lg h-[5px] ${line2}`}>
            {/* You can add content inside the progress bar if needed */}
        </div>
    );
};

export default Line2;
