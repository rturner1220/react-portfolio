import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    const {
        pages = [],
        setCurrentPage,
        currentPage,
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage.name);
    }, [currentPage]);

    return (
        <header data-testid="header" className="flex-row px-1">
            <h2>
                <a href="/">
                    <span role="img" aria-label="logo"></span> Rosa Turner
                </a>
            </h2>
            <nav>
                <ul className="flex-row">

                    {pages.map((Page) => (
                        <li
                            className={`nav-item nav-link js-scroll-trigger ${currentPage.name === Page.name && 'active'
                                }`}
                            key={Page.name}
                        >
                            <span
                                onClick={() => setCurrentPage(Page)}
                            >
                                {capitalizeFirstLetter(Page.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;