import { useState } from "react";
import { useForm } from "@inertiajs/react";
import Dashboard from "@/Pages/Dashboard";

export default function ResetPassword({ user }) {
    const { data, setData, post, processing, errors } = useForm({
        password: "",
        password_confirmation: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("users.update-password", user.id));
    };

    return (
        <Dashboard>
            <div className="bg-white p-6 rounded-lg shadow">
                <h1 className="text-2xl font-semibold mb-4">
                    Reset Password for {user.name}
                </h1>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block font-medium">
                                New Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    className="w-full p-2 border rounded"
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute right-2 top-2"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block font-medium">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                value={data.password_confirmation}
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                                className="w-full p-2 border rounded"
                                required
                            />
                            {errors.password_confirmation && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.password_confirmation}
                                </p>
                            )}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4"
                        disabled={processing}
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </Dashboard>
    );
}
