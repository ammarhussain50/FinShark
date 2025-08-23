import React, { type ChangeEvent, useState, type SyntheticEvent, type JSX } from "react";

type Props = object;

const Search: React.FC<Props> = (): JSX.Element => {
  const [search, setSearch] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };

  const onClick = (e : SyntheticEvent) => {
    console.log(e);
  };
  return (
    <div>
      <input value={search} onChange={(e) => handleChange(e)}></input>
      <button onClick={(e) => onClick(e)} />
    </div>
  );
};

export default Search;