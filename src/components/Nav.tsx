import '../assets/css/nav.css';
export default function Nav() {
    return (
        <nav id='navigation'>
            <button
                onClick={() => {
                    document.querySelector('div#previewContainer')?.classList.add('hide');
                    document.querySelector('div#makeContainer')?.classList.remove('hide');
                }}
            >
                CV Maker
            </button>
            <button
                onClick={() => {
                    document.querySelector('div#previewContainer')?.classList.remove('hide');
                    document.querySelector('div#makeContainer')?.classList.add('hide');
                }}
            >
                Preview
            </button>
        </nav>
    );
}
