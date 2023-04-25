import { useState } from "react";

const Table = (props) => {
  let showTable = [];
  // const [showTable , setShowTable] = useState([]);
  const table = props.tableData.users;
  switch (props.option) {
    case "option1":
      showTable = table.filter(
        (item) =>
          item.income < "$5" &&
          (item.car === "BMW" || item.car === "Mercedes-Benz")
      );
      break;
    case "option2":
      showTable = table.filter(
        (item) => item.gender == "Male" && item.phone_price > 10000
      );
      break;
    case "option3":
      showTable = table.filter(
        (item) =>
          item.last_name.slice(0, 1) === "M" &&
          item.quote.length > 15 &&
          item.email.match(item.last_name.toLowerCase())
      );
      break;
    case "option4":
      console.log("hello");
      const regex = /[0-9]/;
      showTable = table.filter(
        (item) =>
          !regex.test(item.email) &&
          (item.car == "BMW" ||
            item.car == "Audi" ||
            item.car == "Mercedes-Benz")
      );
      break;
    case "option5":
      const cities = table.map((item) => {
        return { name: item.city, salary: item.income };
      });

      const citySalaries = {};
      const cityCounts = {};

      // Count the number of occurrences and sum of salaries of each city
      for (let i = 0; i < cities.length; i++) {
        const city = cities[i].name;
        const salary = parseFloat(cities[i].salary.slice(1));
        if (cityCounts[city]) {
          cityCounts[city]++;
          citySalaries[city] += salary;
        } else {
          cityCounts[city] = 1;
          citySalaries[city] = salary;
        }
      }

      // Create an array of objects with the city name, count, and average salary
      const cityDataArray = [];
      for (let city in cityCounts) {
        const count = cityCounts[city];
        const salarySum = citySalaries[city];
        cityDataArray.push({
          name: city,
          count,
          salarySum,
        });
      }

      // Sort the array in descending order by count
      cityDataArray.sort((a, b) => b.count - a.count);

      // Limit to 10 cities
      const top10Cities = cityDataArray.slice(0, 10);

      console.log(top10Cities);
      showTable = top10Cities.map((item, i) => (
        <tr key={i}>
          <td>{item.name}</td>
          <td>{item.count}</td>
          <td>{(item.salarySum / item.count).toFixed(2)}</td>
        </tr>
      ));
      break;
    default:
      showTable = table;
  }

  if (props.option != "option5") {
    showTable = showTable.map((item) => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.first_name + " " + item.last_name}</td>
        <td>{item.gender}</td>
        <td>{item.email}</td>
        <td>{item.income}</td>
        <td>{item.city}</td>
        <td>{item.car}</td>
        <td>{item.phone_price}</td>
        <td>{item.quote}</td>
      </tr>
    ));
  }

  return (
    <div>
      {!props.option && <h2>All data</h2>}
      {props.option && <h2>Filtered Data</h2>}
      <table className="table">
        <thead>
          {props.option != "option5" && (
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Income</th>
              <th>City</th>
              <th>Car</th>
              <th>Phone Price</th>
              <th>Quote</th>
            </tr>
          )}
          {props.option == "option5" && (
            <tr>
              <th>City</th>
              <th>Total User</th>
              <th>Average Income</th>
            </tr>
          )}
        </thead>
        <tbody>{showTable}</tbody>
      </table>
    </div>
  );
};

export default Table;
