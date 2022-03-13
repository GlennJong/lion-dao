import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import language from "../../store/language";

const LanguageHelper = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const langList = ['zh-TW'];
    const defaultLang = ['en', ''];
    let currentLang = window.location.pathname.split('/')[1];
    currentLang = langList.includes(currentLang) ? currentLang : 'en';

    let currentPath = defaultLang.includes(currentLang) ? '' : `/${currentLang}`;

    console.log({
      lang: currentLang,
      path: currentPath,
    })
    
    dispatch(language.actions.setLang({
      lang: currentLang,
      path: currentPath,
    }));
  }, [])

  return (<></>)
}

export default LanguageHelper;