import React, { useState, useEffect } from 'react';
import libro from './books.json';
import './Libro.css';

const Libro = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [readingList, setReadingList] = useState([]);

  useEffect(() => {
    const savedReadingList = localStorage.getItem('readingList');
    if (savedReadingList) {
      setReadingList(JSON.parse(savedReadingList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('readingList', JSON.stringify(readingList));
  }, [readingList]);
  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBooks = libro.library.filter((item) =>
    item.book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToReadingList = (book) => {
    if (!readingList.includes(book)) {
      setReadingList([...readingList, book]);
    }
  };

  const removeFromReadingList = (book) => {
    const updatedList = readingList.filter((item) => item !== book);
    setReadingList(updatedList);
  };

  return (
    <section className='galeriaLibro'>
        <section className='buscador'>
            <input className='search' type="text" placeholder="Buscar libro" value={searchTerm} onChange={handleSearch} />
            
        </section>
        <section className='seccionLibros'>
            <h2>Libros disponibles</h2>
            {filteredBooks.map((item, index) => 
                
                    <div className='libro' key={index}>
                        <h2 className='titleLibro'>{item.book.title}</h2>
                        <img className='imgLibro' src={item.book.cover} alt={item.book.title} />
                        <div className="detallesLibro">
                            <p>Páginas: {item.book.pages}</p>
                            <p>Género: {item.book.genre}</p>
                            <p>Sinopsis: {item.book.synopsis}</p>
                            <p>Año: {item.book.year}</p>
                            <p>ISBN: {item.book.ISBN}</p>
                            <p>Autor: {item.book.author.name}</p>
                            <p>Otros libros del autor: {item.book.author.otherBooks.join(', ')}</p>
                        </div>
                        <button className='boton' onClick={() => addToReadingList(item)}>Agregar</button>
                    </div>
                    
                
            )
            }
          
        </section>
        <section className='seccionLeyendo'>
          <h2>Lista de Lectura</h2>
          {readingList.length > 0 ? (
            <section className='seccionLibros'>
              {readingList.map((item, index) => (

                <div className='libro' key={index}>
                    <h2 className='titleLibro'>{item.book.title}</h2>
                    <img className='imgLibro' src={item.book.cover} alt={item.book.title} />
                    <button className='boton' onClick={() => removeFromReadingList(item)}>quitar</button>
                </div>
                  
              ))}
            </section>
          ) : (
            <p>No hay libros en la Lista de Lectura.</p>
          )}
        </section>
    </section>
  );
}

export default Libro;