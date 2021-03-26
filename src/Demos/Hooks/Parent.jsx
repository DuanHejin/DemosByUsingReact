import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [stepVal, setStepVal] = useState({
    step1: { value: 0 },
    step2: { value: 0 },
    step3: { value: 0 },
    step4: { value: 0 },
  });

  const onClick = (name) => {
    console.log('\nname :>> ', name);
    console.log('stepVal :>> ', stepVal);
    stepVal[name] = { ...stepVal[name], value: stepVal[name].value + 1 };
    setStepVal(stepVal);
    // setStepVal({
    //   ...stepVal,
    //   [name]: stepVal[name] + 1,
    // });
  }
  return (
    <div className={'container'}>
      <h1></h1>
      {
        Object.keys(stepVal).map((fieldName, key) => (
          <div className="form-group" key={key}>
            <Child name={fieldName} stepVal={stepVal[fieldName]} onClick={onClick}></Child>
          </div>
        ))
      }
    </div>
  );
};

export default Parent;

// const Parent = () => {
//   const [stepVal, setStepVal] = useState(0);

//   const onClick = () => {
//     setStepVal(stepVal + 1);
//   }
//   return (
//     <div className={'container'}>
//       <div className="form-group"></div>
//       <div className="form-group">
//         <Child stepVal={stepVal} onClick={onClick}></Child>
//       </div>

//       <div className="form-group">
//         <Child stepVal={stepVal} onClick={onClick}></Child>
//       </div>

//       <div className="form-group">
//         <Child stepVal={stepVal} onClick={onClick}></Child>
//       </div>

//       <div className="form-group">
//         <Child stepVal={stepVal} onClick={onClick}></Child>
//       </div>

//       <div className="form-group">
//         <Child stepVal={stepVal} onClick={onClick}></Child>
//       </div>
//     </div>
//   );
// };

// export default Parent;