import Address from './Address';
import Coordinates from './Coordinates';

export default function Back() {
    return (
        <div className='visitCard gap'>
            <Address />
            <Coordinates />
        </div>
    );
}
