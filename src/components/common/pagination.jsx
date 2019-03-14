//stateless functional component
//imr
import React from 'react';
import _lodash from 'lodash';

const Pagination = (props) => {

    const { itemsCount, pageSize } = props;

    const pagesCount = itemsCount / pageSize;

    const pages = _lodash.range(1, pagesCount + 1);

    //shortcut: nav>ul.pagination>li.page-item>a.page-link
    return (
        <nav>
            <ul className="pagination">
                {/**map each item to a li item */}
                {pages.map(page => (
                    <li key={page} className="page-item"><a className="page-link">{page}</a></li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination;

//https://getbootstrap.com/docs/4.0/components/pagination/
{/* <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav> */}