import React from 'react';

const Video = () => {
  return (
    <section>
      <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
        <iframe
          src="https://player.vimeo.com/video/355115765?h=2838806a8f"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </section>
  );
};

export default Video;
