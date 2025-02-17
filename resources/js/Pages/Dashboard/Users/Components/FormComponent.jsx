import { useState } from "react";

export default function FormComponent({ data, setData, errors, isCreate }) {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <div>
                <label className="block font-medium">Name</label>
                <input
                    type="text"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
                {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
            </div>

            <div>
                <label className="block font-medium">Email</label>
                <input
                    type="email"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
                {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
            </div>

            {isCreate && (
                <>
                    <div>
                        <label className="block font-medium">Password</label>
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
                                onClick={() => setShowPassword(!showPassword)}
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
                                setData("password_confirmation", e.target.value)
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
                </>
            )}
        </>
    );
}
