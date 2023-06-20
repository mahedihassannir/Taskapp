
const TaskBok = () => {

    const handleAdd = (e) => {
        e.preventDefault()
        const frrom = e.target

        const title = frrom.title.value

        const des = frrom.dis.value

        const desANDTITLE = { title, des }
        console.log(desANDTITLE);

    }



    return (
        <div>

            <nav className="flex justify-between px-3 w-full py-3 border-b-2 items-center">
                {/* <h4 className="text-3xl font-bold">HI i am todo</h4> */}
                <img className="w-20" src="data:image/png;base64,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" alt="" />
                {/* ul for the lists */}
                <ul className="flex gap-3">
                    <li>
                        <div className="avatar online">
                            <div className="w-10 rounded-full">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLUBkJgwdSnMEx7TGzJ5p_2kz8JxCGv1bW3EKuBCa2w&s" />
                            </div>
                        </div>

                    </li>
                    <li className="cursor-pointer">completed</li>
                    <li className="cursor-pointer">
                        {/* You can open the modal using ID.showModal() method */}
                        <button className="" onClick={() => window.my_modal_3.showModal()}>add</button>
                        <dialog id="my_modal_3" className="`rounded-md md:w-1/2 w-11/12">
                            <form onSubmit={handleAdd} method="dialog" className="  ">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                <h3 className="font-bold text-lg">Hello!</h3>
                                <div>
                                    <>
                                        <div>

                                            <label htmlFor="">
                                                <span>Title</span>
                                            </label>
                                            <br />
                                            <input name="title" className=" border-2 border-[#db87f0] pl-2 rounded-md mt-2 py-3 w-11/12" type="text" />
                                        </div>

                                        <div>

                                            <label htmlFor="">
                                                <span>Description</span>
                                            </label>
                                            <br />
                                            <textarea name="dis" className="w-11/12 pl-2 pt-3 border-2 border-[#db87f0]" id="" cols="30" rows="10"></textarea>
                                        </div>


                                        <button type="submit" className="btn  btn-sm btn-circle btn-ghost">add</button>


                                    </>
                                </div>
                            </form>
                        </dialog>
                    </li>
                    <li className="cursor-pointer">Login</li>
                </ul>
            </nav>

        </div >
    );
};

export default TaskBok;