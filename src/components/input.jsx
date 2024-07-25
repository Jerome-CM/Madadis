export function Input({type, placeholder, name}){
    return <>
        <input type={type} placeholder={placeholder} name={name} className="form-input px-4 py-3 w-96 m-2 rounded border-none drop-shadow-md"/>
    </>
}