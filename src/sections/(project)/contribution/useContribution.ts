'use client';
import { useState } from "react";

export default function useContribution() {
	const [ currentSample, setCurrentSample ] = useState(0);
  const [ currentPosition, setCurrentPosition ] = useState({ transform : `translateX(0)`, transition : `transform ${ currentSample * .75 }s ease-in-out` });

  const viewMore = ( place : string ) => {
    window.open(place, `_blank`);
  }

  const handleClick = ( nextSample : number ) => {
    setCurrentSample(nextSample);
    setCurrentPosition({ transform : `translateX(-${ nextSample * 100 }%)`, transition : `transform ${ Math.abs( nextSample - currentSample ) * .75 }s ease-in-out` });
  }

  return {
		currentSample,
		currentPosition,
		viewMore,
		handleClick
	}
}
