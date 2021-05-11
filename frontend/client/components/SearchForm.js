import React from 'react'
import { InputGroup } from 'react-bootstrap'
import discoverStyles from '../styles/Discovers.module.css'

const SearchForm = () => {
  return (
    <InputGroup className={`${discoverStyles.inputGroup} mb-3`}>
      <input
        type='text'
        className={discoverStyles.formControl}
        placeholder='Search...'
      />
      <button className={`${discoverStyles.buttonSearch} text-right`}>
        <svg
          viewBox='0 0 16 16'
          fillRule='currentColor'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z'
          />
          <path
            fillRule='evenodd'
            d='M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z'
          />
        </svg>
      </button>
    </InputGroup>
  )
}

export default SearchForm
