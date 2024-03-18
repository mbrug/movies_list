import React from "react";

interface ErrorProps {
    message: string;
}
const ErrorMessage: React.FC<ErrorProps> = ({message}) => {
    return <div className="text-red-600 text-center mt-10 font-semibold text-xl">{message}</div>
}
export default ErrorMessage
