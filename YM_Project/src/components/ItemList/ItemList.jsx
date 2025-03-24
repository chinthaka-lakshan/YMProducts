import SideBar from "../SideBar/SideBar";
import TopBar from "../TopBar/TopBar";
import "./itemList.css";
import itemList from "../../Image/item_list.png";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import { useDropzone } from "react-dropzone";
const ItemList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isEditFormOpen, setIsEditFormOpen] = useState(false);
    // const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);

    // const onDrop = (acceptedFiles) => {
    //     const file = acceptedFiles[0];
    //     if (file) {
    //         setSelectedFile(file);
    //         setPreview(URL.createObjectURL(file));
    //     }
    // };

    // const { getRootProps, getInputProps } = useDropzone({
    //     onDrop,
    //     accept: "image/*",
    //     multiple: false,
    // });

    //Edit Item
    const toggleEditForm = () => {
        setIsEditFormOpen(!isEditFormOpen);
        console.log("ko");
    };

    const editUrl = "http://127.0.0.1:8000/api/edit-items";
    const editItem = () => {
        toggleEditForm();
    };
    const deleteItem = () => {
        toggleEditForm();
    };

    // Save Item
    const toggleModal = () => {
        setIsOpen(!isOpen);
        console.log("ko");
    };

    const url = "http://127.0.0.1:8000/api/items";

    // save Item

    const saveItem = async () => {
        // const itemDetails = {
        //   name: document.getElementById("name").value,
        //   quantity: parseInt(document.getElementById("quantity").value),
        //   price: parseFloat(document.getElementById("price").value),
        //   weight: document.getElementById("weight").value,

        // };
        const formData = new FormData();
        formData.append("name", document.getElementById("name").value);
        formData.append(
            "quantity",
            parseInt(document.getElementById("quantity").value)
        );
        formData.append(
            "price",
            parseFloat(document.getElementById("price").value)
        );
        formData.append("weight", document.getElementById("weight").value);

        // formData.append("image", selectedFile);
        // if (!selectedFile) {
        //     alert("please select an image!");
        //     return;
        // }

        try {
            const response = await axios.post(url, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            //console.log(response.data.message);
            console.log("File" + selectedFile);
            if (response && response.data) {
                alert("Item added Successfully!");
                // selectedFile(null);
                // setPreview(null);
            }
        } catch (error) {
            console.error(error);
            alert("Failed to add item:" + JSON.stringify(error.response));
        }
    };

    //get all items

    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get(url);
                setItems(response.data);
            } catch (error) {
                console.error("Failed to fetch Items: ", error);
            }
        };
        fetchItems();
    }, []);

    return (
        <>
            {/* <SideBar /> */}

            <div className="itemList">
                <h3 className="text-4xl font-serif  font-medium">Item List</h3>
                <button
                    onClick={toggleModal}
                    type="button"
                    data-modal-target="small-modal"
                    data-modal-toggle="small-modal"
                    className="btnAddItem text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                    Add Item
                </button>
                <div className="itemCards">
                    {items.length > 0 ? (
                        items.map((item) => (
                            <div
                                className="card"
                                key={item.id}
                                onClick={toggleEditForm}
                                data-modal-target="editItem-form"
                                data-modal-toggle="editItem-form"
                            >
                                {/* <div className="imgItem">
                                    <img
                                        src={`http://127.0.0.1:8000/storage/${item.image}`}
                                        alt={item.name}
                                    />
                                </div> */}

                                <div className="row details">
                                    <h5>{item.name}</h5>

                                    <div className="detRow">
                                        <span>Qty: {item.quantity}</span>
                                        <span>Price: Rs.{item.price}</span>
                                    </div>
                                    <div className="itemWgt">
                                        <span className="symb">
                                            {item.weight}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No Items Found</p>
                    )}
                </div>
            </div>

            {/*  */}

            {/* <!-- Small Modal --> */}
            {isOpen && (
                <div
                    id="small-modal"
                    tabIndex="-1"
                    className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
                >
                    <div className="relative w-full max-w-md max-h-full">
                        {/* <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                
              </div>
            </div> */}

                        <div className="addForm flex items-center flex-col relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                ADD Item Form
                            </h3>
                            <button
                                onClick={toggleModal}
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                <span className="sr-only">Close modal</span>
                            </button>

                            <div className="detRow">
                                {/* <div
                                    {...getRootProps({
                                        className:
                                            "dropzone bg-gray-50 border border-dashed border-gray-400 text-gray-500 p-6 rounded-lg cursor-pointer",
                                    })}
                                >
                                    <input {...getInputProps()} />
                                    {preview ? (
                                        <img
                                            src={preview}
                                            alt="Preview"
                                            className="w-32 h-32 object-cover mx-auto"
                                        />
                                    ) : (
                                        <p>
                                            Drag & drop an image here, or click
                                            to select one
                                        </p>
                                    )}
                                </div> */}
                                <div className="mb-5">
                                    <label
                                        for="name"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="name"
                                        id="name"
                                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                                        placeholder="Enter Item Name"
                                        required
                                    />
                                </div>
                                <div className="midRow">
                                    <div className="mb-5">
                                        <label
                                            for="quantity"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Quantity
                                        </label>
                                        <input
                                            type="number"
                                            id="quantity"
                                            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-34 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                                            placeholder="0"
                                            required
                                        />
                                    </div>
                                    <div className="mb-5 ml-4">
                                        <label
                                            for="weight"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Weight
                                        </label>
                                        <input
                                            type="text"
                                            id="weight"
                                            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                                            placeholder="Enter Item Weight"
                                            required
                                        />
                                    </div>
                                </div>
                                <div class="mb-5">
                                    <label
                                        for="price"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Price (Rs.)
                                    </label>
                                    <input
                                        type="text"
                                        id="price"
                                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                                        required
                                        placeholder="Enter Item Price"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button
                                    onClick={saveItem}
                                    type="button"
                                    className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={toggleModal}
                                    type="button"
                                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* edit item form */}
            {isEditFormOpen && (
                <div
                    id="editItem-form"
                    tabIndex="-1"
                    className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
                >
                    <div className="relative w-full max-w-md max-h-full">
                        {/* <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                
              </div>
            </div> */}

                        <div className="editForm flex items-center flex-col relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                Edit Item Form
                            </h3>
                            <button
                                onClick={toggleEditForm}
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                <span className="sr-only">Close modal</span>
                            </button>

                            <div className="detRow">
                                {/* <div
                  {...getRootProps({
                    className:
                      "dropzone bg-gray-50 border border-dashed border-gray-400 text-gray-500 p-6 rounded-lg cursor-pointer",
                  })}
                >
                  <input {...getInputProps()} />
                  {preview ? (
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-32 h-32 object-cover mx-auto"
                    />
                  ) : (
                    <p>Drag & drop an image here, or click to select one</p>
                  )}
                </div> */}
                                <div className="mb-5">
                                    <label
                                        for="name"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="name"
                                        id="name"
                                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                                        placeholder="Enter Item Name"
                                        required
                                    />
                                </div>
                                <div className="midRow">
                                    <div className="mb-5">
                                        <label
                                            for="quantity"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Quantity
                                        </label>
                                        <input
                                            type="number"
                                            id="quantity"
                                            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-34 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                                            placeholder="0"
                                            required
                                        />
                                    </div>
                                    <div className="mb-5 ml-4">
                                        <label
                                            for="weight"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Weight
                                        </label>
                                        <input
                                            type="text"
                                            id="weight"
                                            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                                            placeholder="Enter Item Weight"
                                            required
                                        />
                                    </div>
                                </div>
                                <div class="mb-5">
                                    <label
                                        for="price"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Price (Rs.)
                                    </label>
                                    <input
                                        type="text"
                                        id="price"
                                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                                        required
                                        placeholder="Enter Item Price"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button
                                    onClick={editItem}
                                    type="button"
                                    className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={deleteItem}
                                    type="button"
                                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ItemList;
