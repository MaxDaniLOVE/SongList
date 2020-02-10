import React from 'react';

const Footer = ({displayedPages, activePage, onDisplayedItemsChange}) => {
  let items = [];
  for (let index = 1; index <= displayedPages; index++) {
    items.push(index);
  }
  const pages = items.map((element) => {
    const className = element === activePage ? 'page-item active' : 'page-item'
    return (
      <li key={element} className={className} onClick={() => onDisplayedItemsChange(element)}>
        <a  className="page-link" href="#">{element}</a>
      </li>
    )
  })
  return (
    <div>
      <ul className="pagination">
        {pages}
      </ul>
    </div>
  );
}

export default Footer;
