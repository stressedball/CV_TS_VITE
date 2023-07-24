import {IdentityInterface} from '../../../assets/Types';
import john from '../../../assets/images/johnWick.jpeg';
import AddressSvg from '../../../assets/svg/AddressSvg';
import EmailSvg from '../../../assets/svg/EmailSvg';
import GitSvg from '../../../assets/svg/Github';
import Linkedin from '../../../assets/svg/Linkedin';
import Phone from '../../../assets/svg/Phone';
export default function Sidebar(props: {identity: IdentityInterface}) {
    return (
        <div id='sidebar'>
            <div className='profilePic' style={{backgroundImage: `url(${john})`}} />
            <div className='subSidebar flex column'>
                <div className='description'>
                    <p className='legend left' style={{marginBottom:'0.8rem'}}>Profile</p>
                    <p>{props.identity.description}</p>
                </div>
                <div className='coordinates flex column' style={{gap: '0.5rem'}}>
                    <p className='legend left' style={{marginBottom: '0.3rem'}}>Contact Me</p>
                    <div className='flex align'>
                        <AddressSvg />
                        <div>
                            <p>
                                {props.identity.address.number}
                                {props.identity.address.number && props.identity.address.street
                                    ? ` - ${props.identity.address.street}`
                                    : null}
                            </p>
                            <p>
                                {props.identity.address.town}
                                {props.identity.address.town && props.identity.address.zipCode
                                    ? ` - ${props.identity.address.zipCode}`
                                    : null}
                            </p>
                        </div>
                    </div>
                    <div className='flex align'>
                        <Phone />
                        <p>{props.identity.phone}</p>
                    </div>
                    <div className='flex align'>
                        <EmailSvg />
                        <p>{props.identity.email}</p>
                    </div>
                    <div className='flex align'>
                        <Linkedin />
                        <p>{props.identity.linkedin}</p>
                    </div>
                    <div className='flex align'>
                        <GitSvg />
                        <p>{props.identity.gitHub}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
