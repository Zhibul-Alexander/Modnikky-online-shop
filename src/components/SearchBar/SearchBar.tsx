import React, {ChangeEvent, useEffect, useState} from 'react';

import MSearchIcon from '@material-ui/icons/Search';
import MCloseIcon from '@material-ui/icons/Close';

import API from '../../api';
import Catalog from '../../types/api/catalog';

import {
  BackgroundContainer,
  SearchContent,
  Wrapper,
  SearchIcon,
  SearchInput,
  SearchResult,
  ResultLink,
} from './styles';

interface ISearchBar {
  placeholder?: string,
  data?: any
}

const SearchBar = ({placeholder, data}: ISearchBar) => {

  const [items, setItems] = useState<Catalog[]>([]);
  const [filterItems, setFilterItems] = useState<Catalog[]>([]);
  const [wordEntered, setWordEntered] = useState<string>('');

  const handleFilter = (event: ChangeEvent<HTMLInputElement>) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = items.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === '') {
      setFilterItems([]);
    } else {
      setFilterItems(newFilter);
    }
  };

  const clearInput = () => {
    setFilterItems([]);
    setWordEntered('');
  };

  const getData = async () => {
    const getAllItems = await API.catalog.getCatalog();
    if (!getAllItems) {
      return;
    }

    setItems(getAllItems.data);
  };

  useEffect(() => {
    getData().catch(console.error);
  }, []);

  return (
    <Wrapper>
      <BackgroundContainer>

        <SearchIcon>
          {filterItems.length === 0 ? <MSearchIcon style={{width: '100%', height: '100%'}}/> :
            <MCloseIcon onClick={clearInput} style={{width: '100%', height: '100%'}}/>}
        </SearchIcon>

        <SearchContent>
          <SearchInput type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter}
                       className="header-search-input"/>
          {filterItems.length !== 0 &&
            <SearchResult>
              {filterItems.slice(0, 8).map((item) => {
                return <ResultLink key={item.id} to={`/product/${item.id}`} className="header-search-input-result">
                  {item.name}
                </ResultLink>;
              })}
            </SearchResult>}
        </SearchContent>


      </BackgroundContainer>
    </Wrapper>
  );
};

export default SearchBar;