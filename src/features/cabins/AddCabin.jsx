import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
import CabinTable from "./CabinTable";

function AddCabin() {
    return (
        <div>
            <Modal>
                <Modal.Open opens='cabin-form'>
                    <Button>Add new cabin</Button>
                </Modal.Open>
                <Modal.Window name='cabin-form'>
                    <CreateCabinForm />
                </Modal.Window>
            </Modal>
        </div>
    )
}

// function AddCabin() {
//     const [isOpenModel, setIsOpenModal] = useState(false);

//     return (
//         <div>
//             <Button onClick={() => setIsOpenModal((state) => !state)}>Add new cabin</Button>
//             {isOpenModel &&
//                 <Modal onClose={() => setIsOpenModal(false)}>
//                     <CreateCabinForm onCloseModal={() => setIsOpenModal((state) => !state)}></CreateCabinForm>
//                 </Modal>
//             }
//         </div>
//     )
// }

export default AddCabin
