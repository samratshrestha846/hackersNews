import { useState } from "react";

export default function FormComponent({ data, setData, errors }) {
    return (
        <>
            <div>
                <label className="block font-medium">Title</label>
                <input
                    type="text"
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
                {errors.title && (
                    <p className="text-red-500 text-sm mt-1">{errors.title}</p>
                )}
            </div>
        </>
    );
}
