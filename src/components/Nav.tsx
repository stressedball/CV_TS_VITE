import React, {useState} from 'react';
import '../assets/css/nav.css';

export default function Nav() {
    const [active, setActive] = useState('make');
    const callBack = (value: string) => {
        setActive(value);
    };
    return (
        <nav id='navigation'>
            <MakeButton callBack={callBack} active={active} />
            <PreviewButton callBack={callBack} active={active} />
        </nav>
    );
}

function MakeButton(props: {callBack: (value: string) => void; active: string}) {
    React.useEffect(() => {
        props.active === 'make' ? true : false;
    }, []);
    return (
        <button
            className='make'
            onClick={() => {
                document.querySelector('div#previewContainer')?.classList.add('hide');
                document.querySelector('div#makeContainer')?.classList.remove('hide');
                props.callBack('make');
            }}
            attribute-active={props.active}
        >
            CV Maker
        </button>
    );
}

function PreviewButton(props: {callBack: (value: string) => void; active: string}) {
    React.useEffect(() => {
        props.active === 'preview' ? true : false;
    }, []);
    return (
        <button
            className='preview'
            onClick={() => {
                document.querySelector('div#previewContainer')?.classList.remove('hide');
                document.querySelector('div#makeContainer')?.classList.add('hide');
                props.callBack('preview');
            }}
            attribute-active={props.active}
        >
            Preview
        </button>
    );
}
