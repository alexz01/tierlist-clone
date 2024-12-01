import React from "react";

//TODO: create buttons of type
// export class AppButton extends React.Component{

// }
export function AppButton({ type = 'ok', label, onClick }: { type?: 'ok' | 'cancel' | 'submit', label: string, onClick: { (): unknown } }) {

    return <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        onClick={onClick}>
        {label}
    </button>
}