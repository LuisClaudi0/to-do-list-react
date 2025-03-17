import './Search.css'

const Search = ({ search, setSearch }) => {

  return (
    <div className='search'>
      <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Digite a tarefa que deseja buscar...'/>
    </div>
  )
}

export default Search
