import React, { useEffect } from 'react';

const HubspotContactForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      // @TS-ignore
      if (window.hbspt) {
        // @TS-ignore
        window.hbspt.forms.create({
          portalId: '44358588',
          formId: 'b60fc52b-4622-4843-8224-185261e0ff1b',
          target: '#hubspotContactForm',
        });
      }
    });
  }, []);

  return (
    <div>
      <div id="hubspotContactForm"></div>
    </div>
  );
};

export default HubspotContactForm;
