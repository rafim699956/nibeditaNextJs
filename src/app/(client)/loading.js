import React from "react";

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-white">
            <div className="relative">
                <div className="w-16 h-16 border-4 border-blue-200 border-t-primary-600 rounded-full animate-spin"></div>
                <p className="mt-4 text-gray-600 font-medium animate-pulse text-center">
                    Loading...
                </p>
            </div>
        </div>
    );
};

export default Loading;
