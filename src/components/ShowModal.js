import React, { useState, useEffect } from 'react';
import { Modal, ModalBody, ModalFooter, Container, Button, Row, Col  } from 'reactstrap'
const {REACT_APP_BACKEND_URL} = process.env

const ShowModal = (props) => {
    var {
        detail, 
        isOpen,
        onClose
    } = props;
    // console.log(detail[0])
    // console.log({myModal})
    let [modalOpen, setModalOpen] = useState(isOpen);
    // console.log(isOpen)

    useEffect(() => {
        if (isOpen === true){
            setModalOpen(isOpen)
        } else {
            setModalOpen(false)
        }
    }, [isOpen]);


    return (
        <React.Fragment>
            <Modal isOpen={modalOpen} toggle={onClose} className="modal-dialog modal-lg">
                <ModalBody>
                { 
                Object.keys(detail).length && detail.map((item, index) => {
                return(
                    <React.Fragment>
                        <Container>
                            <Row>
                                <Col>
                                    <div>
                                        <h1 className="text-dark mb-5">{item.name}</h1>
                                        <img src={REACT_APP_BACKEND_URL + item.url} className="gambar" alt="gambar" />
                                    </div>
                                    <div className="mt-5">
                                        <h3>Condition:</h3>
                                        <span className="text-danger">{item.condition_name}</span>
                                    </div>
                                </Col>
                                <Col className="mt-4">
                                    <div>
                                        <h3>Description:</h3>
                                        <p>{item.description}</p>
                                        <h3>Category:</h3>
                                        <p>{item.category_name}</p>
                                        <h3>Price:</h3>
                                        <p>{item.price}</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </React.Fragment>
                        )
                    })
                    }
                </ModalBody>
                <ModalFooter className="bg-dark">
                    <Button onClick={onClose} className="d-flex ml-auto btn-light">Close</Button>
                </ModalFooter>
            </Modal>
        </React.Fragment>
    )
}
  export default ShowModal;