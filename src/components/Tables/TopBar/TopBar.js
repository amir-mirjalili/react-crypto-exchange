import { memo } from 'react';
import PropTypes from 'prop-types';

const TopBar = memo(({ searchValue, searchOnChange, searchSubmit }) => (
  <div className='top-buttons flex flex-destroy flex-center flex-space-between'>
    <div>
      <div className='top-search no-select nowrap'>
        <form onSubmit={searchSubmit} noValidate>
          <input
            type='text'
            id='search'
            name='search'
            autoComplete='off'
            placeholder='Aranacak kelime'
            onChange={searchOnChange}
            value={searchValue}
          />
          <button type='submit' className='pointer'>
            <i className='material-icons'>search</i>
          </button>
        </form>
      </div>
    </div>
  </div>
));

TopBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  searchSubmit: PropTypes.func.isRequired,
  searchOnChange: PropTypes.func.isRequired,
};

export default TopBar;
