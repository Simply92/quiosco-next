"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from 'react-toastify'

const AdminForm = () => {
    const router = useRouter();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();

        const response = await signIn("credentials", {
            username,
            password,
            redirect: false,
        });

        if (response!.error) {
            toast.error("Todos los campos son obligatorios");
            return
        }
        router.push("/admin/panel/products");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mt-4 flex items-center flex-col">
                    <label htmlFor="username" className="block font-medium text-gray-700">
                        Usuario
                    </label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="tu usuario aqui"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 w-1/3 rounded-md p-3 text-center"
                    />
                </div>
                <div className="mt-4 flex items-center flex-col">
                    <label htmlFor="password" className="block font-medium text-gray-700">
                        Contraseña
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="******"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 w-1/3 rounded-md p-3 text-center"
                    />
                </div>
                <div className="mt-6">
                    <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base 
                  font-bold text-white bg-indigo-600 hover:bg-indigo-800 uppercase"
                    >
                        Iniciar sesión
                    </button>
                </div>
            </form>
        </>
    );
};

export default AdminForm