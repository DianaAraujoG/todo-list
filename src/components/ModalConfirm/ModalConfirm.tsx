import type { ModalConfirmProps } from "./ModalConfirm.types";

export const ModalConfirm: React.FC<ModalConfirmProps> = ({
  titleNote,
  onCancel,
  onConfirm,
}) => {
  return (
    <div
      id="static-modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500/50"
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-6">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={onCancel}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            data-modal-hide="default-modal"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
        <p className="text-2xl text-center text-gray-900 mb-6">
          ¿Estás seguro de eliminar la nota "<samp>{titleNote}</samp>"" ?
        </p>
        <div className="flex justify-end gap-3">
          <button
            type="button"
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-lg px-5 py-2.5"
            onClick={onCancel}
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium rounded-lg px-5 py-2.5"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};
