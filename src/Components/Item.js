function Item (props){
    const dobName = props.name;
    return (
        <div>
             <p className="text-xl bg-sky-300 flex justify-center items-center p-4 ">{dobName}</p>
             {props.children}
             
             
        </div>
       
    );
}
export default Item;