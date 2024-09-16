export function Input({type, placeholder, name}){
    return <>
        <input type={type} placeholder={placeholder} name={name} className="form-input px-4 py-3 w-full sm:w64 lg:w-96 my-2 rounded border-none drop-shadow-md"/>
    </>
}