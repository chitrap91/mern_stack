
import React from 'react';
import { Modal, ModalBody, Card, CardTitle, CardText, Button, ModalHeader } from "reactstrap";
import { MdDeleteOutline } from "react-icons/md";

function CartModal({ cartItems = [],
    handleRemoveItem,
    changeQuantity,
    total,
    isOpen,
    closeCartModal }) {
    return (
        <div>
            <Modal isOpen={isOpen}>
                <ModalHeader>Cart</ModalHeader>
                <ModalBody>
                    {cartItems.length === 0 ? (
                        <>
                            <p className='text-black'>Your cart is Empty</p>
                            <Button color="danger" onClick={closeCartModal}>
                                Close
                            </Button>
                        </>
                    ) : (
                        <>
                            <ul className="list-none p-0">
                                {cartItems.map((item) => (
                                    <Card key={item.id} className='mb-2 p-4'>
                                        <img src={item.image} alt={item.title} style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                                        <CardTitle>{item.title}</CardTitle>
                                        <CardText>${item.price}</CardText>
                                        <div className="d-flex justify-between items-center">
                                            <div className="flex items-center gap-4">
                                                <button
                                                    className="px-3 py-1 bg-gray-200 rounded"
                                                    disabled={item.disableReduceItemButton}
                                                    onClick={() => changeQuantity(item, "reduceItem")}
                                                >
                                                    -
                                                </button>
                                                <p className='text-center m-0'>{item.quantity}</p>
                                                <button
                                                    className="px-3 py-1 bg-gray-200 rounded"
                                                    disabled={item.disableAddItemButton}
                                                    onClick={() => changeQuantity(item, "addItem")}
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <button
                                                className="text-red-500 hover:text-red-700"
                                                onClick={() => handleRemoveItem(item)}
                                            >
                                                <MdDeleteOutline size={24} />
                                            </button>
                                        </div>
                                    </Card>
                                ))}
                            </ul>
                            <p className='font-semibold text-xl px-5'> Total: ${total.toFixed(2)}</p>
                            <Button color="danger" onClick={closeCartModal}>
                                Close
                            </Button>
                        </>
                    )}
                </ModalBody>
            </Modal>
        </div>
    );
}

export default CartModal;