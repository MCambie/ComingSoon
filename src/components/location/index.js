import React from 'react';

const Location = () => {
  return (
    <div className='location_wrapper'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10497.480716329099!2d2.3283335!3d48.8702193!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x728e9b1b5c19f00a!2sL&#39;Olympia+Bruno+Coquatrix!5e0!3m2!1sfr!2sbe!4v1542987673006"
          width="100%"
          height="500"
          frameBorder="0"
          allowFullScreen
          ></iframe>

        <div className='location_tag'>
        <div>Location</div>
        </div>
    </div>
  )
}

export default Location;
