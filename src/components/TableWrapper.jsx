import { useState } from "react";
import Table from "./Table";
const TableWrapper = (props) => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="tableWrapper">
      {/* Heading */}
      <div className="head">Mobilicis India Private Limited</div>

      {/* Input Field */}
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select an option</option>
        <option value="option1">
          Users which have income lower than $5 USD and have a car of brand
          “BMW” or “Mercedes”.
        </option>
        <option value="option2">
          Male Users which have phone price greater than 10,000.
        </option>
        <option value="option3">
          Users whose last name starts with “M” and has a quote character length
          greater than 15 and email includes his/her last name.
        </option>
        <option value="option4">
          Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose
          email does not include any digit.
        </option>
        <option value="option5">
          Show the data of top 10 cities which have the highest number of users
          and their average income.
        </option>
      </select>

      {/* Show Table Here */}
      <Table option={selectedOption} tableData={props.data} />
    </div>
  );
};

export default TableWrapper;
