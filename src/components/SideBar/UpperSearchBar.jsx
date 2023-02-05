function UpperSearchBar({ setSearchKeyword }) {
    return <div className='px-4 h-fit'>
        <input
            onChange={(e) => setSearchKeyword(e.target.value)}
            type="text" placeholder="Search..." className="input input-bordered input-md w-full" />
    </div>
}
export default UpperSearchBar