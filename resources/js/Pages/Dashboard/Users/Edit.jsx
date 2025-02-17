import Dashboard from "@/Pages/Dashboard";
import { useForm } from "@inertiajs/react";
import FormComponent from "./Components/FormComponent";

export default function Edit({ user }) {
    const { data, setData, put, errors } = useForm({
        name: user.name,
        email: user.email,
    });

    const submit = (e) => {
        e.preventDefault();
        put(route("users.update", user.id));
    };

    return (
        <Dashboard>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold mb-4">Edit User</h1>

                <form onSubmit={submit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <FormComponent
                            data={data}
                            setData={setData}
                            errors={errors}
                            isCreate={false}
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                    >
                        Update
                    </button>
                </form>
            </div>
        </Dashboard>
    );
}
