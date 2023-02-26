import { useParams } from "react-router-dom";
import React, { useState } from "react";

import css from "./ProductDetails.module.css";

import { getProductById } from "../fakeAPI";

export const ProductDetails = ({ data }) => {
  console.log(data);
  const [tableData, setTableData] = useState(data);
  const { id } = useParams();
  const product = getProductById(id);
  const handleCellChange = (
    rowIndex,
    columnIndex,
    value
  ) => {
    // Створюємо новий масив для даних таблиці зі зміненим значенням комірки
    const newData = [...tableData];
    newData[rowIndex][columnIndex] = value;
    setTableData(newData);
  };

  return (
    <main>
      <img
        src="https://via.placeholder.com/960x240"
        alt=""
      />
      <div>
        <h2>
          Product - {product.name} - {id}
        </h2>

        <table>
          <thead>
            <tr>
              <th>Ім'я</th>
              <th>Прізвище</th>
              <th>Вік</th>
              <th>Електронна пошта</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, columnIndex) => (
                  <td
                    key={columnIndex}
                    contentEditable
                    onBlur={(event) =>
                      handleCellChange(
                        rowIndex,
                        columnIndex,
                        event.target.innerText
                      )
                    }
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

{
  /* <table>
          <tr>
            <td>Номер картки</td>
            <td>ПІБ</td>
            <td></td>
            <td>Створити картку</td>
            <td>Добавити до існуючої</td>
            <td></td>
            <td> </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>1</td>
            <td>Іванов Іван Іванович</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td> </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Майно</td>
            <td></td>
            <td></td>
            <td>Дата та номер приказу зарахування</td>
            <td>Зріст</td>
            <td></td>
            <td>180 </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Кашкет польовий (кепі бойове)</td>
            <td></td>
            <td>1</td>
            <td></td>
            <td>Обєм грудей</td>
            <td></td>
            <td>105 </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            
            <td>Шапка феска (шапка підшоломник)</td>
            <td></td>
            <td>1</td>
            <td>1 від 24.02.22</td>
            <td>Розмір </td>
            <td>голови</td>
            <td>57 </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>взуття</td>
            <td>43 </td>
            <td></td>
            <td></td>
          </tr>
        </table> */
}
{
  /* <table id="myTable">
          <thead>
            <tr>
              <th>Ім'я</th>
              <th>Прізвище</th>
              <th>Вік</th>
              <th>Електронна пошта</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td contentEditable="true">Іван</td>
              <td contentEditable="true">Іванов</td>
              <td contentEditable="true">25</td>
              <td contentEditable="true">
                ivanov@example.com
              </td>
            </tr>
            <tr>
              <td contentEditable="true">Петро</td>
              <td contentEditable="true">Петров</td>
              <td contentEditable="true">30</td>
              <td contentEditable="true">
                petrov@example.com
              </td>
            </tr>
            <tr>
              <td contentEditable="true">Марія</td>
              <td contentEditable="true">Шевченко</td>
              <td contentEditable="true">28</td>
              <td contentEditable="true">
                shevchenko@example.com
              </td>
            </tr>
          </tbody>
        </table> */
}
