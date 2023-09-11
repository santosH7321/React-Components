function Dob (props){
    
    const day = props.dobDate;
    const month = props.dobMonth;
    const year = props.dobYear;
    return (
        <div className="text-xl bg-sky-300 flex justify-center items-center p-4 gap-2">
            <span>{day}</span>
            <span>{month}</span>
            <span>{year}</span>
        </div>
    );
}
export default Dob;