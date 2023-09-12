function Nav(){
    return (
        <div className="flex justify-around text-center bg-gray-900 p-3 ">
            <div className="text-4xl font-bold text-white">
                <h1>LOGO</h1>
            </div>
            <div>
                <ul className="flex gap-20 text-xl font-medium text-white">
                    <li className="hover:text-yellow-500"><a href="#">HOME</a></li>
                    <li className="hover:text-yellow-500"><a href="#">ABOUT</a></li>
                    <li className="hover:text-yellow-500"><a href="#">PROJECTS</a></li>
                    <li className="hover:text-yellow-500"><a href="#">SKILLS</a></li>
                    <li className="hover:text-yellow-500"><a href="#">CONTACTS</a></li>
                </ul>
            </div>
        </div>
    );
}
export default Nav;