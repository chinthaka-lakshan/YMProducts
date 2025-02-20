import SideBar from "../SideBar/SideBar";
import TopBar from "../TopBar/TopBar";
import "./itemList.css";
import itemList from "../../Image/item_list.png";
import React, { useState } from "react";

const ItemList = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
        console.log("ko");
    };
    return (
        <>
            <SideBar />

            <div className="itemList">
                <h3 class="text-4xl font-serif  font-medium">Item List</h3>
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
                    <div className="card">
                        <div className="row">
                            <h5>Title</h5>
                            <img src={itemList} alt="" />
                            <div className="detRow">
                                <span>Qty: </span>
                                <span>Price: Rs.</span>
                            </div>
                            <div className="itemWgt">
                                <span className="symb">g</span>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="row">
                            <h5>Title</h5>
                            <img src={itemList} alt="" />
                            <div className="detRow">
                                <span>Qty: </span>
                                <span>Price: Rs.</span>
                            </div>
                            <div className="itemWgt">
                                <span className="symb">g</span>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="row">
                            <h5>Title</h5>
                            <img src={itemList} alt="" />
                            <div className="detRow">
                                <span>Qty: </span>
                                <span>Price: Rs.</span>
                            </div>
                            <div className="itemWgt">
                                <span className="symb">g</span>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="row">
                            <h5>Title</h5>
                            <img src={itemList} alt="" />
                            <div className="detRow">
                                <span>Qty: </span>
                                <span>Price: Rs.</span>
                            </div>
                            <div className="itemWgt">
                                <span className="symb">g</span>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="row">
                            <h5>Title</h5>
                            <img src={itemList} alt="" />
                            <div className="detRow">
                                <span>Qty: </span>
                                <span>Price: Rs.</span>
                            </div>
                            <div className="itemWgt">
                                <span className="symb">g</span>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="row">
                            <h5>Title</h5>
                            <img src={itemList} alt="" />
                            <div className="detRow">
                                <span>Qty: </span>
                                <span>Price: Rs.</span>
                            </div>
                            <div className="itemWgt">
                                <span className="symb">g</span>
                            </div>
                        </div>
                    </div>
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
                        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                    Small modal
                                </h3>
                                <button
                                    onClick={toggleModal}
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-4 md:p-5 space-y-4">
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    With less than a month to go before the
                                    European Union enacts new regulations...
                                </p>
                            </div>
                            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button
                                    onClick={toggleModal}
                                    type="button"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    I accept
                                </button>
                                <button
                                    onClick={toggleModal}
                                    type="button"
                                    className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                >
                                    Decline
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
