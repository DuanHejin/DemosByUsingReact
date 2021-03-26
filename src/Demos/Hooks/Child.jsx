import React, { memo } from 'react';

const Child = memo((props) => {

  const { name, stepVal, onClick } = props;

  const handleClick = () => {
    onClick(name)
  }
  console.log('render name :>> ', name);
  return (
    <div>
      <span>{JSON.stringify(stepVal)}</span>
      <button className="btn btn-default" onClick={handleClick}>点我</button>
    </div>
  );
},
//  (prevProps, nextProps) => {
//   // console.log('prevProps, nextProps :>> ', prevProps, nextProps);
//   // return JSON.stringify(prevProps) === JSON.stringify(nextProps);
//   return prevProps.stepVal === nextProps.stepVal;
// }
);

export default Child;

// const Child = (props) => {

//   const { name, stepVal, onClick } = props;

//   const handleClick = () => {
//     onClick(name)
//   }
//   return (
//     <div>
//       <span>{stepVal}  </span>
//       <button className="btn btn-default" onClick={handleClick}>点我</button>
//     </div>
//   );
// };

// export default Child;