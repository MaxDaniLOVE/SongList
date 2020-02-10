import React from 'react';
import './Footer.scss';

const Footer = ({displayedPages, activePage, onActivePageChange, displayedItems, onDisplayedItemsChange}) => {
  const availableItemsAmount = [5, 10, 25, 50, 100];
  let items = [];
  for (let index = 1; index <= displayedPages; index++) {
    items.push(index);
  }
  const pages = items.map((element) => {
    const newClassName = element === activePage ? 'page-item active' : 'page-item'
    return (
      <li key={element} className={newClassName} onClick={() => onActivePageChange(element)}>
        <span className="page-link">{element}</span>
      </li>
    )
  })
  const itemsAmount = availableItemsAmount.map((element) => {
    const newClassName = element === displayedItems ? 'page-item active' : 'page-item'
    return (
      <li key={element} className={newClassName} onClick={() => onDisplayedItemsChange(element)}>
        <span className="page-link">{element}</span>
      </li>
    )
  })
  return (
    <div className="footer">
      <ul className="pagination">
        {pages}
      </ul>
      <ul className="pagination">
        {itemsAmount}
      </ul>
    </div>
  );
}

export default Footer;
