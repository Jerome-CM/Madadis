export function Submit({type, value}){
    return <>
        <input type={type} value={value}
               className="form-input px-4 py-3 w-96 m-2 rounded border-none text-white text-center drop-shadow-md bg-cyan-950 hover:bg-cyan-600 transition"/>
    </>
}