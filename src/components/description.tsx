import React from "react";

interface DescriptionProps {
    description: string;
    loading: boolean;
}

const Description: React.FC<DescriptionProps> = ({ description, loading }) => {
    if (loading) {
        return (
            <div className="space-y-2">
                <div className="animate-pulse bg-gray-300 h-4 w-3/4 rounded-md"></div>
                <div className="animate-pulse bg-gray-300 h-4 w-2/4 rounded-md"></div>
                <div className="animate-pulse bg-gray-300 h-4 w-3/4 rounded-md"></div>
            </div>
        );
    }

    return <p className="text-gray-700 text-base">{description}</p>;
};

export default Description;
