import { SearchSelectStyled } from './SearchSelect.styled.js';

const SearchSelectCategory = ({setCategory}) => {
  const searchByCategory = (event) => {
    event.preventDefault()
    const categoryParam = event.target.value;

    if (categoryParam !== "hide") setCategory(categoryParam);
    if (categoryParam === "hide") setCategory("")
    
  };
  
  return (
    <SearchSelectStyled>
      <select
        id="categories"
        name="category"
        defaultValue="hide"
        className="select select-styled"
        onChange={searchByCategory}
      >
        <option value="hide">All categories</option>
        <option value="ordinary drink">Ordinary Drink</option>
        <option value="cocktail">Cocktail</option>
        <option value="shake">Shake</option>
        <option value="other">Other/Unknown</option>
        <option value="cocoa">Cocoa</option>
        <option value="shot">Shot</option>
        <option value="coffee tea">Coffee / Tea</option>
        <option value="homemade liqueur">Homemade Liqueur</option>
        <option value="punch">Punch / Party Drink</option>
        <option value="beer">Beer</option>
        <option value="soft drink">Soft Drink</option>
      </select>
    </SearchSelectStyled>
  );
};
export default SearchSelectCategory;
