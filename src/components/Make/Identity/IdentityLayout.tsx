import Front from './Front/Front';
import Back from './Back/Back';
//
import '../../../assets/css/make/identity.css';

export default function IdentityLayout() {
    return (
        <section>
            <h2>Personal Details</h2>
            <Front />
            <Back />
        </section>
    );
}
