import React from "react";

let draggedItem: HTMLElement;

function dragStartHandler(event: React.DragEvent) {
    console.log(event, typeof event);
    draggedItem = event.target as HTMLElement;
    //event.preventDefault();
}

function dragDropHandler(event: React.DragEvent) {
    console.log(event, typeof event);
    const target = event.target as HTMLElement;
    const targetUL = target.closest('ul')!;
    const targetLI = target.closest('li')!;
    targetLI.style.backgroundColor = '';
    targetLI.style.paddingTop = 'unset';
    targetUL.insertBefore(draggedItem, target.closest('li'));
    //event.preventDefault()
}

function dragOverHandler(event: React.DragEvent) {
    const target = event.target as HTMLElement;
    const targetUL = target.closest('li')!;
    targetUL.style.backgroundColor = 'grey';
    targetUL.style.paddingTop = '10px';
    event.preventDefault();
}

function dragLeaveHandler(event: React.DragEvent) {
    const target = event.target as HTMLElement;
    const targetUL = target.closest('li')!;
    targetUL.style.backgroundColor = '';
    targetUL.style.paddingTop = 'unset';
    event.preventDefault();
}

export function Draggable(props: React.PropsWithChildren){
    return <div draggable={true}>
        {props.children}
    </div>
}