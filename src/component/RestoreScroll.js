import {  useLocation} from 'react-router-dom';
import {useEffect} from 'react';
import React from 'react'

export default function RestoreScroll() {
    let {pathname} = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

}

