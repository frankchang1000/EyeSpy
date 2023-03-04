import React from 'react';
import ReactDOM from 'react-dom';
import './Mainpage.css';

function Mainpage() {
  return (
    <div className="bg-gray-100 text-gray-900">
      <header className="bg-purple-600 text-gray-100 py-4">
        <nav className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center"> 
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">The Future of Safety</h2>
        <p className="text-lg mb-4">
          EyeSpy is designed with drivers safety in mind. Our goal is to protect every driver on the road!
        </p>
        
      </main>
      <footer className="bg-gray-200 py-4"></footer>
    </div>
  );
}

ReactDOM.render(<Mainpage />, document.getElementById('root'));
export default Mainpage;
