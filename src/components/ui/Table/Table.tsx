import React, { FC, useEffect, useState } from "react";
interface Props {
  thead: Thead[];
  elements: Elements[];
  trow?: Trow[];
  title?: string;
  print?: boolean;
  getElements?: () => void;
  editElement?: (id: string) => void;
  deleteElement?: (id: string) => void;
  buttons?: Buttons[];
}

interface Thead {
  name: string;
  icon?: string;
}

interface Trow {
  name: string;
}

interface Elements {
  name: string;
  price: number;
  stock: number;
}

interface Buttons {
  name: string;
  className: string;
  icon?: string;
  method?: (id?: string) => void;
}

export const TableComponent: FC<Props> = ({
  elements,
  thead,
  buttons,
  title,
  print,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [productos, setProductos] = useState(elements);
  const [search, setSearch] = useState("");
  const handlePrint = () => {
    window.print();
  };

  // Agregar Funcion Eliminar producto
  const handleDelete = async (id: string) => {};

  useEffect(() => {
    setProductos(filteredProducts);
  }, [elements,currentPage, search]);

  const filteredProducts = () => {
    if (search.length === 0) {
      return elements.slice(currentPage, currentPage + 5);
    }
    console.log(search);
    const filtered = elements.filter((element) =>
      element.name.toLowerCase().includes(search.toLowerCase())
    );
    return filtered.slice(currentPage, currentPage + 5);
  };

  const nextPage = () => {
    if (
        elements.filter((element) =>
        element.name.toLowerCase().includes(search.toLowerCase())
      ).length >
      currentPage + 5
    ) {
      setCurrentPage(currentPage + 5);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 5);
      // console.log("prevPage");
    }
  };

  const searchElement = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCurrentPage(0);
    setSearch(value);
};

  return (
    <div className="w-full">
      <div className="flex flex-col  mx-6">
        <div className="flex justify-between">
          <h1 className="text-left mb-2 text-xl font-bold">
            Gestión de {title}
          </h1>
          <h1 className="text-left mb-2 text-xl font-bold">
            Total de Productos: {elements.length}{" "}
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex justify-center items-center gap-2 flex-1">
            <h1 className="font-semibold">Buscar Producto:</h1>
            <input
              className="flex-1 mx-3 bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Buscar"
              value={search}
              onChange={searchElement}
            />
          </div>
          <div className="flex mt-3 md:mt-0 items-center gap-2 md:justify-center">
            <h1 className="font-semibold">Agregar {title}</h1>
            <button className="btn border-green-500 text-green-500 hover:bg-green-700">
                +
              {/* <i className="fas fa-plus"></i> */}
            </button>
          </div>
        </div>
      </div>
      <div className="py-2 overflow-x-auto px-6 pr-10 ">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-gray-900 shadow-dashboard px-8 pt-3 rounded-lg min-h-[55vh] print:bg-black print:px-0 print:pl-6 print:break-before-avoid-page">
          <table className="min-w-full print:overflow-hidden">
            <thead>
              <tr>
                <th className="th">ID</th>
                {thead.map((th, i) => {
                  return (
                    <th className="th" key={i}>
                      {th.name}
                    </th>
                  );
                })}
                {print && (
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-white">
                    <button
                      onClick={handlePrint}
                      className="btn border-cyan-500 text-cyan-500 hover:bg-cyan-700 print:hidden "
                    >
                      Imprimir Productos
                    </button>
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="">
              {productos.map((element, i) => (
                <tr className="font-semibold text-lg" key={i}>
                  <td className="td">
                    <div className="flex items-center">
                        <div className=" leading-5 text-white">
                          {i + currentPage + 1}
                        </div>
                    </div>
                  </td>
                  <td className="td">
                    <div className=" leading-5 text-white text-left">
                      {element.name}
                    </div>
                  </td>
                  <td className="td">
                    <div className=" leading-5 text-white text-left">
                      {element.stock}
                    </div>
                  </td>
                  <td className="td">
                    <div className=" leading-5 text-white text-left">
                      {element.price}
                    </div>
                  </td>
                  {/* <td className="px-6 py-4 whitespace-no-wrap border-b text-white border-gray-500  leading-5">
                    {element.precio}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b text-white border-gray-500 leading-5 text-left">
                    {element.descripcion}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b text-white border-gray-500  leading-5">
                    {element.categoria.nombre}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b text-white border-gray-500  leading-5">
                    <img
                      src={
                        element.img
                          ? element.img
                          : "https://www.giulianisgrupo.com/wp-content/uploads/2018/05/nodisponible.png"
                      }
                      className="w-12 h-12 object-cover"
                    />
                  </td> */}
                  {buttons && (
                    <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5 space-x-2 print:hidden">
                      <div className="flex justify-center gap-2 items-center">
                        {buttons ? (
                          buttons.map((button, i) => {
                            return (
                              <button
                                key={i}
                                onClick={() => button.method}
                                className={`${
                                  button.className
                                    ? button.className
                                    : "btn hover:bg-red-700 border-red-500 text-red-500"
                                }`}
                              >
                                <i className="fas fa-trash-alt"></i>
                              </button>
                            );
                          })
                        ) : (
                          <></>
                        )}
                      </div>
                    </td>
                  )}
                </tr>
              ))}
              {elements.length <= 0 && (
                <tr className="font-semibold text-lg columns-4">
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 print:border-none">
                    <p className="text-white"> No hay {title} con ese nombre</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <nav aria-label="flex w-full justify-center">
          <ul className="inline-flex -space-x-px">
            <li onClick={prevPage}>
              <a
                href="#"
                onClick={(e)=>{
                    e.preventDefault()
                }}
                className={`py-2 px-3 text-sm ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
                ${currentPage > 0 && "disabled:bg-gray-300"}
                `}
              >
                Atrás
              </a>
            </li>
            <li onClick={nextPage}>
              <a
                href="#"
                onClick={(e)=>{
                    e.preventDefault()
                }}
                className="py-2 px-3 text-sm leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Adelante
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
