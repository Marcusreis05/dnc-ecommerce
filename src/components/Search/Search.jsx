import React from 'react'
import './index.scss'
import searchLogo from '../../assets/search.png'
import profileLogo from '../../assets/user.png'
import favoriteLogo from '../../assets/heart.png'

const Search = () => {
  return (
    <div className="search">
        <div className="search__search-container">
            <img src={searchLogo}
             alt="ERROR"
             className="search__search-logo" 
             width='30px'
             />
             <input type="text" placeholder='Search' />   
        </div>
        <div className='search__search-img'>
        <img src={profileLogo} alt="ERROR" width='30px' />
        <img src={favoriteLogo} alt="ERROR" width='30px'/>
        </div>
    </div>
  )
}

export default Search