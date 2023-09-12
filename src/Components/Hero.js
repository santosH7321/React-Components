import Btn from "./Button";
function Hero(){
    return (
        <div className="bg-gray-900 h-[100vh] w-[100wh]">
            <div className="flex justify-around items-center p-20 ">
                <div>
                    <img className="rounded-lg" src="https://images.pexels.com/photos/1096664/pexels-photo-1096664.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
                </div>
                <div className="text-white">
                    <p className="text-2xl mt-3">My name is</p>
                    <h1 className="text-5xl mt-3 font-medium">Santosh Kumar</h1>
                    <p className="text-2xl mt-3">
                        I am work on react 
                    </p>
                    <Btn></Btn>
                </div>
            </div>

        </div>
    );
}
export default Hero;