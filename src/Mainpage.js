import React from 'react';
import ReactDOM from 'react-dom';
import './Mainpage.css';

function Mainpage() {
  return (
    <div className="bg-gray-100 text-gray-900">
      <header className="bg-purple-600 text-gray-100 py-4">
        <nav className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center">
            <div className="mainheader">
              <h1 className="text-lggg font-bold" style={{ fontSize: '3rem' }}>
                EyeSpy
              </h1>
            </div>
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Welcome to My App</h2>
        <p className="text-lg mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ante
          quis lorem bibendum varius. Aliquam eu ante vel est suscipit bibendum
          in eu metus.
        </p>
        
      </main>
      <footer className="bg-gray-200 py-4"></footer>
    </div>
  );
}

ReactDOM.render(<Mainpage />, document.getElementById('root'));
export default Mainpage;
