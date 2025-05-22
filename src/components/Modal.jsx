function Modal({ success, handleClose }) {
    if (success == null) return null

    if (success !== true) {
        return (
            <dialog open className="rounded-xl bg-zinc-800 text-center">
                <div className="flex justify-center">
                    <h2 className="headline-2">
                        Error
                    </h2>
                </div>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch]">
                    Error, try again later.
                </p>
                <div className="flex justify-center">
                    <form method="dialog">
                        <button className="btn btn-primary" onClick={handleClose} >Close</button>
                    </form>
                </div>
            </dialog>
        )
    } else {
        return (
            <dialog open className="rounded-xl bg-zinc-800 text-center">
                <div className="flex justify-center">
                    <h2 className="headline-2">
                        Success
                    </h2>
                </div>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch]">
                    Your message has been sent successfully.
                </p>
                <div className="flex justify-center">
                    <form method="dialog">
                        <button className="btn btn-primary" onClick={handleClose} >Close</button>
                    </form>
                </div>
            </dialog>
        )
    }
}
export default Modal;