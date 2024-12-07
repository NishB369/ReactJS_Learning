// import Header from "./Header"

const Contact = () => {
    return (
        <>
        {/* <Header/> */}
        <div className="contact flex items-center justify-center h-[400px] w-[100%]">
            <span className="bi bi-instagram text-5xl mr-7 cursor-pointer hover:text-white hover:scale-[1.2] hover:shadow-[1px 1px 10px black] transition-transform duration-300 ease-in-out"></span>
            <span className="bi bi-whatsapp text-5xl mr-7 cursor-pointer hover:text-white hover:scale-[1.2] hover:shadow-[1px 1px 10px black] transition-transform duration-300 ease-in-out"></span>
            <span className="bi bi-twitter text-5xl mr-7 cursor-pointer hover:text-white hover:scale-[1.2] hover:shadow-[1px 1px 10px black] transition-transform duration-300 ease-in-out"></span>
            <span className="bi bi-facebook text-5xl cursor-pointer hover:text-white hover:scale-[1.2] hover:shadow-[1px 1px 10px black] transition-transform duration-300 ease-in-out"></span>
        </div>
        </>
    )
}

export default Contact