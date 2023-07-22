import Front from './Front/Front';
import Back from './Back/Back';
//
import '../../../assets/css/make/identity/identity.css';

export default function IdentityLayout() {
    return (
        <section>
            <h2>Personal Details</h2>
            <div id='identity' className='flex align wrap'>
                <Front />
                <Back />
            </div>
        </section>
    );
}
