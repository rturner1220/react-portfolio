import React, { useState } from 'react';
import Nav from './component/Nav';
import Footer from './component/Footer'
import Page from './component/Page'

function App() {

  const [pages] = useState([
    { name: "about me" },
    { name: "portfolio" },
    { name: "contact" },
    { name: "resume" }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>

      <Nav
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}

      ></Nav>

      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
  );
}

export default App