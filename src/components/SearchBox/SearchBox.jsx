import { useDispatch, useSelector } from "react-redux"
import { changeFilter } from "../../redux/filtersSlice"

export default function SearchBox() {

    const dispatch = useDispatch()
    const filter = useSelector((state) => state.filters.status)
    const handleFilterChange = (e) => dispatch(changeFilter(e.target.value))
    return (
        <div>
            <p>Find contacts by name or number</p>
            <input type="text" value={filter} onChange={handleFilterChange} />
        </div>
    )
}