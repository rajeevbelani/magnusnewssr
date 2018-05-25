import React from 'react';
import universal from 'react-universal-component';
import introVideo from '../../magnus_intro_video.webp';

const Failed = () => (
  <div style={{ color: 'red' }}>
    <h1>Failed to load the heavy component!</h1>
  </div>
)

const Loading = () => (
  <div style={{ color: 'yellow' }}>
    <h1>Loading this heavy component...</h1>
  </div>
)

const IntroVideo = universal(<img alt="Introduction Video" src={introVideo} />, {
  loading: Loading,
  error: Failed,
})

export const preloadMyComponent = () => IntroVideo.preload()
export default props => <IntroVideo {...props} />
