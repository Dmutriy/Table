// import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import css from "./ProductDetails.module.css";

import { getProductById } from "../fakeAPI";

export const ProductDetails = ({ data }) => {
  // console.log(data);
  // const { id } = useParams();
  // const product = getProductById(id);

  // Створюємо стан для збереження даних таблиці
  const [tableData, setTableData] = useState(data);

  // Функція для зміни значення комірки таблиці
  const handleCellChange = (
    rowIndex,
    columnIndex,
    value
  ) => {
    // Створюємо копію даних таблиці
    const newData = [...tableData];
    // Замінюємо значення відповідної комірки
    newData[rowIndex][columnIndex] = value;
    // Встановлюємо змінені дані до стану таблиці
    setTableData(newData);
  };

  // Функція для додавання нового рядка до таблиці
  const handleAddRow = () => {
    // Створюємо новий рядок з порожніми значеннями
    const newRow = ["", "", "", ""];
    // Додаємо новий рядок до даних таблиці
    setTableData([...tableData, newRow]);
  };

  // Функція для збереження даних таблиці в локальне сховище
  const handleSave = () => {
    // Зберігаємо дані таблиці в локальне сховище
    localStorage.setItem(
      "tableData",
      JSON.stringify(tableData)
    );
    // Показуємо повідомлення про успішне збереження
    alert("Дані успішно збережено!");
  };

  const loadData = () => {
    const savedData = localStorage.getItem("tableData");
    if (savedData) {
      setTableData(JSON.parse(savedData));
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      {/* Додаємо кнопку для додавання нового рядка */}
      <button onClick={handleAddRow}>Додати рядок</button>
      {/* Додаємо кнопку для збереження даних таблиці */}
      <button onClick={handleSave}>Зберегти</button>
      <table>
        <thead>
          <tr>
            <th>N</th>
            <th>Ім'я</th>
            <th>Прізвище</th>
            <th>Вік</th>
            <th>Електронна пошта</th>
          </tr>
        </thead>
        <tbody>
          {/* Виводимо дані таблиці */}
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {/* Додаємо колонку для номера рядка */}
              <td>{rowIndex + 1}</td>
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
