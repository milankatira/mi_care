// import * as d3 from 'd3';
// import React from 'react';
// import useD3 from './useD3';

// const RadarChart = ({ data }) => {

//     const ref = useD3((svg) => {
//         const height = 500;
//         const width = 900;
//         const margin = { top: 20, right: 30, bottom: 30, left: 40 };

//         const x = d3.scaleLinear().domain(5).range(6)

//         console.log(x)

//     }, [data.length])

//     return (
//         <svg
//             ref={ref}
//             style={{
//                 height: 500,
//                 width: "100%",
//                 marginRight: "0px",
//                 marginLeft: "0px",
//             }}
//         >
//             <g className="plot-area" />
//         </svg>
//     )
// }

// export default RadarChart
