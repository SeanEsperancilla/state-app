// import { useState } from "react";
// import type { FormData } from "./FormData";

// export default function SimpleForm() {
//     const [form, setForm] = useState<FormData>({
//         name: "",
//         email: ""
//     });

//     function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
//         const { name, value } = e.target;
//         setForm(prev => ({
//             ...prev,
//             [name]: value
//         }))
//     }

//     function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//         e.preventDefault();
//         alert(`Name: ${form.name}, Email: ${form.email}`);
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="text" name="name" placeholder="Enter your name" value={form.name} onChange={handleChange} />
//             <input type="email" name="email" placeholder="Enter your email" value={form.email} onChange={handleChange} />
//             <button type="submit">Submit</button>
//         </form>
//     )
// }