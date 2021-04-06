import React from 'react';

const CSVItem = ({
    data
}) => {
    return (
        <>
            {data.map((data, i) => (
                <td key={i}>{data}</td>
            ))}
        </>
    )
};

export default CSVItem;