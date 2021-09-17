import React from 'react';

const List = ({ items, removeItem, editItem }) => {
  return (
    <>
      {items.map((item) => {
        const { id, title, url } = item;
        // console.log(title);
        return (
          <h3 key={id}>
            <span className='nameInput'>{title}</span>
            <a className='btn btn-info' target='_blanc' href={url}>
              Visit
            </a>

            <a className='btn btn-success' onClick={() => editItem(id)}>
              Edit
            </a>
            <a className='btn btn-danger' onClick={() => removeItem(id)}>
              Delete
            </a>
          </h3>
        );
      })}
    </>
  );
};

export default List;
