import { React, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';


export const ModalInfo = () => {


    const [smShow, setSmShow] = useState(false);

    return (
        <div className="text-end mt-6">
            <button
                className='btn'
                onClick={() => setSmShow(true)}
            ><FontAwesomeIcon fontSize={20} icon={faInfo} />
            </button>{' '}

            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closebutton={''} >
                    <Modal.Title id="example-modal-sizes-title-sm">
                        info
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    - Tus tareas estarán siempre activas, aunque cierres el navegador. 
                    <br />
                    - Si pinchas en una tarea la marcas como completa o incompleta.
                    <br />
                    - Puedes agregar la página en la pantalla de tu móvil y así siempre tenerla a mano.
                    <br />
                    - No almacenamos cookies y ningún dato personal tuyo.
                    <br />
                    - La app tiene código abierto y es sin ánimo de lucro.
                    <br />
                    - Gracias por usarla y que la disfrutes. :) 
                    <br />
                    <br />

                    - + info jaimesanchezgalvis@gmail.com</Modal.Body>
            </Modal>

        </div>
    )
};