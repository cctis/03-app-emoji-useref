import {useRef} from 'react';
import EmojiPicker from './emojiPicker';


export default function EmojiPickerInput(){
    
    //permite acceder a la referencia de un elemento, cuando da click el input recibe el foco (dos etiquetas diferentes)
    const refInput = useRef(null);

    /*
    function handleClick(){
        //ya puedo acceder como si fuera js normal
        refInput.current.focus();
    }
    */
    return(
        <>
        <div>
            <input ref={refInput}/>
            {/*para la explicacion del useref uso el button 
            <button onClick={handleClick}>Da click</button> */}
            <EmojiPicker ref={refInput}/>
        </div>
        </>
    )
}