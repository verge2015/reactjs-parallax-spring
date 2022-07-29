import React from 'react'
import cloudIcon from './../assets/cloud.svg';

const MediaCard = (props) => {

    const { cloudWidth, cloudMarginLeft } = props;

    return (
        <>
        <img src={cloudIcon} alt='cloud' style={{ display: 'block', width: {cloudWidth}, marginLeft: {cloudMarginLeft} }} />
        </>
  )
}

export default MediaCard
