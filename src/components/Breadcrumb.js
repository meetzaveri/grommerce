import React from 'react';

const Breadcrumb = props => {
  console.log('props', props);
  return (
    <ol className="breadcrumb">
      {props.items.map((item, index) => {
        return (
          <li className="breadcrumb-item" key={index}>
            <a href={item.link} className="active">
              <span>{item.name}</span>
            </a>
          </li>
        );
      })}
    </ol>
  );
};

export default Breadcrumb;
