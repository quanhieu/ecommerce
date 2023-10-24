import { useStoreModal } from "@/hook/use-store-modal";
import { Modal } from "./index";

export const StoreModal = () => {
  const storeModal = useStoreModal();
  return (
    <Modal
      title="Create store"
      description="Add a new store to manage product and categories"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Future Create store form
    </Modal>
  );
};
