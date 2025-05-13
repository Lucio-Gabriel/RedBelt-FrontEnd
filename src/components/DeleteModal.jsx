function DeleteModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm text-center">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Tem certeza que deseja excluir?
        </h2>
        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
          >
            Cancelar
          </button>
          <button
            onClick={() => onConfirm()}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
