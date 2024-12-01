
export function EditableText(props: { children: string, className:string }) {
    return (
        <div contentEditable="true" className={props.className}>
            {props.children}
        </div>
    );
}