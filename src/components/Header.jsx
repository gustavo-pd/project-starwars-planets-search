import React from 'react';
import SearchInput from './SearchInput';
import SearchSelect from './SearchSelect';
import '../css/Header.css';

export default function Header() {
  return (
    <header>
      <h1 className="title">StarWars Planet Search</h1>
      <SearchInput />
      <SearchSelect />
    </header>
  );
}
