import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
    const [isOpenModel, setIsOpenModal] = useState(false);

    return (
        <div>
            <Button onClick={() => setIsOpenModal((state) => !state)}>Add new cabin</Button>
            {isOpenModel &&
                <Modal onClose={() => setIsOpenModal(false)}>
                    <CreateCabinForm onCloseModal={() => setIsOpenModal((state) => !state)}></CreateCabinForm>
                </Modal>
            }
        </div>
    )
}

export default AddCabin
