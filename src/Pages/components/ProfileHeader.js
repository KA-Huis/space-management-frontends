import React from 'react'
import profile from './images/profile/profile.png'

const ProfileHeader = ({title, secondTitle, thirdTitle}) => {
    return (
        <div className='profileHeader linesBackground'>
           <div className='profileBackground'>
            <img className="profileImage" src={profile} />
           </div>
           <div className='center'>
                <h5> {title} </h5>
                <h3> {secondTitle} </h3>
                <h5> {thirdTitle} </h5>
            </div>
        </div>
    )
}
export default ProfileHeader