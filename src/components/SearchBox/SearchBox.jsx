import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { collbackFiltersSlice } from "../../redux/collbackFunctions";

export default function SearchBox() {
  const dispatch = useDispatch();
  const selectNameFilter = useSelector(collbackFiltersSlice);

  const userInputId = useId();

  const handleChange = (event) => {
    const text = event.target.value.trim();
    dispatch(changeFilter(text.toLowerCase()));
  };
  return (
    <>
      <label htmlFor={userInputId}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        name="userValue"
        value={selectNameFilter}
        onChange={handleChange}
        id={userInputId}
      />
    </>
  );
}
