import React from 'react'

const SearchProject = ({handleInputChange,searchText}) => {
  return (
    <div class="input-group">
    <span class="input-group-text bg-white border-end-0">
      <i class="fas fa-search text-muted"></i>
    </span>
    <input 
    type="text" 
    className="form-control border-start-0" 
    placeholder="Search projects..." 
    onChange={handleInputChange}
    value={searchText}
    
    />
  </div>
  )
}

export default SearchProject