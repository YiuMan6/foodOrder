import React from 'react';
import '../../style/components/orderTable.scss';
const OrderTable = (props) => {
  const list = [
    // TO DO Waiting for badckend data
    ['#123456', '$20', 'completed'],
    ['#123457', '$20', 'completed'],
    ['#123458', '$20', 'completed'],
  ];
  return (
    <div className="orderTable">
      <ul>
        {list.map(function (item, index) {
          return (
            <li className="orderTable-tag">
              <p className={`orderTable-id${0}`}>{item[0]}</p>
              <p className={`orderTable-id${1}`}>{item[1]}</p>
              <p className={`orderTable-id${2}`}>{item[2]}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default React.memo(OrderTable);
