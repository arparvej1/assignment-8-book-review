import { useEffect, useState } from "react";
import { getStoredBookList } from "../utility/localStorage";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';


const PagesToRead = () => {
  const books = useLoaderData();
  const [readBookList, setReadBookList] = useState([]);
  useEffect(() => {
    const readBook = getStoredBookList("readBook");

    if (books.length > 0) {
      const readAdded = books.filter(book => readBook.includes(book.bookId));
      setReadBookList(readAdded);
      console.log(readBookList);
    }
  }, [])

  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };


  return (
    <div>
      <div className="flex justify-center my-5 md:my-10 lg:my-16">
        <BarChart
          width={800}
          height={600}
          data={readBookList}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName" />
          <YAxis />
          <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
            {readBookList.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </div>
  );
};

export default PagesToRead;