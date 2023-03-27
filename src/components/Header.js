import React from "react";
import './Header.css';

export default ({ black, mensagem }) => {
  // -------------EXEMPLO DE COMO PEGAR ARGUMENTO DESESTRUTURADO (MENSAGEM):
  console.log(mensagem)
  // ---------------------------------------------EXEMPLOS DE DESESTRUTURAÇÃO:
  const user = {
    name: 'Marcos',
    age: 27,
  }
  const { name, age } = user

  console.log(name)
  // -------------------------------------------------------------------------
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png" alt="LogoNetflix" />
        </a>
      </div>

      <div className="header--user">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="ImagemUsuario" />
        </a>
      </div>
    </header>

  );
}