import '../css/svg.css';

export default function Remove() {
    return (
        <svg
            className='remove'
            width='1.4rem'
            height='1.4rem'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <circle
                className='remove'
                cx='12'
                cy='12'
                r='9'
                // fill='#2A4157'
                // fillOpacity='0.95'
            />
            <path
                className='remove'
                d='M8 12H16'
                // stroke='#222222'
                strokeWidth='1.2'
            />
        </svg>
    );
}
