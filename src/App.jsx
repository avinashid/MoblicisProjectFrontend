import { useEffect, useState } from "react";
import TableWrapper from "./components/TableWrapper";
import "./App.scss";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://moblicisproject.onrender.com/api/getdb/"
      );
      const result = await response.json();
      setData(result);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      {isLoading && "Loading"}
      {!isLoading && <TableWrapper data={data} />}
    </div>
  );
};

export default App;
