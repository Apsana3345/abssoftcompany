import React from 'react'

const Mapcontainer = () => {
  return (
    <div className="mapcontain-section" style={{ width: "100%", height: "400px", overflow: "hidden" }}>
    <iframe
      title="Google Map"
      src="https://maps.google.com/maps?q=ABS%20Soft&t=m&z=12&output=embed&iwloc=near"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
  )
}

export default Mapcontainer
