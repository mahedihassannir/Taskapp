import TaskBok from "../Components/TaskBok";




const Home = () => {

    return (
        <div className="flex text-white justify-center items-center  h-screen">

            {/* This is the box of the task app */}

            <div className=" -mt-60 w-full md:w-2/3 mx-4 rounded-md shadow-md  bg-gray-600 pb-3">
                <TaskBok></TaskBok>



            </div>

        </div>
    );
};

export default Home;